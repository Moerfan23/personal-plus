import type { Metadata } from "next";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ClientsSection from "@/components/landing/ClientsSection";
import WhySection from "@/components/landing/WhySection";
import PricingSection from "@/components/landing/PricingSection";
import StatsSection from "@/components/landing/StatsSection";
import BlogSection from "@/components/landing/BlogSection";
import ContactSection from "@/components/landing/ContactSection";
import CtaBand from "@/components/landing/CtaBand";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Personal Plus | بيرسونال بلس - من خبرتك إلى مشروعك الرقمي",
  description:
    "منصة بيرسونال بلس - حوّل خبرتك ومهاراتك إلى مشروع رقمي متكامل وموقع شخصي احترافي.",
};

export default function LandingPage() {
  return (
    <div className="personal-plus-app">
      <Navbar />

      <main>
        <HeroSection />
        <ServicesSection />
        <ClientsSection />
        <WhySection />
        <PricingSection />
        <StatsSection />
        <BlogSection />
        <ContactSection />
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
