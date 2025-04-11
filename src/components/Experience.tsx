
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    type: "work",
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    date: "2021 - Present",
    description: "Led development of multiple web applications using React, TypeScript, and Next.js. Improved performance metrics by 40% through code optimizations. Mentored junior developers and implemented best practices."
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "New York, NY",
    date: "2018 - 2021",
    description: "Developed and maintained RESTful APIs using Node.js and Express. Created responsive and accessible user interfaces with React. Collaborated with design team to implement UI/UX improvements."
  },
  {
    id: 3,
    type: "work",
    title: "Junior Developer",
    company: "Digital Creatives",
    location: "Boston, MA",
    date: "2016 - 2018",
    description: "Assisted in developing web applications using JavaScript and jQuery. Implemented responsive designs using HTML5 and CSS3. Participated in code reviews and team meetings."
  },
  {
    id: 4,
    type: "education",
    title: "M.S. in Computer Science",
    company: "Stanford University",
    location: "Stanford, CA",
    date: "2014 - 2016",
    description: "Focused on web technologies and machine learning. Completed thesis on optimizing frontend performance in modern web applications."
  },
  {
    id: 5,
    type: "education",
    title: "B.S. in Computer Science",
    company: "MIT",
    location: "Cambridge, MA",
    date: "2010 - 2014",
    description: "Graduated with honors. Completed coursework in algorithms, data structures, and web development."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding py-24 bg-portfolio-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-portfolio-primary mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto">
            My professional journey, along with my educational background, has equipped me with the skills and knowledge to tackle complex challenges in web development.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col space-y-6">
            {experienceData.map((item) => (
              <div key={item.id} className="timeline-item animate-fade-in-up">
                <div className="absolute -left-3 top-0">
                  <div className="w-6 h-6 rounded-full bg-portfolio-dark border-2 border-portfolio-primary flex items-center justify-center">
                    {item.type === "work" ? (
                      <Briefcase size={12} className="text-portfolio-primary" />
                    ) : (
                      <GraduationCap size={12} className="text-portfolio-primary" />
                    )}
                  </div>
                </div>
                
                <div className="bg-secondary p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <div className="flex items-center text-sm text-portfolio-primary mt-2 md:mt-0">
                      <Calendar size={14} className="mr-2" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-portfolio-heading">{item.company} • {item.location}</p>
                  </div>
                  
                  <p className="text-sm text-portfolio-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button-outline">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
