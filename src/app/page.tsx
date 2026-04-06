import CTASection from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import PricingSection from "@/components/landing/PricingSection";
import SelfPacedSection from "@/components/landing/SelfPacedSection";
import MovingBorderBadge from "@/components/ui/MovingBorderBadge";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SelfPacedSection />
      <div className="mt-10 bg-bg-surface_bg py-4 mx-auto flex justify-center">
        <MovingBorderBadge text="Introducing Plan" />
      </div>
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
