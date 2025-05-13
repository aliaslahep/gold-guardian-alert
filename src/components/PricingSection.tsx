
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const PricingSection = () => {
  const [annual, setAnnual] = useState(true);
  
  const plans = [
    {
      name: "Starter",
      monthlyPrice: 19,
      annualPrice: 15,
      description: "Perfect for individuals and small projects.",
      features: [
        "Up to 3 projects",
        "Basic code completion",
        "Standard debugging tools",
        "Community support"
      ],
      highlighted: false,
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      monthlyPrice: 49,
      annualPrice: 39,
      description: "Ideal for professional developers and small teams.",
      features: [
        "Unlimited projects",
        "Advanced AI code completion",
        "Priority debugging",
        "Code optimization tools",
        "Email support"
      ],
      highlighted: true,
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      monthlyPrice: 99,
      annualPrice: 79,
      description: "For teams requiring advanced features and support.",
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Security analysis",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees"
      ],
      highlighted: false,
      buttonVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Simple, Transparent Pricing
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 mb-8">
            Choose the plan that's right for you. All plans include a 14-day free trial.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!annual ? 'font-medium text-secondary' : 'text-gray-500'}`}>Monthly</span>
            <Switch 
              checked={annual} 
              onCheckedChange={setAnnual} 
              className="data-[state=checked]:bg-primary"
            />
            <span className={`ml-3 ${annual ? 'font-medium text-secondary' : 'text-gray-500'}`}>
              Annual 
              <span className="ml-1.5 text-xs px-2 py-0.5 bg-green-100 text-green-700 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${
                plan.highlighted 
                  ? 'border-primary shadow-lg shadow-primary/10' 
                  : 'border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 w-full bg-primary text-white text-xs font-medium py-1 text-center">
                  Most Popular
                </div>
              )}
              <CardContent className={`p-6 ${plan.highlighted ? 'pt-10' : 'pt-6'}`}>
                <h3 className="text-xl font-bold text-secondary mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-secondary">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500">/mo</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="bg-primary/10 p-1 rounded-full mt-1 mr-3">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.buttonVariant} 
                  className={`w-full ${plan.highlighted ? 'bg-primary text-white hover:bg-primary/90' : ''}`}
                >
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
