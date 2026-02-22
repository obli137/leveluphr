import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const INTEREST_OPTIONS = [
  'Diagnóstico de recruiting',
  'Implementación de ATS',
  'Performance y métricas',
  'Advisory mensual',
  'Otro / Aún no lo tengo claro',
];

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        interest: '',
        message: '',
      });
    }, 1500);
  };

  const inputClasses = "mt-1 block w-full rounded-md bg-dark-600 border-dark-300 text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 py-3 px-4";

  return (
    <section id="contact" className="section bg-dark-500 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="mb-6 text-white">Aplicar a una conversación estratégica</h2>
            <p className="text-lg text-gray-300 mb-8">
              Completá el formulario y me contacto para coordinar una videollamada. Revisamos tu contexto y vemos si hay fit para trabajar juntos.
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

          <div className="bg-dark-400 rounded-lg p-8">
            {formStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-500 mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Recibí tu solicitud</h3>
                <p className="text-gray-300">
                  Te voy a contactar a la brevedad para coordinar la conversación.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className={inputClasses}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className={inputClasses}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    className={inputClasses}
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-1">
                    Tu rol
                  </label>
                  <input
                    type="text"
                    name="role"
                    id="role"
                    placeholder="Ej. Founder, Head of HR, Talent Lead"
                    className={inputClasses}
                    value={formData.role}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">
                    ¿En qué estás más interesado?
                  </label>
                  <select
                    name="interest"
                    id="interest"
                    className={inputClasses}
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="">Seleccionar</option>
                    {INTEREST_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Breve contexto (opcional)
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Qué desafío tenés hoy con el recruiting, tamaño del equipo, etc."
                    className={inputClasses}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full btn-primary flex justify-center items-center py-3"
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      'Aplicar a una conversación estratégica'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
