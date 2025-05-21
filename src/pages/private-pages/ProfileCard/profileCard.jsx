import React from 'react'
import profilePhoto from '../../../assets/image/img.jpg'


const profileCard = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex flex-col items-center">
      <img
        src={profilePhoto}
        alt="Oladunjoye"
        className="w-40 h-40 rounded-full object-cover mb-4"
      />
      <h1 className="text-2xl font-bold">Hey I'm Oladunjoye</h1>
      <p className="text-gray-400">Jr Product Designer at Ringover</p>
      <div className="flex space-x-2 mt-2">
        <span className="text-orange-500">●</span>
        <span className="text-gray-400">Based in Nigeria</span>
      </div>
      <div className="flex space-x-4 mt-4">
        <a href="#" className="text-gray-400 hover:text-orange-500">GitLab</a>
        <a href="#" className="text-gray-400 hover:text-orange-500">Bitbucket</a>
        <a href="#" className="text-gray-400 hover:text-orange-500">SourceForge</a>
      </div>
    </div>
  );
};

export default profileCard
