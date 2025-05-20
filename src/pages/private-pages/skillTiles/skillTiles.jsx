import React from 'react';

const SkillTiles = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-2">
        <span className="text-purple-500 text-2xl">◎</span>
        <div>
          <p className="font-bold">Product Des</p>
          <p className="text-gray-400 text-sm">Oct 2024 - Present</p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-2">
        <span className="text-orange-500 text-2xl">★</span>
        <div>
          <p className="font-bold">Software Dev</p>
          <p className="text-gray-400 text-sm">Jan 2024 - Sep 2024</p>
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg flex items-center space-x-2">
        <span className="text-green-500 text-2xl">⚫</span>
        <div>
          <p className="font-bold"></p>
          <p className="text-gray-400 text-sm"></p>
        </div>
      </div>
    </div>
  );
};

export default SkillTiles;