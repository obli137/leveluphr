import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';
import { Check } from 'lucide-react';

const services = [
  {
    title: 'Diagnóstico de Recruiting',
    highlights: ['Relevamiento y mapa de proceso', 'Auditoría de pipeline y métricas', 'Roadmap 30/60/90'],
  },
  {
    title: 'Implementación ATS + Proceso',
    highlights: ['Configuración completa', 'Automatizaciones y reportes', 'Entrenamiento y adopción'],
  },
  {
    title: 'Recruiting Performance System',
    highlights: ['Definición de métricas', 'Diseño de tablero', 'Cadencia de seguimiento'],
  },
  {
    title: 'Advisory mensual',
    highlights: ['Sesiones estratégicas', 'Revisión de pipeline', 'Optimización continua'],
  },
];

const HomeServicesSection: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="mb-4 text-dark-500">Nuestros servicios</h2>
            <p className="text-lg text-dark-400 max-w-2xl mx-auto">
              Servicios paquetizados para empresas que buscan profesionalizar su proceso de recruiting.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">{service.title}</h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.highlights.map((item, j) => (
                    <li key={j} className="flex items-start text-dark-400 text-sm">
                      <Check size={18} className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="btn-outline text-center text-sm py-2.5">
                  Ver detalle
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link to="/services" className="text-primary-500 font-medium hover:text-primary-600 transition-colors">
              Ver todos los servicios →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomeServicesSection;
