
import React, { useEffect, useRef } from 'react';
import { Code } from 'lucide-react';

const AnimatedImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const icons = document.querySelectorAll('.tech-icon');
    
    icons.forEach((icon) => {
      // Generate random positions and animation durations
      const xPos = Math.random() * 100; // 0-100%
      const yPos = Math.random() * 100; // 0-100%
      const duration = 15 + Math.random() * 10; // 15-25s
      const delay = Math.random() * 5; // 0-5s
      
      // Apply styles
      const iconEl = icon as HTMLElement;
      iconEl.style.left = `${xPos}%`;
      iconEl.style.top = `${yPos}%`;
      iconEl.style.animationDuration = `${duration}s`;
      iconEl.style.animationDelay = `${delay}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="animated-image-container relative w-full h-full max-w-md mx-auto">
      {/* Main computer screen */}
      <div className="relative w-64 h-56 mx-auto bg-gray-800 rounded-lg border-2 border-gray-700 overflow-hidden">
        {/* Code editor screen */}
        <div className="absolute inset-0 p-2 bg-portfolio-dark">
          {/* Colored code lines */}
          <div className="flex flex-col gap-1 mt-6">
            <div className="h-1.5 w-3/4 bg-yellow-500/70 rounded"></div>
            <div className="h-1.5 w-1/2 bg-red-500/70 rounded"></div>
            <div className="h-1.5 w-3/5 bg-green-500/70 rounded"></div>
            <div className="h-1.5 w-2/3 bg-blue-500/70 rounded"></div>
            <div className="h-1.5 w-2/5 bg-purple-500/70 rounded"></div>
          </div>
          
          {/* Code window */}
          <div className="absolute top-1 right-1 w-16 h-24 bg-gray-900/80 rounded-md p-1">
            <div className="h-1 w-3/4 bg-white/50 rounded mb-1"></div>
            <div className="h-1 w-1/2 bg-white/50 rounded mb-1"></div>
            <div className="h-1 w-2/3 bg-white/50 rounded"></div>
          </div>
        </div>
        
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 h-5 bg-gray-700 flex items-center px-1">
          <div className="flex space-x-1">
            <div className="w-1 h-1 rounded-full bg-red-400"></div>
            <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
            <div className="w-1 h-1 rounded-full bg-green-400"></div>
          </div>
        </div>
      </div>
      
      {/* Laptop base */}
      <div className="w-72 h-3 mx-auto bg-gray-700 rounded-b-lg"></div>
      
      {/* React Logo in the center */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 h-16 w-16 bg-portfolio-primary/10 rounded-full border border-portfolio-primary/30 backdrop-blur-sm flex items-center justify-center animate-pulse">
        <div className="text-portfolio-primary">
          <Code size={28} />
        </div>
      </div>
      
      {/* Tech icons floating around */}
      <div className="tech-icon absolute w-10 h-10 bg-blue-500 rounded-md shadow-lg flex items-center justify-center text-white font-bold animate-floating-1">
        Ps
      </div>
      <div className="tech-icon absolute w-10 h-10 bg-orange-500 rounded-md shadow-lg flex items-center justify-center text-white font-bold animate-floating-2">
        Ai
      </div>
      <div className="tech-icon absolute w-10 h-10 bg-purple-500 rounded-md shadow-lg flex items-center justify-center text-white font-bold animate-floating-1">
        Ae
      </div>
      <div className="tech-icon absolute w-10 h-10 bg-red-500 rounded-md shadow-lg flex items-center justify-center text-white font-bold animate-floating-2">
        <div className="transform rotate-12">{'</>'}</div>
      </div>
      <div className="tech-icon absolute w-10 h-10 bg-pink-500 rounded-md shadow-lg flex items-center justify-center text-white font-bold animate-floating-1">
        A
      </div>
      <div className="tech-icon absolute w-10 h-10 bg-orange-600 rounded-md shadow-lg flex items-center justify-center text-white font-bold animate-floating-2">
        <div className="transform rotate-6">5</div>
      </div>
      <div className="tech-icon absolute w-10 h-10 bg-blue-400 rounded-md shadow-lg flex items-center justify-center text-white font-bold animate-floating-1">
        C
      </div>
    </div>
  );
};

export default AnimatedImage;
