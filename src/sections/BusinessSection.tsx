import FadeInView from "@/components/FadeInView";
import { Building2 } from "lucide-react";
import { LINE_URL } from "@/data/site-data";

const services = [
  "余剰在庫のご相談",
  "まとめ査定",
  "事業者間のご相談",
  "B2B取引のご相談",
  "個別対応のご案内",
];

export default function BusinessSection() {
  return (
    <section className="section-padding bg-charcoal" id="business">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <FadeInView>
            <div>
              <Building2 size={20} className="text-champagne/50 mb-6" strokeWidth={1.2} />
              <p className="text-[11px] tracking-[0.25em] text-champagne/60 uppercase mb-4">
                For Business
              </p>
              <div className="w-10 h-px bg-champagne/40 mb-6" />
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.06em] leading-relaxed text-white mb-6">
                法人・事業者のお客様へ
              </h2>
              <p className="text-[14px] leading-[2] text-white/50 tracking-wide max-w-md mb-10">
                余剰在庫、まとめ査定、事業整理に伴う資産のご相談など、法人・事業者向けのお問い合わせにも対応しています。案件の内容に応じて、個別にご案内いたします。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 border border-champagne/30 text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-500"
                >
                  公式LINEで相談する
                </a>
                <a
                  href="/business"
                  className="inline-block px-8 py-4 border border-white/10 text-white/50 text-[13px] tracking-[0.15em] hover:border-white/25 hover:text-white/80 transition-all duration-500"
                >
                  詳細を見る
                </a>
              </div>
            </div>
          </FadeInView>

          {/* Right: Services list */}
          <FadeInView delay={0.2}>
            <div className="space-y-0">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="border-t border-white/[0.06] py-5 flex items-center gap-4 first:border-t-0 first:pt-0"
                >
                  <span className="font-serif text-sm text-champagne/30 w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[14px] tracking-[0.04em] text-white/70">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}
