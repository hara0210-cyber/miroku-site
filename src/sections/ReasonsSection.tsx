import FadeInView from "@/components/FadeInView";
import SectionTitle from "@/components/SectionTitle";
import { reasons } from "@/data/site-data";

export default function ReasonsSection() {
  return (
    <section className="section-padding bg-white" id="reasons">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <SectionTitle
            subtitle="Why Choose Us"
            title="三六九が選ばれる理由"
            description="高額資産の査定・買取では、価格だけでなく、安心して相談できる体制と、納得感のある対応が大切です。"
          />
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {reasons.map((reason, i) => (
            <FadeInView key={reason.number} delay={i * 0.1}>
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
  );
}
