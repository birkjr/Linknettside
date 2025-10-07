interface SkeletonLoaderProps {
  type: 'job' | 'event';
  count?: number;
}

export default function SkeletonLoader({ type, count = 1 }: SkeletonLoaderProps) {
  const renderJobSkeleton = () => (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 animate-pulse">
      <div className="flex items-start space-x-4">
        {/* Logo skeleton */}
        <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0"></div>
        
        {/* Content skeleton */}
        <div className="flex-1 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="w-20 h-8 bg-gray-200 rounded flex-shrink-0"></div>
      </div>
    </div>
  );

  const renderEventSkeleton = () => (
    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-md p-6 mb-4 animate-pulse">
      <div className="flex items-start space-x-4">
        {/* Logo skeleton */}
        <div className="w-16 h-16 bg-green-500 rounded-lg flex-shrink-0"></div>
        
        {/* Content skeleton */}
        <div className="flex-1 space-y-3">
          <div className="h-5 bg-green-500 rounded w-3/4"></div>
          <div className="h-4 bg-green-500 rounded w-1/2"></div>
          <div className="h-3 bg-green-500 rounded w-1/4"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="w-20 h-8 bg-green-500 rounded flex-shrink-0"></div>
      </div>
    </div>
  );

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>
          {type === 'job' ? renderJobSkeleton() : renderEventSkeleton()}
        </div>
      ))}
    </>
  );
}
