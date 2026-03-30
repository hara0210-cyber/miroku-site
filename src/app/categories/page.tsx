import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import { categories } from "@/data/site-data";

export const metadata: Metadata = {
  title: "åæ±åç® | æ ªå¼ä¼ç¤¾ä¸å­ä¹",
  description: "éã»ãã©ãããé«ç´æè¨ããã©ã³ãããã°ãã¸ã¥ã¨ãªã¼ãªã©ãé«é¡ãªã¦ã¼ã¹è³ç£ã®åæ±åç®ä¸è¦§ã",
};

export default function CategoriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.3em] text-champagne/60 uppercase mb-4">Categories</p>
              <div className="w-10 h-px bg-champagne/40 mb-6" />
              <h1 className="font-serif text-3xl lg:text-5xl font-light tracking-[0.06em] text-white leading-relaxed">
                åæ±åç®
              </h1>
              <p className="mt-6 text-[14px] leading-[2] text-white/45 tracking-wide max-w-xl">
                é«é¡è³ç£ãä¸­å¿ã«ãå¹åºããç¸è«ãæ¿ã£ã¦ãã¾ããåç®ãã¨ã®ç¹æ§ãè¸ã¾ããä¸å¯§ã«ç¢ºèªãããã¾ãã
              </p>
            </FadeInView>
          </div>
        </section>

        <section className="section-padding bg-warm-gray">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {categories.map((cat, i) => (
                <FadeInView key={cat.id} delay={i * 0.08}>
                  <div className="bg-white border border-border-light p-8 lg:p-10 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.03] transition-all duration-500">
                    <div className="w-full h-40 bg-warm-gray/60 mb-8 flex items-center justify-center">
                      <span className="font-serif text-5xl font-light text-charcoal/[0.06]">
                        {cat.nameEn.charAt(0)}
                      </span>
                    </div>
                    <p className="text-[10px] tracking-[0.25em] text-text-tertiary uppercase mb-2">{cat.nameEn}</p>
                    <h3 className="font-serif text-xl tracking-[0.06em] text-charcoal mb-3">{cat.name}</h3>
                    <p className="text-[13px] leading-[1.9] text-text-secondary tracking-wide">{cat.description}</p>
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