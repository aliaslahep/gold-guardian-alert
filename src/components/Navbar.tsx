
import React, { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-md dark:bg-background/80 dark:border-b dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <Shield className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-foreground dark:text-white">GoldGuard</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium dark:text-white dark:hover:text-primary">Home</a>
            <a href="#pledger-info" className="text-foreground hover:text-primary transition-colors font-medium dark:text-white dark:hover:text-primary">Gold Pledger Info</a>
            <a href="#spot-fake-gold" className="text-foreground hover:text-primary transition-colors font-medium dark:text-white dark:hover:text-primary">How to Spot Fake Gold</a>
            <a href="#report" className="text-foreground hover:text-primary transition-colors font-medium dark:text-white dark:hover:text-primary">Report Fake Gold</a>
            <a href="#resources" className="text-foreground hover:text-primary transition-colors font-medium dark:text-white dark:hover:text-primary">Resources</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium dark:text-white dark:hover:text-primary">Contact</a>
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none dark:text-gray-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-2 pb-4 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <a href="#home" className="block py-2 px-4 text-foreground hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">Home</a>
            <a href="#pledger-info" className="block py-2 px-4 text-foreground hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">Gold Pledger Info</a>
            <a href="#spot-fake-gold" className="block py-2 px-4 text-foreground hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">How to Spot Fake Gold</a>
            <a href="#report" className="block py-2 px-4 text-foreground hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">Report Fake Gold</a>
            <a href="#resources" className="block py-2 px-4 text-foreground hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">Resources</a>
            <a href="#contact" className="block py-2 px-4 text-foreground hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
