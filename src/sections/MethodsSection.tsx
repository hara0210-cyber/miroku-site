"use client";

import Link from "next/link";
import FadeInView from "@/components/FadeInView";
import SectionTitle from "@/components/SectionTitle";
import { methods } from "@/data/site-data";
import { MessageCircle, Globe, MapPin } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  MessageCircle,
  Globe,
  MapPin,
};

const targetLabels: Record<string, string> = {
  line: "æ°è»½ã«ç¸è«ãããæ¹ã¸",
  web: "ãã£ããç¸è«ãããæ¹ã¸",
  visit: "å¯¾é¢ã§ç¢ºèªãããæ¹ã¸",
};

export default function MethodsSection() {
  return (
    <section className="section-padding bg-white" id="methods">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <SectionTitle
            subtitle="How to Start"
            title="ãé½åã«åããã¦é¸ã¹ããç¸è«æ¹æ³"
            description="ã¾ãã¯æ°è»½ã«ç¸è«ãããæ¹ãããã£ããç¢ºèªããªããé²ãããæ¹ããç¶æ³ã«åããã¦é¸ã³ãããå°ç·ããç¨æãã¦ãã¾ãã"
          />
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {methods.map((method, i) => {
            const Icon = iconMap[method.icon];
            return (
              <FadeInView key={method.id} delay={i * 0.12}>
                <div className="border border-border-light p-8 lg:p-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    {Icon && (
                      <Icon size={24} className="text-champagne/70" strokeWidth={1.2} />
                    )}
                  </div>

                  {/* English label */}
                  <p className="text-[10px] tracking-[0.25em] text-text-tertiary uppercase mb-2">
                    {method.nameEn}
                  </p>

                  {/* Name */}
                  <h3 className="font-serif text-xl lg:text-2xl tracking-[0.06em] text-charcoal mb-2">
                    {method.name}
                  </h3>

                  {/* Target */}
                  <p className="text-[12px] tracking-[0.08em] text-champagne mb-5">
                    {targetLabels[method.id]}
                  </p>

                  {/* Description */}
                  <p className="text-[13px] leading-[2] text-text-secondary tracking-wide mb-8">
                    {method.description}
                  </p>

                  {/* Steps flow */}
                  <div className="mt-auto">
                    <div className="flex items-center gap-0 mb-8">
                      {method.steps.map((step, si) => (
                        <div key={si} className="flex items-center">
                          <div className="flex flex-col items-center">
                            <span className="font-serif text-[11px] text-champagne/50 mb-1">
                              {String(si + 1).padStart(2, "0")}
                            </span>
                            <span className="text-[11px] tracking-wide text-text-secondary whitespace-nowrap">
                              {step}
                            </span>
                          </div>
                          {si < method.steps.length - 1 && (
                            <div className="w-8 lg:w-6 h-px bg-border-light mx-2 mt-3" />
                          )}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/methods#${method.id}`}
                      className="text-[12px] tracking-[0.1em] text-champagne hover:text-champagne-light transition-colors duration-300"
                    >
                      è©³ããè¦ã â
                    </Link>
                  </div>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
