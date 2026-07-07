import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import profilePhoto from '../../../assets/image/img.jpg';

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center hover:border-accent/30 transition-colors"
    >
      <img
        src={profilePhoto}
        alt="Oladunjoye"
        className="w-32 h-32 rounded-full object-cover mb-4 ring-2 ring-accent/40 ring-offset-2 ring-offset-gray-900"
      />
      <h1 className="text-2xl font-bold font-display">Hey, I'm Oladunjoye</h1>
      <p className="text-gray-400 mt-1">Full Stack Developer</p>
      <div className="flex items-center gap-1.5 mt-3 text-sm">
        <MapPin size={14} className="text-accent" />
        <span className="text-gray-400">Based in Nigeria</span>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
