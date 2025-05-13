
import React from 'react';
import { Shield, Search, FileText, Users, Star, Link } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Verification",
      description: "Access reliable methods to verify gold authenticity and protect your investments from counterfeit materials."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Comprehensive Database",
      description: "Search our extensive database of reported fake gold pledgers to identify potential fraud before making transactions."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Detailed Reporting",
      description: "Submit detailed reports about suspicious gold items or pledgers to help build our community knowledge base."
    },
    {
      icon: <Link className="h-6 w-6" />,
      title: "Resource Network",
      description: "Connect with verified gold testing facilities and expert authenticators through our trusted partner network."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Tools to Protect Against Fake Gold
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our platform provides comprehensive resources and tools designed to help financial institutions and individuals identify and report fake gold pledgers effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <CardContent className="p-8">
                <div className="flex items-start mb-6">
                  <div className="bg-primary/10 rounded-xl p-4 mr-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3 text-secondary">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
