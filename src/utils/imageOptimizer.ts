type OptimizeOptions = {
  maxDimension?: number;
  sizeThreshold?: number;
};

type OptimizeResult = {
  file: File;
  didCompress: boolean;
  originalSize: number;
  optimizedSize: number;
};

const defaultOptions: Required<OptimizeOptions> = {
  maxDimension: 1500,
  sizeThreshold: 300 * 1024, // 300 KB
};

export const optimizeImage = async (
  file: File,
  options?: OptimizeOptions
): Promise<OptimizeResult> => {
  if (!file.type.startsWith('image/')) {
    return createResult(file, file.size, file.size, false);
  }

  const { maxDimension, sizeThreshold } = { ...defaultOptions, ...options };

  if (file.size <= sizeThreshold) {
    return createResult(file, file.size, file.size, false);
  }

  const bitmap = await createBitmap(file);

  const constrainedWidth = Math.min(maxDimension, bitmap.width);
  const scale = constrainedWidth / bitmap.width;
  const targetWidth = Math.max(1, Math.round(bitmap.width * scale));
  const targetHeight = Math.max(1, Math.round(bitmap.height * scale));

  let canvas: HTMLCanvasElement | OffscreenCanvas;
  if ('OffscreenCanvas' in window) {
    canvas = new OffscreenCanvas(targetWidth, targetHeight);
  } else {
    const el = document.createElement('canvas');
    el.width = targetWidth;
    el.height = targetHeight;
    canvas = el;
  }

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return createResult(file, file.size, file.size, false);
  }

  ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);

  const prefersLossless =
    file.type === 'image/png' && file.size < 2.5 * 1024 * 1024;
  const mimeType = prefersLossless ? 'image/png' : 'image/jpeg';
  const quality = prefersLossless ? 0.9 : 0.74;

  const blob = await canvasToBlob(canvas, mimeType, quality);
  const optimizedFile = new File([blob], ensureExtension(file.name, mimeType), {
    type: mimeType,
    lastModified: Date.now(),
  });

  return createResult(
    optimizedFile,
    file.size,
    blob.size,
    blob.size < file.size
  );
};

export const formatBytes = (bytes: number) => {
  if (!Number.isFinite(bytes)) return '0 B';
  const units = ['B', 'KB', 'MB'];
  let index = 0;
  let size = bytes;
  while (size >= 1024 && index < units.length - 1) {
    size /= 1024;
    index += 1;
  }
  const decimals = size >= 10 || index === 0 ? 0 : 1;
  return `${size.toFixed(decimals)} ${units[index]}`;
};

const createResult = (
  file: File,
  originalSize: number,
  optimizedSize: number,
  didCompress: boolean
): OptimizeResult => ({
  file,
  didCompress,
  originalSize,
  optimizedSize,
});

const createBitmap = async (file: File) => {
  if ('createImageBitmap' in window) {
    return await createImageBitmap(file);
  }
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = url;
    });
    return img;
  } finally {
    URL.revokeObjectURL(url);
  }
};

const canvasToBlob = async (
  canvas: HTMLCanvasElement | OffscreenCanvas,
  mimeType: string,
  quality: number
) => {
  if (canvas instanceof OffscreenCanvas) {
    return await canvas.convertToBlob({ type: mimeType, quality });
  }
  return await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      blob => {
        if (!blob) {
          reject(new Error('Kunne ikke komprimere bildet.'));
          return;
        }
        resolve(blob);
      },
      mimeType,
      quality
    );
  });
};

const ensureExtension = (fileName: string, mimeType: string) => {
  const extension = mimeType === 'image/png' ? 'png' : 'jpg';
  return fileName.replace(/\.[^/.]+$/, `.${extension}`);
};
