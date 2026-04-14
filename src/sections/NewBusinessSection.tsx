import FadeInView from "@/components/FadeInView";
import { Sparkles, Store } from "lucide-react";

const newBusinessItems = [
  {
    icon: Sparkles,
    label: "Online Gacha",
    title: "オンラインガチャ事業",
    description:
      "ブランド・ホビー・エンタメ性を掛け合わせた、新しい体験型サービスの展開を予定しています。オンライン上で楽しめるガチャ形式のサービスを通じ、モノの価値を身近に感じていただける場を提供することを目指しています。",
    badge: "展開予定",
  },
  {
    icon: Store,
    label: "In-Store Gacha",
    title: "店頭ブランド品ガチャ",
    description:
      "実店舗では、ご来店のお楽しみとしてブランド品ガチャ企画の展開を予定しています。高品質なアイテムとエンタメ性を掛け合わせた新しい体験を、来店の楽しみのひとつとしてお楽しみいただける空間づくりを進めています。",
    badge: "店舗オープン後展開予定",
  },
];

export default function NewBusinessSection() {
  return (
    <section className="section-padding bg-white" id="new-business">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <div className="mb-14 lg:mb-16">
            <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">
              New Business
            </p>
            <div className="w-10 h-px bg-champagne mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.06em] leading-relaxed text-charcoal">
              新たな事業展開
            </h2>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {newBusinessItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeInView key={item.label} delay={i * 0.15}>
                <div className="border border-border-light p-8 lg:p-10 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <Icon
                      size={20}
                      className="text-champagne/60"
                      strokeWidth={1.2}
                    />
                    <span className="text-[10px] tracking-[0.15em] text-text-tertiary border border-border-light px-3 py-1">
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-[10px] tracking-[0.25em] text-text-tertiary uppercase mb-2">
                    {item.label}
                  </p>
                  <h3 className="font-serif text-xl lg:text-2xl tracking-[0.04em] text-charcoal mb-5">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-[2] text-text-secondary tracking-wide">
                    {item.description}
                  </p>
                </div>
              </FadeInView>
            );
          })}
        </div>
      </div>
    </section>
  );
}
