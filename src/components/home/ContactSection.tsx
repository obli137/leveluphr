import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'Web Development'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        service: 'Web Development'
      });
    }, 1500);
  };

  const inputClasses = "mt-1 block w-full rounded-md bg-dark-600 border-dark-300 text-white shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-500 focus:ring-opacity-50 py-3 px-4";

  return (
    <section id="contact" className="section bg-dark-500 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="mb-6 text-white">Let's Start a Conversation</h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to discuss your project? Fill out the form and our team will get back to you within 24 hours.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-400">
                  <CheckCircle size={24} />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">Free initial consultation</h3>
                  <p className="mt-1 text-gray-300">
                    We'll discuss your goals and recommend the best approach at no cost
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-400">
                  <CheckCircle size={24} />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">Flexible engagement models</h3>
                  <p className="mt-1 text-gray-300">
                    From team augmentation to full-cycle product development
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-primary-400">
                  <CheckCircle size={24} />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">Custom team setup</h3>
                  <p className="mt-1 text-gray-300">
                    Build a team that matches your specific technical needs
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
                <h3 className="text-lg font-medium text-white mb-2">Thank you!</h3>
                <p className="text-gray-300">
                  Your message has been sent successfully. We'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
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
                    Email Address
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
                    Company
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
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    id="service"
                    className={inputClasses}
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>Cloud Solutions</option>
                    <option>DevOps & Architecture</option>
                    <option>UI/UX Design</option>
                    <option>Team Augmentation</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className={inputClasses}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
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
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
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