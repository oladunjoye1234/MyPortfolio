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
            <p className="text-gray-400 italic"></p>
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

          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold">E-commerce Platform</h3>
            <p className="text-gray-400 italic">August 2025</p>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              A responsive e-commerce platform built with React, TypeScript, and Tailwind CSS, showcasing product listings, cart functionality, and a modern UI. Designed for scalability and user engagement.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Created a scalable e-commerce site with Typescript, TailwindCSS  and Stripe API for payment processing.</li>
              <li>Optimized performance and SEO, resulting in a 25% increase in traffic.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold">Weather Forecast app</h3>
            <p className="text-gray-400 italic">September 2025</p>
            <p className="text-white text-lg  mt-2">
              A dynamic weather app built with React, TypeScript, and Tailwind CSS, featuring a 5-day forecast, dark mode toggle, and GSAP animations. Integrates OpenWeatherMap API for real-time data.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
               
              <li>Implemented responsive design principles to ensure usability across various devices.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;