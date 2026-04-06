import CTASection from "@/components/landing/CTASection";
import Curriculum from "@/components/landing/Curriculum";
import { Footer } from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import PricingSection from "@/components/landing/PricingSection";
import SelfPacedSection from "@/components/landing/SelfPacedSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SelfPacedSection />
      <Curriculum />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
