import React from 'react';
import { ChevronUp, Terminal, X, Instagram } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const date = new Date().getFullYear();
  return <footer className="bg-portfolio-secondary text-portfolio-primary py-12 border-t border-portfolio-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center text-xl font-bold mb-2">
              <Terminal size={20} className="mr-2" />
              <span>Sihle Nsimba</span>
            </div>
            <p className="text-portfolio-primary/70">Full Stack Developer</p>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h4 className="text-sm font-semibold mb-3 text-portfolio-primary/70">./ quick-links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-portfolio-primary/70 hover:text-portfolio-primary transition-colors duration-200">~/home</a></li>
              <li><a href="#about" className="text-portfolio-primary/70 hover:text-portfolio-primary transition-colors duration-200">~/about</a></li>
              <li><a href="#projects" className="text-portfolio-primary/70 hover:text-portfolio-primary transition-colors duration-200">~/projects</a></li>
              <li><a href="#contact" className="text-portfolio-primary/70 hover:text-portfolio-primary transition-colors duration-200">~/contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-3 text-portfolio-primary/70">./ connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-portfolio-primary/70 hover:text-portfolio-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-portfolio-primary/70 hover:text-portfolio-primary transition-colors duration-200">
                <X className="w-5 h-5" />
              </a>
              <a href="#" className="text-portfolio-primary/70 hover:text-portfolio-primary transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-portfolio-primary/70 hover:text-portfolio-primary transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-portfolio-primary/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-portfolio-primary/50 text-sm mb-4 md:mb-0 font-mono">
            <span className="text-portfolio-accent">$</span> echo "© {date} John Doe. All rights reserved."
          </p>
          
          <button onClick={handleScrollToTop} className="bg-portfolio-primary/20 hover:bg-portfolio-primary/30 p-2 rounded-full text-portfolio-primary transition-colors duration-300" aria-label="Scroll to top">
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;
