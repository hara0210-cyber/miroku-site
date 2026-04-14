import type { Metadata } from "next";
import "./globals.css";

// TODO: 本番ドメイン 369-inc.com 取得後、Vercel の環境変数 NEXT_PUBLIC_SITE_URL に設定してください
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miroku-site.vercel.app";

export const metadata: Metadata = {
  title: "株式会社三六九 | 高額リユース資産の査定・買取",
  description:
    "金・プラチナ、高級時計、ブランドバッグ、ジュエリーなど、高額リユース資産の査定・買取。豊富な査定経験をもとに、ブランド品の査定・買取をスムーズにご相談いただけます。",
  keywords: "高額買取, 金 プラチナ 買取, 高級時計 買取, ブランドバッグ 買取, ジュエリー 買取, 三六九, 郵送買取, 麻布十番",
  metadataBase: new URL(siteUrl),
  alternates: {
    // TODO: 本番ドメイン確定後、canonical を 369-inc.com ベースに更新してください
    canonical: "/",
  },
  openGraph: {
    title: "株式会社三六九 | 高額リユース資産の査定・買取",
    description: "豊富な査定経験をもとに、高額リユース資産の査定・買取をスムーズにご相談いただけます。公式LINEより受付中。",
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "株式会社三六九",
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
        {/* JSON-LD: Organization 構造化データ
            TODO: 本番ドメイン確定後、url を 369-inc.com に更新してください */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "株式会社三六九",
              alternateName: "MIROKU Inc.",
              url: siteUrl,
              description: "高額リユース資産の査定・買取。金・プラチナ、高級時計、ブランドバッグ、ジュエリーなどのご相談を公式LINEより承っています。",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
