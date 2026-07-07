import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, FolderGit2 } from 'lucide-react';

const experience = [
  {
    role: 'Full-Stack Developer',
    org: 'FarmSuccess Agricultural Limited, Ibadan, Oyo State',
    period: '',
    bullets: [
      'Developed and maintained web applications using React and Node.js, improving load times by 30% through optimization techniques.',
      'Designed and implemented RESTful APIs with Express, integrating with MongoDB for efficient data management.',
      'Collaborated with cross-functional teams to deliver responsive UIs using Tailwind CSS, enhancing user experience.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    org: 'SQI College of ICT, Ibadan, Oyo State',
    period: 'August 2023 – April 2025',
    bullets: [
      'Developed and maintained web applications using React and Node.js, improving load times by 30% through optimization techniques.',
      'Designed and implemented RESTful APIs with Express, integrating with MongoDB for efficient data management.',
      'Collaborated with cross-functional teams to deliver responsive UIs using Tailwind CSS, enhancing user experience.',
    ],
  },
];

const projects = [
  {
    title: 'Personal Portfolio Website',
    period: 'May 2025',
    bullets: [
      'Built a responsive portfolio using React and Tailwind CSS, showcasing skills and projects.',
      'Integrated a contact form with Node.js and email API for direct communication.',
    ],
  },
  {
    title: 'Event Management System',
    period: 'April 2025',
    bullets: [
      'Developed a full-stack application with React, Node.js, and MongoDB for event organization and booking.',
      'Implemented user authentication and real-time updates using Web Sockets.',
    ],
  },
  {
    title: 'E-commerce Platform',
    period: 'August 2025',
    description:
      'A responsive e-commerce platform built with React, TypeScript, and Tailwind CSS, showcasing product listings, cart functionality, and a modern UI. Designed for scalability and user engagement.',
    bullets: [
      'Created a scalable e-commerce site with TypeScript, Tailwind CSS and Stripe API for payment processing.',
      'Optimized performance and SEO, resulting in a 25% increase in traffic.',
    ],
  },
  {
    title: 'Weather Forecast App',
    period: 'September 2025',
    description:
      'A dynamic weather app built with React, TypeScript, and Tailwind CSS, featuring a 5-day forecast, dark mode toggle, and GSAP animations. Integrates OpenWeatherMap API for real-time data.',
    bullets: ['Implemented responsive design principles to ensure usability across various devices.'],
  },
];

const Card = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay }}
    className="bg-gray-900/60 border border-gray-800 p-6 rounded-2xl hover:border-accent/30 transition-colors"
  >
    {children}
  </motion.div>
);

const Work = () => {
  return (
    <div className="bg-radial-fade min-h-screen text-white px-4 sm:px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center font-display">My Work</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 font-display">
            <Briefcase size={22} className="text-accent" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, i) => (
              <Card key={job.org} delay={i * 0.08}>
                <h3 className="text-xl font-bold">{job.role}</h3>
                <p className="text-gray-400">{job.org}</p>
                {job.period && <p className="text-gray-500 italic text-sm mt-0.5">{job.period}</p>}
                <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 font-display">
            <FolderGit2 size={22} className="text-accent" />
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, i) => (
              <Card key={project.title} delay={i * 0.08}>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-500 italic text-sm mt-0.5">{project.period}</p>
                {project.description && (
                  <p className="text-gray-300 mt-2">{project.description}</p>
                )}
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  {project.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
