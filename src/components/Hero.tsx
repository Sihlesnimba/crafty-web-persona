
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center bg-portfolio-secondary relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-portfolio-primary font-medium mb-3 animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Hello, I'm
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            John Doe
          </h1>
          <div className="h-1 w-24 bg-portfolio-primary mx-auto mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}></div>
          <h2 className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
            Frontend Developer & UX Designer
          </h2>
          <div className="flex gap-4 justify-center animate-slide-up opacity-0" style={{ animationDelay: '1s' }}>
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} size="lg">
              Get in Touch
            </Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="text-portfolio-primary" size={32} />
      </button>
    </section>
  );
};

export default Hero;
