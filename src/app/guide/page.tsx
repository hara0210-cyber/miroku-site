import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import CTASection from "@/components/CTASection";
import { flowSteps } from "@/data/site-data";

export const metadata: Metadata = {
  title: "初めての方へ | 株式会社三六九",
  description: "初めてのご相談でも安心。査定の流れ、必要な準備、よくあるご質問をまとめてご案内します。",
};

const preparations = [
  { title: "本人確認書類", description: "運転免許証、マイナンバーカードなど" },
  { title: "お品物の情報", description: "品目、状態、付属品の有無など、わかる範囲で" },
  { title: "法人の場合", description: "別途、法人確認書類が必要となる場合があります" },
];

const concerns = [
  { q: "査定だけでも大丈夫ですか？", a: "はい、査定のみのご相談も承っています。" },
  { q: "費用はかかりますか？", a: "内容に応じてご案内いたします。まずはお気軽にご相談ください。" },
  { q: "キャンセルできますか？", a: "ご納得いただけない場合は、お断りいただけます。" },
  { q: "本人確認は必要ですか？", a: "お取引内容に応じて、必要な確認をお願いする場合があります。" },
];

const assurances = [
  { title: "丁寧な説明", description: "査定内容やプロセスを、わかりやすくご説明します。" },
  { title: "透明なプロセス", description: "お取引の各ステップを明確にし、安心して進められます。" },
  { title: "無理のないご提案", description: "ご状況に合わせた、最適な進め方をご案内いたします。" },
];

export default function GuidePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.3em] text-champagne/60 uppercase mb-4">First Time</p>
              <div className="w-10 h-px bg-champagne/40 mb-6" />
              <h1 className="font-serif text-3xl lg:text-5xl font-light tracking-[0.06em] text-white leading-relaxed">
                初めての方へ
              </h1>
              <p className="mt-6 text-[14px] leading-[2] text-white/45 tracking-wide max-w-xl">
                初めてのご相談でも安心して進められるよう、流れや準備について整理してご案内します。
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Flow - vertical timeline */}
        <section className="section-padding bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">Process</p>
              <div className="w-10 h-px bg-champagne mb-6" />
              <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[0.06em] text-charcoal mb-14">
                査定からお手続きまでの流れ
              </h2>
            </FadeInView>
            <div className="space-y-0">
              {flowSteps.map((item, i) => (
                <FadeInView key={item.step} delay={i * 0.08}>
                  <div className="relative pl-20 pb-12 last:pb-0">
                    {i < flowSteps.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-0 w-px bg-border-light" />
                    )}
                    <span className="absolute left-0 top-0 font-serif text-2xl font-light text-champagne/40">{item.step}</span>
                    <h3 className="font-serif text-lg tracking-[0.04em] text-charcoal mb-2">{item.title}</h3>
                    <p className="text-[13px] leading-[2] text-text-secondary tracking-wide">{item.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Preparations */}
        <section className="section-padding bg-warm-gray">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">Preparation</p>
              <div className="w-10 h-px bg-champagne mb-6" />
              <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[0.06em] text-charcoal mb-12">
                ご準備いただくもの
              </h2>
            </FadeInView>
            <div className="space-y-0">
              {preparations.map((item, i) => (
                <FadeInView key={i} delay={i * 0.08}>
                  <div className="border-t border-border-light py-6 first:border-t-0 first:pt-0">
                    <h3 className="font-serif text-base tracking-[0.04em] text-charcoal mb-1">{item.title}</h3>
                    <p className="text-[13px] leading-[1.9] text-text-secondary tracking-wide">{item.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Concerns */}
        <section className="section-padding bg-white">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">Q&A</p>
              <div className="w-10 h-px bg-champagne mb-6" />
              <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[0.06em] text-charcoal mb-12">
                よくあるご不安にお答えします
              </h2>
            </FadeInView>
            <div className="space-y-0">
              {concerns.map((item, i) => (
                <FadeInView key={i} delay={i * 0.06}>
                  <div className="border-t border-border-light py-6 first:border-t-0 first:pt-0">
                    <p className="text-[14px] tracking-[0.02em] text-charcoal mb-2">{item.q}</p>
                    <p className="text-[13px] leading-[1.9] text-text-secondary tracking-wide">{item.a}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Assurances */}
        <section className="section-padding bg-warm-gray">
          <div className="max-w-[900px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">Assurance</p>
              <div className="w-10 h-px bg-champagne mb-6" />
              <h2 className="font-serif text-2xl lg:text-3xl font-light tracking-[0.06em] text-charcoal mb-12">
                安心してご相談いただくために
              </h2>
            </FadeInView>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {assurances.map((item, i) => (
                <FadeInView key={i} delay={i * 0.1}>
                  <div>
                    <div className="w-8 h-px bg-champagne/50 mb-5" />
                    <h3 className="font-serif text-base tracking-[0.04em] text-charcoal mb-3">{item.title}</h3>
                    <p className="text-[13px] leading-[2] text-text-secondary tracking-wide">{item.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
