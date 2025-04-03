
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Code, Layout, Terminal } from 'lucide-react';

const projectsData = [
  {
    title: "Personal Portfolio",
    category: "HTML & CSS",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "My first portfolio website built with HTML, CSS, and basic JavaScript. Features responsive design and showcases my learning journey as a beginner developer.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "To-Do List App",
    category: "JavaScript Basics",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A simple to-do list application that allows users to add, delete, and mark tasks as complete. Built with vanilla JavaScript, HTML, and CSS.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Weather Dashboard",
    category: "API Integration",
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A weather dashboard that displays current weather conditions for searched cities. My first project working with external APIs and handling JSON data.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Simple Blog Layout",
    category: "Web Design",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A responsive blog layout featuring multiple pages and a clean, accessible design. Built to practice CSS layout techniques including Flexbox and CSS Grid.",
    technologies: ["HTML5", "CSS3", "Flexbox", "CSS Grid", "Web Accessibility"],
    liveLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card overflow-hidden flex flex-col h-full">
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-sm text-portfolio-primary font-medium mb-2 flex items-center gap-1">
                  {project.category === "HTML & CSS" ? <Layout size={16} /> : 
                   project.category === "JavaScript Basics" ? <Code size={16} /> : 
                   project.category === "API Integration" ? <Terminal size={16} /> : 
                   <Layout size={16} />}
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="bg-portfolio-secondary text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a href={project.liveLink} className="inline-flex items-center gap-1 text-sm font-medium text-portfolio-primary hover:underline">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.githubLink} className="inline-flex items-center gap-1 text-sm font-medium text-portfolio-primary hover:underline">
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
