
import React from 'react';
import { Camera, Code, Compass, Book, Gamepad2, Users } from 'lucide-react';

const interestsData = [
  {
    title: "Photography",
    icon: Camera,
    description: "Capturing moments and exploring visual storytelling through my camera lens."
  },
  {
    title: "Coding",
    icon: Code,
    description: "Building side projects and exploring new technologies beyond my professional work."
  },
  {
    title: "Traveling",
    icon: Compass,
    description: "Exploring new places, experiencing different cultures, and broadening my perspective."
  },
  {
    title: "Reading",
    icon: Book,
    description: "Enjoying non-fiction books on technology, psychology, and personal development."
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Exploring immersive video game worlds and enjoying strategic and narrative-driven games."
  },
  {
    title: "Socializing",
    icon: Users,
    description: "Connecting with friends, networking, and enjoying meaningful conversations."
  }
];

const Interests = () => {
  return (
    <section id="interests" className="bg-portfolio-secondary">
      <div className="container mx-auto">
        <h2 className="section-title">Interests</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {interestsData.map((interest, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-portfolio-primary bg-opacity-10 p-4 rounded-full mb-4">
                <interest.icon className="text-portfolio-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{interest.title}</h3>
              <p className="text-gray-600">{interest.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
