import React from 'react';
import TeamCalculator from '../components/calculator/TeamCalculator';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';

const TeamCalculatorPage: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <Link to="/" className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Link>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <TeamCalculator />
        </ScrollReveal>
      </div>
    </div>
  );
};

export default TeamCalculatorPage;