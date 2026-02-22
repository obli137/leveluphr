import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import { Check } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  duration?: string;
  includes: string[];
  deliverable?: string;
  cta: string;
  delay?: number;
}> = ({ title, duration, includes, deliverable, cta, delay = 0 }) => (
  <ScrollReveal delay={delay}>
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 h-full flex flex-col">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
        <h3 className="text-xl font-semibold text-dark-500">{title}</h3>
        {duration && (
          <span className="text-sm text-dark-400">{duration}</span>
        )}
      </div>
      <ul className="space-y-2 mb-6 flex-1">
        {includes.map((item, i) => (
          <li key={i} className="flex items-start text-dark-400 text-sm md:text-base">
            <Check size={18} className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>
      {deliverable && (
        <p className="text-sm text-dark-400 mb-4 pb-4 border-b border-gray-100">
          <span className="font-medium text-dark-500">Entregable: </span>{deliverable}
        </p>
      )}
      <Link to="/contact" className="btn-outline text-center text-sm py-2.5 mt-auto">
        {cta}
      </Link>
    </div>
  </ScrollReveal>
);

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1) Hero de servicios */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="mb-4">Cómo trabajamos</h1>
              <p className="text-xl md:text-2xl text-dark-400 font-medium mb-4">
                Servicios estratégicos para profesionalizar y escalar tu proceso de Recruiting.
              </p>
              <p className="text-base md:text-lg text-dark-400 mb-8">
                Desde diagnósticos puntuales hasta implementación completa y acompañamiento mensual. Diseñamos procesos, métricas y modelos operativos que alinean el recruiting con los objetivos del negocio.
              </p>
              <Link to="/contact" className="btn-primary">
                Aplicar a una conversación estratégica
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2) Sección A — Diagnóstico & Definición */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-2 text-dark-500">Diagnóstico & Definición</h2>
            <p className="text-dark-400 mb-10 max-w-2xl">
              Productos de entrada para entender el estado actual y definir el camino.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="Diagnóstico de Recruiting"
              duration="10 días"
              includes={[
                'Relevamiento (kickoff + entrevistas)',
                'Mapa de proceso actual + cuellos de botella',
                'Auditoría de JD, scorecards y pipeline',
                'Métricas base',
                'Roadmap 30/60/90',
              ]}
              deliverable="Informe ejecutivo + tablero + workshop estratégico"
              cta="Solicitar diagnóstico"
              delay={0.1}
            />
            <ServiceCard
              title="ATS / Stack Selection Sprint"
              duration="2 semanas"
              includes={[
                'Definición de requerimientos',
                'Shortlist de herramientas',
                'Scorecard comparativo',
                'Guión de demos',
                'Plan de implementación',
              ]}
              cta="Explorar sprint"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* 3) Sección B — Implementación y transformación */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-2 text-dark-500">Implementación y transformación</h2>
            <p className="text-dark-400 mb-10 max-w-2xl">
              Servicios core para armar o transformar tu sistema de recruiting.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Armado de área de Recruiting desde cero"
              duration="4–6 semanas"
              includes={[
                'Modelo operativo',
                'Proceso end-to-end',
                'Scorecards y entrevistas estructuradas',
                'Capacitación a hiring managers',
                'Dashboard mínimo viable',
              ]}
              deliverable="Playbook + kit operativo + capacitación"
              cta="Consultar"
              delay={0.1}
            />
            <ServiceCard
              title="Implementación de ATS + Proceso"
              duration="6–10 semanas"
              includes={[
                'Configuración completa',
                'Automatizaciones y reportes',
                'Integraciones clave',
                'Entrenamiento y adopción',
                'Soporte post go-live',
              ]}
              cta="Consultar"
              delay={0.2}
            />
            <ServiceCard
              title="Recruiting Performance System"
              duration="4 semanas"
              includes={[
                'Definición de métricas',
                'Diseño de tablero',
                'Cadencia de seguimiento',
                'Coaching a recruiter lead',
              ]}
              cta="Consultar"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* 4) Sección C — Advisory mensual */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-2 text-dark-500">Advisory mensual</h2>
            <p className="text-dark-400 mb-10 max-w-2xl">
              Acompañamiento continuo para mantener y mejorar el modelo operativo.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-dark-500 mb-2">Advisory estratégico</h3>
              <ul className="space-y-2 mb-6">
                {[
                  '2–4 sesiones mensuales',
                  'Revisión de pipeline y métricas',
                  'Soporte en decisiones estratégicas',
                  'Optimización continua del modelo',
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-dark-400">
                    <Check size={18} className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-dark-400 italic">
                Ideal para startups y scaleups en etapa de crecimiento.
              </p>
              <Link to="/contact" className="btn-outline mt-6 inline-block">
                Aplicar a advisory
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5) Sección D — Workshops y módulos */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-2 text-dark-500">Workshops y módulos específicos</h2>
            <p className="text-dark-400 mb-10 max-w-2xl">
              Módulos acotados para fortalecer áreas concretas del proceso.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">Employer Branding práctico</h3>
                <p className="text-sm text-dark-400 mb-4">3–4 semanas</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    'Definición de propuesta de valor empleador',
                    'Guía de tono y mensajes clave',
                    'Kit de contenidos y canales',
                    'Métricas básicas de employer brand',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-dark-400 text-sm">
                      <Check size={18} className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline text-center text-sm py-2.5 mt-auto">
                  Solicitar módulo
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 h-full flex flex-col">
                <h3 className="text-xl font-semibold text-dark-500 mb-2">Training para Hiring Managers</h3>
                <ul className="space-y-2 mb-6 flex-1">
                  {[
                    'Sesión de entrevistas estructuradas',
                    'Uso de scorecards y criterios',
                    'Feedback y cierre con candidatos',
                    'Alineación con proceso interno',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-dark-400 text-sm">
                      <Check size={18} className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-outline text-center text-sm py-2.5 mt-auto">
                  Solicitar training
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6) Sección final — Proceso de trabajo */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <h2 className="mb-2 text-dark-500 text-center">Qué pasa después de aplicar</h2>
            <p className="text-dark-400 text-center mb-12 max-w-xl mx-auto">
              Proceso simple y transparente para iniciar el trabajo.
            </p>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <ol className="space-y-6">
              {[
                { step: 1, title: 'Revisión del caso', text: 'Revisamos tu contexto y objetivos.' },
                { step: 2, title: 'Conversación estratégica', text: 'Una videollamada para alinear expectativas y alcance.' },
                { step: 3, title: 'Propuesta personalizada', text: 'Te enviamos una propuesta con alcance, entregables y plazos.' },
                { step: 4, title: 'Inicio del proyecto', text: 'Kickoff y arranque según lo acordado.' },
              ].map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.1}>
                  <li className="flex gap-4 md:gap-6">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-dark-500 mb-1">{item.title}</h3>
                      <p className="text-dark-400 text-sm md:text-base">{item.text}</p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
            <ScrollReveal delay={0.5}>
              <div className="mt-12 text-center">
                <Link to="/contact" className="btn-primary text-base px-8 py-4">
                  Aplicar a una conversación estratégica
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
