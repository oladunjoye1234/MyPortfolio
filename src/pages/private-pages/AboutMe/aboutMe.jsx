import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl hover:border-accent/30 transition-colors"
    >
      <h2 className="text-xl font-bold mb-3 font-display flex items-center gap-2">
        <Sparkles size={18} className="text-accent" />
        What I'm About
      </h2>
      <p className="text-gray-400 leading-relaxed">
        Hello! I'm Oladunjoye, a Full Stack Web Developer based in Nigeria. I
        enjoy creating things that live on the internet, whether
        they be websites, applications, or anything in between. My
        goal is always to build products that provide pixel-perfect,
        performant experiences.
      </p>
    </motion.div>
  );
};

export default AboutMe;
