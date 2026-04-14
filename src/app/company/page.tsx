import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import FadeInView from "@/components/FadeInView";
import { MapPin } from "lucide-react";
import { LINE_URL, storeLocations } from "@/data/site-data";

export const metadata: Metadata = {
  title: "会社案内 | 株式会社三六九",
  description:
    "高額リユース資産の査定・買取をはじめ、個人・法人のお客様からのご相談を承ります。誠実で丁寧な対応を心がけています。",
};

export default function CompanyPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-charcoal pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView direction="up">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-[0.08em] text-white leading-relaxed">
                会社案内
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="mt-4 text-[11px] tracking-[0.25em] uppercase text-champagne">
                About Us
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Section 1: 代表メッセージ */}
        <section id="message" className="bg-white section-padding">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Left: Title with gold line */}
                <div className="lg:col-span-4">
                  <div className="sticky top-32">
                    <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-[0.08em] text-charcoal leading-relaxed">
                      代表メッセージ
                    </h2>
                    <div className="w-10 h-px bg-champagne mt-6" />
                  </div>
                </div>

                {/* Right: Message text */}
                <div className="lg:col-span-8">
                  <div className="space-y-6">
                    <p className="text-[15px] leading-loose tracking-wide text-text-primary">
                      大切な資産をお預かりする仕事において、私たちが何より大切にしているのは、「安心して相談できること」と「納得して進められること」です。
                    </p>
                    <p className="text-[15px] leading-loose tracking-wide text-text-primary">
                      高額資産の査定・買取は、単に価格を提示するだけではなく、背景や状態、相場、そしてお客様の気持ちまで含めて、丁寧に向き合うべきものだと考えています。
                    </p>
                    <p className="text-[15px] leading-loose tracking-wide text-text-primary">
                      株式会社三六九は、高額リユース資産に特化したご相談窓口として、誠実な対応、わかりやすい説明、適切な手続きを重視しながら、一件一件のご相談に向き合ってまいります。
                    </p>
                    <p className="text-[15px] leading-loose tracking-wide text-text-primary">
                      個人のお客様はもちろん、法人・事業者の皆様からのご相談にも、安心してお声がけいただける体制づくりを進めています。
                    </p>
                    <p className="text-[15px] leading-loose tracking-wide text-text-primary">
                      今後も、信頼を積み重ねる会社であり続けられるよう、丁寧な運営を徹底してまいります。
                    </p>

                    <div className="pt-8 border-t border-border-light">
                      <p className="text-[13px] tracking-[0.08em] text-text-secondary">
                        株式会社三六九 代表
                      </p>
                      <p className="text-[13px] tracking-[0.08em] text-text-secondary mt-2">
                        【代表者名】
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section 2: 三六九について */}
        <section className="bg-warm-gray section-padding">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <SectionTitle
                title="三六九について"
                align="left"
                theme="light"
              />
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="max-w-3xl space-y-6">
                <p className="text-[15px] leading-loose tracking-wide text-text-primary">
                  株式会社三六九は、高額リユース資産の査定・買取に関するご相談を承る会社です。
                </p>
                <p className="text-[15px] leading-loose tracking-wide text-text-primary">
                  取り扱う対象は、金・プラチナ、高級時計、ブランドバッグ、ジュエリー、ブランド小物などの高額資産を中心とし、個人のお客様から法人・事業者のお客様まで、幅広いご相談に対応しています。
                </p>
                <p className="text-[15px] leading-loose tracking-wide text-text-primary">
                  公式LINEから気軽に相談できる導線を整えながら、必要に応じて丁寧な確認とご案内を行い、安心して進められる取引体験を目指しています。
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section 3: 私たちが大切にしていること */}
        <section className="bg-white section-padding">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <SectionTitle
                title="私たちが大切にしていること"
                align="center"
                theme="dark"
              />
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="border-l-2 border-champagne pl-8">
                  <h3 className="font-serif text-2xl font-light tracking-[0.08em] text-charcoal mb-4">
                    誠実であること
                  </h3>
                  <p className="text-[14px] leading-loose tracking-wide text-text-secondary">
                    価格だけでなく、説明や進め方も含めて、納得感のある対応を大切にしています。
                  </p>
                </div>

                <div className="border-l-2 border-champagne pl-8">
                  <h3 className="font-serif text-2xl font-light tracking-[0.08em] text-charcoal mb-4">
                    丁寧であること
                  </h3>
                  <p className="text-[14px] leading-loose tracking-wide text-text-secondary">
                    高額資産だからこそ、一つひとつを丁寧に確認しながら進めます。
                  </p>
                </div>

                <div className="border-l-2 border-champagne pl-8">
                  <h3 className="font-serif text-2xl font-light tracking-[0.08em] text-charcoal mb-4">
                    わかりやすいこと
                  </h3>
                  <p className="text-[14px] leading-loose tracking-wide text-text-secondary">
                    初めての方にも安心していただけるよう、複雑になりがちな内容も、できる限りわかりやすくご案内します。
                  </p>
                </div>

                <div className="border-l-2 border-champagne pl-8">
                  <h3 className="font-serif text-2xl font-light tracking-[0.08em] text-charcoal mb-4">
                    信頼されること
                  </h3>
                  <p className="text-[14px] leading-loose tracking-wide text-text-secondary">
                    手続きや確認を適切に行い、長く信頼される会社であることを目指します。
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section 4: 会社概要 */}
        <section id="overview" className="bg-warm-gray section-padding">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <SectionTitle
                title="会社概要"
                align="left"
                theme="light"
              />
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-border-light">
                    <tr className="border-t border-border-light">
                      <td className="py-4 px-6 text-[13px] tracking-[0.08em] text-text-secondary font-medium w-32 lg:w-40">
                        会社名
                      </td>
                      <td className="py-4 px-6 text-[14px] leading-loose text-text-primary">
                        株式会社三六九
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-[13px] tracking-[0.08em] text-text-secondary font-medium">
                        本社所在地
                      </td>
                      <td className="py-4 px-6 text-[14px] leading-loose text-text-primary">
                        東京都中央区日本橋箱崎町16-1 5階
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-[13px] tracking-[0.08em] text-text-secondary font-medium">
                        代表者
                      </td>
                      <td className="py-4 px-6 text-[14px] leading-loose text-text-primary">
                        【代表者名】
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-[13px] tracking-[0.08em] text-text-secondary font-medium">
                        事業内容
                      </td>
                      <td className="py-4 px-6 text-[14px] leading-loose text-text-primary">
                        <div className="space-y-2">
                          <p>高額リユース資産の査定・買取に関する事業</p>
                          <p>法人・事業者向け資産相談</p>
                          <p>高額資産に関する各種コンサルティング・サポート</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-[13px] tracking-[0.08em] text-text-secondary font-medium">
                        設立
                      </td>
                      <td className="py-4 px-6 text-[14px] leading-loose text-text-primary">
                        【設立年月】
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-[13px] tracking-[0.08em] text-text-secondary font-medium">
                        許認可
                      </td>
                      <td className="py-4 px-6 text-[14px] leading-loose text-text-primary">
                        古物商許可番号：取得後に追記
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-6 text-[13px] tracking-[0.08em] text-text-secondary font-medium">
                        お問い合わせ
                      </td>
                      <td className="py-4 px-6 text-[14px] leading-loose text-text-primary">
                        公式LINEよりお気軽にご相談ください
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section 5: 店舗案内 */}
        <section id="location" className="bg-white section-padding">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <SectionTitle
                title="店舗・拠点案内"
                align="left"
                theme="dark"
              />
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {storeLocations.map((store) => (
                  <div key={store.id} className="border border-border-light p-8">
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
                        <p className="text-[15px] tracking-[0.02em] text-text-primary leading-relaxed">
                          {store.postalCode && `${store.postalCode} `}
                          {store.address}
                        </p>
                        {store.note && (
                          <p className="text-[13px] text-text-tertiary mt-2">{store.note}</p>
                        )}
                        <a
                          href={store.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-block text-[13px] tracking-[0.08em] text-champagne hover:text-champagne/70 transition-colors duration-300"
                        >
                          Google Mapで見る →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section 6: 許認可・コンプライアンス */}
        <section id="license" className="bg-warm-gray section-padding">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <SectionTitle
                title="許認可・コンプライアンス"
                align="left"
                theme="light"
              />
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="max-w-3xl">
                <p className="text-[15px] leading-loose tracking-wide text-text-primary mb-6">
                  安心してご相談いただくために、必要な許認可や法令遵守を意識した運営を行っています。高額資産を扱う会社として、本人確認を含む適切な手続きと、誠実なコミュニケーションを大切にしています。
                </p>
                <p className="text-[14px] leading-loose tracking-wide text-text-secondary">
                  古物商許可番号：取得後に追記
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="bg-charcoal section-padding">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <div className="w-10 h-px bg-champagne/40 mx-auto mb-8" />
                <h2 className="font-serif text-3xl lg:text-4xl font-light tracking-[0.08em] text-white mb-6">
                  ご相談・お問い合わせ
                </h2>
                <p className="text-[14px] leading-loose tracking-wide text-white/60 max-w-2xl mx-auto">
                  個人のお客様からの査定相談、法人・事業者のお問い合わせまで、公式LINEよりお気軽にご相談ください。
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 border border-champagne text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300"
                >
                  公式LINEで査定相談
                </a>
                <a
                  href="/business"
                  className="px-10 py-4 border border-white/10 text-white/50 text-[13px] tracking-[0.15em] hover:border-white/25 hover:text-white/80 transition-all duration-300"
                >
                  法人・事業者のご相談
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
