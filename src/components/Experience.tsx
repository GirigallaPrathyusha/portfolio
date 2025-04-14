
import { Calendar, GraduationCap, Briefcase } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    type: "work",
    title: "Software Development Engineer",
    company: "BlueStock",
    location: "India",
    date: "2024 DEC -2025 JAN",
    description: "Creating a stock prices display website similar to screener.in using PHP for backend development. Building comprehensive stock market data visualization and company information platform."
  },
  {
    id: 2,
    type: "education",
    title: "B.Tech in Data Science",
    company: "B.V RAJU INSTITUTE OF TECHNOLOGY",
    location: "India",
    date: "2023 - 2026",
    description: "Currently pursuing B.Tech in Data Science, focusing on advanced data analysis, android development, and software development."
  },
  {
    id: 3,
    type: "education",
    title: "Diploma in Computer Science Engineering",
    company: "MAHAVEER INSTITUTE OF SCIENCE & TECHNOLOGY",
    location: "India",
    date: "2020 - 2023",
    description: "Completed diploma in Computer Science Engineering, gaining strong foundation in programming and software development."
  },
  {
    id: 4,
    type: "education",
    title: "High School",
    company: "ZPHS MADHURAPUR",
    location: "India",
    date: "2020",
    description: "Completed high school education with 100% academic performance, demonstrating excellence in studies and strong foundation for higher education."
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
