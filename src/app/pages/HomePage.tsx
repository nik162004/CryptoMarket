import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProblemSection } from "../components/ProblemSection";
import { SolutionSection } from "../components/SolutionSection";
import { HowItWorksSection } from "../components/HowItWorksSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ComparisonSection } from "../components/ComparisonSection";
import { PricingSection } from "../components/PricingSection";
import { FAQSection } from "../components/FAQSection";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div style={{ background: "#000000", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
