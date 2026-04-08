import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../common/Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Servicios', href: '/services' },
    { name: 'Quiénes somos', href: '/about' },
    { name: 'Formación', href: '/formacion' },
    { name: 'LinkedIn para líderes', href: '/linkedin-para-lideres' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <Logo className="h-10" vertical={false} />
          </Link>

          {/* Hamburger (desktop + mobile) */}
          <button
            className="text-dark-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
            aria-controls="site-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Drawer navigation (desktop + mobile) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          />

          <div
            id="site-menu"
            className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl p-6 md:p-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="flex-shrink-0" aria-label="Ir al inicio">
                <Logo className="h-10" vertical={false} />
              </Link>
              <button
                className="text-dark-500"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-dark-500 hover:text-primary-500 font-medium transition-colors text-lg"
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-6 mt-2 border-t border-gray-100">
                <a
                  href="https://wa.me/5491136023471"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;