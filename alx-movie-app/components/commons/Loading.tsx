import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2 text-indigo-600">
      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;