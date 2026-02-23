import React from 'react';
import { CheckCircle, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5491136023471';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section bg-dark-500 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="mb-6 text-white">Aplicar a una conversación estratégica</h2>
            <p className="text-lg text-gray-300 mb-8">
              Escribime por WhatsApp y coordinamos una videollamada. Revisamos tu contexto y vemos si hay fit para trabajar juntos.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-400">
                  <CheckCircle size={24} />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">Conversación sin compromiso</h3>
                  <p className="mt-1 text-gray-300">
                    Una videollamada para alinear expectativas y alcance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-400">
                  <CheckCircle size={24} />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">Propuesta personalizada</h3>
                  <p className="mt-1 text-gray-300">
                    Si hay fit, te envío una propuesta con entregables y plazos.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-400">
                  <CheckCircle size={24} />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">Enfoque B2B</h3>
                  <p className="mt-1 text-gray-300">
                    Orientado a founders y líderes de reclutamiento en empresas en crecimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark-400 rounded-lg p-8 flex flex-col items-center justify-center text-center min-h-[280px]">
            <p className="text-gray-300 mb-6">
              Escribime por WhatsApp y te respondo a la brevedad.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle size={22} />
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
