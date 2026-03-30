import Link from "next/link";
import FadeInView from "@/components/FadeInView";
import SectionTitle from "@/components/SectionTitle";
import { sampleResults } from "@/data/site-data";

export default function ResultsSection() {
  return (
    <section className="section-padding bg-white" id="results">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <SectionTitle
            subtitle="Results"
            title="è²·åå®ç¸¾"
            description="ãç¸è«ã¤ã¡ã¼ã¸ãæã£ã¦ããã ãããããåç®ãã¨ã®åèäºä¾ãæ²è¼ãã¦ãã¾ãã"
          />
        </FadeInView>

        {/* Disclaimer */}
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
              <div className="border border-border-light p-8 group hover:-translate-y-0.5 transition-all duration-500">
                {/* Image placeholder */}
                <div className="w-full aspect-[4/3] bg-warm-gray mb-6 flex items-center justify-center">
                  <span className="font-serif text-3xl font-light text-charcoal/[0.06]">
                    {result.brand.charAt(0)}
                  </span>
                </div>

                {/* Category tag */}
                <span className="text-[10px] tracking-[0.2em] text-text-tertiary uppercase">
                  {result.category}
                </span>

                {/* Brand */}
                <h3 className="font-serif text-lg tracking-[0.08em] text-charcoal mt-1 mb-1">
                  {result.brand}
                </h3>

                {/* Item */}
                <p className="text-[13px] text-text-secondary tracking-wide mb-4">
                  {result.item}
                </p>

                {/* Price */}
                <p className="font-serif text-2xl font-light text-champagne tracking-wide">
                  {result.price}
                </p>

                {/* Date and note */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] text-text-tertiary tracking-wide">
                    {result.date}
                  </span>
                  <span className="text-[10px] text-text-tertiary">
                    {result.note}
                  </span>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView>
          <div className="text-center mt-14">
            <Link
              href="/results"
              className="inline-block px-10 py-4 border border-border-light text-[13px] tracking-[0.15em] text-text-secondary hover:border-champagne hover:text-champagne transition-all duration-300"
            >
              å®ç¸¾ä¸è¦§ãè¦ã
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
