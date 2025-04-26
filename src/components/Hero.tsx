import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import AnimatedContent from './AnimatedContent'; 
// ✅ Import your local Lottie JSON file
import animationData from '../assets/coding-animation.json';

const HomeHero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [profession, setProfession] = useState("APP DEVELOPER");

  useEffect(() => {
    if (isTyping && currentIndex < profession.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + profession[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else if (currentIndex >= profession.length) {
      const timeout = setTimeout(() => setIsTyping(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, profession, isTyping]);

  useEffect(() => {
    if (!isTyping && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
      }, 50);
      return () => clearTimeout(timeout);
    } else if (!isTyping && displayText.length === 0) {
      setProfession(prev => prev === 'APP DEVELOPER' ? 'WEB DEVELOPER' : 'APP DEVELOPER');
      setCurrentIndex(0);
      setIsTyping(true);
    }
  }, [displayText, isTyping]);

  return (
    <section id="home" className="min-h-screen pt-16 pb-12 flex items-center bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="appear-animated">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 font-montserrat leading-tight text-white">
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-[#4EDBE0] to-[#B945EE] text-transparent bg-clip-text">
                KAMMARI ANAND
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-portfolio-secondary font-medium flex">
              <span className="mr-2 text-white">I'm a</span>
              <span className="bg-gradient-to-r from-[#4EDBE0] to-[#B945EE] text-transparent bg-clip-text">
                {displayText}
              </span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              I'm passionate about building interactive web applications 
              and exploring new technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                to="/portfolio" 
                className="bg-portfolio-primary hover:bg-portfolio-secondary text-white px-6 py-3 rounded-md transition-all duration-300 flex items-center font-medium"
              >
                View My Work <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                to="/contact"
                className="border-2 border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary/10 px-6 py-3 rounded-md transition-all duration-300 flex items-center font-medium"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="appear-animated appear-animated-delay-1 flex justify-center">
            <div className="w-full max-w-md">
              {/* ✅ Lottie animation using local JSON file */}
              <Lottie
                animationData={animationData}
                loop
                autoplay
                className="w-full h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
