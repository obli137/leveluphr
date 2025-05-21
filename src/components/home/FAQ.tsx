import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-dark-500">{question}</h3>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-primary-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does your team augmentation model work?',
      answer: 'We integrate our developers into your existing team, following your processes and tools. We can provide individual specialists or complete cross-functional teams, depending on your needs.'
    },
    {
      question: 'What technologies and talent do you specialize in?',
      answer: 'Our core focus is on AI, Machine Learning, and Data Engineering talent. We also provide top-tier software engineers, mobile developers, and cloud experts across a wide range of technologies including Python, JavaScript/TypeScript (React, Node.js), Java, Flutter, and more.'
    },
    {
      question: 'How do you ensure quality code and delivery?',
      answer: 'We implement rigorous code reviews, automated testing, CI/CD practices, and regular progress updates. Our developers follow industry best practices and coding standards to ensure high-quality deliverables.'
    },
    {
      question: 'What is your typical engagement timeline?',
      answer: 'Our engagements typically start at 3 months, with many clients choosing to work with us long-term. We offer flexible scaling options to adjust team size as your needs change.'
    },
    {
      question: 'How do you handle communication across different time zones?',
      answer: 'We ensure at least 4 hours of overlap with your working hours, regardless of location. We use asynchronous communication tools and provide regular updates to maintain effective collaboration.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about working with us? Here are some of the most common questions we receive.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;