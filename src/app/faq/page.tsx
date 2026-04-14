import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "よくあるご質問 | 株式会社三六九",
  description:
    "査定の流れや必要な準備、法人相談についてなど、よくいただくご質問をまとめています。ご不明な点がございましたら、お気軽にお問い合わせください。",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQPageClient />
      </main>
      <Footer />
    </>
  );
}
