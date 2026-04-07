import CTASection from "@/components/landing/CTASection";
import Curriculum from "@/components/landing/Curriculum";
import FocusSection from "@/components/landing/FocusSection";
import { Footer } from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import PricingSection from "@/components/landing/PricingSection";
import SelfPacedSection from "@/components/landing/SelfPacedSection";
import SkillsSection from "@/components/landing/SkillsSection";
import TestimonialCarousel from "@/components/landing/TestimonialCarousel";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <FocusSection />
      <SkillsSection />
      <SelfPacedSection />
      <Curriculum />
      <TestimonialCarousel />
      <PricingSection />
      <CTASection />

      <Footer />
    </div>
  );
}
