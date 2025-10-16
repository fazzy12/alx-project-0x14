import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="container mx-auto p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-400">CineSeek</h1>
        <nav>
          {/* Navigation elements will go here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;