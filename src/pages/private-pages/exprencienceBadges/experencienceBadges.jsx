import React from 'react';
import { motion } from 'framer-motion';

const badges = [
  { value: '2+', label: 'Years Experience' },
  { value: '3+', label: 'Years Experience' },
  { value: '4+', label: 'Years Experience' },
  { value: '5+', label: 'Self Initiated Projects' },
];

const ExperienceBadges = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {badges.map((badge, i) => (
        <motion.div
          key={badge.label + i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="bg-gray-900/60 border border-gray-800 p-4 rounded-2xl text-center hover:border-accent/30 transition-colors"
        >
          <p className="text-2xl font-bold font-display text-accent">{badge.value}</p>
          <p className="text-gray-400 text-sm mt-1">{badge.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceBadges;
