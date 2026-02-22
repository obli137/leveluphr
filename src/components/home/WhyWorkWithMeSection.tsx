import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';
import { Award, Target, Users, FileCheck } from 'lucide-react';

const blocks = [
  {
    icon: <Award size={24} className="text-primary-500" />,
    title: 'LinkedIn Top Voice',
    description: 'Reconocimiento en Recruiting, IA aplicada y Employer Branding en Latinoamérica. Más de 15 años en tecnología y negocios.',
  },
  {
    icon: <Target size={24} className="text-primary-500" />,
    title: 'Enfoque en sistema, no en búsquedas',
    description: 'Trabajo sobre procesos, métricas y modelo operativo para que puedas contratar bien de forma sostenida.',
  },
  {
    icon: <Users size={24} className="text-primary-500" />,
    title: 'Experiencia construyendo equipos',
    description: 'Lideré equipos y proyectos en empresas de alto crecimiento. Conozco el recruiting desde adentro.',
  },
  {
    icon: <FileCheck size={24} className="text-primary-500" />,
    title: 'Consultoría boutique',
    description: 'Atención directa, sin capas. Trabajamos juntos en el diagnóstico, diseño e implementación.',
  },
];

const WhyWorkWithMeSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="mb-4 text-dark-500">Por qué trabajar con nosotros</h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              Autoridad, experiencia y un enfoque centrado en resultados de negocio.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch md:grid-rows-[1fr_1fr]">
          {blocks.map((block, i) => (
            <ScrollReveal key={block.title} delay={i * 0.1}>
              <div className="flex gap-4 bg-white rounded-xl border border-gray-100 p-6 h-full min-h-[140px]">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  {block.icon}
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <h3 className="font-semibold text-dark-500 mb-2">{block.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed flex-1">{block.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-10">
            <Link to="/about" className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
              Conocer más sobre mi trayectoria →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;
