import React from 'react';
import SocialLink from '../../pages/private-pages/socialLinks/socialink';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Oladunjoye. All rights reserved.
        </p>
        <SocialLink variant="row" />
      </div>
    </footer>
  );
};

export default Footer;
