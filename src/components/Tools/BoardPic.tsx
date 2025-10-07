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

  // Preload image when component mounts
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    img.src = src;
  }, [src]);

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
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setImageLoaded(true)}
        onError={e => {
          // Extract filename from src for error handling
          const filename = src.split('/').pop() || '';
          handleImageError(e, filename, 'board_pics');
          setImageError(true);
        }}
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default BoardPic;
