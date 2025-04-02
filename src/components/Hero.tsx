
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Terminal } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'John Doe';
  const roleText = 'Frontend Developer & UX Designer';
  const [typedRole, setTypedRole] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [commandPrompt, setCommandPrompt] = useState('');

  useEffect(() => {
    const typeText = async () => {
      // Type the name
      for (let i = 0; i <= fullText.length; i++) {
        setTypedText(fullText.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Wait a bit before typing the role
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Type the role
      for (let i = 0; i <= roleText.length; i++) {
        setTypedRole(roleText.substring(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // Wait before showing command prompt
      await new Promise(resolve => setTimeout(resolve, 800));
      setCommandPrompt('view --portfolio');
    };
    
    typeText();
  }, []);

  const handleScrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="min-h-screen flex items-center bg-portfolio-dark relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="ml-4 text-xs text-gray-400">portfolio ~ terminal</div>
            </div>
            
            <div className="terminal-body">
              <div className="mb-6">
                <p className="command-line mb-2">
                  <span className="text-portfolio-accent mr-2">$</span> whoami
                </p>
                <p className="ml-4 mb-4">{typedText}
                  {typedText === fullText && !typedRole && (
                    <span className="inline-block w-2 h-5 bg-portfolio-primary ml-1 animate-cursor-blink"></span>
                  )}
                </p>
                
                {typedRole && (
                  <>
                    <p className="command-line mb-2">
                      <span className="text-portfolio-accent mr-2">$</span> get job-title
                    </p>
                    <p className="ml-4 mb-4">{typedRole}
                      {typedRole === roleText && !commandPrompt && (
                        <span className="inline-block w-2 h-5 bg-portfolio-primary ml-1 animate-cursor-blink"></span>
                      )}
                    </p>
                  </>
                )}
                
                {commandPrompt && (
                  <>
                    <p className="command-line">
                      <span className="text-portfolio-accent mr-2">$</span> {commandPrompt}
                      <span className="inline-block w-2 h-5 bg-portfolio-primary ml-1 animate-cursor-blink"></span>
                    </p>
                    
                    <div className="mt-8 flex gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '1s' }}>
                      <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} size="lg">
                        <Terminal className="mr-2 h-4 w-4" /> Get in Touch
                      </Button>
                      <Button variant="outline" size="lg">
                        View Portfolio
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>
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
