import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
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
              We help tech companies build exceptional software products through expert development and strategic partnerships.
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
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-300 hover:text-primary-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link to="/#about" className="text-gray-300 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link to="/team-calculator" className="text-gray-300 hover:text-primary-400 transition-colors">Team Calculator</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Mobile Applications</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">DevOps & Architecture</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-primary-400 transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneCall size={20} className="mr-3 mt-1 text-primary-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-primary-400" />
                <span className="text-gray-300">contact@levelup.dev</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-primary-400" />
                <span className="text-gray-300">123 Tech Lane, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} levelUp. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;