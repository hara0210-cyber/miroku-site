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
  { id: "appraisal", label: "査定相談" },
  { id: "corporate", label: "法人相談" },
  { id: "general", label: "一般お問い合わせ" },
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
                お問い合わせ
              </h1>
              <p className="mt-6 text-[14px] leading-[2] text-white/45 tracking-wide max-w-xl">
                査定相談、法人相談、その他のお問い合わせ。ご不明な点やご質問がございましたら、お気軽にお問い合わせください。
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
                    お名前
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border-b border-border-light bg-transparent py-3 text-[13px] tracking-wide text-charcoal placeholder-text-tertiary focus:outline-none focus:border-champagne transition-colors duration-300"
                    placeholder="山田 太郎"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="font-serif text-[13px] tracking-[0.04em] text-charcoal block mb-3">
                    メールアドレス
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
                    電話番号
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
                    お問い合わせ内容
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full border border-border-light bg-transparent py-4 px-4 text-[13px] tracking-wide text-charcoal placeholder-text-tertiary focus:outline-none focus:border-champagne transition-colors duration-300 resize-none"
                    placeholder="お問い合わせ内容をご入力ください。"
                  />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center pt-6">
                  <button
                    type="submit"
                    className="px-12 py-3 border border-champagne text-champagne font-serif text-[13px] tracking-[0.06em] uppercase transition-all duration-300 hover:bg-champagne hover:text-charcoal"
                  >
                    {submitted ? "送信しました" : "送信する"}
                  </button>
                </div>
              </form>

              {/* Info Note */}
              <div className="mt-12 pt-8 border-t border-border-light">
                <p className="text-[12px] leading-[1.8] text-text-tertiary tracking-wide mb-4">
                  ご送信いただいたお問い合わせには、通常3営業日以内にご返信いたします。
                </p>
                <p className="text-[12px] leading-[1.8] text-text-tertiary tracking-wide">
                  お送りいただいた個人情報につきましては、お問い合わせへのご返信のためにのみ使用させていただきます。
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
