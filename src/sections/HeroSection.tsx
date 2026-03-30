"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-charcoal overflow-hidden flex items-center">
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(184,168,138,0.03)_0%,transparent_70%)]" />

      {/* Abstract decorative element - large faint typography */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block">
        <span className="font-serif text-[28vw] font-light text-white/[0.02] leading-none tracking-tight">
          369
        </span>
      </div>

      {/* Decorative lines */}
      <div className="absolute left-12 top-0 w-px h-32 bg-gradient-to-b from-transparent via-champagne/20 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-32 pb-20 lg:pt-0 lg:pb-0">
        <div className="max-w-2xl">
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[11px] tracking-[0.3em] text-champagne/70 uppercase mb-8"
          >
            High-Value Asset Appraisal &amp; Purchase
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-[0.06em] leading-[1.3] mb-8"
          >
            é«é¡è³ç£ã®æ»å®ã»è²·åã«ã
            <br />
            ä¿¡é ¼ã¨ããåºæºãã
          </motion.h1>

          {/* Gold line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="h-px bg-champagne/60 mb-8"
          />

          {/* Sub copy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-[14px] sm:text-[15px] leading-[2] tracking-[0.04em] text-white/50 mb-12 max-w-lg"
          >
            éã»ãã©ãããé«ç´æè¨ããã©ã³ãããã°ãã¸ã¥ã¨ãªã¼ãªã©ã
            <br className="hidden sm:block" />
            é«é¡ãªã¥ã¼ã¹è³ç£ã®æ»å®ã»è²·åããä¸å¯§ãã¤ã¹ã ã¼ãºã«ã
            <br className="hidden sm:block" />
            ãªã³ã©ã¤ã³èµ·ç¹ã§ç¸è«ãããããå®å¿ãã¦ä»»ããããä½é¨ãæä¾ãã¾ãã
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link
              href="/contact?method=line"
              className="group px-8 py-4 border border-champagne/40 text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-500"
            >
              LINEã§ç¡ææ»å®
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/10 text-white/60 text-[13px] tracking-[0.15em] hover:border-white/25 hover:text-white/80 transition-all duration-500"
            >
              Webã§æ»å®ç¸è«
            </Link>
            <Link
              href="/business"
              className="px-4 py-4 text-champagne/60 text-[13px] tracking-[0.1em] hover:text-champagne transition-colors duration-300"
            >
              æ³äººã®ãç¸è«ã¯ãã¡ã â
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/25 uppercase">Scroll</span>
        <motion.div
          animate={{ height: [16, 32, 16] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gradient-to-b from-champagne/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
