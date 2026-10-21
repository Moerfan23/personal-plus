import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import WhySection from './components/WhySection';
import PricingSection from './components/PricingSection';
import StatsSection from './components/StatsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="personal-plus-app">
      {/* 1. Sticky Navbar */}
      <Navbar />

      <main>
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. Featured Clients & Deployments Section */}
        <ClientsSection />

        {/* 5. Brand Strengths Section */}
        <WhySection />

        {/* 6. Pricing Section */}
        <PricingSection />

        {/* 7. Stats + Testimonial Section */}
        <StatsSection />

        {/* 8. Blog Section */}
        <BlogSection />

        {/* 9. Contact / Lead Capture Section */}
        <ContactSection />

        {/* 10. Final Conversion CTA Band */}
        <CtaBand />
      </main>

      {/* 11. Footer */}
      <Footer />
    </div>
  );
};

export default App;
