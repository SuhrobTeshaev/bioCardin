import React from "react";
import HeroSection from "@/components/landing/HeroSection";
import InformationSection from "@/components/landing/InformationSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import SpecialistOpinionSection from "@/components/landing/SpecialistOpinionSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Product Image and Lead Capture Form */}
      <HeroSection />

      {/* Information Sections (Symptoms, Causes, Treatment, Results) */}
      <InformationSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Specialist Opinion Section */}
      <SpecialistOpinionSection />

      {/* Footer with Contact, Regulatory Info, and Trust Badges */}
    
    </main>
  );
}
