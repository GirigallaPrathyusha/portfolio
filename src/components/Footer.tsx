
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-portfolio-dark py-12 border-t border-secondary/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <a href="#home" className="text-2xl font-bold text-portfolio-heading mb-6">
            KAMMARI<span className="text-portfolio-primary">.</span>
          </a>
          
          <div className="flex space-x-6 mb-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-heading hover:text-portfolio-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-heading hover:text-portfolio-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-portfolio-heading hover:text-portfolio-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="mailto:hello@example.com" className="text-portfolio-heading hover:text-portfolio-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
          
          <p className="text-portfolio-text text-center text-sm mb-8">
            &copy; {new Date().getFullYear()} KAMMARI ANAND. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-portfolio-dark transition-colors"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
