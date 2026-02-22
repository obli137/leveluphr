import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { Search, PenTool, Settings, BarChart3, RefreshCw } from 'lucide-react';

const steps = [
  { icon: Search, label: 'Diagnóstico' },
  { icon: PenTool, label: 'Diseño' },
  { icon: Settings, label: 'Implementación' },
  { icon: BarChart3, label: 'Medición' },
  { icon: RefreshCw, label: 'Mejora continua' },
];

const OurMethodSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="mb-4 text-dark-500">Nuestro método</h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              Un enfoque ordenado para transformar tu proceso de recruiting en un sistema escalable.
            </p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 max-w-4xl mx-auto">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <React.Fragment key={step.label}>
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 mb-2">
                      <Icon size={26} />
                    </div>
                    <span className="text-sm font-medium text-dark-500">{step.label}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="hidden md:inline text-gray-300 text-2xl font-light">→</span>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default OurMethodSection;
