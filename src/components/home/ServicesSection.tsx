import React from 'react';
import { Brain, Database, Code, Smartphone, Gauge, Palette } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Brain size={24} />,
      title: 'AI & Machine Learning',
      description: 'Build intelligent solutions with our expert AI and Machine Learning engineers. From predictive analytics to generative AI, we deliver cutting-edge talent for your most ambitious projects.'
    },
    {
      icon: <Database size={24} />,
      title: 'Data Engineering',
      description: 'Design, build, and optimize your data infrastructure with our top-tier data engineers. We specialize in pipelines, analytics, and scalable data platforms.'
    },
    {
      icon: <Code size={24} />,
      title: 'Software Engineering',
      description: 'Modern, responsive web and mobile applications built with the latest technologies and frameworks.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
    },
    {
      icon: <Gauge size={24} />,
      title: 'DevOps & Architecture',
      description: 'CI/CD pipelines, infrastructure as code, and scalable system architecture design.'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'User-centered design with intuitive interfaces and seamless user experiences.'
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide end-to-end technology solutions with a focus on AI, Machine Learning, and Data Engineering expertise.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={0.2 + index * 0.1}>
              <ServiceCard {...service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;