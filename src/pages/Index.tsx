
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Gold Pledger Info Section */}
      <section id="pledger-info" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
              What is a Fake Gold Pledger?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Have you ever wondered about the darker side of finance? While most people engage in honest transactions, some individuals seek to exploit systems for personal gain. One alarming trend is the rise of fake gold pledgers. These individuals present counterfeit gold as collateral to obtain loans or credit from financial institutions, undermining the integrity of the system and putting both borrowers and lenders at risk.
              </p>
              <p className="text-gray-700 mb-4">
                Fake gold can be difficult to spot, and these pledgers use sophisticated methods to create replicas that closely resemble genuine gold. They might even forge documents to support their claims, making it even harder for lenders to identify fraud right away. As more individuals seek quick financial solutions, the risk of encountering fake gold pledgers has increased, making it critical for both lenders and borrowers to stay vigilant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Spot Fake Gold Section */}
      <section id="spot-fake-gold" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
              How to Identify Fake Gold and Protect Your Finances
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Searching for fake gold can be challenging. The market is flooded with objects that appear genuine but hold little or no value. Here's what you can do to protect yourself:
              </p>
              <h3 className="text-xl font-semibold text-secondary mt-6 mb-4">Use the Right Tools:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Acid Tests:</strong> A reliable method for testing gold purity.
                </li>
                <li>
                  <strong>Electronic Testers:</strong> High-tech devices to test gold quickly and accurately.
                </li>
                <li>
                  <strong>Document Verification:</strong> Always double-check the accompanying documents to ensure they match the gold you're dealing with.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Inspect the Physical Properties: Gold has unique weight and density characteristics that counterfeiters can't easily replicate.
              </p>
              <p className="text-gray-700 mb-4">
                Leverage Technology: Platforms and apps exist to cross-check pledged gold against known databases and reports of fraudulent activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Report Fake Gold Section */}
      <section id="report" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
              Help Us Fight Fraud: Report Fake Gold Pledgers
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                When you encounter suspicious gold pledging activities, it's vital to report them. Here's how you can contribute to fighting fraud:
              </p>
              <h3 className="text-xl font-semibold text-secondary mt-6 mb-4">Ways to Report:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Upload Reports:</strong> Share details of any encounters with suspected fake gold pledgers.
                </li>
                <li>
                  <strong>Community Reporting:</strong> Contribute to a shared database that helps others avoid falling victim to fraudulent activities.
                </li>
              </ul>
              <p className="text-gray-700 mb-6">
                This platform helps build a community of awareness and action, creating a safer financial environment for everyone.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-semibold mb-4 text-secondary">Report Form Coming Soon</h4>
                <p className="text-gray-600">
                  Our comprehensive reporting form will be available shortly, allowing you to easily submit details about suspicious gold and potential fraud cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
              Tools and Resources to Spot Fake Gold
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                To stay one step ahead, it's crucial to have access to reliable resources. Here's a list of tools, articles, and guides that will help you:
              </p>
              <h3 className="text-xl font-semibold text-secondary mt-6 mb-4">Available Resources:</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <strong>Gold Testing Guides:</strong> Tutorials on using acid tests, electronic testers, and other methods to verify gold's authenticity.
                </li>
                <li>
                  <strong>Database Access:</strong> Trusted databases for checking the authenticity of gold.
                </li>
                <li>
                  <strong>Educational Articles:</strong> Learn more about counterfeiting techniques and how to protect yourself.
                </li>
                <li>
                  <strong>Community Discussions:</strong> Join forums to share insights and gain advice from other users.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                By staying informed and using the tools provided, you can ensure your transactions are safe and secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
