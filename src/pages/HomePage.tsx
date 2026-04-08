import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ClientLogosCarousel from '../components/home/ClientLogosCarousel';
import HowWeHelpSection from '../components/home/HowWeHelpSection';
import HomeServicesSection from '../components/home/HomeServicesSection';
import OurMethodSection from '../components/home/OurMethodSection';
import WhyWorkWithMeSection from '../components/home/WhyWorkWithMeSection';
import LeadersAndSpokespeopleSection from '../components/home/LeadersAndSpokespeopleSection';
import FAQ from '../components/home/FAQ';
import ContactSection from '../components/home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ClientLogosCarousel />
      <HowWeHelpSection />
      <HomeServicesSection />
      <OurMethodSection />
      <LeadersAndSpokespeopleSection />
      <WhyWorkWithMeSection />
      <FAQ />
      <ContactSection />
    </>
  );
};

export default HomePage;
