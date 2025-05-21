import React from 'react';
import { Users, Briefcase, Brain, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';

const services = [
  {
    icon: <Briefcase size={36} className="text-primary-500" />,
    title: 'Direct Hire',
    description:
      'Hire top-tier tech talent directly for your company. We handle sourcing, vetting, and onboarding, so you get the right fit for your team with no hassle.',
    benefits: [
      'Full-time dedicated professionals',
      'Streamlined hiring process',
      'Cultural and technical fit guaranteed',
    ],
  },
  {
    icon: <Users size={36} className="text-primary-500" />,
    title: 'Staff Augmentation',
    description:
      'Scale your team flexibly with our staff augmentation model. Access skilled developers, designers, and specialists as an extension of your in-house team.',
    benefits: [
      'Flexible scaling up or down',
      'Seamless integration with your processes',
      'Quick ramp-up and onboarding',
    ],
  },
];

const ServicesPage: React.FC = () => {
  return (
    <section className="section bg-white min-h-screen">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="mb-4">Our Core Talent & Engagement Models</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in AI, Machine Learning, and Data Engineering talent. Choose the best way to grow your team: Direct Hire for permanent roles, or Staff Augmentation for flexible scaling.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {services.map((service, idx) => (
            <ScrollReveal key={service.title} delay={0.2 * idx}>
              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-left mb-6 space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-dark-400">
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link to="/team-calculator" className="btn-primary w-full mt-auto">
                  Calculate your Team cost
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="overflow-x-auto mb-16">
            <h2 className="text-2xl font-semibold mb-6 text-center">Comparativo: Staff Augmentation vs Direct Hire</h2>
            <table className="min-w-full bg-white rounded-2xl shadow border border-gray-100">
              <thead>
                <tr className="bg-primary-100 text-primary-700">
                  <th className="py-4 px-4 text-left font-semibold text-lg rounded-tl-2xl">Aspect</th>
                  <th className="py-4 px-4 text-center font-semibold text-lg">Staff Augmentation</th>
                  <th className="py-4 px-4 text-center font-semibold text-lg rounded-tr-2xl">Direct Hire</th>
                </tr>
              </thead>
              <tbody className="text-dark-400">
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Time to Onboard</td>
                  <td className="py-3 px-4 text-center">Fast and agile — get qualified professionals on board within days</td>
                  <td className="py-3 px-4 text-center">Strategic process — ideal for building long-term team foundations</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Flexibility</td>
                  <td className="py-3 px-4 text-center">Easily scale your team up or down based on project demands</td>
                  <td className="py-3 px-4 text-center">Great for stable, long-term roles with consistent workload</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Short-Term Cost</td>
                  <td className="py-3 px-4 text-center">Predictable hourly or monthly rates — no long-term commitment</td>
                  <td className="py-3 px-4 text-center">No intermediary costs — direct relationship with the employee</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Long-Term Investment</td>
                  <td className="py-3 px-4 text-center">Cost-efficient for temporary or project-based needs</td>
                  <td className="py-3 px-4 text-center">Strong ROI when developing internal knowledge and capabilities</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Talent Access</td>
                  <td className="py-3 px-4 text-center">Immediate access to global, specialized talent</td>
                  <td className="py-3 px-4 text-center">Opportunity to nurture local and in-house expertise</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Administrative Load</td>
                  <td className="py-3 px-4 text-center">Light — we handle payroll, contracts, and compliance</td>
                  <td className="py-3 px-4 text-center">Full control over internal HR and legal processes</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Knowledge Retention</td>
                  <td className="py-3 px-4 text-center">Expertise is available when and where you need it</td>
                  <td className="py-3 px-4 text-center">Valuable for building institutional knowledge over time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Cultural Integration</td>
                  <td className="py-3 px-4 text-center">External talent that quickly adapts to your processes and tools</td>
                  <td className="py-3 px-4 text-center">Deep alignment with company culture and long-term vision</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Team Control</td>
                  <td className="py-3 px-4 text-center">Manage the work directly while we handle logistics</td>
                  <td className="py-3 px-4 text-center">Full responsibility and ownership of employee growth and performance</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-medium">Compliance & Legal</td>
                  <td className="py-3 px-4 text-center">We take care of employment, tax, and legal requirements globally</td>
                  <td className="py-3 px-4 text-center">Direct legal responsibility for employment and regulatory matters</td>
                </tr>
                <tr className="border-t">
                  <td className="py-3 px-4 font-medium">Best For</td>
                  <td className="py-3 px-4 text-center">Short-term projects, fast scaling, bridging skill gaps</td>
                  <td className="py-3 px-4 text-center">Strategic hires, leadership roles, long-term organizational growth</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-primary-50 border-l-4 border-primary-500 rounded-xl p-6 shadow text-dark-500 text-lg text-center">
              <strong>Many of our U.S. clients use a hybrid approach</strong> — combining staff augmentation for speed and flexibility, and direct hires for stability and leadership.
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesPage; 