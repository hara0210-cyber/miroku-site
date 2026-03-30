import FadeInView from "@/components/FadeInView";
import SectionTitle from "@/components/SectionTitle";
import { flowSteps } from "@/data/site-data";

export default function FlowSection() {
  return (
    <section className="section-padding bg-charcoal" id="flow">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <SectionTitle
            subtitle="Process"
            title="ãç¸è«ãããæç¶ãã¾ã§ã®æµã"
            description="åãã¦ã®æ¹ã«ãå®å¿ãã¦ãç¸è«ããã ãããããæµããããããããæ´çãã¦ãã¾ãã"
            theme="dark"
          />
        </FadeInView>

        {/* Desktop: horizontal flow */}
        <div className="hidden lg:grid grid-cols-5 gap-0">
          {flowSteps.map((item, i) => (
            <FadeInView key={item.step} delay={i * 0.15}>
              <div className="relative px-8">
                {/* Connecting line */}
                {i < flowSteps.length - 1 && (
                  <div className="absolute top-8 left-[calc(50%+40px)] right-0 h-px bg-champagne/15" />
                )}

                <div className="relative">
                  <span className="font-serif text-4xl font-light text-champagne/30 tracking-wide">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-lg text-white tracking-[0.06em] mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-[2] text-white/45 tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        {/* Mobile: vertical flow */}
        <div className="lg:hidden space-y-0">
          {flowSteps.map((item, i) => (
            <FadeInView key={item.step} delay={i * 0.1}>
              <div className="relative pl-16 pb-12">
                {/* Vertical line */}
                {i < flowSteps.length - 1 && (
                  <div className="absolute left-5 top-10 bottom-0 w-px bg-champagne/15" />
                )}

                {/* Number circle */}
                <div className="absolute left-0 top-0">
                  <span className="font-serif text-2xl font-light text-champagne/30 tracking-wide">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-white tracking-[0.06em] mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] leading-[2] text-white/45 tracking-wide">
                  {item.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
