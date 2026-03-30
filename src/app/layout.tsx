import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "æ ªå¼ä¼ç¤¾ä¸å­ä¹ | é«é¡ãªã¦ã¼ã¹è³ç£ã®æ»å®ã»è²·å",
  description: "éã»ãã©ãããé«ç´æè¨ããã©ã³ãããã°ãã¸ã¥ã¨ãªã¼ãªã©ãé«é¡ãªã¦ã¼ã¹è³ç£ã®é©çªæ»å®ã»è²·åãå°éå®¶ã«ããç¢ºããªéå®ã¨ãå®å¿ã®ãåå¼ããç´æãã¾ãã",
  keywords: "é«é¡è²·å, é ãã©ãã è²·å, é«ç´æè¨ è²·å, ãã©ã³ãããã° è²·å, ã¸ã¥ã¨ãªã¼ è²·å, ä¸å­ä¹",
  openGraph: {
    title: "æ ªå¼ä¼ç¤¾ä¸å­ä¹ | é«é¡ãªã¦ã¼ã¹è³ç£ã®æ»å®ã»è²·å",
    description: "é«é¡ãªã¦ã¼ã¹è³ç£ã®é©æ­£æ»å®ã»è²·åãå°éå®¶ã«ããç¢ºããªéå®ã¨å®å¿ã®ãåå¼ã",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Noto+Sans+JP:wght@300;400;500;700&family=Noto+Serif+JP:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
