import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import TrustBar from "@/sections/TrustBar";
import StoreOpeningSection from "@/sections/StoreOpeningSection";
import ReasonsSection from "@/sections/ReasonsSection";
import CategoriesSection from "@/sections/CategoriesSection";
import MethodsSection from "@/sections/MethodsSection";
import MailOrderSection from "@/sections/MailOrderSection";
import FlowSection from "@/sections/FlowSection";
import TrustSection from "@/sections/TrustSection";
import BusinessSection from "@/sections/BusinessSection";
import NewBusinessSection from "@/sections/NewBusinessSection";
import LINESection from "@/sections/LINESection";
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
        <StoreOpeningSection />
        <ReasonsSection />
        <CategoriesSection />
        <MethodsSection />
        <MailOrderSection />
        <FlowSection />
        <TrustSection />
        <BusinessSection />
        <NewBusinessSection />
        <LINESection />
        <FAQSection />
        <CompanySection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
