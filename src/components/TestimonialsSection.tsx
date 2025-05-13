
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "CodeFlow has transformed how our team writes code. The AI suggestions are incredibly accurate, and we've seen a dramatic decrease in bugs.",
      name: "Sarah Chen",
      role: "CTO, TechWave",
      company: "TechWave",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      quote: "As a solo developer, CodeFlow feels like having a senior engineer looking over my shoulder. It's helped me level up my coding skills tremendously.",
      name: "Michael Rodriguez",
      role: "Freelance Developer",
      company: "Self-employed",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg"
    },
    {
      quote: "The time savings are real. What used to take us weeks now takes days, and the quality of our codebase has improved significantly.",
      name: "Emma Thompson",
      role: "Lead Developer",
      company: "InnovateSoft",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "The security analysis feature alone has saved us from several potential vulnerabilities. CodeFlow pays for itself.",
      name: "Jason Park",
      role: "Security Engineer",
      company: "SecureNet",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Loved by Developers
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            See what our customers have to say about how CodeFlow has improved their development process.
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 p-4">
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <blockquote className="text-gray-600 italic mb-6 flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-secondary">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary mb-2">1,000+</span>
              <span className="text-sm text-gray-500 text-center">Companies using CodeFlow</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary mb-2">98%</span>
              <span className="text-sm text-gray-500 text-center">Satisfaction rate</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary mb-2">35%</span>
              <span className="text-sm text-gray-500 text-center">Average time saved</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold text-primary mb-2">24/7</span>
              <span className="text-sm text-gray-500 text-center">Customer support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
