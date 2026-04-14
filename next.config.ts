import type { NextConfig } from "next";

// ドメイン管理
// TODO: 本番ドメイン 369-inc.com 取得後、以下を確認・更新してください
//   1. Vercel ダッシュボード → Domains に 369-inc.com を追加
//   2. Vercel 環境変数 (Production) に NEXT_PUBLIC_SITE_URL=https://369-inc.com を設定
//   3. src/app/layout.tsx の metadataBase / OGP URL が自動反映されます
//   4. sitemap.xml・robots.txt を追加する場合は src/app/sitemap.ts / robots.ts を作成してください

const nextConfig: NextConfig = {};

export default nextConfig;
