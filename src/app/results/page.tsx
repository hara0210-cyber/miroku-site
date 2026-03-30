import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import { sampleResults } from "@/data/site-data";

export const metadata: Metadata = {
  title: "è²·åå®ç¸¾ | æ ªå¼ä¼ç¤¾ä¸å­ä¹",
  description: "é«é¡ãªã¥ã¼ã¹è³ç£ã®è²·åå®ç¸¾ä¸è¦§ãéã»ãã©ãããé«ç´æè¨ããã©ã³ãããã°ãã¸ã¥ã¨ãªã¼ã®åèäºä¾ã",
};

export default function ResultsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.3em] text-champagne/60 uppercase mb-4">Results</p>
              <div className="w-10 h-px bg-champagne/40 mb-6" />
              <h1 className="font-serif text-3xl lg:text-5xl font-light tracking-[0.06em] text-white leading-relaxed">
                è²·åå®ç¸¾
              </h1>
              <p className="mt-6 text-[14px] leading-[2] text-white/45 tracking-wide max-w-xl">
                ãç¸è«ã¤ã¡ã¼ã¸ãæã£ã¦ããã ãããããåç®ãã¨ã®åèäºä¾ãæ²è¼ãã¦ãã¾ãã
              </p>
            </FadeInView>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <div className="text-center mb-12">
                <p className="inline-block text-[11px] tracking-[0.1em] text-text-tertiary border border-border-light px-5 py-2">
                  â» æ²è¼åå®¹ã¯ãµã³ãã«ãã¼ã¿ã§ããå®éã®è²·åä¾¡æ ¼ã¯æ»å®æã®å¸å ´ç¸å ´ã«ããå¤åãã¾ãã
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {sampleResults.map((result, i) => (
                <FadeInView key={result.id} delay={i * 0.08}>
                  <div className="border border-border-light p-8 hover:-translate-y-0.5 transition-all duration-500">
                    <div className="w-full aspect-[4/3] bg-warm-gray mb-6 flex items-center justify-center">
                      <span className="font-serif text-3xl font-light text-charcoal/[0.06]">{result.brand.charAt(0)}</span>
                    </div>
                    <span className="text-[10px] tracking-[0.2em] text-text-tertiary uppercase">{result.category}</span>
                    <h3 className="font-serif text-lg tracking-[0.08em] text-charcoal mt-1 mb-1">{result.brand}</h3>
                    <p className="text-[13px] text-text-secondary tracking-wide mb-4">{result.item}</p>
                    <p className="font-serif text-2xl font-light text-champagne tracking-wide">{result.price}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[11px] text-text-tertiary tracking-wide">{result.date}</span>
                      <span className="text-[10px] text-text-tertiary">{result.note}</span>
                    </div>
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