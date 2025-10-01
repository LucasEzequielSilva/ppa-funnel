import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PainSection from "@/components/PainSection";
import TransformationSection from "@/components/TransformationSection";
import CourseStackSection from "@/components/CourseStackSection";
import ModulesSection from "@/components/ModulesSection";
import BenefitsSection from "@/components/BenefitsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function LandingPage() {
  const handleCtaClick = () => {
    console.log('CTA clicked - would redirect to checkout');
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection onCtaClick={handleCtaClick} />
      <PainSection />
      <TransformationSection />
      <CourseStackSection />
      <div id="modulos">
        <ModulesSection />
      </div>
      <div id="beneficios">
        <BenefitsSection />
      </div>
      <GuaranteeSection onCtaClick={handleCtaClick} />
      <div id="pricing">
        <PricingSection onCtaClick={handleCtaClick} />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <FinalCTASection onCtaClick={handleCtaClick} />
    </div>
  );
}
