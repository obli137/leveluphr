import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import FAQ from '../components/home/FAQ';
import ContactSection from '../components/home/ContactSection';
import ClientLogosCarousel from '../components/home/ClientLogosCarousel';
import TechLogosCarousel from '../components/home/TechLogosCarousel';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ClientLogosCarousel />
      <ServicesSection />
      <AboutSection />
      <FAQ />
      <ContactSection />
    </>
  );
};

export default HomePage;