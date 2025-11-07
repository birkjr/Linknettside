'use client'; // This directive ensures the component is rendered on the client side

import React, { useState, useEffect } from 'react';
import { handleImageError } from '../../utils/imageUtils';

type BoardPicProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean; // For above-the-fold images
};

const BoardPic: React.FC<BoardPicProps> = ({
  src,
  alt,
  className,
  priority = false,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const imgRef = React.useRef<HTMLImageElement>(null);

  // Update imageSrc when src prop changes
  useEffect(() => {
    setImageSrc(src);
    setImageLoaded(false);
    setImageError(false);
  }, [src]);

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
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // Don't set error immediately - let handleImageError try fallback
      setImageLoaded(false);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  const handleImageErrorWithFallback = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const filename = src.split('/').pop() || '';
    handleImageError(e, filename, 'board_pics');
    
    // Check if handleImageError changed the src after a short delay
    setTimeout(() => {
      if (imgRef.current && imgRef.current.src !== imageSrc) {
        // Source was changed by handleImageError, update our state
        setImageSrc(imgRef.current.src);
        setImageError(false);
      } else {
        // No fallback worked, show error
        setImageError(true);
      }
    }, 200);
  };

  if (imageError) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
      >
        <span className="text-gray-500 text-sm">Bilde ikke tilgjengelig</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ zIndex: 1 }}>
      {!imageLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center"
          style={{ zIndex: 2 }}
        >
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setImageLoaded(true)}
        onError={handleImageErrorWithFallback}
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default BoardPic;
