
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: "E-commerce Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A fully responsive e-commerce website built with React, Node.js, and MongoDB. Features include user authentication, product filtering, and payment integration.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Task Management App",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A task management application that helps users organize their work with features like drag-and-drop task prioritization, reminders, and team collaboration.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Vuex"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Fitness Tracker",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A React Native app that tracks workouts, provides personalized training plans, and monitors progress with detailed analytics and visualization.",
    technologies: ["React Native", "TypeScript", "Redux", "D3.js", "Health API"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Recipe Finder",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    description: "A recipe search application that allows users to find recipes based on ingredients they have. Features include dietary filters, meal planning, and saved favorites.",
    technologies: ["Angular", "TypeScript", "RxJS", "Spoonacular API", "SCSS"],
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
                <span className="text-sm text-portfolio-primary font-medium mb-2">{project.category}</span>
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
