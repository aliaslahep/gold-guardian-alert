import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/rupbee guard.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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

  const scrollToSection = (id: string, offset: number = 0) => {
    const element = document.getElementById(id);

    if (element) {
      const targetPosition = element.offsetTop - offset;
  
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false); 
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      (isScrolled || isOpen) ? 'bg-white shadow-md py-4' : 'bg-transparent py-6',
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* <Shield className="h-10 w-10 text-primary mr-3" />
          <span className="text-2xl font-bold text-secondary">RupbeeGuard</span> */}

          <img src={logo} alt="logo" className="h-10 md:h-12 lg:h-16 ml-10 lg:ml-5" />
        </div>

        {/* Desktop and Tablet Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('pledger-info', 50)}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Gold Pledger Info
          </button>
          <button 
            onClick={() => scrollToSection('spot-fake-gold', 50)}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            How to Spot Fake Gold
          </button>
          <button 
            onClick={() => scrollToSection('report', 50)}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Report Fake Gold
          </button>
          <button 
            onClick={() => scrollToSection('resources', 50)}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Resources
          </button>
          <button 
            onClick={() => scrollToSection('contact', 50)}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Contact
          </button>
        </nav>

        {/* Button to toggle the mobile menu */}
        <Button 
          variant="ghost" 
          className="lg:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('pledger-info', 50)}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Gold Pledger Info
            </button>
            <button 
              onClick={() => scrollToSection('spot-fake-gold', 50)}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              How to Spot Fake Gold
            </button>
            <button 
              onClick={() => scrollToSection('report', 50)}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Report Fake Gold
            </button>
            <button 
              onClick={() => scrollToSection('resources', 50)}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Resources
            </button>
            <button 
              onClick={() => scrollToSection('contact', 50)}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
