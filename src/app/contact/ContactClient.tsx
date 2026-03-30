"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FadeInView from "@/components/FadeInView";

type TabType = "appraisal" | "corporate" | "general";

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: TabType;
  message: string;
}

const tabs: { id: TabType; label: string }[] = [
  { id: "appraisal", label: "æ»å®ç¸è«" },
  { id: "corporate", label: "æ³äººç¸è«" },
  { id: "general", label: "ä¸è¬ãåãåãã" },
];

export default function ContactClient() {
  const [activeTab, setActiveTab] = useState<TabType>("appraisal");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    category: "appraisal",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleTabChange = (tabId: TabType) => {
    setActiveTab(tabId);
    setFormData((prev) => ({ ...prev, category: tabId }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", category: "appraisal", message: "" });
    }, 3000);
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-charcoal pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <FadeInView>
              <p className="text-[11px] tracking-[0.3em] text-champagne/60 uppercase mb-4">Contact</p>
              <div className="w-10 h-px bg-champagne/40 mb-6" />
              <h1 className="font-serif text-3xl lg:text-5xl font-light tracking-[0.06em] text-white leading-relaxed">
                ãåãåãã
              </h1>
              <p className="mt-6 text-[14px] leading-[2] text-white/45 tracking-wide max-w-xl">
                æ»å®ç¸è«ãæ³äººç¸è«ããã®ä»ã®ãåãåããããä¸æãªç¹ããè³ªåããããã¾ãããããæ°è»½ã«ãåãåãããã ããã
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-white">
          <div className="max-w-[700px] mx-auto px-6 lg:px-12">
            <FadeInView>
              {/* Tabs */}
              <div className="flex gap-8 border-b border-border-light mb-12">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`pb-4 text-[13px] tracking-[0.02em] font-medium transition-colors duration-300 ${
                      activeTab === tab.id
                        ? "text-charcoal border-b-2 border-champagne"
                        : "text-text-tertiary hover:text-text-secondary"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="font-serif text-[13px] tracking-[0.04em] text-charcoal block mb-3">
                    ãåå
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-border-light bg-transparent py-3 text-[13px] tracking-wide text-charcoal placeholder-text-tertiary focus:outline-none focus:border-champagne transition-colors duration-300"
                    placeholder="å±±ç° å¤ªé"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="font-serif text-[13px] tracking-[0.04em] text-charcoal block mb-3">
                    ã¡ã¼ã«ã¢ãã¬ã¹
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-border-light bg-transparent py-3 text-[13px] tracking-wide text-charcoal placeholder-text-tertiary focus:outline-none focus:border-champagne transition-colors duration-300"
                    placeholder="yamada@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="font-serif text-[13px] tracking-[0.04em] text-charcoal block mb-3">
                    é»è©±çªå·
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b border-border-light bg-transparent py-3 text-[13px] tracking-wide text-charcoal placeholder-text-tertiary focus:outline-none focus:border-champagne transition-colors duration-300"
                    placeholder="090-1234-5678"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="font-serif text-[13px] tracking-[0.04em] text-charcoal block mb-3">
                    ãåãåããåå®¹
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full border border-border-light bg-transparent py-4 px-4 text-[13px] tracking-wide text-charcoal placeholder-text-tertiary focus:outline-none focus:border-champagne transition-colors duration-300 resize-none"
                    placeholder="ãåãåããåå®¹ããå¥åãã ããã"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    className="px-12 py-3 border border-champagne text-champagne font-serif text-[13px] tracking-[0.06em] uppercase transition-all duration-300 hover:bg-champagne hover:text-charcoal"
                  >
                    {submitted ? "éä¿¡ãã¾ãã" : "éä¿¡ãã"}
                  </button>
                </div>
              </form>

              {/* Info Note */}
              <div className="mt-12 pt-8 border-t border-border-light">
                <p className="text-[12px] leading-[1.8] text-text-tertiary tracking-wide mb-4">
                  ãéä¿¡ããã ãããåãåããã«ã¯ãéå¸¸3å¶æ¥­æ¥ä»¥åã«ãè¿ä¿¡ãããã¾ãã
                </p>
                <p className="text-[12px] leading-[1.8] text-text-tertiary tracking-wide">
                  ãéãããã ããåäººæå ±ã«ã¤ãã¾ãã¦ã¯ããåãåããã¸ã®ãè¿ä¿¡ã®ããã«ã®ã¿ä½¿ç¨ããã¦ããã ãã¾ãã
                </p>
              </div>
            </FadeInView>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
