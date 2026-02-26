import Navbar from "@/components/Navbar";
import MarqueeBanner from "@/components/MarqueeBanner";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BalanceSection from "@/components/BalanceSection";
import ProductSection from "@/components/ProductSection";
import WhySection from "@/components/WhySection";
import ManifestoSection from "@/components/ManifestoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <MarqueeBanner />
      <main>
        <HeroSection />
        <ProblemSection />
        <BalanceSection />
        <ProductSection />
        <WhySection />
        <ManifestoSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
