import React from 'react';
import { MessageCircle, Mail, MapPin, Send } from 'lucide-react';
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
                ¿Querés mejorar la arquitectura de recruiting de tu empresa? Agendá una videollamada y conversamos sobre procesos, métricas e implementación.
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

            {/* Formulario de contacto */}
            <ScrollReveal delay={0.2}>
              <div>
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-2xl font-semibold mb-6">Enviar mensaje</h2>

                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre completo
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      Enviar mensaje <Send size={18} className="ml-2" />
                    </button>
                  </form>
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