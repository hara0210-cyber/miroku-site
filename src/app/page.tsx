import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import TrustBar from "@/sections/TrustBar";
import ReasonsSection from "@/sections/ReasonsSection";
import CategoriesSection from "@/sections/CategoriesSection";
import MethodsSection from "@/sections/MethodsSection";
import FlowSection from "@/sections/FlowSection";
import TrustSection from "@/sections/TrustSection";
import ResultsSection from "@/sections/ResultsSection";
import BusinessSection from "@/sections/BusinessSection";
import FAQSection from "@/sections/FAQSection";
import CompanySection from "@/sections/CompanySection";
import FinalCTASection from "@/sections/FinalCTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ReasonsSection />
        <CategoriesSection />
        <MethodsSection />
        <FlowSection />
        <TrustSection />
        <ResultsSection />
        <BusinessSection />
        <FAQSection />
        <CompanySection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
