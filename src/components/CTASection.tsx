import Link from "next/link";

interface CTASectionProps {
  theme?: "dark" | "light";
  title?: string;
  description?: string;
}

export default function CTASection({
  theme = "dark",
  title = "ã¾ãã¯ããæ°è»½ã«ãç¸è«ãã ãã",
  description = "æ»å®ã¯ç¡æã§ãããåç©ã®ä¾¡å¤ãç¥ãããã ãã§ãæ§ãã¾ããã\nå°éã¹ã¿ãããä¸å¯§ã«ãå¯¾å¿ãããã¾ãã",
}: CTASectionProps) {
  const bgClass = theme === "dark" ? "bg-charcoal" : "bg-warm-gray";
  const titleColor = theme === "dark" ? "text-white" : "text-charcoal";
  const descColor = theme === "dark" ? "text-white/60" : "text-text-secondary";
  const btnBorder = theme === "dark" ? "border-champagne/40" : "border-champagne";
  const btnText = theme === "dark" ? "text-champagne" : "text-charcoal";
  const btnHover = theme === "dark" ? "hover:bg-champagne/10" : "hover:bg-champagne/20";

  return (
    <section className={`${bgClass} section-padding`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <div className="w-10 h-px bg-champagne/40 mx-auto mb-8" />
        <h2
          className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.08em] ${titleColor} mb-6`}
        >
          {title}
        </h2>
        <p className={`text-[14px] leading-loose tracking-wide ${descColor} max-w-xl mx-auto mb-12 whitespace-pre-line`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className={`px-10 py-4 border ${btnBorder} ${btnText} text-[13px] tracking-[0.15em] ${btnHover} transition-all duration-300`}
          >
            ç¡ææ»å®ãä¾é ¼ãã
          </Link>
          <Link
            href="/contact?type=corporate"
            className={`px-10 py-4 border ${theme === "dark" ? "border-white/10 text-white/50 hover:text-white hover:border-white/30" : "border-border-light text-text-secondary hover:text-charcoal hover:border-charcoal/30"} text-[13px] tracking-[0.15em] transition-all duration-300`}
          >
            æ³äººã®ãå®¢æ§ã¯ãã¡ã
          </Link>
        </div>
      </div>
    </section>
  );
}
