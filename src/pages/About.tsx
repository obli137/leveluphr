import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe, Clock, Shield, Briefcase, Building2, Rocket } from 'lucide-react';
import ContactForm from '../components/common/ContactForm';

const About: React.FC = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Flexible Tech Talent Solutions
            </h1>
            <p className="text-xl text-gray-600">
              From permanent hires and staff augmentation to rapid MVP development with no-code solutions, we provide comprehensive tech services across Latin America and the United States.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="prose prose-lg">
                <p className="mb-6">
                  Founded in 2023 by Mariano Obligado, Level Up emerged from a vision to bridge the talent gap in the tech industry. With over 15 years of experience in technology and business development, Mariano recognized the growing demand for skilled tech professionals and the untapped potential of Latin American talent.
                </p>
                <p className="mb-6">
                  Mariano's journey in tech began at Mercado Libre, where he played a pivotal role in scaling the company's operations across Latin America. His experience in building and leading high-performing teams gave him unique insights into what makes successful tech organizations tick. After his tenure at Mercado Libre, he went on to found and lead several successful tech ventures, including a prominent software development company that served clients across the Americas.
                </p>
                <p className="mb-6">
                  This rich background in both technology and business development inspired Mariano to create Level Up. His vision was clear: to build a recruitment agency that not only matches talent with opportunities but also understands the unique challenges and opportunities in the tech industry, offering both permanent and flexible staffing solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-8 h-8 text-primary-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Direct Hire</h3>
                  </div>
                  <p className="text-gray-600">
                    We help you build your permanent team by finding the perfect long-term tech talent that aligns with your company's culture and goals.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Building2 className="w-8 h-8 text-primary-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Staff Augmentation</h3>
                  </div>
                  <p className="text-gray-600">
                    Scale your team quickly with our flexible staffing solutions, perfect for project-based work or temporary resource needs.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Rocket className="w-8 h-8 text-primary-500 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">Fast MVP with No Code</h3>
                  </div>
                  <p className="text-gray-600">
                    Launch your product quickly using no-code solutions, perfect for validating ideas and getting to market faster.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Level Up</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-6">
                  <Award className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Vetting</h3>
                  <p className="text-gray-600">
                    Rigorous screening process ensures only top-tier talent reaches your team.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6">
                  <Globe className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Network</h3>
                  <p className="text-gray-600">
                    Access to talent pools across Latin America and the United States.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6">
                  <Clock className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Turnaround</h3>
                  <p className="text-gray-600">
                    Fast deployment for both permanent hires and temporary staffing needs.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6">
                  <Shield className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
                  <p className="text-gray-600">
                    We stand behind our placements with a satisfaction guarantee for all services.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6">
                  <Users className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Solutions</h3>
                  <p className="text-gray-600">
                    Customized staffing solutions to match your specific needs and timeline.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center p-6">
                  <Target className="w-12 h-12 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Specialized Focus</h3>
                  <p className="text-gray-600">
                    Deep expertise in tech recruitment across multiple engagement models.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Scale Your Team?</h2>
              <p className="text-xl text-primary-100 mb-8">
                Whether you need permanent hires or temporary staff augmentation, let's discuss how we can help you build your ideal tech team.
              </p>
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Schedule a Call
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </div>
  );
};

export default About; 