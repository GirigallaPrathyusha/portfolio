
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 appear-animated">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat">
            About <span className="text-[#54F4F4]">Me</span>
          </h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            ✨ Crafting seamless digital journeys through code and design ✨
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center appear-animated appear-animated-delay-1">
            <h3 className="text-2xl font-bold mb-4 font-montserrat">
              <span className="bg-gradient-to-r from-[#4EDBE0] to-[#B945EE] text-transparent bg-clip-text">Hello</span>, I'm <span className="text-gradient">Anand</span>
            </h3>
            <p className="mb-4 text-white-700 dark:text-gray-300">
              I'm a Data Science student with a keen interest in Programming, Web & App Development. 
              I'm seeking an innovative and challenging environment where I can apply my skills effectively, 
              grow with evolving technologies, and turn challenges into opportunities while contributing to 
              meaningful success.
            </p>
            <p className="mb-6 text-white-700 dark:text-gray-300">
              I believe in writing clean, maintainable code and creating intuitive user experiences.
              My approach combines technical expertise with creative problem-solving to deliver
              solutions that exceed expectations.
            </p>
          </div>
          
          <div className="appear-animated appear-animated-delay-2 flex justify-center items-center">
            <div 
              className="rounded-full overflow-hidden w-[300px] h-[300px] border-4 border-portfolio-primary shadow-xl 
                transform hover:scale-110 hover:rotate-3 hover:border-[#54F4F4] 
                active:scale-95 cursor-pointer transition-all duration-300 
                hover:shadow-[0_0_30px_rgba(84,244,244,0.3)]"
              onClick={() => {
                const img = document.querySelector('#profile-img') as HTMLImageElement;
                if (img) {
                  img.classList.add('animate-pulse');
                  setTimeout(() => img.classList.remove('animate-pulse'), 1000);
                }
              }}
            >
              <img 
                id="profile-img"
                src="https://res.cloudinary.com/djx87wmbz/image/upload/v1744575823/kanna_dmqrll.jpg" 
                alt="KAMMARI ANAND" 
                className="w-full h-full object-cover transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
