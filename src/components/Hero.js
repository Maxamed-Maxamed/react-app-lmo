import React from 'react';

// Define the Hero component


export default function  Hero() {
  return (
    // Main container with a background image
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('../img/logo.jpeg')` }}>
      {/* Overlay to darken the background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Content container */}
      <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
        {/* Main heading */}
        <h1 className="text-6xl font-bold">Unleash Your Inner Beauty</h1>
        
        {/* Subheading */}
        <p className="text-xl mt-4">Elevate your look with our expert touch</p>
        
        {/* Call-to-action button */}
        <button className="mt-8 bg-pink-600 px-6 py-3 text-lg rounded-full hover:bg-pink-700">Shop Now</button>
      </div>
    </div>
  );
}
