interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  theme = "light",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  const subtitleColor = theme === "dark" ? "text-champagne/70" : "text-champagne";
  const titleColor = theme === "dark" ? "text-white" : "text-charcoal";
  const descColor = theme === "dark" ? "text-white/60" : "text-text-secondary";
  const lineColor = theme === "dark" ? "bg-champagne/40" : "bg-champagne";

  return (
    <div className={`flex flex-col ${alignClass} mb-16 lg:mb-20`}>
      {subtitle && (
        <p className={`text-[11px] tracking-[0.25em] uppercase ${subtitleColor} mb-4`}>
          {subtitle}
        </p>
      )}
      <div className={`w-10 h-px ${lineColor} mb-6`} />
      <h2
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.08em] leading-relaxed ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-6 text-[14px] leading-loose tracking-wide ${descColor} max-w-2xl`}>
          {description}
        </p>
      )}
    </div>
  );
}
