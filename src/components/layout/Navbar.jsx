import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/contact', label: 'Contact' },
];

const linkClasses = ({ isActive }) =>
  `transition-colors ${isActive ? 'text-accent' : 'text-gray-300 hover:text-white'}`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2" onClick={() => setOpen(false)}>
          <span className="text-xl font-bold font-display">Oladunjoye</span>
          <span className="w-2.5 h-2.5 bg-accent rounded-full" />
        </NavLink>

        <div className="hidden sm:flex items-center space-x-8 text-sm font-medium">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="sm:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-gray-800 px-4 py-3 flex flex-col space-y-3 text-sm font-medium">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClasses} end={link.to === '/'} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
