import Link from "next/link";
import { navigation, companyInfo, LINE_URL } from "@/data/site-data";

export default function Footer() {
  // TOP と 公式LINE を除いた内部ナビ
  const internalNav = navigation.filter((item) => !item.external && item.name !== "TOP");

  return (
    <footer className="bg-charcoal text-white/60">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <span className="font-serif text-3xl font-light tracking-[0.15em] text-white">
                三六九
              </span>
            </div>
            <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-6">
              {companyInfo.nameEn}
            </p>
            <p className="text-[13px] leading-relaxed text-white/50 max-w-xs">
              高額リユース資産の査定・買取を、丁寧かつ誠実にご案内します。
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.2em] text-champagne/60 uppercase mb-6">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-3">
              {internalNav.map((item) => (
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

          {/* Contact / LINE */}
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.2em] text-champagne/60 uppercase mb-6">
              Contact
            </p>
            <div className="space-y-3 text-[13px] text-white/50 mb-6">
              <p>{companyInfo.address}（本社）</p>
              <p className="text-[12px] text-white/35">{companyInfo.license}</p>
            </div>
            <div className="mt-8">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 border border-champagne/30 text-champagne text-[12px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300"
              >
                公式LINEはこちら
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[11px] tracking-[0.1em] text-white/30">
            © {new Date().getFullYear()} {companyInfo.nameEn} All Rights Reserved.
          </p>
          <div className="flex gap-6 text-[11px] tracking-[0.1em] text-white/30">
            <Link href="/privacy" className="hover:text-white/50 transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
