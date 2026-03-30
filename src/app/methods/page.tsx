import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import { methods, flowSteps } from "@/data/site-data";
import { MessageCircle, Globe, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "è²·åæ¹æ³ | æ ªå¼ä¼ç¤¾ä¸å­ä¹",
  description: "LINEæ»å®ãWebæ»å®ãæ¥åºæ»å®ããé½åã«åããã¦é¸ã¹ããç¸è«æ¹æ³ããæ¡åãã¾ãã",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  MessageCircle, Globe, MapPin,
};

export default function MethodsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.3em] text-champagne/60 uppercase mb-4">How to Start</p>
              <div className="w-10 h-px bg-champagne/40 mb-6" />
              <h1 className="font-serif text-3xl lg:text-5xl font-light tracking-[0.06em] text-white leading-relaxed">
                ãé½åã«åããã¦é¸ã¹ããç¸è«æ¹æ³
              </h1>
              <p className="mt-6 text-[14px] leading-[2] text-white/45 tracking-wide max-w-xl">
                ã¾ãã¯æ°è»½ã«ç¸è«ãããæ¹ãããã£ããç¢ºèªããªããé²ãããæ¹ããç¶æ³ã«åããã¦é¸ã³ãããå°ç·ããç¨æãã¦ãã¾ãã
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Methods */}
        <section className="section-padding bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
              {methods.map((method, i) => {
                const Icon = iconMap[method.icon];
                return (
                  <FadeInView key={method.id} delay={i * 0.12}>
                    <div className="border border-border-light p-8 lg:p-10 h-full flex flex-col" id={method.id}>
                      {Icon && <Icon size={24} className="text-champagne/70 mb-6" strokeWidth={1.2} />}
                      <p className="text-[10px] tracking-[0.25em] text-text-tertiary uppercase mb-2">{method.nameEn}</p>
                      <h3 className="font-serif text-xl lg:text-2xl tracking-[0.06em] text-charcoal mb-4">{method.name}</h3>
                      <p className="text-[13px] leading-[2] text-text-secondary tracking-wide mb-8">{method.description}</p>
                      <div className="mt-auto flex items-center gap-0">
                        {method.steps.map((step, si) => (
                          <div key={si} className="flex items-center">
                            <div className="flex flex-col items-center">
                              <span className="font-serif text-[11px] text-champagne/50 mb-1">{String(si + 1).padStart(2, "0")}</span>
                              <span className="text-[11px] tracking-wide text-text-secondary whitespace-nowrap">{step}</span>
                            </div>
                            {si < method.steps.length - 1 && <div className="w-8 lg:w-6 h-px bg-border-light mx-2 mt-3" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </section>

        {/* Flow */}
        <section className="section-padding bg-charcoal">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <div className="text-center mb-16 lg:mb-20">
                <p className="text-[11px] tracking-[0.25em] text-champagne/70 uppercase mb-4">Process</p>
                <div className="w-10 h-px bg-champagne/40 mx-auto mb-6" />
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.08em] leading-relaxed text-white">
                  ãç¸è«ãããæç¶ãã¾ã§ã®æµã
                </h2>
              </div>
            </FadeInView>
            <div className="hidden lg:grid grid-cols-5 gap-0">
              {flowSteps.map((item, i) => (
                <FadeInView key={item.step} delay={i * 0.12}>
                  <div className="relative px-6">
                    {i < flowSteps.length - 1 && (
                      <div className="absolute top-8 left-[calc(50%+40px)] right-0 h-px bg-champagne/15" />
                    )}
                    <span className="font-serif text-3xl font-light text-champagne/30 tracking-wide">{item.step}</span>
                    <h3 className="font-serif text-base text-white tracking-[0.06em] mt-3 mb-2">{item.title}</h3>
                    <p className="text-[12px] leading-[2] text-white/45 tracking-wide">{item.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
            <div className="lg:hidden space-y-0">
              {flowSteps.map((item, i) => (
                <FadeInView key={item.step} delay={i * 0.1}>
                  <div className="relative pl-16 pb-10">
                    {i < flowSteps.length - 1 && <div className="absolute left-5 top-10 bottom-0 w-px bg-champagne/15" />}
                    <span className="absolute left-0 top-0 font-serif text-2xl font-light text-champagne/30">{item.step}</span>
                    <h3 className="font-serif text-lg text-white tracking-[0.06em] mb-2">{item.title}</h3>
                    <p className="text-[13px] leading-[2] text-white/45 tracking-wide">{item.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        <CTASection theme="light" />
      </main>
      <Footer />
    </>
  );
}