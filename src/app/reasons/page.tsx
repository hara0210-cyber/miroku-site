import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import { reasons } from "@/data/site-data";

export const metadata: Metadata = {
  title: "é¸ã°ããçç± | æ ªå¼ä¼ç¤¾ä¸å­ä¹",
  description: "ä¸å­ä¹ãé«é¡ãªã¦ã¼ã¹è³ç£ã®æ»å®ã»è²·åã§é¸ã°ããçç±ãé«é¡è³ç£ç¹åãé©æ­£æ»å®ãã¹ãã¼ãã£ã¼ãªå¯¾å¿ã",
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
                é¸ã°ããçç±
              </h1>
              <p className="mt-6 text-[14px] leading-[2] text-white/45 tracking-wide max-w-xl">
                é«é¡è³ç£ã®æ»å®ã»è²·åã§ã¯ãä¾¡æ ¼ã ãã§ãªããå®å¿ãã¦ç¸è«ã§ããä½å¶ã¨ãç´å¾æã®ããå¯¾å¿ãå¤§åã§ãã
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