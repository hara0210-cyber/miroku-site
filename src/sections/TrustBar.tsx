import { Shield, Gem, CalendarCheck, Building2, Scale } from "lucide-react";
import FadeInView from "@/components/FadeInView";

const trustItems = [
  { icon: Scale, label: "査定相談無料" },
  { icon: Gem, label: "高額資産に特化" },
  { icon: CalendarCheck, label: "予約制来店対応" },
  { icon: Building2, label: "法人相談可" },
  { icon: Shield, label: "コンプライアンス重視" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-b border-border-light">
      <FadeInView>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center lg:justify-between items-center py-6 lg:py-8 gap-6 lg:gap-0">
            {trustItems.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-4 lg:px-0 ${
                  i < trustItems.length - 1 ? "lg:border-r lg:border-border-light lg:pr-8" : ""
                }`}
              >
                <item.icon size={16} className="text-champagne/70" strokeWidth={1.5} />
                <span className="text-[12px] tracking-[0.1em] text-text-secondary">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
