import React from 'react';
import ProfileCard from '../../private-pages/ProfileCard/profileCard';
import ExperienceBadges from '../../private-pages/exprencienceBadges/experencienceBadges';
import AboutMe from '../../private-pages/AboutMe/aboutMe';
import ProjectCallToAction from '../../private-pages/ProjectCallToAction/projectCallToAction';
import SkillTiles from '../../private-pages/skillTiles/skillTiles';
import SocialLink from '../../private-pages/socialLinks/socialink';

const Home = () => {
  return (
    <div className="bg-radial-fade min-h-screen text-white px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard />

        <div className="col-span-1 md:col-span-2 space-y-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 font-display">
              Welcome to My Portfolio
            </h1>
            <p className="text-gray-400">
              I am a passionate Full Stack developer with a love for creating beautiful and functional web applications.
            </p>
            <p className="text-gray-400 mt-2">
              Explore my work and feel free to reach out if you have any questions or opportunities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-3 font-display">Skills</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>React, Node.js, TypeScript</li>
              <li>Tailwind CSS, GSAP, Framer Motion</li>
              <li>API Integration (REST)</li>
              <li>Responsive Design</li>
              <li>Git &amp; Version Control</li>
            </ul>
          </div>

          <SocialLink />
        </div>

        <AboutMe />

        <div className="col-span-1 md:col-span-2 space-y-4">
          <ProjectCallToAction />
          <ExperienceBadges />
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <SkillTiles />
        </div>
      </div>
    </div>
  );
};

export default Home;
