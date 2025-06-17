import React from 'react';

const Work = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">My Work</h1>

        {/* Professional Experience Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Full-Stack Developer</h3>
            <p className="text-gray-400">FarmSuccess Agricultural Limited, Ibadan, Oyo State</p>
            <p className="text-gray-400 italic">[Dates not provided - Update with actual dates]</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Developed and maintained web applications using React and Node.js, improving load times by 30% through optimization techniques.</li>
              <li>Designed and implemented RESTful APIs with Express, integrating with MongoDB for efficient data management.</li>
              <li>Collaborated with cross-functional teams to deliver responsive UIs using Tailwind CSS, enhancing user experience.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold">Full-Stack Developer</h3>
            <p className="text-gray-400">SQI College of ICT, Ibadan, Oyo State</p>
            <p className="text-gray-400 italic">August 2023 – April 2025</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Developed and maintained web applications using React and Node.js, improving load times by 30% through optimization techniques.</li>
              <li>Designed and implemented RESTful APIs with Express, integrating with MongoDB for efficient data management.</li>
              <li>Collaborated with cross-functional teams to deliver responsive UIs using Tailwind CSS, enhancing user experience.</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold">Personal Portfolio Website</h3>
            <p className="text-gray-400 italic">May 2025</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Built a responsive portfolio using React and Tailwind CSS, showcasing skills and projects.</li>
              <li>Integrated a contact form with Node.js and email API for direct communication.</li>
            </ul>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold">Event Management System</h3>
            <p className="text-gray-400 italic">April 2025</p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Developed a full-stack application with React, Node.js, and MongoDB for event organization and booking.</li>
              <li>Implemented user authentication and real-time updates using Web Sockets.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;