import Link from "next/link";
import FadeInView from "@/components/FadeInView";

const companyLinks = [
  { label: "ä»£è¡¨ã¡ãã»ã¼ã¸", href: "/company#message" },
  { label: "ä¼ç¤¾æ¦è¦", href: "/company#overview" },
  { label: "æå¨å°", href: "/company#location" },
  { label: "è¨±èªå¯æå ±", href: "/company#license" },
];

export default function CompanySection() {
  return (
    <section className="section-padding bg-warm-gray" id="company-link">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
        <FadeInView>
          <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">
            About Us
          </p>
          <div className="w-10 h-px bg-champagne mx-auto mb-6" />
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.06em] leading-relaxed text-charcoal mb-6">
            ä¼ç¤¾æå ±ã«ã¤ãã¦
          </h2>
          <p className="text-[14px] leading-[2] text-text-secondary tracking-wide max-w-lg mx-auto mb-14">
            äºæ¥­åå®¹ãåºæ¬æå ±ãæå¨å°ãªã©ãä¼ç¤¾æå ±ããç¢ºèªããã ãã¾ãã
            <br className="hidden sm:block" />
            å®å¿ãã¦ãç¸è«ããã ãããã«ãå¿è¦ãªæå ±ãæ´çãã¦ãæ¡åãã¦ãã¾ãã
          </p>
        </FadeInView>

        <FadeInView delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {companyLinks.map((item, i) => (
              <div key={item.label} className="flex items-center">
                <Link
                  href={item.href}
                  className="px-6 py-3 text-[13px] tracking-[0.08em] text-text-secondary hover:text-champagne transition-colors duration-300"
                >
                  {item.label}
                </Link>
                {i < companyLinks.length - 1 && (
                  <span className="hidden sm:block w-px h-3 bg-border-light" />
                )}
              </div>
            ))}
          </div>
        </FadeInView>

        <FadeInView delay={0.25}>
          <div className="mt-10">
            <Link
              href="/company"
              className="inline-block px-10 py-4 border border-border-light text-[13px] tracking-[0.15em] text-text-secondary hover:border-champagne hover:text-champagne transition-all duration-300"
            >
              ä¼ç¤¾æ¡åãè¦ã
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
