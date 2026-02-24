import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check, MessageCircle } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';

const HANDBOOK_ITEMS = [
  'Una guía de diagnóstico para entender dónde estás hoy',
  'Principios para diseñar un proceso claro y consistente',
  'Las métricas que realmente importan',
  'Cómo integrar tecnología e IA con criterio',
];

const HandbookPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header con navegación */}
      <div className="border-b border-gray-100 bg-white">
        <div className="container-custom py-6">
          <Link
            to="/"
            className="inline-flex items-center text-dark-400 hover:text-primary-500 transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} className="mr-2" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container-custom py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-5xl mx-auto">
          {/* Columna imagen */}
          <ScrollReveal>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="/tapa-handbook.png"
                  alt="Recruiting Handbook"
                  className="w-full max-w-sm rounded-xl shadow-lg object-cover"
                />
                <div className="absolute -bottom-3 -right-3 w-full h-full rounded-xl bg-primary-100/30 -z-10" />
              </div>
            </div>
          </ScrollReveal>

          {/* Columna texto */}
          <div className="lg:pt-4">
            <ScrollReveal delay={0.1}>
              <h1 className="text-3xl md:text-4xl font-display font-semibold text-dark-500 mb-3">
                Recruiting Handbook
              </h1>
              <p className="text-lg text-primary-500 font-medium mb-6">
                Próximamente disponible
              </p>
              <p className="text-dark-400 mb-8 leading-relaxed">
                Una guía práctica para founders y líderes de reclutamiento que quieren profesionalizar su proceso. Incluirá:
              </p>
              <ul className="space-y-4 mb-10">
                {HANDBOOK_ITEMS.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                      <Check size={14} className="text-primary-500" />
                    </span>
                    <span className="text-dark-500">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 border-t border-gray-100">
                <p className="text-dark-400 text-sm mb-4">
                  ¿Querés que te avisemos cuando esté listo?
                </p>
                <a
                  href="https://wa.me/5491136023471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Escribinos por WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandbookPage;
