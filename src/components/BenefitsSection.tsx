
import React from 'react';
import { Check, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary inline-block mb-4">
              Why Choose CodeFlow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Boost developer productivity by up to 40%
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Our customers report significant improvements in development speed, code quality, and team collaboration after implementing CodeFlow.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mt-1 mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-secondary">Write Better Code</span>
                  <p className="text-sm text-gray-600">Quality suggestions and best practice enforcement improve overall code health.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mt-1 mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-secondary">Ship Faster</span>
                  <p className="text-sm text-gray-600">Reduce development time with automated workflows and intelligent assistance.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-primary/10 p-1 rounded-full mt-1 mr-3">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-secondary">Seamless Integration</span>
                  <p className="text-sm text-gray-600">Works with your existing tools and IDE of choice with minimal setup.</p>
                </div>
              </li>
            </ul>
            
            <Button>
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-secondary">Development Time Savings</h3>
                <Clock className="h-6 w-6 text-primary" />
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-secondary">Without CodeFlow</span>
                    <span className="text-gray-500">120 hours</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-gray-400 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-secondary">With CodeFlow</span>
                    <span className="text-primary">72 hours</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                  <div className="flex items-start">
                    <div className="bg-white rounded-full p-1 border border-primary mt-1 mr-3">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <span className="font-semibold text-secondary">40% Time Saved</span>
                      <p className="text-sm text-gray-600">Average time savings reported by our enterprise customers after 3 months of use.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
