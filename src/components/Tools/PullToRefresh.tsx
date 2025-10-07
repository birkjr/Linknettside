import { useState, useRef, ReactNode } from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

interface PullToRefreshProps {
  children: ReactNode;
  onRefresh: () => Promise<void>;
  threshold?: number; // Distance to trigger refresh
  className?: string;
}

export default function PullToRefresh({
  children,
  onRefresh,
  threshold = 80,
  className = '',
}: PullToRefreshProps) {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const startY = useRef<number>(0);
  const maxPullDistance = threshold * 1.5;

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isRefreshing) return;
    
    startY.current = e.touches[0].clientY;
    setIsPulling(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isRefreshing) return;
    
    const currentY = e.touches[0].clientY;
    const scrollTop = containerRef.current?.scrollTop || 0;
    
    // Only trigger if at the top of the container
    if (scrollTop === 0 && currentY > startY.current) {
      const distance = Math.min(currentY - startY.current, maxPullDistance);
      setPullDistance(distance);
      setIsPulling(distance > 10);
      
      // Prevent default scrolling
      e.preventDefault();
    }
  };

  const handleTouchEnd = async () => {
    if (isRefreshing) return;
    
    if (pullDistance >= threshold) {
      setIsRefreshing(true);
      try {
        await onRefresh();
      } catch (error) {
        console.error('Refresh failed:', error);
      } finally {
        setIsRefreshing(false);
        setPullDistance(0);
        setIsPulling(false);
      }
    } else {
      setPullDistance(0);
      setIsPulling(false);
    }
  };

  const pullProgress = Math.min(pullDistance / threshold, 1);
  const rotation = pullProgress * 180;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-auto ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      style={{ touchAction: 'pan-y' }}
    >
      {/* Pull to refresh indicator */}
      <div
        className={`absolute top-0 left-0 right-0 flex items-center justify-center transition-all duration-200 ${
          isPulling || isRefreshing ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translateY(${Math.min(pullDistance - 50, 0)}px)`,
          zIndex: 10,
        }}
      >
        <div className="bg-white rounded-full p-3 shadow-lg">
          <RefreshIcon
            className={`text-blue-500 transition-transform duration-200 ${
              isRefreshing ? 'animate-spin' : ''
            }`}
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`transition-transform duration-200 ${
          isPulling || isRefreshing ? 'transform' : ''
        }`}
        style={{
          transform: `translateY(${Math.max(pullDistance * 0.3, 0)}px)`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
