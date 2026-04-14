import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";
import { LINE_URL } from "@/data/site-data";

export const metadata: Metadata = {
  title: "公式LINEでのご相談 | 株式会社三六九",
  description:
    "査定・ご相談は公式LINEより承っています。お品物の写真を送るだけで、気軽にご相談いただけます。",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-charcoal min-h-screen flex items-center">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full py-32 lg:py-40">
            <FadeInView>
              <div className="max-w-xl mx-auto text-center">
                <p className="text-[11px] tracking-[0.3em] text-champagne/60 uppercase mb-4">
                  Contact
                </p>
                <div className="w-10 h-px bg-champagne/40 mb-6 mx-auto" />
                <h1 className="font-serif text-3xl lg:text-5xl font-light tracking-[0.06em] text-white leading-relaxed mb-8">
                  ご相談・お問い合わせ
                </h1>
                <p className="text-[14px] leading-[2] text-white/50 tracking-wide mb-12">
                  査定・ご相談は公式LINEより承っています。
                  <br />
                  お品物の写真を送るだけで、気軽にご相談いただけます。
                  <br />
                  法人・事業者のお客様も同じ窓口よりお気軽にご連絡ください。
                </p>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-5 border border-champagne/40 text-champagne text-[13px] tracking-[0.2em] hover:bg-champagne/10 transition-all duration-300"
                >
                  公式LINEで相談する
                </a>
              </div>
            </FadeInView>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
