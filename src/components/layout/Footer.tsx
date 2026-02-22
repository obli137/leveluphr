import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-500 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo className="h-10 mb-6" />
            <p className="text-gray-300 mb-6">
              Consultoría estratégica en procesos de recruiting, implementación de ATS, métricas y advisory para empresas en crecimiento en LatAm.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/hrlevel-up" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-primary-400 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Enlaces</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">Inicio</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Servicios</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-primary-400 transition-colors">Quiénes somos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-primary-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Servicios</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Diagnóstico & Definición</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Implementación</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Advisory mensual</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Workshops</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MessageCircle size={20} className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <a href="https://wa.me/5491136023471" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary-400 transition-colors">
                  54 9 11 3602 3471
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <a href="mailto:mariano@hrlevel-up.com" className="text-gray-300 hover:text-primary-400 transition-colors">
                  mariano@hrlevel-up.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">Ciudad de Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} LevelUp. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">Política de privacidad</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">Términos y condiciones</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;