import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import QuizSection from "@/components/QuizSection";
import UnifiedFooter from "@/components/UnifiedFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <AdvantagesSection />
      <QuizSection />
      <UnifiedFooter />
    </div>
  );
};

export default Index;
