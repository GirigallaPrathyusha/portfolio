
import React, { useEffect, useRef } from 'react';
import { Box, CircleDot, Code, Flame, Layers, Rocket } from 'lucide-react';

const AnimatedImage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const icons = document.querySelectorAll('.floating-icon');
    
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
      {/* Main sphere */}
      <div className="rounded-full h-64 w-64 bg-portfolio-primary/10 border border-portfolio-primary/30 backdrop-blur-sm flex items-center justify-center mx-auto relative overflow-hidden animate-pulse">
        <div className="rounded-full h-48 w-48 bg-portfolio-dark/70 border border-portfolio-primary/20 flex items-center justify-center overflow-hidden">
          <div className="rounded-full h-32 w-32 bg-portfolio-primary/5 border border-portfolio-primary/10 flex items-center justify-center text-portfolio-primary">
            <Code size={40} />
          </div>
        </div>
      </div>
      
      {/* Floating icons */}
      <div className="floating-icon absolute text-portfolio-primary animate-floating-1">
        <Rocket size={24} />
      </div>
      <div className="floating-icon absolute text-portfolio-primary animate-floating-2">
        <CircleDot size={20} />
      </div>
      <div className="floating-icon absolute text-portfolio-primary animate-floating-1">
        <Layers size={22} />
      </div>
      <div className="floating-icon absolute text-portfolio-primary animate-floating-2">
        <Box size={18} />
      </div>
      <div className="floating-icon absolute text-portfolio-primary animate-floating-1">
        <Flame size={22} />
      </div>
    </div>
  );
};

export default AnimatedImage;
