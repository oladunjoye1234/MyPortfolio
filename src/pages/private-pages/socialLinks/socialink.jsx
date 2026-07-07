import React from 'react';
import { socialLinks } from './socialLinks.data';

function SocialLink({ variant = 'grid' }) {
  if (variant === 'row') {
    return (
      <div className="flex items-center space-x-3">
        {socialLinks.map(({ name, href, icon: Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="p-2 rounded-full border border-gray-800 text-gray-400 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 p-5 bg-gray-900/60 border border-gray-800 rounded-2xl">
      <h2 className="text-lg font-bold col-span-2 font-display">Social Links</h2>
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gray-950/60 hover:bg-gray-800 border border-gray-800 hover:border-accent/40 py-2.5 px-3 rounded-lg text-sm text-gray-300 hover:text-white transition-colors"
        >
          <Icon size={16} className="text-accent" />
          {name}
        </a>
      ))}
    </div>
  );
}

export default SocialLink;
