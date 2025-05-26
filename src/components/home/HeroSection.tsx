import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-200 rounded-full opacity-10 blur-3xl -z-10"></div>
      
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <ScrollReveal>
              <h1 className="mb-6">
                <span className="text-dark-500 block">AI, Machine Learning, & Data Engineering</span>
                <span className="text-primary-500">talent for your team</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-dark-400 mb-8 max-w-xl">
                We specialize in sourcing and hiring top AI, Machine Learning, and Data Engineering professionals—plus world-class software engineers, designers, and more—to help you build the future.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Schedule a Call
                </Link>
                <Link to="/team-calculator" className="btn-outline flex items-center">
                  Team Calculator <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="w-full lg:w-1/2">
            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 z-10">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: 'Web Dev', value: '25+', color: 'bg-primary-100' },
                      { title: 'Mobile Apps', value: '40+', color: 'bg-secondary-100' },
                      { title: 'Team Members', value: '75+', color: 'bg-blue-100' },
                      { title: 'Countries', value: '12+', color: 'bg-green-100' }
                    ].map((stat, i) => (
                      <ScrollReveal key={i} delay={0.4 + i * 0.1}>
                        <div className={`${stat.color} p-4 rounded-lg`}>
                          <p className="text-sm text-dark-400">{stat.title}</p>
                          <p className="text-2xl font-bold text-dark-500">{stat.value}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                  
                  <ScrollReveal delay={0.8}>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h3 className="text-lg font-medium text-dark-500 mb-3">Tech expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Node.js', 'Python', 'Computer Vision', 'NLP', 'LLM', 'TypeScript'].map((tech, i) => (
                          <ScrollReveal key={i} delay={0.9 + i * 0.1}>
                            <span className="px-3 py-1 bg-gray-100 text-dark-400 rounded-full text-sm">
                              {tech}
                            </span>
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;