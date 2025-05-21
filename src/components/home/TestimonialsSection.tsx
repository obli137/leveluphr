import React from 'react';
import { Quote } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "levelUp's team has been instrumental in helping us scale our AI infrastructure. Their expertise in machine learning and data engineering has transformed our business operations.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp",
      company: "TechCorp"
    },
    {
      quote: "Working with levelUp has been a game-changer for our data analytics capabilities. Their team's deep knowledge and commitment to quality have exceeded our expectations.",
      author: "Michael Chen",
      role: "Data Director",
      company: "DataFlow Inc"
    },
    {
      quote: "The levelUp team's expertise in AI and machine learning has helped us stay ahead of the competition. Their solutions are innovative, scalable, and delivered on time.",
      author: "Emily Rodriguez",
      role: "VP of Innovation",
      company: "FutureTech"
    }
  ];

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <h2 className="text-center mb-12">What Our Clients Say</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={0.2 * index}>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <Quote className="text-primary-500 mb-4" size={24} />
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 