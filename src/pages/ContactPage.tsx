import React from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/common/ScrollReveal';

const WHATSAPP_NUMBER = '5491136023471';

const ContactPage: React.FC = () => {
  return (
    <div className="py-32 bg-gray-50">
      <div className="container-custom">
        <ScrollReveal>
          <Link to="/" className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-8">
            <ArrowLeft size={16} className="mr-2" /> Volver al inicio
          </Link>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h1 className="mb-4">Contacto</h1>
              <p className="text-lg text-gray-600">
                ¿Querés mejorar la arquitectura de recruiting de tu empresa? Escribime por WhatsApp y coordinamos una videollamada para conversar sobre procesos, métricas e implementación.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <ScrollReveal>
              <div>
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MessageCircle size={20} className="mr-3 mt-1 text-primary-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-dark-500">WhatsApp</h3>
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary-500 transition-colors"
                        >
                          54 9 11 3602 3471
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail size={20} className="mr-3 mt-1 text-primary-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-dark-500">Email</h3>
                        <a
                          href="mailto:mariano@hrlevel-up.com"
                          className="text-gray-600 hover:text-primary-500 transition-colors"
                        >
                          mariano@hrlevel-up.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin size={20} className="mr-3 mt-1 text-primary-500 flex-shrink-0" />
                      <div>
                        <h3 className="font-medium text-dark-500">Ubicación</h3>
                        <p className="text-gray-600">Ciudad de Buenos Aires, Argentina</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="text-lg font-medium mb-4">Horario de atención</h3>
                    <div className="space-y-2 text-gray-600">
                      <p>Lunes a viernes: 9:00 - 18:00</p>
                      <p>Sábados y domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Invitación a WhatsApp */}
            <ScrollReveal delay={0.2}>
              <div>
                <div className="bg-white rounded-lg shadow-sm p-8 h-full flex flex-col items-center justify-center text-center min-h-[340px]">
                  <h2 className="text-2xl font-semibold mb-4 text-dark-500">Escribime por WhatsApp</h2>
                  <p className="text-gray-600 mb-8">
                    Te respondo a la brevedad para coordinar una conversación.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <MessageCircle size={22} />
                    Abrir WhatsApp
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
