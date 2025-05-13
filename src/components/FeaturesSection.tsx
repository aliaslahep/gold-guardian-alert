
import React from 'react';
import { Code, Zap, Shield, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Code />,
      title: "Intelligent Autocomplete",
      description: "Write code faster with AI-powered suggestions that understand your project context and coding patterns."
    },
    {
      icon: <Zap />,
      title: "Instant Debugging",
      description: "Identify and fix bugs in seconds with automated error detection and solution recommendations."
    },
    {
      icon: <Shield />,
      title: "Code Security Analysis",
      description: "Protect your applications with real-time vulnerability scanning and security best practices."
    },
    {
      icon: <Sparkles />,
      title: "Automated Refactoring",
      description: "Clean up your codebase with one-click refactoring that improves readability and performance."
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Powerful Features for Modern Development
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            CodeFlow integrates seamlessly into your workflow with tools designed to boost productivity and code quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-xl mb-3 text-secondary">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
