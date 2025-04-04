
import React from 'react';
import { CalendarIcon, GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: "Bachelor of Science in Environmental Sciences",
    institution: "University of Mpumalanga",
    location: "South Africa",
    period: "2021 - 2023",
    description: "Strong foundation in environmental management, sustainability, and scientific research. Graduated with distinctions."
  },
  {
    degree: "Software Engineering Program",
    institution: "PLP Academy",
    location: "Nairobi, Kenya",
    period: "2025",
    description: "Specializing in Full Stack Development (MERN), building expertise in HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB through hands-on projects."
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-portfolio-secondary">
      <div className="container mx-auto">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <div 
              key={index} 
              className="mb-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="bg-portfolio-primary bg-opacity-10 p-3 rounded-full mr-4">
                  <GraduationCap className="text-portfolio-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{item.degree}</h3>
                  <p className="text-gray-600">{item.institution}, {item.location}</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4 text-sm text-gray-500">
                <CalendarIcon size={16} className="mr-2" />
                <span>{item.period}</span>
              </div>
              
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
