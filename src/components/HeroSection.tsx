
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
              Protect Your Financial Security
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
          
          <div className="lg:w-1/2 relative">
            <div className="relative bg-gradient-to-br from-white to-gray-100 rounded-xl shadow-xl p-6 border border-gray-200">
              <div className="bg-secondary rounded-lg p-2 text-xs font-mono text-white mb-2">
                <div className="flex items-center mb-2">
                  <div className="flex space-x-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="opacity-70">goldguard.ts</span>
                </div>
                <pre className="text-white/90">
<span className="text-blue-300">import</span> {'{'} GoldVerifier {'}'} <span className="text-blue-300">from</span> <span className="text-green-300">'@goldguard/core'</span>;

<span className="text-purple-300">const</span> <span className="text-yellow-300">detector</span> = <span className="text-yellow-300">new</span> <span className="text-blue-300">GoldVerifier</span>({'{'}
  <span className="text-green-300">scanType:</span> <span className="text-yellow-300">"advanced"</span>,
  <span className="text-green-300">reportEnabled:</span> <span className="text-yellow-300">true</span>
{'}'});

<span className="text-purple-300">async function</span> <span className="text-blue-300">verifyGold</span>() {'{'}
  <span className="text-purple-300">await</span> detector.<span className="text-blue-300">scan</span>();
  <span className="text-purple-300">await</span> detector.<span className="text-blue-300">analyze</span>();
  <span className="text-purple-300">await</span> detector.<span className="text-blue-300">report</span>();
{'}'}

verifyGold().<span className="text-blue-300">then</span>(() {'=>'} {'{'}
  console.<span className="text-blue-300">log</span>(<span className="text-green-300">'Gold verified!'</span>);
{'}'});
                </pre>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <div className="text-xs text-gray-500">Analyzing gold sample...</div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <Button size="sm" variant="outline">Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
