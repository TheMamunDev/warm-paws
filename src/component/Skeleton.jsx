import React from 'react';

const Skeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-32 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="flex gap-6">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
