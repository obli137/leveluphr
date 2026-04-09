import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import ScrollReveal from '../common/ScrollReveal';

const WHATSAPP_NUMBER = '5491136023471';
const WHATSAPP_LINKEDIN_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent(
    'Hola Mariano, quiero coordinar una reunión para solicitar propuesta de LinkedIn para líderes / marca personal. ¿Me compartís próximos pasos?'
  );

const LeadersAndSpokespeopleSection: React.FC = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h2 className="mb-3 text-dark-500">Para líderes y voceros</h2>
              <p className="text-dark-400 text-base md:text-lg leading-relaxed">
                Ayudamos a líderes a construir posicionamiento y marca personal en LinkedIn, con un sistema simple (narrativa, perfil, contenidos y métricas) alineado a la marca y a Comunicación.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/linkedin-para-lideres" className="btn-outline">
                  Ver detalle
                </Link>
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

          <div className="lg:col-span-5">
            <ScrollReveal delay={0.1} direction="right">
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 md:p-8">
                <p className="text-sm text-dark-400 mb-4">
                  Enfoque directivo, sin “agencia” ni community management.
                </p>
                <ul className="space-y-2 text-dark-400">
                  {[
                    'Posicionamiento y narrativa por líder',
                    'Perfil que convierte (claridad + autoridad)',
                    'Sistema de contenidos (formatos + rutina mínima)',
                    'Acompañamiento editorial y feedback',
                    'Métricas simples para aprendizaje',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadersAndSpokespeopleSection;

