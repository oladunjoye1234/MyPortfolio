import React from 'react'
import ProfileCard from '../../private-pages/ProfileCard/profileCard'
import ExperienceBadges from '../../private-pages/exprencienceBadges/experencienceBadges'
import AboutMe from '../../private-pages/AboutMe/aboutMe'
import ProjectCallToAction from '../../private-pages/ProjectCallToAction/projectCallToAction'
import SkillTiles from '../../private-pages/skillTiles/skillTiles'




const home = () => {
  return (
   <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard />
        <div className="col-span-2">
          <ExperienceBadges />
        </div>
        <AboutMe />
        <ProjectCallToAction />
        <div className="col-span-2">
          <SkillTiles />
        </div>
      </div>
    </div>
  );
};

export default home
