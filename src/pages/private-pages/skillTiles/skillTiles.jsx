import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Code2 } from 'lucide-react';

const tiles = [
  { icon: Palette, iconClass: 'text-purple-400', title: 'Product Design', range: 'Oct 2024 - Present' },
  { icon: Code2, iconClass: 'text-accent', title: 'Software Dev', range: 'Jan 2024 - Sep 2024' },
];

const SkillTiles = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {tiles.map(({ icon: Icon, iconClass, title, range }) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-gray-900/60 border border-gray-800 p-4 rounded-2xl flex items-center space-x-3 hover:border-accent/30 transition-colors"
        >
          <Icon size={24} className={iconClass} />
          <div>
            <p className="font-bold">{title}</p>
            <p className="text-gray-400 text-sm">{range}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillTiles;
