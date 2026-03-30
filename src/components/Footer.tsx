import Link from "next/link";
import { navigation, companyInfo } from "@/data/site-data";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span className="font-serif text-3xl font-light tracking-[0.15em] text-white">
                ä¸å­ä¹
              </span>
            </div>
            <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-6">
              {companyInfo.nameEn}
            </p>
            <p className="text-[13px] leading-relaxed text-white/50 max-w-xs">
              é«é¡ãªã¦ã¼ã¹è³ç£ã®æ»å®ã»è²·åããä¸å¯§ãã¤èª å®ã«ãæ¡åãã¾ãã
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.2em] text-champagne/60 uppercase mb-6">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[13px] tracking-[0.05em] text-white/50 hover:text-champagne transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.2em] text-champagne/60 uppercase mb-6">
              Contact
            </p>
            <div className="space-y-4 text-[13px] text-white/50">
              <p>{companyInfo.address}</p>
              <p>{companyInfo.license}</p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border border-champagne/30 text-champagne text-[12px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300"
              >
                ãåãåãã
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] tracking-[0.1em] text-white/30">
            Â© {new Date().getFullYear()} {companyInfo.nameEn} All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[11px] tracking-[0.1em] text-white/30">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">
              ãã©ã¤ãã·ã¼ããªã·ã¼
            </Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">
              å©ç¨è¦ç´
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
