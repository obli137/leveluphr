import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';
import { Search, Layers, TrendingUp } from 'lucide-react';

const cards = [
  {
    icon: <Search size={28} className="text-primary-500" />,
    title: 'Diagnóstico & Arquitectura',
    description: 'Relevamos el estado actual de tu proceso, identificamos cuellos de botella y definimos un roadmap claro para escalar tu recruiting.',
    cta: 'Ver diagnóstico',
  },
  {
    icon: <Layers size={28} className="text-primary-500" />,
    title: 'Implementación & Tecnología',
    description: 'Diseño de procesos, selección e implementación de ATS, automatizaciones y adopción por parte del equipo.',
    cta: 'Ver implementación',
  },
  {
    icon: <TrendingUp size={28} className="text-primary-500" />,
    title: 'Performance & Advisory',
    description: 'Métricas, dashboards y acompañamiento continuo para mantener y mejorar el modelo operativo de recruiting.',
    cta: 'Ver advisory',
  },
];

const HowWeHelpSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="mb-4 text-dark-500">Cómo podemos ayudarte</h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              Tres ejes de trabajo para profesionalizar y escalar tu proceso de selección.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-500 mb-3">{card.title}</h3>
                <p className="text-dark-400 flex-1 mb-6">{card.description}</p>
                <Link to="/services" className="text-primary-500 font-medium hover:text-primary-600 transition-colors text-sm">
                  {card.cta} →
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeHelpSection;
