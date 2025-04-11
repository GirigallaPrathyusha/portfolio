
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  category: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and payment integration.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    category: "fullstack"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with a modern UI design.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team functionality.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Firebase", "Material UI"],
    demoUrl: "#",
    githubUrl: "#",
    category: "fullstack"
  },
  {
    id: 4,
    title: "Weather Application",
    description: "A weather forecast application with location-based updates and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["JavaScript", "API Integration", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend"
  },
  {
    id: 5,
    title: "Recipe API",
    description: "A RESTful API for managing and sharing cooking recipes with user authentication.",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
    category: "backend"
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with private and group messaging capabilities.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    tags: ["React", "Socket.io", "Node.js", "Express"],
    demoUrl: "#",
    githubUrl: "#",
    category: "fullstack"
  }
];

const filters = [
  { label: "All", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "Backend", value: "backend" },
  { label: "Full Stack", value: "fullstack" }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section-padding py-24 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills and passion for building exceptional applications.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((item) => (
              <button
                key={item.value}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === item.value 
                    ? "bg-portfolio-primary text-portfolio-dark" 
                    : "bg-secondary text-portfolio-heading hover:bg-portfolio-primary/20"
                }`}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden h-52">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-4">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-portfolio-dark transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-portfolio-primary/20 flex items-center justify-center text-portfolio-primary hover:bg-portfolio-primary hover:text-portfolio-dark transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-portfolio-text mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded bg-portfolio-dark text-portfolio-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
