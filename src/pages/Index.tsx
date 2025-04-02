
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Interests from '@/components/Interests';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Interests />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
