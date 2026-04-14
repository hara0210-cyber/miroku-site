import FadeInView from "@/components/FadeInView";
import Image from "next/image";
import { LINE_URL } from "@/data/site-data";

export default function LINESection() {
  return (
    <section className="section-padding bg-charcoal" id="line">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12">
        <FadeInView>
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <p className="text-[11px] tracking-[0.3em] text-champagne/60 uppercase mb-4">
                Official LINE
              </p>
              <div className="w-10 h-px bg-champagne/40 mb-6 mx-auto lg:mx-0" />
              <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.06em] text-white leading-relaxed mb-6">
                査定・ご相談は
                <br />
                公式LINEから
              </h2>
              <p className="text-[14px] leading-[2] text-white/50 tracking-wide mb-8 max-w-sm mx-auto lg:mx-0">
                ご相談はすべて公式LINEより承っています。
                お品物の写真を送るだけで、気軽にご相談いただけます。
              </p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 border border-champagne/40 text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300"
              >
                公式LINEはこちら
              </a>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center gap-4 shrink-0">
              <div className="w-44 h-44 bg-white p-3 flex items-center justify-center">
                <Image
                  src="/images/line-qr.jpg"
                  alt="公式LINE QRコード"
                  width={160}
                  height={160}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-[11px] tracking-[0.15em] text-white/35 text-center">
                スマートフォンで読み取り
              </p>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
