import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "ãããããè³ªå | æ ªå¼ä¼ç¤¾ä¸å­ä¹",
  description:
    "æ»å®ã®æµããå¿è¦ãªæºåãæ³äººç¸è«ã«ã¤ãã¦ãªã©ãããããã ããè³ªåãã¾ã¨ãã¦ãã¾ãããä¸æãªç¹ããããã¾ãããããæ°è»½ã«ãåãåãããã ããã",
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
