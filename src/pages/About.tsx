import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import ProfileImagePlaceholder from '../components/common/ProfileImagePlaceholder';
import { Check } from 'lucide-react';
import RecognitionTrajectorySection from '../components/common/RecognitionTrajectorySection';

/** Logo oficial de LinkedIn (estilo de marca: azul #0A66C2) */
const LinkedInLogo: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden
  >
    <path
      fill="currentColor"
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
    />
  </svg>
);

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1) Hero – Personal brand focus */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-display font-semibold text-dark-500">
                  Mariano Obligado
                </h1>
                <a
                  href="https://www.linkedin.com/in/marianoobligado/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 text-[#0A66C2] hover:text-[#004182] transition-colors"
                  aria-label="LinkedIn de Mariano Obligado"
                >
                  <LinkedInLogo size={32} />
                </a>
              </div>
              <p className="text-xl md:text-2xl text-primary-500 font-medium mb-4">
                Consultor estratégico en Recruiting, IA y Employer Branding.
              </p>
              <p className="text-base md:text-lg text-dark-400 mb-8 max-w-xl">
                Fundador de LevelUp y referente en innovación en Talent Acquisition en Latinoamérica.
              </p>
              <a href="https://wa.me/5491136023471" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Aplicar a una conversación estratégica
              </a>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <ProfileImagePlaceholder
                  src="/perfil2.png"
                  shape="rounded"
                  className="w-full max-w-md"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2) Historia – Evolución */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="mb-8 text-dark-500">De agencia innovadora a consultoría estratégica</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="text-base md:text-lg text-dark-400 space-y-6 leading-relaxed">
                <p>
                  Hace más de 5 años fundé LevelUp con el objetivo de modernizar los procesos de reclutamiento, priorizando la experiencia del candidato.
                </p>
                <p>
                  Fuimos la primera agencia en el mundo en implementar screenings online asincrónicos.
                </p>
                <p>
                  Apostamos tempranamente por la automatización, herramientas emergentes y uso estratégico de datos.
                </p>
                <p>
                  Con el tiempo, entendí que el verdadero problema no era solo atraer talento, sino diseñar un modelo operativo que permita contratar bien de forma sostenida.
                </p>
                <p>
                  Esa evolución llevó de forma natural a la consultoría estratégica en procesos, métricas, ATS e IA aplicada: pensar en sistema y visión de negocio, no solo en búsquedas puntuales.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3) Autoridad y reconocimiento */}
      <RecognitionTrajectorySection />

      {/* 4) Enfoque de trabajo */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-10 text-dark-500">Mi enfoque</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-4 max-w-2xl">
              {[
                'Proceso antes que herramienta',
                'Métricas antes que intuición',
                'IA aplicada con criterio',
                'Recruiting alineado al negocio',
                'Hiring managers como parte del sistema',
              ].map((item, i) => (
                <li key={i} className="flex items-start text-dark-400">
                  <Check size={20} className="mr-3 mt-0.5 text-primary-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* 5) Filosofía */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <blockquote className="max-w-2xl border-l-4 border-primary-500 pl-6 md:pl-8 py-2">
              <p className="text-lg md:text-xl text-dark-500 font-medium leading-relaxed">
                El recruiting no es publicar vacantes.
                <br />
                Es diseñar un sistema que permite atraer, evaluar y decidir con claridad.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* 6) CTA final */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="mb-4 text-dark-500">Trabajemos juntos</h2>
              <p className="text-dark-400 mb-8">
                Si tu empresa está creciendo y necesitás profesionalizar tu proceso de selección, conversemos.
              </p>
              <a href="https://wa.me/5491136023471" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4">
                Aplicar a una conversación estratégica
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
