'use client'; // This directive ensures the component is rendered on the client side

import React, { useState, useEffect } from 'react';
import { handleImageError } from '../../utils/imageUtils';
import SkeletonLoader from './SkeletonLoader';

type SubGroupPicProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // For above-the-fold images
  srcSet?: string;
  sizes?: string;
  imageClassName?: string;
  fallbackHeight?: number;
};

const SubGroupPic: React.FC<SubGroupPicProps> = ({
  src,
  alt,
  className,
  priority = false,
  srcSet,
  sizes,
  imageClassName,
  fallbackHeight = 320,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const [imageSrcSet, setImageSrcSet] = useState(srcSet);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Update imageSrc when src prop changes
  useEffect(() => {
    setImageSrc(src);
    setImageLoaded(false);
    setImageError(false);
    setImageSrcSet(srcSet);
  }, [src, srcSet]);

  // Monitor src changes on the img element (for handleImageError fallback)
  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new MutationObserver(() => {
      if (imgRef.current && imgRef.current.src !== imageSrc) {
        const newSrc = imgRef.current.src;
        setImageSrc(newSrc);
        setImageError(false);
        setImageLoaded(false);
      }
    });

    observer.observe(imgRef.current, {
      attributes: true,
      attributeFilter: ['src'],
    });

    return () => observer.disconnect();
  }, [imageSrc]);

  // Preload image when component mounts or src changes
  useEffect(() => {
    const img = new Image();
    if (imageSrcSet) {
      img.srcset = imageSrcSet;
    }
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // Don't set error immediately - let handleImageError try fallback
      setImageLoaded(false);
    };
    img.src = imageSrc;
  }, [imageSrc, imageSrcSet]);

  const handleImageErrorWithFallback = (
    e: React.SyntheticEvent<HTMLImageElement>
  ) => {
    const filename = src.split('/').pop() || '';
    handleImageError(e, filename, 'subgroups');

    // Check if handleImageError changed the src after a short delay
    setTimeout(() => {
      if (imgRef.current && imgRef.current.src !== imageSrc) {
        // Source was changed by handleImageError, update our state
        setImageSrc(imgRef.current.src);
        setImageError(false);
        if (imgRef.current) {
          imgRef.current.removeAttribute('srcset');
          imgRef.current.removeAttribute('sizes');
        }
      } else {
        if (imgRef.current?.dataset.imageError === 'permanent') {
          setImageError(true);
          setImageLoaded(false);
        }
      }
    }, 200);
  };

  const showSkeleton = !imageLoaded;

  return (
    <div
      className={`relative overflow-hidden ${className ?? ''}`}
      style={{
        zIndex: 1,
        minHeight: imageLoaded ? undefined : fallbackHeight,
      }}
    >
      {showSkeleton ? (
        <SkeletonLoader type="image" className="h-full w-full" />
      ) : null}
      {!imageError ? (
        <img
          ref={imgRef}
          src={imageSrc}
          srcSet={imageSrcSet}
          sizes={sizes}
          alt={alt}
          className={`w-full transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } ${imageClassName ?? ''}`}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={() => setImageLoaded(true)}
          onError={handleImageErrorWithFallback}
          style={{ zIndex: 1 }}
        />
      ) : null}
    </div>
  );
};

export default SubGroupPic;
