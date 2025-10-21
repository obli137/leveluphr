import React from 'react';
import { Brain, Database, Code, Gauge, Palette, Zap } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';
import TechLogosCarousel from './TechLogosCarousel';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 flex-1">{description}</p>
    </div>
  );
};

const expertise = [
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
    icon: <Zap size={24} />,
    title: 'Fast MVP with NoCode',
    description: 'Launch your Minimum Viable Product in record time using NoCode tools. Validate your idea quickly and cost-effectively.'
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

const ourServices = [
  {
    title: 'Direct Hire',
    description: 'Hire top-tier tech talent directly for your company. We handle sourcing, vetting, and onboarding, so you get the right fit for your team with no hassle.'
  },
  {
    title: 'Staff Augmentation',
    description: 'Scale your team flexibly with our staff augmentation model. Access skilled developers, designers, and specialists as an extension of your in-house team.'
  },
  {
    title: 'Fast MVP',
    description: 'Quickly launch your Minimum Viable Product with our rapid development approach, leveraging NoCode and expert guidance.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <>
      <section className="section bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="mb-4">Specialized Talent Areas</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We connect you with exceptional AI, Machine Learning, and Data Engineering professionals for your staff augmentation and direct hire needs.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((service, index) => (
              <ScrollReveal key={service.title} delay={0.2 + index * 0.1}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-gray-50"><TechLogosCarousel /></div>
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Choose the engagement model that best fits your needs—from direct hiring to flexible team scaling or rapid MVP launch.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {ourServices.map((service, idx) => (
              <div key={service.title} className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-3 text-primary-600">{service.title}</h3>
                <p className="text-gray-600 flex-1">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="/team-calculator" className="btn-primary inline-block">
              Calculate your Costs
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;