import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-4xl text-red-600 font-semibold">STEAM GAMES</span>
        </div>
        <div className="flex mr-16 space-x-20">
          <a href="#home" className="text-white mr-4">Home</a>
          <a href="#community" className="text-white mr-4">Community</a>
          <a href="#about" className="text-white mr-4">About</a>
          <a href="#contact" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
