"use client";

import { useState } from "react";
import Link from "next/link";
import FadeInView from "@/components/FadeInView";
import SectionTitle from "@/components/SectionTitle";
import { faqData } from "@/data/site-data";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayFaq = faqData.slice(0, 5);

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <SectionTitle
            subtitle="FAQ"
            title="ãããããè³ªå"
          />
        </FadeInView>

        <div className="space-y-0">
          {displayFaq.map((item, i) => (
            <FadeInView key={i} delay={i * 0.05}>
              <div className="border-t border-border-light">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="text-[14px] lg:text-[15px] tracking-[0.02em] text-charcoal pr-8">
                    {item.question}
                  </span>
                  <span className="shrink-0 text-text-tertiary group-hover:text-champagne transition-colors">
                    {openIndex === i ? (
                      <Minus size={16} strokeWidth={1.2} />
                    ) : (
                      <Plus size={16} strokeWidth={1.2} />
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-400 ease-out ${
                    openIndex === i ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-[13px] leading-[2] text-text-secondary tracking-wide pl-0 pr-8">
                    {item.answer}
                  </p>
                </div>
              </div>
            </FadeInView>
          ))}
          {/* Bottom border */}
          <div className="border-t border-border-light" />
        </div>

        <FadeInView>
          <div className="text-center mt-14">
            <Link
              href="/faq"
              className="text-[13px] tracking-[0.1em] text-champagne hover:text-champagne-light transition-colors duration-300"
            >
              ãã¹ã¦ã®FAQãè¦ã â
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
