import React from 'react';

const ExperienceBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-gray-800 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold">2+</p>
        <p className="text-gray-400">Years Experience</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold">3+</p>
        <p className="text-gray-400">Years Experience</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold">4+</p>
        <p className="text-gray-400">Years Experience</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold">5+</p>
        <p className="text-gray-400">Self Initiated Projects</p>
      </div>
      {/* <div className="bg-gray-800 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold">4+</p>
        <p className="text-gray-400">Years Experience</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg text-center">
        <p className="text-2xl font-bold">5+</p>
        <p className="text-gray-400">Years Experience</p>
      </div> */}
    </div>
  );
};

export default ExperienceBadges;