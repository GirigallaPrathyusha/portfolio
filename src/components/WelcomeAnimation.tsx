
import React, { useEffect, useState } from 'react';
import { Code, Globe, User } from 'lucide-react';

const WelcomeAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showRole, setShowRole] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // Sequence of animations with smoother timing
    const nameTimer = setTimeout(() => {
      setShowName(true);
      // Add stagger effect to icons
      document.querySelectorAll('.icon-container').forEach((icon, index) => {
        setTimeout(() => icon.classList.add('active'), index * 200);
      });
    }, 800);

    const roleTimer = setTimeout(() => setShowRole(true), 1600);
    
    // Complete main animations
    const completeTimer = setTimeout(() => setAnimationComplete(true), 2400);
    
    // Start exit sequence
    const exitTimer = setTimeout(() => setIsExiting(true), 4000);
    const hideTimer = setTimeout(() => setIsVisible(false), 5000);
    
    return () => {
      clearTimeout(nameTimer);
      clearTimeout(roleTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-portfolio-dark flex flex-col items-center justify-center overflow-hidden transition-all duration-1000 ${isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} ${animationComplete ? 'transform-gpu' : ''}`}
    >
      <div className="text-center">
        {/* Icons with floating animation */}
        <div className="flex justify-center space-x-10 mb-8">
          <div className="icon-container bg-[#2d1f4a] p-4 rounded-full transform transition-all duration-700 ease-out opacity-0 translate-y-4 hover:scale-110 hover:bg-[#3d2f5a]">
            <Code 
              size={40} 
              className="text-white transition-colors duration-300" 
            />
          </div>
          <div className="icon-container bg-[#2d1f4a] p-4 rounded-full transform transition-all duration-700 ease-out opacity-0 translate-y-4 hover:scale-110 hover:bg-[#3d2f5a]">
            <User 
              size={40} 
              className="text-white transition-colors duration-300" 
            />
          </div>
          <div className="icon-container bg-[#2d1f4a] p-4 rounded-full transform transition-all duration-700 ease-out opacity-0 translate-y-4 hover:scale-110 hover:bg-[#3d2f5a]">
            <Globe 
              size={40} 
              className="text-white transition-colors duration-300" 
            />
          </div>
        </div>
        
        {/* Welcome text with typing animation */}
        <div className="overflow-hidden">
          <h2 className="text-xl md:text-2xl text-white mb-2 animate-fade-in-up">
            Welcome to My
          </h2>
          <h2 className="text-3xl md:text-4xl text-[#8B5CF6] mb-8 font-bold animate-fade-in-up"
               style={{ animationDelay: '0.3s' }}>
            Portfolio Website
          </h2>
        </div>
        
        {/* Name with slide-in effect */}
        <div className="overflow-hidden w-full">
          {showName && (
            <h1 
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4BE2E7] to-[#D931E2] font-montserrat tracking-wider inline-block transform transition-transform duration-1000 ease-out"
              style={{ transform: showName ? 'translateX(0)' : 'translateX(-100%)', opacity: showName ? 1 : 0, transition: 'transform 1s ease-out, opacity 1s ease-out' }}
            >
              KAMMARI ANAND
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
