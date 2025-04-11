
import { Code, Database, Layout, Smartphone } from 'lucide-react';

const skills = [
  "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", 
  "SQL", "HTML", "CSS", "Tailwind CSS", "Git", "Docker", "AWS"
];

const About = () => {
  return (
    <section id="about" className="section-padding py-24 bg-portfolio-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4 text-portfolio-heading">Who am I?</h3>
            <p className="mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with expertise in building responsive and performant web applications. 
              With a strong foundation in both frontend and backend technologies, I create seamless user experiences that solve real-world problems.
            </p>
            <p className="mb-6 leading-relaxed">
              My journey in software development began over 5 years ago, and I've been continuously learning and adapting to the ever-changing tech landscape.
              I'm dedicated to writing clean, maintainable code and implementing best practices in all my projects.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 mt-10 text-portfolio-heading">My Skills</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="bg-secondary p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-portfolio-dark p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Layout className="text-portfolio-primary" size={24} />
                  </div>
                  <h4 className="font-bold mb-2">Frontend</h4>
                  <p className="text-sm">Creating beautiful, responsive user interfaces with modern frameworks.</p>
                </div>
                
                <div className="bg-portfolio-dark p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Database className="text-portfolio-primary" size={24} />
                  </div>
                  <h4 className="font-bold mb-2">Backend</h4>
                  <p className="text-sm">Building robust APIs and server-side applications with Node.js.</p>
                </div>
                
                <div className="bg-portfolio-dark p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Code className="text-portfolio-primary" size={24} />
                  </div>
                  <h4 className="font-bold mb-2">Development</h4>
                  <p className="text-sm">Writing clean, tested, and maintainable code following best practices.</p>
                </div>
                
                <div className="bg-portfolio-dark p-6 rounded-lg flex flex-col items-center text-center">
                  <div className="w-14 h-14 bg-portfolio-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Smartphone className="text-portfolio-primary" size={24} />
                  </div>
                  <h4 className="font-bold mb-2">Responsive</h4>
                  <p className="text-sm">Creating applications that work seamlessly across all devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
