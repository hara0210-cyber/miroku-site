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
    title: "査定について",
    items: [
      {
        id: "appraisal-1",
        question: "査定だけでも相談できますか？",
        answer:
          "はい。まずは査定の目安を知りたいというご相談も承っています。売却を前提としない段階でも、お気軽にご相談ください。",
      },
      {
        id: "appraisal-2",
        question: "相談や査定に費用はかかりますか？",
        answer:
          "内容に応じてご案内いたします。詳細はお問い合わせ時にご確認ください。",
      },
      {
        id: "appraisal-3",
        question: "どのような品目に対応していますか？",
        answer:
          "金・プラチナ、高級時計、ブランドバッグ、ジュエリー、ブランド小物などの高額資産を中心にご相談を承っています。法人・事業者案件についても対応可能です。",
      },
    ],
  },
  {
    id: "consultation-methods",
    title: "相談方法について",
    items: [
      {
        id: "methods-1",
        question: "どのように相談できますか？",
        answer:
          "LINE、Webフォーム、お問い合わせ窓口などからご相談いただけます。内容に応じて、進め方をご案内いたします。",
      },
      {
        id: "methods-2",
        question: "来店での相談は可能ですか？",
        answer:
          "来店でのご相談は、予約制でのご案内を予定しています。詳細は事前にお問い合わせください。",
      },
      {
        id: "methods-3",
        question: "写真だけでも相談できますか？",
        answer:
          "はい。まずは写真とわかる範囲の情報をお送りいただくことで、初期確認を進めやすくなります。",
      },
    ],
  },
  {
    id: "procedures",
    title: "手続きについて",
    items: [
      {
        id: "procedures-1",
        question: "何を準備すればよいですか？",
        answer:
          "品目、状態、付属品の有無など、わかる範囲の情報をご用意ください。必要に応じて、別途ご案内いたします。",
      },
      {
        id: "procedures-2",
        question: "本人確認は必要ですか？",
        answer:
          "お取引内容に応じて、必要な確認をお願いする場合があります。安心して進めていただくためにも、適切な手続きを大切にしています。",
      },
      {
        id: "procedures-3",
        question: "相談したら必ず売却しなければいけませんか？",
        answer:
          "いいえ。ご相談後に内容をご確認いただき、ご納得いただいた場合に次の手続きへ進みます。",
      },
    ],
  },
  {
    id: "corporate-consultation",
    title: "法人相談について",
    items: [
      {
        id: "corporate-1",
        question: "法人でも相談できますか？",
        answer:
          "はい。法人・事業者のお客様からのご相談にも対応しています。余剰在庫、まとめ査定、事業整理に伴うご相談なども可能です。",
      },
      {
        id: "corporate-2",
        question: "複数案件をまとめて相談できますか？",
        answer:
          "はい。複数点や複数カテゴリにまたがる案件も、内容を確認しながら対応いたします。",
      },
      {
        id: "corporate-3",
        question: "まだ検討段階ですが相談してもよいですか？",
        answer:
          "はい。比較検討中、情報収集中の段階でも問題ありません。まずは状況をご共有ください。",
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
              よくあるご質問
            </h1>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="mt-4 text-[11px] tracking-[0.25em] uppercase text-champagne">
              FAQ
            </p>
          </FadeInView>
          <FadeInView delay={0.3}>
            <p className="mt-8 text-[15px] leading-loose tracking-wide text-white/70 max-w-3xl">
              査定の流れや必要な準備、法人相談についてなど、よくいただくご質問をまとめています。ご不明点がある場合は、お気軽にお問い合わせください。
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
                解決しない場合は、お気軽にご相談ください。
              </h2>
              <p className="text-[14px] leading-loose tracking-wide text-white/60 max-w-2xl mx-auto">
                ご質問内容に応じて、個別にご案内いたします。査定相談、法人相談、一般のお問い合わせまで承っています。
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
                LINEで相談する
              </a>

              {/* CTA 2: Web Form */}
              <a
                href="#"
                className="px-8 py-4 border border-champagne text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300 text-center"
              >
                Webで問い合わせる
              </a>

              {/* CTA 3: Corporate */}
              <a
                href="#"
                className="px-8 py-4 border border-champagne text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300 text-center"
              >
                法人相談はこちら
              </a>
            </div>
          </FadeInView>
        </div>
      </section>
    </>
  );
}
