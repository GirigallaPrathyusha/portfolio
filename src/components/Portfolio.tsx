import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import AnimatedContent from './AnimatedContent'; 

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const projects = [
    {
      title: 'Hostel Management',
      description: ' A web application to automate hostel room allocation, leave requests, visitor management, and student accommodation permissions, improving efficiency and transparency.',
      image: 'https://res.cloudinary.com/dlled6nof/image/upload/v1745658745/images_1_udps4z.jpg',
      tags: ['HTML', 'CSS', 'JavaScript','PHP'],
      category: 'Web Development',
      icon: <Globe size={20} className="mr-2" />
    },
    {
      title: 'Hand Written Digit Recognition',
      description: ' a model to identify and classify handwritten digits with high accuracy using Convalutional Neural Networks.',
      image: 'https://res.cloudinary.com/dlled6nof/image/upload/v1745658711/images_eac9mq.jpg',
      tags: ['python','CNN' ],
      category: 'Web development',
      icon: <Globe size={20} className="mr-2" />
    },
    {
      title: 'Slum Chatbot',
      description: ' SlumCare Chatbot is a mobile-friendly chatbot that lets slum residents report daily life issues and get quick help by connecting them to the right authorities.',
      image: 'https://res.cloudinary.com/dlled6nof/image/upload/v1745659210/th_zx5zit.jpg',
      tags: ['Google AI Studio','Javascript' ],
      category: 'AI Agent',
      icon: <Globe size={20} className="mr-2" />
    },
  ];

  const skills = [
    { name: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
    { name: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
    { name: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
    { name: 'React', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
    { name: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
    { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
    { name: 'Git', icon: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968282.png' },
    { name: 'Supabase', icon: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png' },
    { name: 'Figma', icon: 'https://cdn.iconscout.com/icon/free/png-256/free-figma-3628771-3030133.png' },
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section id="portfolio" className="py-16 bg-portfolio-dark" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-montserrat">
            My <span className="bg-gradient-to-r from-[#4EDBE0] to-[#B945EE] text-transparent bg-clip-text">Tech Odyssey</span>
          </h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-lg text-white-700 dark:text-gray-300">
            Unveiling my journey of innovation through projects and skills each step showcases my growth, learning, and creativity.
          </p>
        </motion.div>

        <motion.div 
          className="flex justify-center mb-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
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
        </motion.div>

        {activeTab === 'projects' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card group relative overflow-hidden rounded-xl shadow-xl border border-gray-800 hover:border-[#B945EE]/50 transition-all duration-500"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="overflow-hidden h-48 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex items-center text-sm text-white mb-2">
                        {project.icon}
                        <span>{project.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#0f172a]">
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
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === 'skills' && (
          <div className="relative overflow-hidden py-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#B945EE] to-transparent opacity-20"></div>
            </div>
            
            <div className="relative">
              <div className="flex animate-infinite-scroll items-center justify-center md:justify-start gap-8 py-8">
                {duplicatedSkills.map((skill, index) => (
                  <motion.div 
                    key={`${skill.name}-${index}`}
                    className="flex flex-col items-center p-6 rounded-xl shadow-lg transition-all duration-500 cursor-pointer relative overflow-hidden group min-w-[150px]"
                    style={{
                      background: 'linear-gradient(45deg, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.7))',
                      backdropFilter: 'blur(4px)'
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 25px -5px rgba(185, 69, 238, 0.4)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#4EDBE0]/10 to-[#B945EE]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          .animate-infinite-scroll {
            display: flex;
            width: fit-content;
            animation: scroll 20s linear infinite;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 1rem));
            }
          }
        `}
      </style>

    </section>
  );
};

export default ProjectsSection;
