import React from 'react';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <CheckCircle className="text-primary-500" size={24} />,
      title: 'Quality First',
      description: 'We never compromise on quality, focusing on clean code and excellent user experiences.'
    },
    {
      icon: <Users className="text-primary-500" size={24} />,
      title: 'Team Collaboration',
      description: 'Our teams work together seamlessly to deliver integrated solutions that exceed expectations.'
    },
    {
      icon: <Award className="text-primary-500" size={24} />,
      title: 'Technical Excellence',
      description: 'We stay at the forefront of technology, constantly learning and applying best practices.'
    },
    {
      icon: <Clock className="text-primary-500" size={24} />,
      title: 'Timely Delivery',
      description: 'We respect deadlines and ensure projects are completed on time without sacrificing quality.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <h2 className="mb-6">Who We Are</h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 mb-6">
                levelUp is a premier software development company that helps businesses scale their technical capabilities through expert development teams and strategic technology partnerships.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-gray-600 mb-8">
                Founded in 2018, we've grown to a team of over 75 specialists working with clients across 12 countries, delivering exceptional software solutions that drive business growth.
              </p>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {[
                { value: '200+', label: 'Completed Projects' },
                { value: '95%', label: 'Client Satisfaction' },
                { value: '75+', label: 'Team Members' },
                { value: '12+', label: 'Countries' }
              ].map((stat, index) => (
                <ScrollReveal key={stat.label} delay={0.4 + index * 0.1}>
                  <div>
                    <p className="text-4xl font-bold text-primary-500">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <ScrollReveal direction="right">
              <h3 className="text-2xl font-semibold mb-6">Our Core Values</h3>
            </ScrollReveal>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <ScrollReveal key={value.title} direction="right" delay={0.2 + index * 0.1}>
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">{value.icon}</div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;