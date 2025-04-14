
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WelcomeAnimation from '@/components/WelcomeAnimation';

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show content after welcome animation (5 seconds)
    const timer = setTimeout(() => setShowContent(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen !bg-portfolio-dark text-portfolio-text [&>*]:bg-portfolio-dark">
      <WelcomeAnimation />
      <div className={`transition-opacity duration-1000 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Navbar />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Hero />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <About />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <Portfolio />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Experience />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
          <Contact />
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
