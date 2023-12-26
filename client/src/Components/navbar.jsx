import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 mt-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-red-600 text-4xl font-semibold">STEAM GAMES</span>
        </div>
        <div className="flex items-center space-x-14 text-lg mr-48">
          <a href="#home" className="text-white mr-4">Store</a>
          <a href="#about" className="text-white mr-4">Community</a>
          <a href="#services" className="text-white mr-4">About</a>
          <a href="#contact" className="text-white">Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

