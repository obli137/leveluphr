import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import ProfileImagePlaceholder from '../components/common/ProfileImagePlaceholder';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Calendar,
  Check,
  Clock,
  Cpu,
  FileText,
  Gauge,
  Layers,
  Search,
  Settings2,
  Sparkles,
  Target,
  Users,
  Video,
  Workflow,
} from 'lucide-react';

/** Formulario de aplicación al programa ejecutivo Recruiting Management */
const APPLICATION_FORM_URL = 'https://forms.gle/QBtHruRfb1PCso9f9';

const APPLICATION_STEPS: Array<{ step: number; title: string; text: string }> = [
  { step: 1, title: 'Aplicación por medio del formulario', text: 'Completás el formulario con tu contexto y expectativas.' },
  { step: 2, title: 'Evaluamos las solicitudes', text: 'Revisamos cada caso en función del perfil y armado de la cohorte.' },
  {
    step: 3,
    title: 'Videollamada con Mariano Obligado',
    text: 'Coordinamos una call para conversar y asegurar que el programa vaya a aportar valor.',
  },
  { step: 4, title: 'Avanzamos con el pago e inscripción', text: 'Si hay encaje mutuo, cerramos la inscripción y los próximos pasos operativos.' },
];

const PROGRAM_MODULES: Array<{ title: string; icon: React.ReactNode; topics: string[] }> = [
  {
    title: 'Módulo 1 — Fundamentos de Recruiting Management',
    icon: <Target size={18} className="text-primary-500" />,
    topics: [
      'Recruiting como capacidad estratégica del negocio',
      'De la lógica reactiva al modelo operativo',
      'Alineación con negocio',
      'Recruiting con mentalidad de producto',
      'Qué cambia cuando aparece IA en recruiting',
    ],
  },
  {
    title: 'Módulo 2 — Diagnóstico del proceso actual',
    icon: <Gauge size={18} className="text-primary-500" />,
    topics: [
      'Cómo mapear el proceso real',
      'Dónde se rompen las búsquedas',
      'Funnel, aging y conversiones',
      'Cómo usar IA para detectar patrones y cuellos de botella',
    ],
  },
  {
    title: 'Módulo 3 — Diseño de procesos y arquitectura de selección',
    icon: <Workflow size={18} className="text-primary-500" />,
    topics: [
      'Etapas claras y comparables',
      'Roles recruiter / hiring manager',
      'Scorecards',
      'Criterios de avance y descarte',
      'Cómo usar IA para diseñar mejor interview kits, briefs y scorecards',
    ],
  },
  {
    title: 'Módulo 4 — Sourcing y atracción de talento',
    icon: <Search size={18} className="text-primary-500" />,
    topics: [
      'Estrategia por fuente',
      'Cómo pensar sourcing como capacidad del área',
      'AI Fluency aplicada a sourcing',
      'Uso de Claude + Cowork para búsquedas, boolean, outreach y enriquecimiento',
    ],
  },
  {
    title: 'Módulo 5 — Evaluación, entrevistas y toma de decisiones',
    icon: <Users size={18} className="text-primary-500" />,
    topics: [
      'Consistencia en entrevistas',
      'Comparación de candidatos',
      'Decisiones más objetivas',
      'IA para preparación de entrevistas, generación de preguntas y consolidación de feedback',
    ],
  },
  {
    title: 'Módulo 6 — ATS, automatización y reporting',
    icon: <BarChart3 size={18} className="text-primary-500" />,
    topics: [
      'Configuración del ATS al servicio del proceso',
      'Qué medir',
      'Dashboards útiles',
      'Reporting para líderes',
      'Automatizaciones y reporting asistido con IA',
    ],
  },
  {
    title: 'Módulo 7 — AI Fluency para Recruiters y líderes de Recruiting',
    icon: <Cpu size={18} className="text-primary-500" />,
    topics: [
      'Qué es AI Fluency',
      'Qué herramientas vale la pena aprender',
      'Cómo integrar IA con criterio',
      'Límites, riesgos y validación humana',
    ],
  },
  {
    title: 'Módulo 8 — Agentes en Claude aplicados a Recruiting',
    icon: <Bot size={18} className="text-primary-500" />,
    topics: [
      'Qué es un agente',
      'Casos de uso en recruiting',
      'Cómo usar Claude para crear flujos repetibles',
      'Agentes para intake, sourcing, screening preliminar, feedback y reporting',
    ],
  },
];

const TARGET_AUDIENCE = [
  'Recruiters que quieren desarrollar mirada de management y salir de la ejecución puramente reactiva.',
  'Líderes de Recruiting o Talento que necesitan ordenar procesos, métricas y decisiones.',
  'Hiring managers que quieren mejorar la calidad del proceso y profesionalizar la colaboración con Recruiting.',
  'Profesionales que buscan integrar IA en recruiting sin perder criterio, consistencia ni calidad de decisión.',
];

const OUTCOMES = [
  'Diseñar procesos de selección más comparables, claros y escalables.',
  'Definir métricas útiles para gestionar con evidencia y no solo con percepción.',
  'Ordenar la colaboración entre recruiter y hiring manager para acelerar decisiones y mejorar calidad.',
  'Incorporar IA en tareas de alto impacto sin delegar criterio profesional.',
  'Pensar Recruiting con lógica de sistema, operación y mejora continua.',
];

const TRANSVERSAL_PILLARS = [
  'Productividad operativa sin perder calidad de evaluación.',
  'Criterio profesional fortalecido por mejor información y mejores sistemas.',
  'Escalabilidad en sourcing, screening, entrevistas, reporting y automatización.',
];

const POSITIONING_POINTS = [
  'Recruiting Management ordena cómo atraer, evaluar y decidir con más claridad y consistencia.',
  'Lo que cambia no es el fundamento, sino la forma de gestionar el sistema hoy.',
  'La IA no reemplaza criterio. Multiplica capacidad operativa, velocidad de análisis y calidad de decisión cuando se integra con método.',
];

const INFO_ITEMS = [
  { icon: <Calendar size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />, label: 'Duración:', value: '12 semanas' },
  { icon: <Calendar size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />, label: 'Inicio de la cohorte:', value: 'Junio 2026' },
  { icon: <Video size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />, label: 'Modalidad:', value: 'Online en vivo + contenido asincrónico' },
  { icon: <Clock size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />, label: 'Carga horaria total:', value: '50 horas' },
  { icon: <Clock size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />, label: 'Frecuencia:', value: '1 sesión semanal de 3 horas' },
  {
    icon: <Check size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />,
    label: 'Incluye:',
    value: 'Materiales, plantillas, frameworks de implementación y certificación ejecutiva',
  },
];

/** Logo oficial de LinkedIn (estilo de marca: azul #0A66C2) */
const LinkedInLogo: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = '' }) => (
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

const TrainingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1) Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl">
              <p className="text-sm md:text-base uppercase tracking-[0.22em] text-primary-500 font-semibold mb-4">
                Formación Ejecutiva
              </p>
              <h1 className="mb-4 text-dark-500">Recruiting Management + AI</h1>
              <p className="text-xl md:text-3xl text-dark-400 font-medium mb-5 max-w-3xl">
                Diseñá, liderá y optimizá procesos de selección en la era de la IA.
              </p>
              <p className="text-base md:text-lg text-dark-400 leading-relaxed mb-4 max-w-3xl">
                Una formación para recruiters senior, líderes de talento y directores de HR que quieran pasar de búsquedas reactivas a un modelo de recruiting estructurado, medible y escalable, incorporando IA de forma práctica en cada etapa del proceso.
              </p>
              <p className="text-base md:text-lg text-dark-500 font-medium mb-8">
                Próxima cohorte: inicio Junio 2026
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Aplicar al programa
                </a>
                <div className="inline-flex items-center rounded-full bg-white border border-gray-200 px-4 py-3 text-sm text-dark-400">
                  Recruiting Management actualizado para la era de la IA
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2) Posicionamiento */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="text-sm md:text-base uppercase tracking-[0.18em] text-primary-500 font-semibold mb-3">
                  Posicionamiento
                </p>
                <h2 className="mb-4 text-dark-500">Recruiting Management como marco. La diferencia está en cómo se gestiona hoy.</h2>
                <div className="space-y-4 text-dark-400 text-base md:text-lg leading-relaxed">
                  {POSITIONING_POINTS.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
                <p className="text-dark-500 text-base md:text-lg font-medium mt-6">
                  No es una ruptura con el modelo original. Es su evolución natural para operar con más claridad, más productividad y mejores decisiones.
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.1}>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-dark-500 mb-4">Información general</h3>
                  <ul className="space-y-3">
                    {INFO_ITEMS.map((item) => (
                      <li key={item.label} className="flex items-start gap-3 text-dark-400">
                        {item.icon}
                        <span>
                          <span className="text-dark-500 font-medium">{item.label}</span> {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Sobre el profesor */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="max-w-md mx-auto lg:mx-0">
                  <ProfileImagePlaceholder src="/perfil2.png" shape="rounded" className="w-full" />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.1}>
                <p className="text-sm md:text-base uppercase tracking-[0.18em] text-primary-500 font-semibold mb-3">
                  Sobre el profesor
                </p>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-dark-500 mb-0">Mariano Obligado</h2>
                  <a
                    href="https://www.linkedin.com/in/marianoobligado/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-[#0A66C2] hover:text-[#004182] transition-colors"
                    aria-label="LinkedIn de Mariano Obligado"
                  >
                    <LinkedInLogo size={28} />
                  </a>
                </div>
                <p className="text-lg md:text-xl text-dark-500 font-medium mb-2">
                  LinkedIn Top Voice. Head of Talent Acquisition con 15 años de experiencia.
                </p>
                <p className="text-dark-400 text-base md:text-lg leading-relaxed mb-6">
                  Su enfoque combina recruiting, estrategia, procesos, métricas y tecnología aplicada para ayudar a líderes y equipos a convertir Recruiting en una capacidad operativa consistente, medible y alineada con negocio.
                </p>
                <blockquote className="border-l-4 border-primary-500 pl-6 py-2 mb-6">
                  <p className="text-lg md:text-2xl text-dark-500 font-medium leading-relaxed">
                    Recruiting escala cuando se diseña como sistema, indistintamente de la herramienta. 
                  </p>
                </blockquote>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Experiencia liderando Talent Acquisition con foco en operación, calidad y escalabilidad.',
                    'Visión práctica sobre procesos, métricas, tecnología y mejora continua.',
                    'Integración de IA aplicada sin perder criterio profesional ni rigor en la decisión.',
                    'Una formación diseñada desde la realidad de equipos, líderes y contextos de negocio.',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-gray-200 bg-white p-4 text-dark-400">
                      {item}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Para quién es + outcomes */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8 h-full">
                <h2 className="text-2xl md:text-3xl mb-4 text-dark-500">Para quién es</h2>
                <p className="text-dark-400 mb-6">
                  Para profesionales y líderes que quieren dejar de improvisar búsquedas y empezar a gestionar Recruiting con método, métricas y mejores decisiones.
                </p>
                <ul className="space-y-4">
                  {TARGET_AUDIENCE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dark-400">
                      <Check size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8 h-full">
                <h2 className="text-2xl md:text-3xl mb-4 text-dark-500">Qué te llevás</h2>
                <p className="text-dark-400 mb-6">
                  No solo contenidos. Te llevás una forma más madura, estratégica y escalable de pensar y gestionar Recruiting.
                </p>
                <ul className="space-y-4">
                  {OUTCOMES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dark-400">
                      <Check size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5) IA transversal */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl">
              <p className="text-sm md:text-base uppercase tracking-[0.18em] text-primary-500 font-semibold mb-3">
                IA como eje transversal
              </p>
              <h2 className="mb-4 text-dark-500">La IA como capa que atraviesa toda la formación en Recruiting Management.</h2>
              <p className="text-dark-400 text-base md:text-lg leading-relaxed mb-8">
                La formación integra IA en sourcing, screening, entrevistas, reporting, automatización y mejora continua. Siempre al servicio de procesos mejor diseñados, más productividad y decisiones más consistentes.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRANSVERSAL_PILLARS.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.08}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                    <Sparkles size={20} className="text-primary-500" />
                  </div>
                  <p className="text-dark-500 font-medium leading-relaxed">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6) Programa */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl">
              <p className="text-sm md:text-base uppercase tracking-[0.18em] text-primary-500 font-semibold mb-3">
                Programa
              </p>
              <h2 className="mb-4 text-dark-500">Recruiting Management como columna vertebral. IA integrada de forma natural en cada etapa.</h2>
              <p className="text-dark-400 text-base md:text-lg leading-relaxed">
                El programa mantiene la esencia de Recruiting Management y la actualiza para un contexto donde tecnología, automatización e IA cambian la forma de operar, pero no reemplazan criterio, diseño ni liderazgo.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROGRAM_MODULES.map((module, i) => (
              <ScrollReveal key={module.title} delay={i * 0.05}>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-dark-500 mb-4 leading-snug">{module.title}</h3>
                  <ul className="space-y-3">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3 text-dark-400 text-sm md:text-base">
                        <Check size={16} className="mt-1 text-primary-500 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7) Herramientas */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <ScrollReveal>
                <p className="text-sm md:text-base uppercase tracking-[0.18em] text-primary-500 font-semibold mb-3">
                  Herramientas y ejemplos
                </p>
                <h2 className="mb-4 text-dark-500">Se trabaja con herramientas concretas, pero el foco está en el sistema.</h2>
                <p className="text-dark-400 text-base md:text-lg leading-relaxed">
                  Vas a ver herramientas, prompts y flujos aplicados a recruiting real, siempre dentro de una lógica de proceso, operación y liderazgo. No para depender de la herramienta, sino para diseñar mejor.
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Bot size={18} className="text-primary-500" />, label: 'Claude + Cowork' },
                  { icon: <Layers size={18} className="text-primary-500" />, label: 'AI Driven ATS Demos' },
                  { icon: <Settings2 size={18} className="text-primary-500" />, label: 'Custom Vibecoded tools' },
                  { icon: <FileText size={18} className="text-primary-500" />, label: 'Prompts reutilizables' },
                  { icon: <ArrowRight size={18} className="text-primary-500" />, label: 'Agentes aplicados a recruiting' },
                ].map((tool, i) => (
                  <ScrollReveal key={tool.label} delay={i * 0.06}>
                    <div className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                        {tool.icon}
                      </div>
                      <span className="text-dark-500 font-medium">{tool.label}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8) Proceso de aplicación */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="mb-4 text-dark-500">Proceso de aplicación</h2>
              <p className="text-dark-400 text-base md:text-lg leading-relaxed mb-2">
                Trabajamos el proceso de admisión de esta manera porque <span className="text-dark-500 font-medium">Recruiting Management</span> es un programa que requiere <span className="text-dark-500 font-medium">conocimientos y experiencia previa</span>. Así buscamos que tu inversión rinda al máximo y que cada cohorte comparta un nivel y un contexto acordes al diseño del programa.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl mx-auto">
            <ol className="space-y-6">
              {APPLICATION_STEPS.map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.08}>
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
            <ScrollReveal delay={0.4}>
              <div className="mt-10">
                <a
                  href={APPLICATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Ir al formulario de aplicación
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 9) CTA final */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm md:text-base uppercase tracking-[0.18em] text-primary-500 font-semibold mb-3">
                Cierre
              </p>
              <h2 className="mb-4 text-dark-500">Convertí Recruiting en una capacidad estratégica de tu organización.</h2>
              <p className="text-dark-400 text-base md:text-lg mb-4">
                Dejá de apagar incendios. Empezá a gestionar Recruiting como sistema.
              </p>
              <p className="text-dark-400 text-base md:text-lg mb-8">
                Aplicá al programa si querés diseñar un modelo de selección más claro, medible y escalable, integrando IA donde agrega valor real.
              </p>
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                Aplicar al programa
              </a>
              <p className="text-sm text-dark-400 mt-4">
                Una vez enviado el formulario, te contactamos con los próximos pasos.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;

