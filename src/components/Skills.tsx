
import React from 'react';
import { Code, FileText, Github, Layout, Terminal } from 'lucide-react';

const skillCategories = [
  {
    category: "Web Fundamentals",
    skills: ["HTML5", "CSS3", "Basic JavaScript", "Responsive Design", "Bootstrap"]
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "VS Code", "Chrome DevTools", "Command Line Basics"]
  },
  {
    category: "Learning & Growth",
    skills: ["Problem Solving", "Documentation Reading", "Online Learning", "Code Review Basics", "Web Accessibility Basics"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-portfolio-secondary rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 pb-3 border-b border-gray-200 flex items-center gap-2">
                {index === 0 ? <Layout size={20} /> : index === 1 ? <Github size={20} /> : <FileText size={20} />}
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-portfolio-primary bg-opacity-5 rounded-lg p-8 border border-portfolio-primary border-opacity-20">
          <h3 className="text-xl font-semibold mb-4 text-center flex items-center justify-center gap-2">
            <Code size={20} />
            Learning Progress
          </h3>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              { skill: "HTML & CSS", percentage: 65 },
              { skill: "JavaScript Basics", percentage: 45 },
              { skill: "Git & Version Control", percentage: 40 },
              { skill: "Responsive Design", percentage: 55 },
              { skill: "Web Accessibility", percentage: 30 }
            ].map((item, index) => (
              <div key={index} className="w-full">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-sm text-gray-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-portfolio-primary h-2 rounded-full" 
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
