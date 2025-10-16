import React from 'react';

const MovieCard: React.FC = () => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">Movie Title Placeholder</h3>
        <p className="text-sm text-gray-400 mt-1">Year: 2024 | Rating: N/A</p>
      </div>
    </div>
  );
};

export default MovieCard;