import React from 'react'
import ProfileCard from '../../private-pages/ProfileCard/profileCard'
import ExperienceBadges from '../../private-pages/exprencienceBadges/experencienceBadges'
import AboutMe from '../../private-pages/AboutMe/aboutMe'
import ProjectCallToAction from '../../private-pages/ProjectCallToAction/projectCallToAction'
import SkillTiles from '../../private-pages/skillTiles/skillTiles'
import SocialLink from '../../private-pages/socialLinks/socialink'




const home = () => {
  return (
   <div className="bg-gray-900 text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProfileCard />
        <div className="col-span-2">
          <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-gray-400">
            I am a passionate Full Stack developer with a love for creating beautiful and functional web applications.
          </p>
          <p className="text-gray-400">
            Explore my work and feel free to reach out if you have any questions or opportunities.  
          </p>
          <div className="grid grid-cols-2 gap-3 p-4 bg-gray-800 rounded-lg shadow-md mt-4">
            <h2 className="text-lg font-bold mb-4 col-span-2">Social Links</h2>
            <button className="bg-[#1c1c1c] hover:bg-[#2a2a2a] py-3 rounded text-sm">
              <a href="">
               GitHub →
              </a>
            </button>
            <button className="bg-[#1c1c1c] hover:bg-[#2a2a2a] py-3 rounded text-sm">
              <a href="">
                 LinkedIn →
              </a>
            </button>
            <button className="bg-[#1c1c1c] hover:bg-[#2a2a2a] py-3 rounded text-sm">
              <a href="">
                Twitter →
              </a>
            </button>
           
            <button  className=" bg-[#1c1c1c] hover:bg-[#2a2a2a] py-3 rounded text-sm">
              <a href="">
                Instagram → 
              </a>
            </button>
            
          {/* <SocialLink /> */}
        </div>
        </div>
         <AboutMe />
        {/* <SocialLink />   */}
        <div className="col-span-2 ">
          <ProjectCallToAction />
          <div className='mt-4'>
             <ExperienceBadges />
          </div>
          
        </div>
       

        <div className="col-span-2">
          <SkillTiles />
        </div>
      </div>
    </div>
  );
};

export default home
