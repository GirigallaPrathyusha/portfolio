import React, { useState } from 'react';
import { Code, Database, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const projects = [
    {
      title: 'Hotel Management',
      description: 'A dynamic food delivery website featuring diverse cuisines, gift cards and secure payments and a "why choose us" section delivering convenience, taste, and happiness to your doorstep.',
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'Web Development',
      icon: <Globe size={20} className="mr-2" />
    },
    {
      title: 'House Prediction',
      description: 'A machine learning project predicting house prices using square footage, location, and key features providing accurate data-driven insights to simplify real estate decisions effortlessly.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3',
      tags: ['Python', 'Machine Learning'],
      category: 'Web Development',
      icon: <Globe size={20} className="mr-2" />
    },
    {
      title: 'Stock Price Prediction',
      description: 'A stock price prediction project leveraging APIs to analyze market trends, historical data and patterns providing real-time data-driven forecasts for smarter investment decisions.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3',
      tags: ['Python', 'API Integration', 'Machine Learning'],
      category: 'API Integration',
      icon: <Code size={20} className="mr-2" />
    },
    {
      title: 'Skills Share',
      description: 'A versatile mobile application with features like notifications, chatbots and interactive interface showcasing multiple apps built to enhance user engagement and seamless experiences.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3',
      tags: ['React', 'React Native', 'Expo', 'JavaScript'],
      category: 'App Development'
    }
  ];

  const skills = [
    { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
    { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
    { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
    { name: 'Bootstrap', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png' },
    { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
    { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
    { name: 'Git', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png' },
    { name: 'MongoDB', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png' },
    { name: 'Supabase', icon: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png' },
    { name: 'Figma', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-figma-3628771-3030133.png' },
    { name: 'Firebase', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-firebase-3521427-2944871.png' }
  ];

  return (
    <section id="portfolio" className="py-16 bg-portfolio-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 appear-animated">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat">
            My <span className="bg-gradient-to-r from-[#4EDBE0] to-[#B945EE] text-transparent bg-clip-text">Tech Odyssey</span>
          </h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-white-700 dark:text-gray-300">
            Unveiling my journey of innovation through projects and skills each step showcases my growth, learning, and creativity.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`flex items-center px-8 py-3 rounded-l-lg transition-all ${
              activeTab === 'projects' 
                ? 'bg-[#B945EE] text-white' 
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Code size={20} className="mr-2" /> Projects
          </button>
          <button 
            onClick={() => setActiveTab('skills')}
            className={`flex items-center px-8 py-3 rounded-r-lg transition-all ${
              activeTab === 'skills' 
                ? 'bg-[#B945EE] text-white' 
                : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Database size={20} className="mr-2" /> Skill Spectrum
          </button>
        </div>

        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="project-card appear-animated"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <div className="overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-portfolio-primary dark:text-portfolio-accent mb-2">
                    {project.icon}
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="bg-[#1a1a2e] text-gray-300 text-xs px-4 py-2 rounded-full hover:bg-[#1a1a2e]/80 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 appear-animated appear-animated-delay-2">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-all duration-500 cursor-pointer relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(45deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7))'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4EDBE0]/10 to-[#B945EE]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-portfolio-dark/50 group-hover:bg-portfolio-dark/30 transition-colors duration-500" />
                  <div className="relative z-10 w-16 h-16 mb-3 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="max-w-full max-h-full object-contain filter brightness-100 group-hover:brightness-110" 
                    />
                  </div>
                  <h4 className="relative z-10 font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
