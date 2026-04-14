import FadeInView from "@/components/FadeInView";
import { MapPin } from "lucide-react";

export default function StoreOpeningSection() {
  return (
    <section className="py-16 lg:py-20 bg-warm-gray" id="store-opening">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <div className="border border-champagne/20 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left: Announcement */}
              <div>
                <p className="text-[10px] tracking-[0.3em] text-champagne uppercase mb-4">
                  New Opening
                </p>
                <div className="w-8 h-px bg-champagne/50 mb-6" />
                <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.06em] leading-relaxed text-charcoal mb-5">
                  2026年7月1日、麻布十番エリアに
                  <br className="hidden sm:block" />
                  実店舗をオープン予定です
                </h2>
                <p className="text-[14px] leading-[2] text-text-secondary tracking-wide max-w-md">
                  新たな拠点として、麻布十番エリアに実店舗を開設いたします。
                  ご来店査定をご希望の方は、まずは公式LINEよりご連絡ください。
                </p>
              </div>

              {/* Right: Address */}
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4 py-6 border-t border-border-light first:border-t-0">
                  <MapPin
                    size={15}
                    className="text-champagne/60 mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-[11px] tracking-[0.18em] text-champagne/70 uppercase mb-2">
                      麻布十番エリア — 実店舗
                    </p>
                    <p className="text-[14px] tracking-[0.02em] text-text-primary leading-relaxed">
                      〒106-0031 東京都港区西麻布3丁目24-23
                    </p>
                    <p className="text-[12px] text-text-tertiary mt-1.5">
                      2026年7月1日 オープン予定
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 py-6 border-t border-border-light">
                  <MapPin
                    size={15}
                    className="text-champagne/60 mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-[11px] tracking-[0.18em] text-champagne/70 uppercase mb-2">
                      日本橋箱崎 — 本社
                    </p>
                    <p className="text-[14px] tracking-[0.02em] text-text-primary leading-relaxed">
                      東京都中央区日本橋箱崎町16-1 5階
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
