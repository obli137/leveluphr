import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/common/ScrollReveal';
import { usePageMeta } from '../utils/usePageMeta';
import RecognitionTrajectorySection from '../components/common/RecognitionTrajectorySection';
import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  ChevronUp,
  Compass,
  FileText,
  MessageCircle,
  PenLine,
  Target,
  Users,
} from 'lucide-react';

const WHATSAPP_NUMBER = '5491136023471';
const WHATSAPP_LINKEDIN_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    'Hola Mariano, quiero coordinar una reunión para solicitar propuesta de LinkedIn para líderes / marca personal. ¿Me compartís próximos pasos?'
  );

type Offer = {
  title: string;
  duration: string;
  forWho: string;
  includes: string[];
  deliverables: string[];
  icon: React.ReactNode;
};

const OFFERS: Offer[] = [
  {
    title: 'Diagnóstico Ejecutivo de Marca Personal',
    duration: '7–10 días',
    forWho: 'Voceros, gerencias y líderes que quieren claridad sobre su posicionamiento actual y oportunidades rápidas de mejora.',
    includes: [
      'Kickoff con Comunicación (interna/externa)',
      'Auditoría de perfiles (headline, about, experiencia, featured)',
      'Auditoría de actividad (30–60 días)',
      'Territorios de contenido por líder',
      'Checklist + recomendaciones',
      'Devolución ejecutiva',
    ],
    deliverables: [
      'Informe ejecutivo por líder (o por grupo)',
      'Checklist de optimización',
      'Mapa de territorios de contenido',
      'Recomendaciones priorizadas',
    ],
    icon: <Compass size={18} className="text-primary-500" />,
  },
  {
    title: 'Taller Ejecutivo “LinkedIn para Líderes”',
    duration: 'Sesión única',
    forWho: 'Equipos directivos o mandos medios que necesitan una base sólida y lineamientos claros para comunicar con consistencia.',
    includes: [
      'Taller 2 hs en vivo (Teams)',
      'Blueprint de marca personal',
      'Optimización express de perfil',
      'Guía de contenidos y formatos',
      'Q&A',
    ],
    deliverables: [
      'Blueprint de marca personal',
      'Guía de contenidos y formatos',
      'Checklist de perfil (para aplicar post-taller)',
    ],
    icon: <Users size={18} className="text-primary-500" />,
  },
  {
    title: 'Programa “LinkedIn Leadership”',
    duration: '4 semanas',
    forWho: 'Líderes que buscan avanzar de “publicar de vez en cuando” a un sistema de autoridad: narrativa, contenido y crecimiento.',
    includes: [
      '4 sesiones grupales (90 min)',
      'Posicionamiento + narrativa',
      'Perfil que convierte',
      'Contenido que construye autoridad',
      'Distribución y crecimiento (comentarios + networking)',
      'Plantillas + revisión de 1 post por líder',
    ],
    deliverables: [
      'Narra tiva y posicionamiento por líder',
      'Perfil optimizado (guía + checklist)',
      'Plantillas de contenido',
      'Feedback editorial sobre 1 post por líder',
    ],
    icon: <PenLine size={18} className="text-primary-500" />,
  },
  {
    title: 'Acompañamiento mensual (Retainer)',
    duration: 'Mensual',
    forWho: 'Comms + liderazgo que necesitan continuidad: rituales, feedback editorial y métricas simples para sostener el sistema.',
    includes: [
      'Reunión mensual con Comunicación',
      'Clínica grupal con líderes',
      'Revisión y feedback de contenido',
      'Tablero simple de métricas',
    ],
    deliverables: [
      'Ritual mensual (agenda + dinámica)',
      'Tablero simple de métricas',
      'Feedback editorial recurrente',
    ],
    icon: <BarChart3 size={18} className="text-primary-500" />,
  },
  {
    title: 'Premium 1:1 para voceros (CEO/Directores)',
    duration: '1:1',
    forWho: 'Voceros con agenda exigente que necesitan acompañamiento cercano: estrategia, perfil y edición para comunicar con precisión.',
    includes: [
      'Estrategia personal',
      'Optimización completa de perfil',
      'Pilares + storytelling profesional',
      'Feedback editorial de posts',
      'Reunión quincenal',
    ],
    deliverables: [
      'Estrategia y narrativa personal',
      'Perfil optimizado end-to-end',
      'Pilares + ejemplos de storytelling',
      'Feedback editorial quincenal',
    ],
    icon: <Target size={18} className="text-primary-500" />,
  },
];

const PROCESS = [
  {
    step: 1,
    title: 'Descubrimiento',
    text: 'Contexto, objetivos, stakeholders y nivel de exposición deseado. Alineación con Comunicación.',
  },
  {
    step: 2,
    title: 'Definición de estrategia',
    text: 'Posicionamiento, narrativa y territorios de contenido. Lineamientos y criterios editoriales.',
  },
  {
    step: 3,
    title: 'Implementación',
    text: 'Perfil (optimización) + contenidos (estructura, formatos y rutina). Plan operativo y plantillas.',
  },
  {
    step: 4,
    title: 'Acompañamiento',
    text: 'Rituales, feedback y métricas simples para sostener consistencia y aprendizaje.',
  },
];

const FAQS = [
  {
    q: '¿Para quién es?',
    a: 'Para líderes, gerencias y voceros que quieren construir posicionamiento y autoridad sin depender de “posteos sueltos”. Está pensado en nivel directivo, con foco estratégico y ejecución simple.',
  },
  {
    q: '¿Se trabaja con Comunicación interna/externa?',
    a: 'Sí. Idealmente alineamos con Comms para cuidar narrativa, riesgos, mensajes clave y timing. Si no hay equipo de Comms, definimos criterios y aprobaciones mínimas.',
  },
  {
    q: '¿Incluye ghostwriting?',
    a: 'Podemos trabajar desde revisión/edición y co-escritura. El enfoque prioriza autenticidad: que el líder pueda sostener el estilo y el criterio. Definimos el modelo según disponibilidad.',
  },
  {
    q: '¿Cuánto tiempo toma ver resultados?',
    a: 'En general se ven señales en 2–4 semanas (consistencia, calidad de interacciones, claridad del perfil). Resultados sostenibles requieren continuidad: el objetivo es construir un sistema.',
  },
  {
    q: '¿Cómo medimos impacto?',
    a: 'Usamos métricas simples: vistas de perfil, crecimiento de red, calidad de comentarios, conversaciones generadas y oportunidades. Definimos 2–3 indicadores relevantes por líder.',
  },
  {
    q: '¿Podemos hacerlo para un grupo grande?',
    a: 'Sí. Suele funcionar bien con cohortes internas por seniority o área. Ajustamos dinámica, rituales y nivel de personalización.',
  },
  {
    q: '¿Qué pasa si el líder no tiene tiempo?',
    a: 'Diseñamos un plan realista: pocos formatos, una rutina mínima y apoyos (plantillas, edición, clínica grupal). El objetivo es reducir fricción, no sumar carga.',
  },
  {
    q: '¿Cómo se integra con Employer Branding?',
    a: 'La marca empleadora gana consistencia cuando los voceros sostienen una narrativa clara. Alineamos territorios, mensajes y métricas para que refuercen el EB sin sonar “corporativo”.',
  },
];

const FAQItem: React.FC<{
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ q, a, isOpen, onToggle }) => (
  <div className="border-b border-gray-200 py-5">
    <button
      className="flex justify-between items-center w-full text-left focus:outline-none"
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-medium text-dark-500">{q}</h3>
      <span className="ml-6 flex-shrink-0">
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </span>
    </button>
    {isOpen && (
      <div className="mt-2 pr-12">
        <p className="text-gray-600">{a}</p>
      </div>
    )}
  </div>
);

const LinkedInLeadersPage: React.FC = () => {
  usePageMeta({
    title: 'LevelUp | LinkedIn para líderes',
    description:
      'LinkedIn para líderes: posicionamiento y marca personal. Estrategia, contenido y acompañamiento para voceros, gerencias y equipos directivos.',
  });

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (idx: number) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <Link to="/" className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8">
              <ArrowLeft size={16} className="mr-2" /> Volver al inicio
            </Link>
          </ScrollReveal>

          <ScrollReveal>
            <div className="max-w-3xl">
              <h1 className="mb-4">LinkedIn para líderes: posicionamiento y marca personal</h1>
              <p className="text-xl md:text-2xl text-dark-400 font-medium mb-4">
                Estrategia, contenido y acompañamiento para voceros, gerencias y equipos directivos.
              </p>
              <p className="text-sm md:text-base text-dark-500 font-medium mb-6">
                Servicio brindado exclusivamente por Mariano Obligado.
              </p>
              <p className="text-base md:text-lg text-dark-400 mb-8">
                Una línea complementaria a la consultoría de Talent: ayudamos a líderes a construir autoridad con un sistema simple (perfil, narrativa, contenidos y métricas), alineado a la marca y a Comunicación.
              </p>
              <a
                href={WHATSAPP_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Coordinar reunión
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <RecognitionTrajectorySection />

      {/* Ofertas */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="mb-2 text-dark-500">Tipos de encuadre</h2>
              <p className="text-dark-400">
                Definimos alcance y propuesta para cada instancia de LinkedIn para líderes en función del número de líderes, el grado de visibilidad deseado y el trabajo conjunto con Comunicación.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {OFFERS.map((o, i) => (
              <ScrollReveal key={o.title} delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-dark-500 mb-1">{o.title}</h3>
                      <p className="text-sm text-dark-400">{o.duration}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      {o.icon}
                    </div>
                  </div>

                  <div className="mb-5">
                    <p className="text-sm text-dark-400 mb-2">
                      <span className="text-dark-500 font-medium">Para quién es:</span> {o.forWho}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                    <div>
                      <p className="text-sm font-medium text-dark-500 mb-3 inline-flex items-center gap-2">
                        <BookOpen size={18} className="text-primary-500" /> Qué incluye
                      </p>
                      <ul className="space-y-2">
                        {o.includes.map((it) => (
                          <li key={it} className="flex items-start text-dark-400 text-sm">
                            <Check size={18} className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-dark-500 mb-3 inline-flex items-center gap-2">
                        <FileText size={18} className="text-primary-500" /> Entregables
                      </p>
                      <ul className="space-y-2">
                        {o.deliverables.map((it) => (
                          <li key={it} className="flex items-start text-dark-400 text-sm">
                            <Check size={18} className="mr-2 mt-0.5 text-primary-500 flex-shrink-0" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a
                      href={WHATSAPP_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline inline-flex items-center gap-2"
                    >
                      Solicitar propuesta
                      <MessageCircle size={18} />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="mb-2 text-dark-500">Cómo trabajamos</h2>
              <p className="text-dark-400">
                Proceso en 4 pasos para pasar de “intención” a un sistema de autoridad sostenible.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 max-w-3xl mx-auto">
            <ol className="space-y-6">
              {PROCESS.map((p, i) => (
                <ScrollReveal key={p.step} delay={i * 0.1}>
                  <li className="flex gap-4 md:gap-6">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 text-primary-600 font-semibold flex items-center justify-center">
                      {p.step}
                    </span>
                    <div>
                      <h3 className="font-semibold text-dark-500 mb-1">{p.title}</h3>
                      <p className="text-dark-400 text-sm md:text-base">{p.text}</p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
            <ScrollReveal delay={0.5}>
              <div className="mt-10 text-center">
                <a href={WHATSAPP_LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Coordinar reunión
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="mb-4 text-dark-500">Preguntas frecuentes</h2>
              <p className="text-lg text-dark-400 max-w-2xl mx-auto">
                Dudas habituales sobre LinkedIn para líderes y marca personal a nivel directivo.
              </p>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {FAQS.map((f, idx) => (
              <FAQItem
                key={f.q}
                q={f.q}
                a={f.a}
                isOpen={openIndex === idx}
                onToggle={() => toggleFAQ(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-4 text-dark-500">Coordinar una reunión</h2>
              <p className="text-dark-400 text-base md:text-lg mb-8">
                Contame contexto, cantidad de líderes y objetivos (posicionamiento, thought leadership, employer brand). Te respondemos con una propuesta de alcance.
              </p>
              <a
                href={WHATSAPP_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
              >
                <MessageCircle size={20} />
                Solicitar propuesta
              </a>
              <p className="text-sm text-dark-400 mt-4">
                Si querés conocer más sobre LevelUp y Mariano, podés visitar <Link className="text-primary-500 hover:text-primary-600" to="/about">Quiénes somos</Link>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default LinkedInLeadersPage;

