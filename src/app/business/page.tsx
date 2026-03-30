import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FadeInView from '@/components/FadeInView';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'æ³äººã»äºæ¥­èåãã®ãç¸è« | æ ªå¼ä¼ç¤¾ä¸å­ä¹',
  description: 'æ ªå¼ä¼ç¤¾ä¸å­ä¹ã§ã¯ãä½å°å¨åº«ãã¾ã¨ãæ»å®ãäºæ¥­æ´çã«ä¼´ãè³ç£ç¸è«ãªã©ãæ³äººã»äºæ¥­èã®ãå®¢æ§åãã®ãç¸è«ã«å¯¾å¿ãã¦ãã¾ãã',
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
                æ³äººã»äºæ¥­èåãã®ãç¸è«
              </h1>
            </FadeInView>
            <FadeInView delay={100}>
              <p className="text-xs sm:text-sm tracking-widest uppercase mb-8 text-[#B8A88A]">
                For Business
              </p>
            </FadeInView>
            <FadeInView delay={200}>
              <p className="text-base sm:text-lg leading-relaxed text-white/50 max-w-3xl">
                ä½å°å¨åº«ãã¾ã¨ãæ»å®ãäºæ¥­æ´çã«ä¼´ãè³ç£ç¸è«ãªã©ãæ³äººã»äºæ¥­èã®ãå®¢æ§åãã®ãç¸è«ã«ãå¯¾å¿ãã¦ãã¾ããæ¡ä»¶åå®¹ã«å¿ãã¦ãä¸å¯§ã«ãæ¡åãããã¾ãã
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Section 1: Main Message */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light mb-8 leading-relaxed text-[#1A1A1A] whitespace-pre-line">
                æ³äººã»äºæ¥­èã®è³ç£ç¸è«ãã{'\n'}ä¸å¯§ãã¤æè»ã«ãµãã¼ããã¾ãã
              </h2>
            </FadeInView>
            <FadeInView delay={100}>
              <p className="text-base sm:text-lg leading-relaxed text-[#6B6560] max-w-3xl mb-10">
                é«é¡è³ç£ã®æ´çãå¨åº«ã«é¢ãããç¸è«ã¯ãéé¡ã ãã§ãªããã¹ãã¼ããä¿¡é ¼æ§ãé²ãããããéè¦ã§ããæ ªå¼ä¼ç¤¾ä¸å­ä¹ã§ã¯ãæ³äººã»äºæ¥­èã®çæ§ããã®ãç¸è«ã«å¯¾ãã¦ãæ¡ä»¶ãã¨ã®ç¶æ³ãè¸ã¾ããªãããé©åã«å¯¾å¿ãããã¾ãã
              </p>
            </FadeInView>
            <FadeInView delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact/business"
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-[#B8A88A] text-[#B8A88A] font-serif text-sm sm:text-base transition-colors hover:bg-[#B8A88A] hover:text-white text-center"
                >
                  æ³äººç¸è«ãã©ã¼ã ã¸
                </Link>
                <Link
                  href="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-[#E5E0DA] text-[#1A1A1A] font-serif text-sm sm:text-base transition-colors hover:bg-[#E5E0DA] text-center"
                >
                  ãåªãåããã¯ãã¡ã
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section 2: Services */}
        <section className="bg-[#F5F3F0] px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <h2 className="font-serif text-3xl sm:text-4xl font-light mb-12 text-[#1A1A1A]">
                ãã®ãããªãç¸è«ã«å¯¾å¿
              </h2>
            </FadeInView>
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  title: 'ä½å°å¨åº«ã®ãç¸è«',
                  description: 'æ»çå¨åº«ãä¿æè³ç£ã®æ´çã«ã¤ãã¦ãåå®¹ã«å¿ãã¦ãç¸è«ãæ¿ãã¾ãã',
                },
                {
                  title: 'ã¾ã¨ãæ»å®',
                  description: 'è¤æ°ç¹ã»è¤æ°ã«ãã´ãªã«ã¾ãããè³ç£ã«ã¤ãã¦ããä¸æ¬ã§ã®ãç¸è«ãå¯è½ã§ãã',
                },
                {
                  title: 'äºæ¥­æ´çã«ä¼´ãè³ç£ç¸è«',
                  description: 'ç§»è»¢ãç¸®å°ãæ¹éå¤æ´ãªã©ã«ä¼´ãè³ç£æ´çã«ã¤ãã¦ããç¶æ³ã«å¿ãã¦ãæ¡åãã¾ãã',
                },
                {
                  title: 'äºæ¥­èéã®ãç¸è«',
                  description: 'ç¶ç¶çãªç¸è«ãåå¥æ¡ä»¶ã«ã¤ãã¦ããåå®¹ã«å¿ãã¦æè»ã«å¯¾å¿ãããã¾ãã',
                },
                {
                  title: 'ç¸è¦ç©ã»æ¯è¼æ¤è¨æ®µéã®ãç¸è«',
                  description: 'ã¾ã æ¤è¨æ®µéã®æ¡ä»¶ã§ããã¾ãã¯ç¸è«ãããã¨ããæ®µéããæ¿ãã¾ãã',
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
                æ³äººç¸è«ã§éè¦ãã¦ãããã¨
              </h2>
            </FadeInView>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              {[
                {
                  title: 'ä¸å¯§ãªç¢ºèª',
                  description: 'æ¡ä»¶ã®èæ¯ãæ¡ä»¶ãç¢ºèªããããã§ãä¸å¾ã§ã¯ãªããæ¡åãå¿ããã¦ãã¾ãã',
                },
                {
                  title: 'ã¹ãã¼ãæ',
                  description: 'äºæ¥­å¤æ­ã«å¿è¦ãªã¿ã¤ãã³ã°ãæè­ããã§ããéãã¹ã ã¼ãºãªå¯¾å¿ãç®æãã¾ãã',
                },
                {
                  title: 'å®ç§æ§ã¸ã®éæ®',
                  description: 'æ³äººã»äºæ¥­èæ¡ä»¶ã§ã¯ãæå ±ã®åãæ±ãã«ãååéæ®ãã¦å¯¾å¿ãã¾ãã',
                },
                {
                  title: 'ç¶ç¶çãªç¸è«ã®ãããã',
                  description: 'åçºã®æ¡ä»¶ã ãã§ãªããç¶ç¶çãªãç¸è«ãè¦æ®ããé¢ä¿æ§ç¯ãå¤§åã«ãã¦ãã¾ãã',
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
                ãç¸è«ã®æµã
              </h2>
            </FadeInView>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 sm:gap-4">
              {[
                {
                  number: '01',
                  title: 'ãåãåãã',
                  description: 'ãã©ã¼ã ã¾ãã¯ãåãåããçªå£ãããé£çµ¡ãã ããã',
                },
                {
                  number: '02',
                  title: 'åå®¹ç¢ºèª',
                  description: 'å¯¾è±¡è³ç£ãæ°éãèæ¯ããå¸ææ¡ä»¶ãªã©ãç¢ºèªãã¾ãã',
                },
                {
                  number: '03',
                  title: 'ååãæ¡å',
                  description: 'æ¡ä»¶åå®¹ã«å¿ãã¦ãé²ãæ¹ã®æ¹åæ§ããæ¡åãã¾ãã',
                },
                {
                  number: '04',
                  title: 'åå¥èª¿æ´',
                  description: 'å¿è¦ã«å¿ãã¦ãè©³ç´°ç¢ºèªãåå¥èª¿æ´ãè¡ãã¾ãã',
                },
                {
                  number: '05',
                  title: 'ãæç¶ã',
                  description: 'åå®¹ã«ãç´å¾ããã ããããã§ãå¿è¦ãªãæç¶ãã¸é²ã¿ã¾ãã',
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
                ãããããç¸è«åå®¹
              </h2>
            </FadeInView>
            <div className="space-y-4">
              {[
                'è¤æ°ã®è³ç£ãã¾ã¨ãã¦ç¸è«ããã',
                'äºæ¥­æ´çã«ä¼´ã£ã¦å¨åº«ãæ´çããã',
                'é«é¡åã®åãæ±ãã«ã¤ãã¦ç¸è«ããã',
                'ç¶ç¶çãªç¸è«åãæ¢ãã¦ãã',
                'ã¾ãã¯ç¸è«ã ãããã',
              ].map((item, index) => (
                <FadeInView key={index} delay={index * 50}>
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-[#B8A88A] font-serif text-lg flex-shrink-0 mt-1">
                      â¢
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
                æ³äººã»äºæ¥­èã®ãç¸è«ãã{'\n'}ã¾ãã¯ãæ°è»½ã«ãåãåãããã ããã
              </h2>
            </FadeInView>
            <FadeInView delay={100}>
              <p className="text-base sm:text-lg leading-relaxed text-white/70 max-w-3xl mb-10">
                æ¡ä»¶è¦æ¨¡ãç¶æ³ã«å¿ãã¦ãåå®¹ãç¢ºèªããªããä¸å¯§ã«ãæ¡åãããã¾ãã
              </p>
            </FadeInView>
            <FadeInView delay={200}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact/business"
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-[#B8A88A] text-[#B8A88A] font-serif text-sm sm:text-base transition-colors hover:bg-[#B8A88A] hover:text-white text-center"
                >
                  æ³äººç¸è«ãã©ã¼ã ã¸
                </Link>
                <Link
                  href="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 border border-[#E5E0DA] text-white font-serif text-sm sm:text-base transition-colors hover:bg-[#E5E0DA] hover:text-[#0C0C0C] text-center"
                >
                  ãåãåããã¯ãã¡ã
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
