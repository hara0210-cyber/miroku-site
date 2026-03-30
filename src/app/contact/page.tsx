import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "ãåãåãã | æ ªå¼ä¼ç¤¾ä¸å­ä¹",
  description: "æ»å®ç¸è«ãæ³äººç¸è«ãä¸è¬ã®ãåãåããããæ°è»½ã«ãé£çµ¡ãã ããã",
};

export default function ContactPage() {
  return <ContactClient />;
}
