
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="pt-16 pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <span className="text-xl font-bold">CodeFlow</span>
              </div>
              <p className="text-gray-300 mb-6">
                The AI-powered development environment that helps teams write better code faster.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a href="mailto:info@codeflow.dev" className="text-gray-300 hover:text-white transition-colors">
                    info@codeflow.dev
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <a href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">
                    +1-555-123-4567
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Integrations</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Changelog</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Customers</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Partners</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Tutorials</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">API Docs</a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">Status</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CodeFlow. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
