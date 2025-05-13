
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary inline-block mb-4">
              Introducing CodeFlow v2.0
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
              Build better software, <span className="text-primary">faster</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              CodeFlow streamlines your development workflow with AI-powered tools that help you write clean code, debug faster, and ship with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="text-lg px-8 py-6"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-6"
              >
                View Demo
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
                  <span className="opacity-70">codeflow.ts</span>
                </div>
                <pre className="text-white/90">
<span className="text-blue-300">import</span> {'{'} CodeFlow {'}'} <span className="text-blue-300">from</span> <span className="text-green-300">'@codeflow/core'</span>;

<span className="text-purple-300">const</span> <span className="text-yellow-300">app</span> = <span className="text-yellow-300">new</span> <span className="text-blue-300">CodeFlow</span>({'{'}
  <span className="text-green-300">optimize:</span> <span className="text-yellow-300">true</span>,
  <span className="text-green-300">aiAssist:</span> <span className="text-yellow-300">true</span>
{'}'});

<span className="text-purple-300">async function</span> <span className="text-blue-300">deployApp</span>() {'{'}
  <span className="text-purple-300">await</span> app.<span className="text-blue-300">analyze</span>();
  <span className="text-purple-300">await</span> app.<span className="text-blue-300">optimize</span>();
  <span className="text-purple-300">await</span> app.<span className="text-blue-300">deploy</span>();
{'}'}

deployApp().<span className="text-blue-300">then</span>(() => {'{'}
  console.<span className="text-blue-300">log</span>(<span className="text-green-300">'App deployed!'</span>);
{'}'});
                </pre>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div>
                  <div className="text-xs text-gray-500">Analyzing dependencies...</div>
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
