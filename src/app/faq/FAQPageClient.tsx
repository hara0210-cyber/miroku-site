"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import FadeInView from "@/components/FadeInView";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: "about-appraisal",
    title: "æ»å®ã«ã¤ãã¦",
    items: [
      {
        id: "appraisal-1",
        question: "æ»å®ã ãã§ãç¸è«ã§ãã¾ããï¼",
        answer:
          "ã¯ããã¾ãã¯æ»å®ã®ç®å®ãç¥ãããã¨ãããç¸è«ãæ¿ã£ã¦ãã¾ããå£²å´ãåæã¨ããªãæ®µéã§ãããæ°è»½ã«ãç¸è«ãã ããã",
      },
      {
        id: "appraisal-2",
        question: "ç¸è«ãæ»å®ã«è²»ç¨ã¯ãããã¾ããï¼",
        answer:
          "åå®¹ã«å¿ãã¦ãæ¡åãããã¾ããè©³ç´°ã¯ãåãåããæã«ãç¢ºèªãã ããã",
      },
      {
        id: "appraisal-3",
        question: "ã©ã®ãããªåç®ã«å¯¾å¿ãã¦ãã¾ããï¼",
        answer:
          "éã»ãã©ãããé«ç´æè¨ããã©ã³ãããã°ãã¸ã¥ã¨ãªã¼ããã©ã³ãå°ç©ãªã©ã®é«é¡è³ç£ãä¸­å¿ã«ãç¸è«ãæ¿ã£ã¦ãã¾ããæ³äººã»äºæ¥­èæ¡ä»¶ã«ã¤ãã¦ãå¯¾å¿å¯è½ã§ãã",
      },
    ],
  },
  {
    id: "consultation-methods",
    title: "ç¸è«æ¹æ³ã«ã¤ãã¦",
    items: [
      {
        id: "methods-1",
        question: "ã©ã®ããã«ç¸è«ã§ãã¾ããï¼",
        answer:
          "LINEãWebãã©ã¼ã ããåãåããçªå£ãªã©ãããç¸è«ããã ãã¾ããåå®¹ã«å¿ãã¦ãé²ãæ¹ããæ¡åãããã¾ãã",
      },
      {
        id: "methods-2",
        question: "æ¥åºã§ã®ç¸è«ã¯å¯è½ã§ããï¼",
        answer:
          "æ¥åºã§ã®ãç¸è«ã¯ãäºç´å¶ã§ã®ãæ¡åãäºå®ãã¦ãã¾ããè©³ç´°ã¯äºåã«ãåãåãããã ããã",
      },
      {
        id: "methods-3",
        question: "åçã ãã§ãç¸è«ã§ãã¾ããï¼",
        answer:
          "ã¯ããã¾ãã¯åçã¨ãããç¯å²ã®æå ±ããéãããã ããã¨ã§ãåæç¢ºèªãé²ãããããªãã¾ãã",
      },
    ],
  },
  {
    id: "procedures",
    title: "æç¶ãã«ã¤ãã¦",
    items: [
      {
        id: "procedures-1",
        question: "ä½ãæºåããã°ããã§ããï¼",
        answer:
          "åç®ãç¶æãä»å±åã®æç¡ãªã©ããããç¯å²ã®æå ±ããç¨æãã ãããå¿è¦ã«å¿ãã¦ãå¥éãæ¡åãããã¾ãã",
      },
      {
        id: "procedures-2",
        question: "æ¬äººç¢ºèªã¯å¿è¦ã§ããï¼",
        answer:
          "ãåå¼åå®¹ã«å¿ãã¦ãå¿è¦ãªç¢ºèªããé¡ãããå ´åãããã¾ããå®å¿ãã¦é²ãã¦ããã ãããã«ããé©åãªæç¶ããå¤§åã«ãã¦ãã¾ãã",
      },
      {
        id: "procedures-3",
        question: "ç¸è«ãããå¿ãå£²å´ããªããã°ããã¾ãããï¼",
        answer:
          "ãããããç¸è«å¾ã«åå®¹ããç¢ºèªããã ãããç´å¾ããã ããå ´åã«æ¬¡ã®æç¶ãã¸é²ã¿ã¾ãã",
      },
    ],
  },
  {
    id: "corporate-consultation",
    title: "æ³äººç¸è«ã«ã¤ãã¦",
    items: [
      {
        id: "corporate-1",
        question: "æ³äººã§ãç¸è«ã§ãã¾ããï¼",
        answer:
          "ã¯ããæ³äººã»äºæ¥­èã®ãå®¢æ§ããã®ãç¸è«ã«ãå¯¾å¿ãã¦ãã¾ããä½å°å¨åº«ãã¾ã¨ãæ»å®ãäºæ¥­æ´çã«ä¼´ããç¸è«ãªã©ãå¯è½ã§ãã",
      },
      {
        id: "corporate-2",
        question: "è¤æ°æ¡ä»¶ãã¾ã¨ãã¦ç¸è«ã§ãã¾ããï¼",
        answer:
          "ã¯ããè¤æ°ç¹ãè¤æ°ã«ãã´ãªã«ã¾ãããæ¡ä»¶ããåå®¹ãç¢ºèªããªããå¯¾å¿ãããã¾ãã",
      },
      {
        id: "corporate-3",
        question: "ã¾ã æ¤è¨æ®µéã§ããç¸è«ãã¦ãããã§ããï¼",
        answer:
          "ã¯ããæ¯è¼æ¤è¨ä¸­ãæå ±åéä¸­ã®æ®µéã§ãåé¡ããã¾ãããã¾ãã¯ç¶æ³ããå±æãã ããã",
      },
    ],
  },
];

interface ExpandedState {
  [key: string]: boolean;
}

export default function FAQPageClient() {
  const [expandedItems, setExpandedItems] = useState<ExpandedState>({});

  const toggleItem = (itemId: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInView direction="up">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.08em] text-white leading-relaxed">
              ãããããè³ªå
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="mt-4 text-[11px] tracking-[0.25em] uppercase text-champagne">
              FAQ
            </p>
          </FadeInView>
          <FadeInView delay={0.3}>
            <p className="mt-8 text-[15px] leading-loose tracking-wide text-white/70 max-w-3xl">
              æ»å®ã®æµããå¿è¦ãªæºåãæ³äººç¸è«ã«ã¤ãã¦ãªã©ãããããã ããè³ªåãã¾ã¨ãã¦ãã¾ãããä¸æç¹ãããå ´åã¯ããæ°è»½ã«ãåãåãããã ããã
            </p>
          </FadeInView>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="bg-white section-padding">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {faqData.map((category, categoryIndex) => (
              <FadeInView key={category.id} delay={categoryIndex * 0.1}>
                <div>
                  {/* Category Heading with accent line */}
                  <div className="mb-8">
                    <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-[0.08em] text-charcoal leading-relaxed">
                      {category.title}
                    </h2>
                    <div className="w-10 h-px bg-champagne mt-4" />
                  </div>

                  {/* Accordion Items */}
                  <div className="space-y-0">
                    {category.items.map((item) => (
                      <div key={item.id} className="border-t border-border-light">
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="w-full py-6 px-0 flex items-start justify-between gap-4 hover:text-champagne transition-colors duration-300 text-left group"
                        >
                          <div className="flex-1">
                            <h3 className="font-medium text-[15px] tracking-wide text-charcoal group-hover:text-champagne transition-colors duration-300">
                              {item.question}
                            </h3>
                          </div>
                          <div className="flex-shrink-0 pt-0.5">
                            {expandedItems[item.id] ? (
                              <Minus
                                size={20}
                                className="text-champagne transition-transform duration-300"
                              />
                            ) : (
                              <Plus
                                size={20}
                                className="text-text-secondary group-hover:text-champagne transition-all duration-300"
                              />
                            )}
                          </div>
                        </button>

                        {/* Answer - Accordion Content */}
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            expandedItems[item.id]
                              ? "max-h-48 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="pb-6 px-0">
                            <p className="text-[14px] leading-loose tracking-wide text-text-secondary">
                              {item.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-charcoal section-padding">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInView>
            <div className="text-center mb-16">
              <div className="w-10 h-px bg-champagne/40 mx-auto mb-8" />
              <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-[0.08em] text-white mb-6">
                è§£æ±ºããªãå ´åã¯ããæ°è»½ã«ãç¸è«ãã ããã
              </h2>
              <p className="text-[14px] leading-loose tracking-wide text-white/60 max-w-2xl mx-auto">
                ãè³ªååå®¹ã«å¿ãã¦ãåå¥ã«ãæ¡åãããã¾ããæ»å®ç¸è«ãæ³äººç¸è«ãä¸è¬ã®ãåãåããã¾ã§æ¿ã£ã¦ãã¾ãã
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* CTA 1: LINE */}
              <a
                href="#"
                className="px-8 py-4 border border-champagne text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300 text-center"
              >
                LINEã§ç¸è«ãã
              </a>

              {/* CTA 2: Web Form */}
              <a
                href="#"
                className="px-8 py-4 border border-champagne text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300 text-center"
              >
                Webã§åãåããã
              </a>

              {/* CTA 3: Corporate */}
              <a
                href="#"
                className="px-8 py-4 border border-champagne text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300 text-center"
              >
                æ³äººç¸è«ã¯ãã¡ã
              </a>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
