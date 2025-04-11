
import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <section id="home" className="relative h-screen flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-6 z-10 animate-fade-in">
        <p className="text-portfolio-primary mb-4 tracking-wider">HELLO THERE, I'M</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-portfolio-heading">
          Hitesh Moola
        </h1>
        <div className="h-8 mb-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl text-portfolio-heading font-light inline-block">
            {displayText}
            <span className="border-r-2 border-portfolio-primary ml-1 animate-blink"></span>
          </h2>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-heading hover:text-portfolio-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-heading hover:text-portfolio-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-heading hover:text-portfolio-primary transition-colors">
            <Twitter size={24} />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="button-primary">
            Contact Me
          </a>
          <a href="#portfolio" className="button-outline">
            View My Work
          </a>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-heading hover:text-portfolio-primary transition-colors animate-bounce">
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
