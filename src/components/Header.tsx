
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Menu, X, Terminal } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-portfolio-dark/90 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-mono text-portfolio-primary flex items-center">
          <Terminal className="mr-2" size={20} />
          <span>~/$</span>
        </a>
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-portfolio-primary p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-8">
            <a onClick={() => handleNavClick('home')} className="nav-link cursor-pointer">cd ~/home</a>
            <a onClick={() => handleNavClick('about')} className="nav-link cursor-pointer">cd ~/about</a>
            <a onClick={() => handleNavClick('education')} className="nav-link cursor-pointer">cd ~/education</a>
            <a onClick={() => handleNavClick('skills')} className="nav-link cursor-pointer">cd ~/skills</a>
            <a onClick={() => handleNavClick('interests')} className="nav-link cursor-pointer">cd ~/interests</a>
            <a onClick={() => handleNavClick('projects')} className="nav-link cursor-pointer">cd ~/projects</a>
            <a onClick={() => handleNavClick('contact')} className="nav-link cursor-pointer">cd ~/contact</a>
            <a href="/resume.pdf" download="SihleNsimba_Resume.pdf">
              <Button variant="outline" className="ml-4" size="sm">
                <Download size={16} className="mr-2" /> get cv.pdf
              </Button>
            </a>
          </nav>
        )}
        
        {/* Mobile Navigation */}
        {isMobile && mobileMenuOpen && (
          <div className="fixed inset-0 bg-portfolio-dark z-50 top-16 p-5 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a onClick={() => handleNavClick('home')} className="nav-link text-lg py-2 border-b border-portfolio-primary/20">cd ~/home</a>
              <a onClick={() => handleNavClick('about')} className="nav-link text-lg py-2 border-b border-portfolio-primary/20">cd ~/about</a>
              <a onClick={() => handleNavClick('education')} className="nav-link text-lg py-2 border-b border-portfolio-primary/20">cd ~/education</a>
              <a onClick={() => handleNavClick('skills')} className="nav-link text-lg py-2 border-b border-portfolio-primary/20">cd ~/skills</a>
              <a onClick={() => handleNavClick('interests')} className="nav-link text-lg py-2 border-b border-portfolio-primary/20">cd ~/interests</a>
              <a onClick={() => handleNavClick('projects')} className="nav-link text-lg py-2 border-b border-portfolio-primary/20">cd ~/projects</a>
              <a onClick={() => handleNavClick('contact')} className="nav-link text-lg py-2 border-b border-portfolio-primary/20">cd ~/contact</a>
              <a href="/resume.pdf" download="SihleNsimba_Resume.pdf" className="mt-4">
                <Button variant="outline" className="w-full" size="sm">
                  <Download size={16} className="mr-2" /> get cv.pdf
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
