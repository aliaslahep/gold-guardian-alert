
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSpotFakeGold = () => {
    const element = document.getElementById('spot-fake-gold');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary inline-block mb-4">
              Search a person who pledges Fake gold in finance companies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Unmask Fake Gold Pledgers and <span className="text-primary">Protect</span> Your Assets
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Counterfeit gold is infiltrating financial systems. Learn how to spot it, report it, and keep your assets safe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="text-lg px-8 py-6"
                onClick={scrollToSpotFakeGold}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Report Fake Gold
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
