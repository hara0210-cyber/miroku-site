import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInView from '@/components/FadeInView';
import { LINE_URL } from '@/data/site-data';

export const metadata: Metadata = {
  title: '法人・事業者向けのご相談 | 株式会社三六九',
  description: '株式会社三六九では、余剰在庫、まとめ査定、事業整理に伴う資産相談など、法人・事業者のお客様向けのご相談に対応しています。',
};

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#0C0C0C] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light mb-4">
                法人・事業者向けのご相談
              </h1>
            </FadeInView>
            <FadeInView delay={100}>
              <p className="text-xs sm:text-sm tracking-widest uppercase mb-8 text-[#B8A88A]">
                For Business
              </p>
            </FadeInView>
            <FadeInView delay={200}>
              <p className="text-base sm:text-lg leading-relaxed text-white/50 max-w-3xl">
                余剰在庫、まとめ査定、事業整理に伴う資産相談など、法人・事業者のお客様向けのご相談にも対応しています。案件内容に応じて、丁寧にご案内いたします。
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Section 1: Main Message */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-8 leading-relaxed text-[#1A1A1A] whitespace-pre-line">
                法人・事業者の資産相談を、{'\n'}丁寧かつ柔軟にサポートします。
              </h2>
            </FadeInView>
            <FadeInView delay={100}>
              <p className="text-base sm:text-lg leading-relaxed text-[#6B6560] max-w-3xl mb-10">
                高額資産の整理や在庫に関するご相談は、金額だけでなく、スピード、信頼性、進めやすさも重要です。株式会社三六九では、法人・事業者の皆様からのご相談に対して、案件ごとの状況を踏まえながら、適切に対応いたします。
              </p>
            </FadeInView>
            <FadeInView delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-[#B8A88A] text-[#B8A88A] font-serif text-sm sm:text-base transition-colors hover:bg-[#B8A88A] hover:text-white text-center"
                >
                  公式LINEで相談する
                </a>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section 2: Services */}
        <section className="bg-[#F5F3F0] px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <h2 className="font-serif text-3xl sm:text-4xl font-light mb-12 text-[#1A1A1A]">
                このようなご相談に対応
              </h2>
            </FadeInView>
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: '余剰在庫のご相談',
                  description: '滞留在庫や保有資産の整理について、内容に応じてご相談を承ります。',
                },
                {
                  title: 'まとめ査定',
                  description: '複数点・複数カテゴリにまたがる資産についても、一括でのご相談が可能です。',
                },
                {
                  title: '事業整理に伴う資産相談',
                  description: '移転、縮小、方針変更などに伴う資産整理についても、状況に応じてご案内します。',
                },
                {
                  title: '事業者間のご相談',
                  description: '継続的な相談や個別案件についても、内容に応じて柔軟に対応いたします。',
                },
                {
                  title: '比較検討段階のご相談',
                  description: 'まだ検討段階の案件でも、まずは相談したいという段階から承ります。',
                },
              ].map((item, index) => (
                <FadeInView key={index} delay={index * 50}>
                  <div className="border-l-4 border-[#B8A88A] pl-4 sm:pl-6">
                    <h3 className="font-serif text-lg sm:text-xl font-light text-[#1A1A1A] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6B6560] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Values */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-5xl mx-auto">
            <FadeInView>
              <h2 className="font-serif text-3xl sm:text-4xl font-light mb-12 sm:mb-16 text-[#1A1A1A]">
                法人相談で重視していること
              </h2>
            </FadeInView>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              {[
                {
                  title: '丁寧な確認',
                  description: '案件の背景や条件を確認したうえで、一律ではないご案内を心がけています。',
                },
                {
                  title: 'スピード感',
                  description: '事業判断に必要なタイミングを意識し、できる限りスムーズな対応を目指します。',
                },
                {
                  title: '守秘性への配慮',
                  description: '法人・事業者案件では、情報の取り扱いにも十分配慮して対応します。',
                },
                {
                  title: '継続的な相談のしやすさ',
                  description: '単発の案件だけでなく、継続的なご相談も見据えた関係構築を大切にしています。',
                },
              ].map((value, index) => (
                <FadeInView key={index} delay={index * 50}>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#1A1A1A] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#6B6560] leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Process */}
        <section className="bg-[#0C0C0C] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-5xl mx-auto">
            <FadeInView>
              <h2 className="font-serif text-3xl sm:text-4xl font-light mb-12 sm:mb-16">
                ご相談の流れ
              </h2>
            </FadeInView>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-4">
              {[
                {
                  number: '01',
                  title: '公式LINEでご連絡',
                  description: '公式LINEよりお気軽にご連絡ください。',
                },
                {
                  number: '02',
                  title: '内容確認',
                  description: '対象資産、数量、背景、ご希望条件などを確認します。',
                },
                {
                  number: '03',
                  title: '初回ご案内',
                  description: '案件内容に応じて、進め方の方向性をご案内します。',
                },
                {
                  number: '04',
                  title: '個別調整',
                  description: '必要に応じて、詳細確認や個別調整を行います。',
                },
                {
                  number: '05',
                  title: 'お手続き',
                  description: '内容にご納得いただいたうえで、必要なお手続きへ進みます。',
                },
              ].map((step, index) => (
                <FadeInView key={index} delay={index * 50}>
                  <div className="flex flex-col">
                    <span className="font-serif text-2xl sm:text-3xl font-light text-[#B8A88A] mb-3">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-light mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <h2 className="font-serif text-3xl sm:text-4xl font-light mb-12 text-[#1A1A1A]">
                よくあるご相談内容
              </h2>
            </FadeInView>
            <div className="space-y-4">
              {[
                '複数の資産をまとめて相談したい',
                '事業整理に伴って在庫を整理したい',
                '高額品の取り扱いについて相談したい',
                '継続的な相談先を探している',
                'まずは相談だけしたい',
              ].map((item, index) => (
                <FadeInView key={index} delay={index * 50}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-[#B8A88A] font-serif text-lg flex-shrink-0 mt-1">
                      •
                    </span>
                    <p className="text-base sm:text-lg text-[#6B6560] leading-relaxed">
                      {item}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Final CTA */}
        <section className="bg-[#0C0C0C] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-6 sm:mb-8 leading-relaxed whitespace-pre-line">
                法人・事業者のご相談も、{'\n'}公式LINEよりお気軽にご連絡ください。
              </h2>
            </FadeInView>
            <FadeInView delay={100}>
              <p className="text-base sm:text-lg leading-relaxed text-white/70 max-w-3xl mb-10">
                案件規模や状況に応じて、内容を確認しながら丁寧にご案内いたします。
              </p>
            </FadeInView>
            <FadeInView delay={200}>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 border border-[#B8A88A] text-[#B8A88A] font-serif text-sm sm:text-base transition-colors hover:bg-[#B8A88A] hover:text-white text-center"
              >
                公式LINEで相談する
              </a>
            </FadeInView>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
