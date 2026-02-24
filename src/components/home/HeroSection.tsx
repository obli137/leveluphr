import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../common/ScrollReveal';

const consultingBlocks = [
  {
    title: 'Diagnóstico',
    description: 'Estado de tu sistema actual',
    color: 'bg-primary-100',
  },
  {
    title: 'Implementación',
    description: 'ATS y diseño de procesos',
    color: 'bg-secondary-100',
  },
  {
    title: 'Performance',
    description: 'Métricas y dashboards',
    color: 'bg-blue-100',
  },
  {
    title: 'Advisory',
    description: 'Seguimiento y mejora continua',
    color: 'bg-green-100',
  },
];

const areasDeTrabajo = [
  'Diseño de procesos',
  'Recruiting Ops',
  'Implementación de ATS',
  'Métricas & dashboards',
  'IA aplicada al recruiting',
  'Training para Hiring Managers',
  'Employer Branding práctico',
  'Workforce Planning',
];

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-white -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary-200 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-200 rounded-full opacity-10 blur-3xl -z-10"></div>

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <ScrollReveal>
              <h1 className="mb-6">
                <span className="text-dark-500 block">Arquitectura de Recruiting</span>
                <span className="text-primary-500">para empresas en crecimiento</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-dark-400 mb-4 max-w-xl font-medium">
                Menos costos por vacante. Más velocidad. Mejor calidad.
              </p>
              <p className="text-base md:text-lg text-dark-400 mb-8 max-w-xl">
                Ayudamos a founders y líderes de reclutamiento a pasar de un modelo reactivo a un sistema operativo escalable: diagnóstico, implementación de ATS, dashboards de performance e IA aplicada. Enfocados en LatAm.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Agendar videollamada
                </Link>
                <Link to="/handbook" className="btn-outline" aria-label="Descargar Recruiting Handbook">
                  Descargar Recruiting Handbook
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full lg:w-1/2">
            <ScrollReveal direction="right" delay={0.3}>
              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-xl p-6 md:p-8 z-10">
                  <div className="grid grid-cols-2 gap-4">
                    {consultingBlocks.map((block, i) => (
                      <ScrollReveal key={block.title} delay={0.4 + i * 0.1}>
                        <div className={`${block.color} p-4 rounded-lg min-h-[88px] flex flex-col justify-center`}>
                          <p className="text-sm font-medium text-dark-500">{block.title}</p>
                          <p className="text-sm text-dark-400 mt-0.5">{block.description}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  <ScrollReveal delay={0.8}>
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h3 className="text-lg font-medium text-dark-500 mb-3">Áreas de trabajo</h3>
                      <div className="flex flex-wrap gap-2">
                        {areasDeTrabajo.map((area, i) => (
                          <ScrollReveal key={area} delay={0.9 + i * 0.05}>
                            <span className="px-3 py-1 bg-gray-100 text-dark-400 rounded-full text-sm">
                              {area}
                            </span>
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
