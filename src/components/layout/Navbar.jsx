import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Brand Section */}
      <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Oladunjoye</span>
         <span className=" w-3 h-3 mt-1 bg-orange-400 rounded-full"></span>
        
      </div>

      {/* Navigation Links */}
      <div className="space-x-6">
        <a href="/" className="hover:text-gray-300 transition">Home</a>
        <a href="work" className="hover:text-gray-300 transition">Work</a>
        <a href="/ProjectCallToAction" className="hover:text-gray-300 transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
// import React from 'react'

// const Navbar = () => {
//  return (
//     <div className="flex justify-between items-center mb-6 bg-gray-800 p-4">
//       <h1 className="text-white text-xl font-bold  "></h1>
//       <nav className="space-x-4">
//         <a href="#" className="text-gray-400 hover:text-white">home</a>
//         <a href="#" className="text-gray-400 hover:text-white">work</a>
//         <a href="#" className="text-gray-400 hover:text-white">contact</a>
//       </nav>
//     </div>
//   );
// }

// export default Navbar
