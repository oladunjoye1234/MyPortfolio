import React from 'react'

const links = [
    { name: "GitHub" }, { name: "Bitbucket" },
    { name: "GitLab" }, { name: "SourceForge" },
];

function SocialLink() {
  return (
    <div className="grid grid-cols-2 gap-3 p-4 bg-gray-800 rounded-lg shadow-md ">
        <h2 className="text-lg font-bold mb-4 col-span-2">Social Links</h2>
      {links.map(link => (
        <button
          key={link.name}
          className="bg-[#1c1c1c] hover:bg-[#2a2a2a] py-2 rounded text-sm"
        >
          {link.name} →
        </button>
      ))}
    </div>
  );
}

export default SocialLink
