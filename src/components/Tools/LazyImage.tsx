import { useState, useRef, useEffect, useCallback } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  onError?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
  style?: React.CSSProperties;
}

export default function LazyImage({
  src,
  alt,
  className,
  onError,
  style,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);

  const supportsWebP = useCallback(() => {
    if (typeof document === 'undefined') {
      return false;
    }

    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }, []);

  const getOptimizedSrc = useCallback(
    (originalSrc: string) => {
      if (!originalSrc) return '';

      // If it's already a WebP or external URL, return as is
      if (originalSrc.includes('supabase') || originalSrc.includes('.webp')) {
        return originalSrc;
      }

      // For local images, try WebP first if supported
      if (supportsWebP() && originalSrc.includes('/images/')) {
        const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        return webpSrc;
      }

      return originalSrc;
    },
    [supportsWebP]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setImageSrc(getOptimizedSrc(src));
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px', // Start loading 50px before image comes into view
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [getOptimizedSrc, src]);

  // Reset error state when src changes
  useEffect(() => {
    setHasError(false);
    setIsLoaded(false);
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    // If WebP failed, try original format
    if (imageSrc !== src && imageSrc.includes('.webp')) {
      setImageSrc(src);
      return;
    }

    // Call parent onError first to try fallback
    if (onError) {
      onError(e);
      // Don't set hasError immediately - let parent handle fallback
      return;
    }

    // Only show error if no parent handler
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative ${className}`} style={style}>
      {/* Skeleton Loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center rounded">
          <span className="text-gray-400 text-xs">Bilde ikke tilgjengelig</span>
        </div>
      )}

      {/* Actual Image */}
      {isInView && !hasError && imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
}
