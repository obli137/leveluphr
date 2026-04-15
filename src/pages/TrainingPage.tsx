import React from 'react';
import ScrollReveal from '../components/common/ScrollReveal';
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Bot,
  Briefcase,
  Calendar,
  Check,
  Clock,
  Layers,
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
    title: 'Videollamada de alineación',
    text: 'Coordinamos una call para conversar y asegurar que el programa vaya a aportar valor.',
  },
  { step: 4, title: 'Avanzamos con el pago e inscripción', text: 'Si hay encaje mutuo, cerramos la inscripción y los próximos pasos operativos.' },
];

const PROGRAM_MODULES: Array<{ title: string; icon: React.ReactNode }> = [
  { title: 'El rol del líder de Recruiting', icon: <Target size={18} className="text-primary-500" /> },
  { title: 'Diseño del modelo operativo de Recruiting', icon: <Workflow size={18} className="text-primary-500" /> },
  { title: 'Liderazgo en equipos de Talent Acquisition', icon: <Users size={18} className="text-primary-500" /> },
  { title: 'Stakeholder management', icon: <Briefcase size={18} className="text-primary-500" /> },
  { title: 'Estrategia de Recruiting y workforce planning', icon: <Layers size={18} className="text-primary-500" /> },
  { title: 'Estrategia por fuentes de reclutamiento', icon: <Sparkles size={18} className="text-primary-500" /> },
  { title: 'Métricas de Recruiting, KPIs y OKRs en Talent', icon: <BarChart3 size={18} className="text-primary-500" /> },
  { title: 'Tecnología, ATS y benchmark de herramientas', icon: <BookOpen size={18} className="text-primary-500" /> },
  { title: 'Inteligencia Artificial aplicada al Recruiting', icon: <Bot size={18} className="text-primary-500" /> },
  { title: 'Entrenamiento y desarrollo de Recruiters', icon: <Users size={18} className="text-primary-500" /> },
  { title: 'Experiencia del candidato y Employer Branding', icon: <Award size={18} className="text-primary-500" /> },
  { title: 'Proyecto final: diseño de roadmap de implementación', icon: <ArrowRight size={18} className="text-primary-500" /> },
];

const TARGET_AUDIENCE = [
  'Heads of Talent y Talent Acquisition Leaders',
  'HR Directors y HR Business Partners senior',
  'Recruiting Managers y líderes de equipos de selección',
  'Profesionales de HR en transición a roles de liderazgo',
];

const BENEFITS = [
  'Diseñar un modelo operativo de Recruiting escalable',
  'Incorporar métricas y sistemas de performance',
  'Alinear Talent Acquisition con la estrategia del negocio',
  'Integrar tecnología e IA de forma efectiva',
  'Desarrollar habilidades de liderazgo y gestión de stakeholders',
];

const TrainingPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* 1) Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="mb-4">Formación Ejecutiva en Recruiting</h1>
              <p className="text-xl md:text-2xl text-dark-400 font-medium mb-3">
                Programas diseñados para Reclutadores Senior, Líderes de Recruiting y referentes de Talent Acquisition que buscan estructurar, escalar y profesionalizar sus procesos de contratación.
              </p>
              <p className="text-base md:text-lg text-dark-500 font-medium mb-8">
                Próxima cohorte: inicio Junio 2026
              </p>
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Aplicar al programa
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2) Presentación del programa */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <h2 className="mb-3 text-dark-500">Recruiting Management</h2>
                <p className="text-dark-400 text-base md:text-lg leading-relaxed">
                  Programa ejecutivo orientado a Heads of Talent, HR Directors y líderes de Recruiting que desean diseñar y liderar sistemas de Talent Acquisition alineados con la estrategia del negocio. Combina frameworks prácticos, métricas, tecnología y visión estratégica para construir modelos de contratación escalables.
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.1}>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-dark-500 mb-4">Información general</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-dark-400">
                      <Calendar size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>
                        <span className="text-dark-500 font-medium">Duración:</span> 12 semanas
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-dark-400">
                      <Calendar size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>
                        <span className="text-dark-500 font-medium">Inicio de la cohorte:</span> Junio 2026
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-dark-400">
                      <Video size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>
                        <span className="text-dark-500 font-medium">Modalidad:</span> Online en vivo + contenido asincrónico
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-dark-400">
                      <Clock size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>
                        <span className="text-dark-500 font-medium">Carga horaria total:</span> 50 horas
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-dark-400">
                      <Clock size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>
                        <span className="text-dark-500 font-medium">Frecuencia:</span> 1 sesión semanal de 3 horas
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-dark-400">
                      <Check size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      <span>
                        <span className="text-dark-500 font-medium">Incluye:</span> Materiales, plantillas, framework de Recruiting Escalable y certificación ejecutiva
                      </span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de aplicación */}
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

      {/* 4) Contenidos */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="mb-2 text-dark-500">Contenidos del programa</h2>
              <p className="text-dark-400">
                Módulos orientados a liderazgo, modelo operativo, métricas, tecnología e implementación.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROGRAM_MODULES.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                    {m.icon}
                  </div>
                  <p className="text-dark-500 font-medium leading-snug">{m.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5) Público objetivo + 6) Beneficios */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 h-full">
                <h2 className="text-2xl md:text-3xl mb-4 text-dark-500">Público objetivo</h2>
                <p className="text-dark-400 mb-6">
                  Este programa está diseñado para:
                </p>
                <ul className="space-y-3">
                  {TARGET_AUDIENCE.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dark-400">
                      <Check size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 h-full">
                <h2 className="text-2xl md:text-3xl mb-4 text-dark-500">Beneficios</h2>
                <p className="text-dark-400 mb-6">
                  Qué te llevás al terminar:
                </p>
                <ul className="space-y-3">
                  {BENEFITS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-dark-400">
                      <Check size={18} className="mt-0.5 text-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-4 text-dark-500">Postulá a la próxima cohorte</h2>
              <p className="text-dark-400 text-base md:text-lg mb-8">
                Completá el formulario para aplicar al programa y evaluar si esta formación es adecuada para tu etapa profesional y el contexto de tu organización.
              </p>
              <a
                href={APPLICATION_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-4"
              >
                Aplicar ahora
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

