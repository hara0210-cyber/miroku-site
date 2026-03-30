"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { navigation } from "@/data/site-data";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-charcoal/95 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <span className="font-serif text-2xl lg:text-3xl font-light tracking-[0.15em] text-white">
                ä¸å­ä¹
              </span>
              <span className="hidden sm:block text-[10px] tracking-[0.2em] text-text-tertiary uppercase">
                MIROKU
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-8">
              {navigation.slice(1, -1).map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[13px] tracking-[0.08em] text-white/70 hover:text-champagne transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-4 px-6 py-2.5 border border-champagne/40 text-champagne text-[13px] tracking-[0.1em] hover:bg-champagne/10 transition-all duration-300"
              >
                ãåãåãã
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden text-white/80 hover:text-champagne transition-colors"
              aria-label="ã¡ãã¥ã¼"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal transition-all duration-500 xl:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="pt-28 px-8">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 text-[15px] tracking-[0.1em] text-white/70 hover:text-champagne border-b border-white/5 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="mt-10">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block px-8 py-3 border border-champagne/40 text-champagne text-[13px] tracking-[0.15em] hover:bg-champagne/10 transition-all duration-300"
            >
              æ»å®ã®ãç¸è«ã¯ãã¡ã
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
