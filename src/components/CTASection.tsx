import Link from "next/link";
import { LINE_URL } from "@/data/site-data";

interface CTASectionProps {
  theme?: "dark" | "light";
  title?: string;
  description?: string;
}

export default function CTASection({
  theme = "dark",
  title = "まずは、お気軽にご相談ください",
  description = "査定・ご相談は公式LINEより承っています。\nお品物の価値を知りたいだけでも、お気軽にご連絡ください。",
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
        <p
          className={`text-[14px] leading-loose tracking-wide ${descColor} max-w-xl mx-auto mb-12 whitespace-pre-line`}
        >
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-10 py-4 border ${btnBorder} ${btnText} text-[13px] tracking-[0.15em] ${btnHover} transition-all duration-300`}
          >
            公式LINEで査定相談
          </a>
          <Link
            href="/business"
            className={`px-10 py-4 border ${
              theme === "dark"
                ? "border-white/10 text-white/50 hover:text-white hover:border-white/30"
                : "border-border-light text-text-secondary hover:text-charcoal hover:border-charcoal/30"
            } text-[13px] tracking-[0.15em] transition-all duration-300`}
          >
            法人・事業者のご相談
          </Link>
        </div>
      </div>
    </section>
  );
}
