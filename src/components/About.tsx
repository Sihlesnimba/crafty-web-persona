import React from 'react';
const About = () => {
  return <section id="about" className="bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="rounded-full overflow-hidden aspect-square mx-auto max-w-xs border-4 border-portfolio-secondary shadow-lg">
              <img alt="John Doe" className="w-full h-full object-cover" src="/lovable-uploads/3d597582-3d50-48ac-ab5e-2fc1b2849a81.jpg" />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="text-gray-600 mb-4">I'm Sihle Nsimba, a passionate and motivated aspiring Full Stack Developer with a background in Environmental Sciences. Currently, I am honing my skills in web development through PLP Academy, where I'm learning the fundamentals of HTML, CSS, and programming.</p>
            <p className="text-gray-600 mb-4">
              My journey in web development started when I was in college, and since then, I've been constantly learning and improving my skills to stay up-to-date with the latest technologies and design trends.
            </p>
            <p className="text-gray-600 mb-6">
              When I'm not coding, you'll find me exploring new hiking trails, experimenting with photography, or enjoying a good book at my favorite local café.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-medium">Name:</p>
                <p className="text-gray-600">John Doe</p>
              </div>
              <div>
                <p className="font-medium">Email:</p>
                <p className="text-gray-600">contact@johndoe.com</p>
              </div>
              <div>
                <p className="font-medium">Location:</p>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
              <div>
                <p className="font-medium">Availability:</p>
                <p className="text-gray-600">Open for freelance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;