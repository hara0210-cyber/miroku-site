import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import { reasons } from "@/data/site-data";

export const metadata: Metadata = {
  title: "選ばれる理由 | 株式会社三六九",
  description: "三六九が高額リユース資産の査定・買取で選ばれる理由。高額資産特化、適正査定、スピーディーな対応。",
};

export default function ReasonsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.3em] text-champagne/60 uppercase mb-4">Why Choose Us</p>
              <div className="w-10 h-px bg-champagne/40 mb-6" />
              <h1 className="font-serif text-3xl lg:text-5xl font-light tracking-[0.06em] text-white leading-relaxed">
                選ばれる理由
              </h1>
              <p className="mt-6 text-[14px] leading-[2] text-white/45 tracking-wide max-w-xl">
                高額資産の査定・買取では、価格だけでなく、安心して相談できる体制と、納得感のある対応が大切です。
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Reasons Grid */}
        <section className="section-padding bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
              {reasons.map((reason, i) => (
                <FadeInView key={reason.number} delay={i * 0.08}>
                  <div className="group">
                    <div className="w-8 h-px bg-champagne/50 mb-6 group-hover:w-12 transition-all duration-500" />
                    <span className="font-serif text-3xl font-light text-champagne/40 tracking-wide">
                      {reason.number}
                    </span>
                    <h3 className="font-serif text-lg lg:text-xl font-normal text-charcoal tracking-[0.04em] leading-relaxed mt-3 mb-4 whitespace-pre-line">
                      {reason.title}
                    </h3>
                    <p className="text-[13px] leading-[2] text-text-secondary tracking-wide">
                      {reason.description}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}