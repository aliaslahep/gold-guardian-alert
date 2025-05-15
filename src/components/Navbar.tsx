import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/rupbee guard.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* <Shield className="h-10 w-10 text-primary mr-3" />
          <span className="text-2xl font-bold text-secondary">RupbeeGuard</span> */}

          <img src={logo} alt="logo" className="h-10" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('pledger-info')}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Gold Pledger Info
          </button>
          <button 
            onClick={() => scrollToSection('spot-fake-gold')}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            How to Spot Fake Gold
          </button>
          <button 
            onClick={() => scrollToSection('report')}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Report Fake Gold
          </button>
          <button 
            onClick={() => scrollToSection('resources')}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Resources
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-secondary hover:text-primary font-medium transition-colors py-2"
          >
            Contact
          </button>
        </nav>

        <Button 
          variant="ghost" 
          className="md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('pledger-info')}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Gold Pledger Info
            </button>
            <button 
              onClick={() => scrollToSection('spot-fake-gold')}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              How to Spot Fake Gold
            </button>
            <button 
              onClick={() => scrollToSection('report')}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Report Fake Gold
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Resources
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-secondary hover:text-primary font-medium py-3 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-2 pb-4 bg-white border-t">
            <a href="#home" className="block py-2 px-4 text-foreground hover:bg-gray-100">Home</a>
            <a href="#pledger-info" className="block py-2 px-4 text-foreground hover:bg-gray-100">Gold Pledger Info</a>
            <a href="#spot-fake-gold" className="block py-2 px-4 text-foreground hover:bg-gray-100">How to Spot Fake Gold</a>
            <a href="#report" className="block py-2 px-4 text-foreground hover:bg-gray-100">Report Fake Gold</a>
            <a href="#resources" className="block py-2 px-4 text-foreground hover:bg-gray-100">Resources</a>
            <a href="#contact" className="block py-2 px-4 text-foreground hover:bg-gray-100">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
