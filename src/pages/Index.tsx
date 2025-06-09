
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import ninja_img from '@/assets/ninja_img.png';
import ninja2_img from '@/assets/ninja2_img.png';
import ninja3_img from '@/assets/ninja3_img.png';
import ninja4_img from '@/assets/ninja4_img.png';
import ninja5_img from '@/assets/ninja5_img.png';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      
      {/* Gold Pledger Info Section  */}
      <section id="pledger-info" className="relative py-16 md:py-24 bg-white">
      <img
        src={ninja_img}
        alt="logo"
        className="absolute top-1/2 lg:top-1/2 left-[10px] lg:left-[50px] 
          transform -translate-y-1/2  
          w-[400px] md:w-[400px] lg:w-[700px] 
          h-auto opacity-10 pointer-events-none select-none"
      />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6 text-center">
              What is a Fake Gold Pledger?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-4">
                Have you ever wondered about the darker side of finance? While most people engage in honest transactions, some individuals seek to exploit systems for personal gain. One alarming trend is the rise of fake gold pledgers. These are individuals who pledge counterfeit gold as collateral in financial institutions, putting both lenders and genuine borrowers at risk.
              </p>
              <p className="text-gray-700 mb-4 italic">
                "A fake gold pledger is someone who presents counterfeit gold as security to access loans or credit. This act can severely undermine the integrity of financial institutions. These individuals often use sophisticated methods to create replicas that closely resemble genuine gold. They may even employ falsified documents to support their claims, making it difficult for lenders to spot deception at first glance. As more people seek quick cash solutions, the risk of encountering fake gold pledgers has increased significantly. It is crucial for both borrowers and lenders alike to stay vigilant. Being aware of how these scammers operate helps in identifying red flags. Simple steps like verifying credentials or conducting thorough assessments can go a long way in safeguarding your assets from deceitful practices."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Spot Fake Gold Section */}
      <section id="spot-fake-gold" className="relative py-16 md:py-24 bg-gray-50">
        <img
          src={ninja5_img}
          alt="logo"
          className="absolute top-1/2 lg:top-1/2 left-0 md:left-[45%] lg:left-[45%]
            transform -translate-y-1/2  
            w-[400px] md:w-[400px] lg:w-[700px] 
            h-auto opacity-15 pointer-events-none select-none"
        />
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
      <section id="report" className="relative py-16 md:py-24 bg-white">
      <img
          src={ninja2_img}
          alt="logo"
          className="absolute top-1/2 lg:top-1/2 left-[-30px] md:left-[20%] lg:left-[20%]
            transform -translate-y-1/2  
            w-[400px] md:w-[400px] lg:w-[700px] 
            h-auto opacity-15 pointer-events-none select-none"
        />
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
      <section id="resources" className="relative py-16 md:py-24 bg-gray-50">
        <img
          src={ninja4_img}
          alt="logo"
          className="absolute top-1/2 lg:top-1/2 left-0 md:left-[20%] lg:left-[30%]
            transform -translate-y-1/2  
            w-[400px] md:w-[400px] lg:w-[500px] 
            h-auto opacity-10 pointer-events-none select-none"
        />
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
