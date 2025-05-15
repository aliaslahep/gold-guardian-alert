
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
=======
import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logo from '@/assets/rupbee guard.png';
>>>>>>> parent of c5ae3f2 (Merge pull request #3 from aliaslahep/main)


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

<<<<<<< HEAD
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground">GoldGuard</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#pledger-info" className="text-foreground hover:text-primary transition-colors font-medium">Gold Pledger Info</a>
            <a href="#spot-fake-gold" className="text-foreground hover:text-primary transition-colors font-medium">How to Spot Fake Gold</a>
            <a href="#report" className="text-foreground hover:text-primary transition-colors font-medium">Report Fake Gold</a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors font-medium">Resources</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
=======
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
>>>>>>> parent of c5ae3f2 (Merge pull request #3 from aliaslahep/main)
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
