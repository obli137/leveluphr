import React from 'react';
import ScrollReveal from './ScrollReveal';
import { Check } from 'lucide-react';

type RecognitionTrajectorySectionProps = {
  className?: string;
  title?: string;
};

const DEFAULT_ITEMS = [
  'LinkedIn Top Voice Latinoamérica',
  '+52.000 seguidores',
  'Referente en Recruiting, IA aplicada y Employer Branding',
  'Más de 15 años de experiencia en tecnología y negocios',
  'Experiencia construyendo y liderando equipos',
];

const RecognitionTrajectorySection: React.FC<RecognitionTrajectorySectionProps> = ({
  className = '',
  title = 'Reconocimiento y trayectoria',
}) => {
  return (
    <section className={`section bg-gray-50 ${className}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <ScrollReveal>
              <h2 className="mb-10 text-dark-500">{title}</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <ul className="space-y-4 max-w-2xl">
                {DEFAULT_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start text-dark-400">
                    <Check size={20} className="mr-3 mt-0.5 text-primary-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/topvoice.png"
                alt="Reconocimiento de LinkedIn Top Voice"
                className="rounded-2xl max-w-md w-full h-auto object-cover shadow-md"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default RecognitionTrajectorySection;

