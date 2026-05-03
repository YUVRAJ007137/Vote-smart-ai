import React from 'react';

export const LoadingSpinner = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-12 h-12">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-gray-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-t-saffron-500 border-r-indianGreen-500 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
      </div>
      {text && <p className="mt-4 text-sm text-gray-600 font-medium animate-pulse">{text}</p>}
    </div>
  );
};
