import { memo } from 'react';

function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-8 py-20">
      <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6"></div>
      </div>
    </div>
  );
}

export default memo(LoadingSkeleton);
