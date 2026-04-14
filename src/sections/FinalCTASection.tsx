"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LINE_URL } from "@/data/site-data";

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
            高額資産のご相談を、
            <br />
            安心して始められる場所へ。
          </h2>

          <p className="text-[14px] leading-[2] text-white/45 tracking-wide max-w-md mx-auto mb-14">
            まずは気軽なご相談からでも構いません。
            <br className="hidden sm:block" />
            査定・ご相談は公式LINEより承っています。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-champagne/40 text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-500"
            >
              公式LINEで査定相談
            </a>
            <Link
              href="/business"
              className="px-6 py-4 text-champagne/50 text-[13px] tracking-[0.1em] hover:text-champagne transition-colors duration-300"
            >
              法人・事業者のご相談 →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
