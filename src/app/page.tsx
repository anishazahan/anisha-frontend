import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import SelfPacedSection from "@/components/landing/SelfPacedSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <SelfPacedSection />
    </div>
  );
}
