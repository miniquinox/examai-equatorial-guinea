
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BenefitsSection from "@/components/BenefitsSection";
import GradingDemo from "@/components/GradingDemo";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <BenefitsSection />
      <GradingDemo />
      <FAQSection />
    </div>
  );
};

export default Index;
