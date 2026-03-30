"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="py-28 lg:py-36 bg-charcoal" id="final-cta">
      <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-10 h-px bg-champagne/40 mx-auto mb-10" />

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-light tracking-[0.06em] leading-[1.5] text-white mb-6">
            é«é¡è³ç£ã®ãç¸è«ãã
            <br />
            å®å¿ãã¦å§ããããå ´æã¸ã
          </h2>

          <p className="text-[14px] leading-[2] text-white/45 tracking-wide max-w-md mx-auto mb-14">
            ã¾ãã¯æ°è»½ãªãç¸è«ããã§ãæ§ãã¾ããã
            <br className="hidden sm:block" />
            ãé½åã«åããã¦ãæé©ãªæ¹æ³ããé¸ã³ãã ããã
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?method=line"
              className="px-10 py-4 border border-champagne/40 text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-500"
            >
              LINEã§ç¡ææ»å®
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-white/10 text-white/60 text-[13px] tracking-[0.15em] hover:border-white/25 hover:text-white/80 transition-all duration-500"
            >
              Webã§ç¸è«ãã
            </Link>
            <Link
              href="/contact?type=corporate"
              className="px-6 py-4 text-champagne/50 text-[13px] tracking-[0.1em] hover:text-champagne transition-colors duration-300"
            >
              æ³äººã®ãåãåãã â
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
