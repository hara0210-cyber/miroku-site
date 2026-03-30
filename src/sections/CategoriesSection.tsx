import Link from "next/link";
import FadeInView from "@/components/FadeInView";
import SectionTitle from "@/components/SectionTitle";
import { categories } from "@/data/site-data";

export default function CategoriesSection() {
  return (
    <section className="section-padding bg-warm-gray" id="categories">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <SectionTitle
            subtitle="Categories"
            title="åæ±åç®"
            description="é«é¡è³ç£ãä¸­å¿ã«ãå¹åºããç¸è«ãæ¿ã£ã¦ãã¾ããåç®ãã¨ã®ç¹æ§ãè¸ã¾ããä¸å¯§ã«ç¢ºèªãããã¾ãã"
          />
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <FadeInView key={cat.id} delay={i * 0.08}>
              <Link href={`/categories/${cat.id}`} className="group block">
                <div className="bg-white border border-border-light p-8 lg:p-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/[0.03]">
                  {/* Placeholder visual area */}
                  <div className="w-full h-40 bg-warm-gray/60 mb-8 flex items-center justify-center">
                    <span className="font-serif text-5xl font-light text-charcoal/[0.06]">
                      {cat.nameEn.charAt(0)}
                    </span>
                  </div>
                  <p className="text-[10px] tracking-[0.25em] text-text-tertiary uppercase mb-2">
                    {cat.nameEn}
                  </p>
                  <h3 className="font-serif text-xl tracking-[0.06em] text-charcoal mb-3">
                    {cat.name}
                  </h3>
                  <p className="text-[13px] leading-[1.9] text-text-secondary tracking-wide mb-6">
                    {cat.description}
                  </p>
                  <span className="text-[12px] tracking-[0.1em] text-champagne group-hover:text-champagne-light transition-colors duration-300">
                    è©³ããè¦ã â
                  </span>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
