import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

const ProjectCallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-900 to-gray-900/60 border border-gray-800 p-6 rounded-2xl flex items-center justify-between gap-4 hover:border-accent/30 transition-colors"
    >
      <div className="space-y-2">
        <h2 className="text-xl font-bold font-display">Have a project in mind?</h2>
        <a href="mailto:aolamilekanoladunjoye0412@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors w-fit">
          <Mail size={16} />
          aolamilekanoladunjoye0412@gmail.com
        </a>
        <a href="tel:+2349038659668" className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors w-fit">
          <Phone size={16} />
          +234 90 3865 9668
        </a>
        <p className="text-gray-500 text-sm">Let's bring your ideas to life!</p>
      </div>
      <ArrowUpRight size={28} className="text-accent shrink-0" />
    </motion.div>
  );
};

export default ProjectCallToAction;
