import FadeInView from "@/components/FadeInView";

const trustPoints = [
  {
    title: "丁寧な確認プロセス",
    description: "お品物の状態・真贋を、専門知識に基づき丁寧に確認いたします。",
  },
  {
    title: "適正な本人確認手続き",
    description: "古物営業法に基づく本人確認を適切に実施しています。",
  },
  {
    title: "誠実なコミュニケーション",
    description: "査定根拠の丁寧な説明と、透明性のあるやり取りをお約束します。",
  },
  {
    title: "法令遵守を意識した運営",
    description: "コンプライアンスを経営の基本方針として位置づけています。",
  },
  {
    title: "個人・法人どちらにも対応",
    description: "ご状況に応じて、最適なお取引の形をご提案いたします。",
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-warm-gray" id="trust">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: Title area */}
          <FadeInView className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">
              Commitment
            </p>
            <div className="w-10 h-px bg-champagne mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.06em] leading-relaxed text-charcoal mb-6">
              安心してご相談いただくために
            </h2>
            <p className="text-[14px] leading-[2] text-text-secondary tracking-wide max-w-sm">
              高額資産のご相談は、価格だけでは判断できないものです。確認プロセスの丁寧さ、説明のわかりやすさ、法令や手続きへの配慮を大切にしています。
            </p>
          </FadeInView>

          {/* Right: Trust points */}
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {trustPoints.map((point, i) => (
                <FadeInView key={i} delay={i * 0.08}>
                  <div className="border-t border-border-light py-7 first:border-t-0 first:pt-0">
                    <h3 className="font-serif text-base lg:text-lg tracking-[0.04em] text-charcoal mb-2">
                      {point.title}
                    </h3>
                    <p className="text-[13px] leading-[1.9] text-text-secondary tracking-wide">
                      {point.description}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
