
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-primary">CodeFlow</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('benefits')}
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-secondary hover:text-primary font-medium transition-colors"
          >
            Testimonials
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="text-secondary hover:text-primary"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </Button>
          <Button>Get Started</Button>
        </div>

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
              onClick={() => scrollToSection('features')}
              className="text-secondary hover:text-primary font-medium py-2 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-secondary hover:text-primary font-medium py-2 transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-secondary hover:text-primary font-medium py-2 transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-secondary hover:text-primary font-medium py-2 transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-secondary hover:text-primary font-medium py-2 transition-colors"
            >
              Contact
            </button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
