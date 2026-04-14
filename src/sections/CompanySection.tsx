import Link from "next/link";
import FadeInView from "@/components/FadeInView";
import { MapPin } from "lucide-react";
import { storeLocations } from "@/data/site-data";

const companyLinks = [
  { label: "代表メッセージ", href: "/company#message" },
  { label: "会社概要", href: "/company#overview" },
  { label: "所在地", href: "/company#location" },
  { label: "許認可情報", href: "/company#license" },
];

export default function CompanySection() {
  return (
    <section className="section-padding bg-warm-gray" id="company-link">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">
              About Us
            </p>
            <div className="w-10 h-px bg-champagne mx-auto mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.06em] leading-relaxed text-charcoal mb-6">
              会社情報・店舗案内
            </h2>
            <p className="text-[14px] leading-[2] text-text-secondary tracking-wide max-w-lg mx-auto">
              事業内容や基本情報、拠点などの会社情報をご確認いただけます。
              <br className="hidden sm:block" />
              安心してご相談いただくために、必要な情報を整理してご案内しています。
            </p>
          </div>
        </FadeInView>

        {/* Store locations */}
        <FadeInView delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {storeLocations.map((store) => (
              <div key={store.id} className="bg-white border border-border-light p-8">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={15}
                    className="text-champagne/60 mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-[11px] tracking-[0.18em] text-champagne/70 uppercase mb-2">
                      {store.name} — {store.type}
                    </p>
                    <p className="text-[14px] tracking-[0.02em] text-text-primary leading-relaxed">
                      {store.postalCode && `${store.postalCode} `}
                      {store.address}
                    </p>
                    {store.note && (
                      <p className="text-[12px] text-text-tertiary mt-1.5">{store.note}</p>
                    )}
                    <a
                      href={store.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-[12px] tracking-[0.08em] text-champagne hover:text-champagne/70 transition-colors duration-300"
                    >
                      Google Mapで見る →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeInView>

        {/* Company nav links */}
        <FadeInView delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
            {companyLinks.map((item, i) => (
              <div key={item.label} className="flex items-center">
                <Link
                  href={item.href}
                  className="px-6 py-3 text-[13px] tracking-[0.08em] text-text-secondary hover:text-champagne transition-colors duration-300"
                >
                  {item.label}
                </Link>
                {i < companyLinks.length - 1 && (
                  <span className="hidden sm:block w-px h-3 bg-border-light" />
                )}
              </div>
            ))}
          </div>
        </FadeInView>

        <FadeInView delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/company"
              className="inline-block px-10 py-4 border border-border-light text-[13px] tracking-[0.15em] text-text-secondary hover:border-champagne hover:text-champagne transition-all duration-300"
            >
              会社案内を見る
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
