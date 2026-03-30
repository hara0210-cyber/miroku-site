import Link from "next/link";
import FadeInView from "@/components/FadeInView";
import { Building2 } from "lucide-react";

const services = [
  "ä½å°å¨åº«ã®ãç¸è«",
  "ã¾ã¨ãæ»å®",
  "äºæ¥­èéã®ãç¸è«",
  "B2Båå¼ã®ãç¸è«",
  "åå¥å¯¾å¿ã®ãæ¡å",
];

export default function BusinessSection() {
  return (
    <section className="section-padding bg-charcoal" id="business">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <FadeInView>
            <div>
              <Building2 size={20} className="text-champagne/50 mb-6" strokeWidth={1.2} />
              <p className="text-[11px] tracking-[0.25em] text-champagne/60 uppercase mb-4">
                For Business
              </p>
              <div className="w-10 h-px bg-champagne/40 mb-6" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.06em] leading-relaxed text-white mb-6">
                æ³äººã»äºæ¥­èã®ãå®¢æ§ã¸
              </h2>
              <p className="text-[14px] leading-[2] text-white/50 tracking-wide max-w-md mb-10">
                ä½å°å¨åº«ãã¾ã¨ãæ»å®ãäºæ¥­æ´çã«ä¼´ãè³ç£ã®ãç¸è«ãªã©ãæ³äººã»äºæ¥­èåãã®ãåãåããã«ãå¯¾å¿ãã¦ãã¾ããæ¡ä»¶ã®åå®¹ã«å¿ãã¦ãåå¥ã«ãæ¡åãããã¾ãã
              </p>
              <Link
                href="/business"
                className="inline-block px-8 py-4 border border-champagne/30 text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-500"
              >
                æ³äººç¸è«ããã
              </Link>
            </div>
          </FadeInView>

          {/* Right: Services list */}
          <FadeInView delay={0.2}>
            <div className="space-y-0">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="border-t border-white/[0.06] py-5 flex items-center gap-4 first:border-t-0 first:pt-0"
                >
                  <span className="font-serif text-sm text-champagne/30 w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] tracking-[0.04em] text-white/70">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
