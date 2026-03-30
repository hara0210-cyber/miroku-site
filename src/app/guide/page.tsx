import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import { flowSteps } from "@/data/site-data";

export const metadata: Metadata = {
  title: "åãã¦ã®æ¹ã¸ | æ ªå¼ä¼ç¤¾ä¸å­ä¹",
  description: "åãã¦ã®ãç¸è«ã§ãå®å¿ãæ»å®ã®æµããå¿è¦ãªæºåããããããè³ªåãã¾ã¨ãã¦ãæ¡åãã¾ãã",
};

const preparations = [
  { title: "æ¬äººç¢ºèªæ¸é¡", description: "éè»¢åè¨±è¨¼ããã¤ãã³ãã¼ã«ã¼ããªã©" },
  { title: "ãåç©ã®æå ±", description: "åç®ãç¶æãä»å±åã®æç¡ãªã©ããããç¯å²ã§" },
  { title: "æ³äººã®å ´å", description: "å¥éãæ³äººç¢ºèªæ¸é¡ãå¿è¦ã¨ãªãå ´åãããã¾ã" },
];

const concerns = [
  { q: "æ»å®ã ãã§ãå¤§ä¸å¤«ã§ããï¼", a: "ã¯ããæ»å®ã®ã¿ã®ãç¸è«ãæ¿ã£ã¦ãã¾ãã" },
  { q: "è²»ç¨ã¯ãããã¾ããï¼", a: "åå®¹ã«å¿ãã¦ãæ¡åãããã¾ããã¾ãã¯ãæ°è»½ã«ãç¸è«ãã ããã" },
  { q: "ã­ã£ã³ã»ã«ã§ãã¾ããï¼", a: "ãç´å¾ããã ããªãå ´åã¯ããæ­ãããã ãã¾ãã" },
  { q: "æ¬äººç¢ºèªã¯å¿è¦ã§ããï¼", a: "ãåå¼åå®¹ã«å¿ãã¦ãå¿è¦ãªç¢ºèªããé¡ãããå ´åãããã¾ãã" },
];

const assurances = [
  { title: "ä¸å¯§ãªèª¬æ", description: "æ»å®åå®¹ããã­ã»ã¹ãããããããããèª¬æãã¾ãã" },
  { title: "éæãªãã­ã»ã¹", description: "ãåå¼ã®åã¹ããããæç¢ºã«ããå®å¿ãã¦é²ãããã¾ãã" },
  { title: "ç¡çã®ãªããææ¡", description: "ãç¶æ³ã«åããããæé©ãªé²ãæ¹ããæ¡åãããã¾ãã" },
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.3em] text-champagne/60 uppercase mb-4">First Time</p>
              <div className="w-10 h-px bg-champagne/40 mb-6" />
              <h1 className="font-serif text-3xl lg:text-5xl font-light tracking-[0.06em] text-white leading-relaxed">
                åãã¦ã®æ¹ã¸
              </h1>
              <p className="mt-6 text-[14px] leading-[2] text-white/45 tracking-wide max-w-xl">
                åãã¦ã®ãç¸è«ã§ãå®å¿ãã¦é²ãããããããæµããæºåã«ã¤ãã¦æ´çãã¦ãæ¡åãã¾ãã
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Flow - vertical timeline */}
        <section className="section-padding bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">Process</p>
              <div className="w-10 h-px bg-champagne mb-6" />
              <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[0.06em] text-charcoal mb-14">
                æ»å®ãããæç¶ãã¾ã§ã®æµã
              </h2>
            </FadeInView>
            <div className="space-y-0">
              {flowSteps.map((item, i) => (
                <FadeInView key={item.step} delay={i * 0.08}>
                  <div className="relative pl-20 pb-12 last:pb-0">
                    {i < flowSteps.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-0 w-px bg-border-light" />
                    )}
                    <span className="absolute left-0 top-0 font-serif text-2xl font-light text-champagne/40">{item.step}</span>
                    <h3 className="font-serif text-lg tracking-[0.04em] text-charcoal mb-2">{item.title}</h3>
                    <p className="text-[13px] leading-[2] text-text-secondary tracking-wide">{item.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Preparations */}
        <section className="section-padding bg-warm-gray">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">Preparation</p>
              <div className="w-10 h-px bg-champagne mb-6" />
              <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[0.06em] text-charcoal mb-12">
                ãæºåããã ããã®
              </h2>
            </FadeInView>
            <div className="space-y-0">
              {preparations.map((item, i) => (
                <FadeInView key={i} delay={i * 0.08}>
                  <div className="border-t border-border-light py-6 first:border-t-0 first:pt-0">
                    <h3 className="font-serif text-base tracking-[0.04em] text-charcoal mb-1">{item.title}</h3>
                    <p className="text-[13px] leading-[1.9] text-text-secondary tracking-wide">{item.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Concerns */}
        <section className="section-padding bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">Q&A</p>
              <div className="w-10 h-px bg-champagne mb-6" />
              <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[0.06em] text-charcoal mb-12">
                ãããããä¸å®ã«ãç­ããã¾ã
              </h2>
            </FadeInView>
            <div className="space-y-0">
              {concerns.map((item, i) => (
                <FadeInView key={i} delay={i * 0.06}>
                  <div className="border-t border-border-light py-6 first:border-t-0 first:pt-0">
                    <p className="text-[14px] tracking-[0.02em] text-charcoal mb-2">{item.q}</p>
                    <p className="text-[13px] leading-[1.9] text-text-secondary tracking-wide">{item.a}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Assurances */}
        <section className="section-padding bg-warm-gray">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">Assurance</p>
              <div className="w-10 h-px bg-champagne mb-6" />
              <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[0.06em] text-charcoal mb-12">
                å®å¿ãã¦ãç¸è«ããã ãããã«
              </h2>
            </FadeInView>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {assurances.map((item, i) => (
                <FadeInView key={i} delay={i * 0.1}>
                  <div>
                    <div className="w-8 h-px bg-champagne/50 mb-5" />
                    <h3 className="font-serif text-base tracking-[0.04em] text-charcoal mb-3">{item.title}</h3>
                    <p className="text-[13px] leading-[2] text-text-secondary tracking-wide">{item.description}</p>
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
