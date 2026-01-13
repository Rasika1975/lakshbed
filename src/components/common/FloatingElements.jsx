import React from 'react';

const FloatingElements = () => {
  return (
    <>
      {/* Floating Triangle Top Left */}
      <div className="fixed top-20 left-10 w-16 h-16 float-element z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-blue-400 to-indigo-500 clip-triangle"></div>
      </div>
      
      {/* Floating Circle Top Right */}
      <div className="fixed top-40 right-16 w-12 h-12 rounded-full float-element z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
      </div>
      
      {/* Floating Cube Bottom Left */}
      <div className="fixed bottom-40 left-16 w-20 h-20 float-element z-0 opacity-20">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-cyan-400 transform -rotate-12"></div>
        </div>
      </div>
      
      {/* Floating Diamond Bottom Right */}
      <div className="fixed bottom-20 right-20 w-14 h-14 float-element z-0 opacity-20">
        <div className="w-full h-full bg-gradient-to-r from-amber-400 to-orange-500 transform rotate-45"></div>
      </div>
      
      {/* Additional floating elements */}
      <div className="fixed top-1/3 left-1/4 w-8 h-8 rounded-full float-element z-0 opacity-15 bg-blue-400"></div>
      <div className="fixed top-2/3 right-1/3 w-10 h-10 float-element z-0 opacity-15 bg-purple-400 clip-triangle"></div>
    </>
  );
};

export default FloatingElements;