import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <Logo className="h-10 w-auto" />
        </div>

        <Button 
          variant={isScrolled ? "primary" : "outline"} 
          className={!isScrolled ? "bg-white/50 backdrop-blur-sm border-dolfoBlue text-dolfoBlue hover:bg-dolfoBlue hover:text-white" : "py-2 px-6 text-sm"}
          onClick={scrollToContact}
        >
          Agendar Consultoria
        </Button>
      </div>
    </header>
  );
};