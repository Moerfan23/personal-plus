import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ClientsSection from './components/ClientsSection';
import PricingSection from './components/PricingSection';
import StatsSection from './components/StatsSection';
import BlogSection from './components/BlogSection';
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

        {/* 5. Pricing Section */}
        <PricingSection />

        {/* 6. Stats + Testimonial Section */}
        <StatsSection />

        {/* 7. Blog Section */}
        <BlogSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
};

export default App;
