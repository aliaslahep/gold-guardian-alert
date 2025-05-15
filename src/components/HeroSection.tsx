import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo_only from '@/assets/rulogo.png';
import bg_home from '@/assets/bg_home.png';

const HeroSection = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSpotFakeGold = () => {
    const element = document.getElementById('spot-fake-gold');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-36 pb-24 md:pt-44 md:pb-32 bg-gradient-to-b from-primary/5 to-white relative overflow-hidden"
      style={{ position: 'relative' }}
    >
      <img
          src={bg_home}
          alt="logo"
          className="absolute top-1/2 left-1/2 transform 
            -translate-x-[30%] -translate-y-[60%] 
            md:left-auto md:right-[0px] md:translate-x-[10px] 
            lg:translate-x-[90px] lg:translate-y-[-50%] 
            w-[500px] md:w-[700px] lg:w-[700px] 
            h-auto opacity-10 pointer-events-none select-none"
        />
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl"
          style={{ 
            transform: `translate(${offset * 0.2}px, ${offset * 0.1}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-20 right-20 w-64 h-64 bg-secondary/5 rounded-full filter blur-3xl"
          style={{ 
            transform: `translate(${-offset * 0.15}px, ${offset * 0.05}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-10 left-1/3 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"
          style={{ 
            transform: `translate(${offset * 0.1}px, ${-offset * 0.12}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
      </div>

      {/* Background logo image on the right side */}
      {/* <img
        src={logo_only}
        alt="logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[60%] lg:top-1/2 lg:left-auto lg:right-[100px] lg:translate-x-0 lg:translate-y-[-50%] h-[400px] md:h-[500px] lg:h-[500px] opacity-10 pointer-events-none select-none"
      /> */}
        






      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="lg:w-[65%] lg:mt-0 lg:pl-[130px] lg:-translate-y-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Search a person who pledges Fake gold in finance companies</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Unmask Fake Gold Pledgers and <span className="text-primary">Protect</span> Your Assets
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Counterfeit gold is infiltrating financial systems. Learn how to identify it, report suspicious pledgers, and safeguard your investments with our comprehensive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="text-lg px-8 py-6 group transition-all hover:translate-y-[-2px] shadow-lg hover:shadow-xl"
                onClick={scrollToSpotFakeGold}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6 hover:bg-secondary/5 transition-all"
                onClick={() => document.getElementById('report')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Report Fake Gold
              </Button>
            </div>
          </div>

          {/* Optional info card (currently commented) */}
          {/* <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full filter blur-md animate-pulse"></div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <Shield className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-center text-secondary mb-4">Trusted Protection</h3>
                <p className="text-gray-600 text-center">
                  Our community-driven platform helps identify and report fake gold pledgers to create a safer financial environment.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
