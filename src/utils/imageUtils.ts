import { supabase } from '../supabaseClient';

type ImageCategory =
  | 'board_pics'
  | 'company_logos'
  | 'subgroups'
  | 'events_jobads';

type ImageResizeMode = 'cover' | 'contain' | 'fill';

type ImageTransformOptions = {
  width?: number;
  height?: number;
  quality?: number;
  resize?: ImageResizeMode;
  format?: 'origin';
};

type SupabaseImageOptions = {
  transform?: ImageTransformOptions;
  cacheBusterValue?: string;
};

/**
 * Smart bildehåndtering som prøver lokale bilder først, deretter Supabase
 * Med automatisk preloading for optimal ytelse
 */

// Cache for preloaded images
const imageCache = new Set<string>();

export const getOptimizedImageUrl = (
  fileName: string,
  category: ImageCategory
): string => {
  // board_pics og subgroups skal ALLTID hentes fra Supabase
  if (category === 'board_pics' || category === 'subgroups') {
    return getSupabaseImageUrl(fileName, category);
  }

  // Sjekk om det er et Supabase-bilde (inneholder UUID eller er et nytt bilde)
  // Men ikke alle bilder med bindestrek er Supabase-bilder (f.eks. "logo.sintef.png")
  if (
    fileName.includes('supabase') ||
    (fileName.includes('-') && fileName.length > 25) ||
    fileName.length > 30
  ) {
    return getSupabaseImageUrl(fileName, category);
  }

  // Alltid prøv lokalt bilde først - handleImageError håndterer fallback til Supabase
  const localPath = category === 'events_jobads' ? 'jobads_events' : category;
  const localUrl = `/images/${localPath}/${fileName}`;
  return localUrl;
};

export const getSupabaseImageUrl = (
  fileName: string,
  category: ImageCategory,
  options: SupabaseImageOptions = {}
): string => {
  const supabaseCategory =
    category === 'company_logos'
      ? 'company_logo'
      : category === 'board_pics'
        ? 'board_pic'
        : category === 'subgroups'
          ? 'subGroups' // subgroups ligger i subGroups mappen i Supabase
          : 'events_jobads';

  const transformOptions = options.transform;
  const { data } = supabase.storage
    .from('bilder')
    .getPublicUrl(
      `${supabaseCategory}/${fileName}`,
      transformOptions ? { transform: transformOptions } : undefined
    );

  let publicUrl = data.publicUrl;
  const cacheBuster = getCacheBusterValue(category, options.cacheBusterValue);

  if (cacheBuster) {
    const separator = publicUrl.includes('?') ? '&' : '?';
    publicUrl = `${publicUrl}${separator}v=${cacheBuster}`;
  }

  return publicUrl;
};

export const preloadImage = (url: string): Promise<void> => {
  if (imageCache.has(url)) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      imageCache.add(url);
      resolve();
    };
    img.onerror = reject;
    img.src = url;
  });
};

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement>,
  fileName: string,
  category: 'board_pics' | 'company_logos' | 'subgroups' | 'events_jobads'
): void => {
  const target = e.currentTarget;

  if ((target as HTMLImageElement).dataset.imageError === 'permanent') {
    return;
  }

  // Hvis lokalt bilde feilet, prøv Supabase
  if (target.src.includes('/images/')) {
    const supabaseUrl = getSupabaseImageUrl(fileName, category);
    target.src = supabaseUrl;

    // Preload Supabase-bildet for fremtidige besøk
    preloadImage(supabaseUrl).catch(() => {
      target.onerror = null;
      (target as HTMLImageElement).dataset.imageError = 'permanent';
      target.removeAttribute('src');
    });
  } else {
    target.onerror = null;
    (target as HTMLImageElement).dataset.imageError = 'permanent';
    target.removeAttribute('src');
  }
};

// Preload alle eksisterende bilder når appen starter
export const preloadAllImages = async (
  partners: string[],
  category: 'board_pics' | 'company_logos' | 'subgroups' | 'events_jobads'
) => {
  const preloadPromises = partners.map(partner => {
    const fileName = `${partner}.${category === 'company_logos' ? 'JPG' : 'png'}`;
    const supabaseUrl = getSupabaseImageUrl(fileName, category);
    return preloadImage(supabaseUrl).catch(() => {
      // Ignorer feil ved preloading
    });
  });

  await Promise.allSettled(preloadPromises);
};

// Funksjon for å tømme cache og oppdatere versjon
// Kall denne når bilder er oppdatert i admin-panelet
export const clearImageCache = () => {
  imageCache.clear();
  // Oppdater cache-versjon for board_pics og subgroups
  localStorage.setItem('boardPicCacheVersion', Date.now().toString());
};

// Funksjon for å oppdatere cache-versjon manuelt
export const updateImageCacheVersion = () => {
  localStorage.setItem('boardPicCacheVersion', Date.now().toString());
};

const getCacheBusterValue = (
  category: ImageCategory,
  override?: string
): string => {
  if (override) {
    return override;
  }

  if (typeof window === 'undefined') {
    return Date.now().toString();
  }

  if (category === 'board_pics' || category === 'subgroups') {
    const version = window.localStorage.getItem('boardPicCacheVersion');
    return version ?? 'static';
  }

  return Date.now().toString();
};

const DEFAULT_SUBGROUP_WIDTHS = [360, 640, 960, 1280, 1600] as const;

export const getResponsiveSupabaseSrcSet = (
  fileName: string,
  category: ImageCategory,
  widths: readonly number[] = DEFAULT_SUBGROUP_WIDTHS,
  options: { quality?: number; resize?: ImageResizeMode } = {}
): { src: string; srcSet: string } => {
  const uniqueSortedWidths = [...new Set(widths)].sort((a, b) => a - b);
  const cacheVersion = getCacheBusterValue(category);
  const transformBase: ImageTransformOptions = {
    quality: options.quality,
    resize: options.resize,
  };

  const srcSet = uniqueSortedWidths
    .map(width => {
      const transform = { ...transformBase, width };
      const url = getSupabaseImageUrl(fileName, category, {
        transform,
        cacheBusterValue: cacheVersion,
      });
      return `${url} ${width}w`;
    })
    .join(', ');

  const largestWidth = uniqueSortedWidths[uniqueSortedWidths.length - 1];
  const src = getSupabaseImageUrl(fileName, category, {
    transform: { ...transformBase, width: largestWidth },
    cacheBusterValue: cacheVersion,
  });

  return { src, srcSet };
};

const SUBGROUP_DEFAULT_FILES: Record<
  'styret' | 'bedrift' | 'marked' | 'logistikk' | 'fa',
  string
> = {
  styret: 'styret.png',
  bedrift: 'bedrift.png',
  marked: 'marked.png',
  logistikk: 'logistikk.png',
  fa: 'fa.png',
};

let aboutUsWarmPromise: Promise<void> | null = null;

export const warmAboutUsImages = (): Promise<void> => {
  if (aboutUsWarmPromise) return aboutUsWarmPromise;

  if (typeof window === 'undefined') {
    aboutUsWarmPromise = Promise.resolve();
    return aboutUsWarmPromise;
  }

  const preloadFromSrcSet = (srcSet: string, collector: Set<string>): void => {
    srcSet
      .split(',')
      .map(part => part.trim())
      .forEach(entry => {
        if (!entry) return;
        const [url] = entry.split(' ');
        if (url) collector.add(url);
      });
  };

  const scheduleForFile = (fileName: string, collector: Set<string>): void => {
    const { src, srcSet } = getResponsiveSupabaseSrcSet(fileName, 'subgroups');
    collector.add(src);
    preloadFromSrcSet(srcSet, collector);
  };

  aboutUsWarmPromise = (async () => {
    const urlQueue = new Set<string>();

    // Start preloading default fallback variants immediately
    Object.values(SUBGROUP_DEFAULT_FILES).forEach(fileName =>
      scheduleForFile(fileName, urlQueue)
    );

    const defaultPreloads = Array.from(urlQueue).map(url =>
      preloadImage(url).catch(() => undefined)
    );

    try {
      const { data, error } = await supabase.storage
        .from('bilder')
        .list('subGroups');

      if (error) {
        console.warn('warmAboutUsImages: failed to list subGroups', error);
      }

      const files = data?.filter(file => !file.name.endsWith('/')) ?? [];

      const resolvedFiles: Record<string, string> = {};
      Object.entries(SUBGROUP_DEFAULT_FILES).forEach(([key, fallback]) => {
        const match =
          files.find(
            file =>
              file.name === fallback ||
              file.name.toLowerCase().startsWith(`${key.toLowerCase()}.`)
          ) ?? null;
        resolvedFiles[key] = match?.name ?? fallback;
      });

      const customUrls = new Set<string>();
      Object.values(resolvedFiles).forEach(fileName =>
        scheduleForFile(fileName, customUrls)
      );

      const customPreloads = Array.from(customUrls).map(url =>
        preloadImage(url).catch(() => undefined)
      );

      await Promise.all([...defaultPreloads, ...customPreloads]);
    } catch (err) {
      console.warn('warmAboutUsImages: failed to warm images', err);
      await Promise.all(defaultPreloads);
    }
  })();

  return aboutUsWarmPromise;
};
