import FadeInView from "@/components/FadeInView";

const trustPoints = [
  {
    title: "ä¸å¯§ãªç¢ºèªãã­ã»ã¹",
    description: "ãåç©ã®ç¶æã»çè´ããå°éç¥è­ã«åºã¥ãä¸å¯§ã«ç¢ºèªãããã¾ãã",
  },
  {
    title: "é©æ­£ãªæ¬äººç¢ºèªæç¶ã",
    description: "å¤ç©å¶æ¥­æ³ã«åºã¥ãæ¬äººç¢ºèªãé©åã«å®æ½ãã¦ãã¾ãã",
  },
  {
    title: "èª å®ãªã³ãã¥ãã±ã¼ã·ã§ã³",
    description: "æ»å®æ ¹æ ã®ä¸å¯§ãªèª¬æã¨ãéææ§ã®ããããã¨ãããç´æãã¾ãã",
  },
  {
    title: "æ³ä»¤éµå®ãæè­ããéå¶",
    description: "ã³ã³ãã©ã¤ã¢ã³ã¹ãçµå¶ã®åºæ¬æ¹éã¨ãã¦ä½ç½®ã¥ãã¦ãã¾ãã",
  },
  {
    title: "åäººã»æ³äººã©ã¡ãã«ãå¯¾å¿",
    description: "ãç¶æ³ã«å¿ãã¦ãæé©ãªãåå¼ã®å½¢ããææ¡ãããã¾ãã",
  },
];

export default function TrustSection() {
  return (
    <section className="section-padding bg-warm-gray" id="trust">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left: Title area */}
          <FadeInView className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.25em] text-champagne uppercase mb-4">
              Commitment
            </p>
            <div className="w-10 h-px bg-champagne mb-6" />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.06em] leading-relaxed text-charcoal mb-6">
              å®å¿ãã¦ãç¸è«ããã ãããã«
            </h2>
            <p className="text-[14px] leading-[2] text-text-secondary tracking-wide max-w-sm">
              é«é¡è³ç£ã®ãç¸è«ã¯ãä¾¡æ ¼ã ãã§ã¯å¤æ­ã§ããªããã®ã§ããç¢ºèªãã­ã»ã¹ã®ä¸å¯§ããèª¬æã®ãããããããæ³ä»¤ãæç¶ãã¸ã®éæ®ãå¤§åã«ãã¦ãã¾ãã
            </p>
          </FadeInView>

          {/* Right: Trust points */}
          <div className="lg:col-span-7">
            <div className="space-y-0">
              {trustPoints.map((point, i) => (
                <FadeInView key={i} delay={i * 0.08}>
                  <div className="border-t border-border-light py-7 first:border-t-0 first:pt-0">
                    <h3 className="font-serif text-base lg:text-lg tracking-[0.04em] text-charcoal mb-2">
                      {point.title}
                    </h3>
                    <p className="text-[13px] leading-[1.9] text-text-secondary tracking-wide">
                      {point.description}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
