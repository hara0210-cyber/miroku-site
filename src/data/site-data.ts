// LINE公式アカウント URL
// TODO: 実際のLINE公式アカウントURLに差し替えてください
export const LINE_URL = "https://lin.ee/XXXXXXX";

// サイト URL（ドメイン確定後は環境変数 NEXT_PUBLIC_SITE_URL で管理）
// TODO: 本番ドメイン 369-inc.com 取得後、Vercelの環境変数 NEXT_PUBLIC_SITE_URL に設定してください
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miroku-site.vercel.app";

// Navigation
export const navigation = [
  { name: "TOP", href: "/", external: false },
  { name: "選ばれる理由", href: "/reasons", external: false },
  { name: "取扱品目", href: "/categories", external: false },
  { name: "買取方法", href: "/methods", external: false },
  { name: "法人・事業者向け", href: "/business", external: false },
  { name: "初めての方へ", href: "/guide", external: false },
  { name: "FAQ", href: "/faq", external: false },
  { name: "会社案内", href: "/company", external: false },
  { name: "公式LINE", href: LINE_URL, external: true },
];

// Reasons to choose
export const reasons = [
  {
    number: "01",
    title: "高額資産に特化した対応",
    description: "金・プラチナ、高級時計、ブランドバッグ、ジュエリーなど、高額資産領域にフォーカスしたご相談に対応します。",
    icon: "Shield",
  },
  {
    number: "02",
    title: "適正な査定を重視",
    description: "相場や状態を踏まえ、一つひとつ丁寧に確認。豊富な査定経験をもとに、納得感のある査定をご案内します。",
    icon: "Scale",
  },
  {
    number: "03",
    title: "公式LINEで\n相談しやすい",
    description: "公式LINEからお気軽にご相談いただけるため、初めての方でもスムーズに進めやすい体制です。",
    icon: "MessageCircle",
  },
  {
    number: "04",
    title: "丁寧でスピーディーな対応",
    description: "高額資産のご相談だからこそ、スピード感と同時に、説明のわかりやすさも大切にしています。",
    icon: "Clock",
  },
  {
    number: "05",
    title: "安心できる取引プロセス",
    description: "本人確認や必要な手続きを適切に行い、安心して進められる取引環境を整えています。",
    icon: "FileText",
  },
  {
    number: "06",
    title: "法人・事業者のご相談にも対応",
    description: "個人のお客様だけでなく、法人・事業者の資産整理やまとめ査定のご相談にも対応可能です。",
    icon: "Building2",
  },
];

// Categories
export const categories = [
  {
    id: "gold",
    name: "金・プラチナ",
    nameEn: "Gold & Platinum",
    description: "インゴット、アクセサリー、貴金属製品など、相場を踏まえてご相談を承ります。",
  },
  {
    id: "watches",
    name: "高級時計",
    nameEn: "Luxury Watches",
    description: "ブランド・状態・付属品の有無などを確認し、一つひとつ丁寧に査定します。",
  },
  {
    id: "bags",
    name: "ブランドバッグ",
    nameEn: "Brand Bags",
    description: "人気ブランドから希少モデルまで、状態や市場動向を踏まえて対応します。",
  },
  {
    id: "jewelry",
    name: "ジュエリー",
    nameEn: "Jewelry",
    description: "デザイン性や素材、石の内容も含めて確認し、ご相談内容に応じてご案内します。",
  },
  {
    id: "accessories",
    name: "ブランド小物",
    nameEn: "Brand Accessories",
    description: "財布、アクセサリー、各種小物なども、状態を確認しながら丁寧に拝見します。",
  },
  {
    id: "corporate",
    name: "法人・事業者案件",
    nameEn: "Corporate",
    description: "在庫整理、まとめ査定、事業者間相談など、法人・事業者向けのご相談にも対応します。",
  },
];

// Purchase methods（Web査定 → 郵送買取に変更）
export const methods = [
  {
    id: "line",
    name: "LINE査定",
    nameEn: "LINE Appraisal",
    description: "写真を送るだけで、気軽に相談したい方へ。まずは概算感を知りたい場合にも適しています。",
    steps: ["友だち追加", "写真を送信", "査定のご連絡"],
    icon: "MessageCircle",
  },
  {
    id: "postal",
    name: "郵送買取",
    nameEn: "Postal Appraisal",
    description: "ご来店が難しい方や遠方の方でも安心してご利用いただけます。LINEで事前相談のうえ、お品物をお送りください。",
    steps: ["LINEで相談", "お品物を発送", "査定・ご案内"],
    icon: "Package",
  },
  {
    id: "visit",
    name: "来店査定",
    nameEn: "In-Store（予約制）",
    description: "対面で確認しながら相談したい方へ。ご予約のうえ、丁寧にご案内いたします。",
    steps: ["ご予約", "ご来店", "対面査定"],
    icon: "MapPin",
  },
];

// Store locations
export const storeLocations = [
  {
    id: "azabu",
    name: "麻布十番エリア",
    type: "実店舗",
    postalCode: "〒106-0031",
    address: "東京都港区西麻布3丁目24-23",
    note: "2026年7月1日 オープン予定",
    mapUrl: "https://maps.google.com/maps?q=東京都港区西麻布3丁目24-23",
  },
  {
    id: "nihonbashi",
    name: "日本橋箱崎",
    type: "本社",
    postalCode: "",
    address: "東京都中央区日本橋箱崎町16-1 5階",
    note: "",
    mapUrl: "https://maps.google.com/maps?q=東京都中央区日本橋箱崎町16-1",
  },
];

// FAQ data
export const faqData = [
  {
    question: "査定だけでも相談できますか？",
    answer: "はい。まずは査定の目安を知りたいというご相談も承っています。",
  },
  {
    question: "相談や査定に費用はかかりますか？",
    answer: "内容に応じてご案内いたします。まずはお気軽にご相談ください。",
  },
  {
    question: "どのような情報を用意すればよいですか？",
    answer: "品目、状態、付属品の有無など、わかる範囲の情報をご共有ください。",
  },
  {
    question: "法人でも相談できますか？",
    answer: "はい。法人・事業者向けのご相談にも対応しています。",
  },
  {
    question: "来店での相談は可能ですか？",
    answer: "予約制でのご案内を予定しています。まずは公式LINEよりご連絡ください。",
  },
];

// Company info
export const companyInfo = {
  name: "株式会社三六九",
  nameEn: "MIROKU Inc.",
  ceo: "【代表者名】",
  established: "【設立年月】",
  capital: "【資本金】",
  address: "東京都中央区日本橋箱崎町16-1 5階",
  license: "古物商許可番号：取得後に追記",
  business: "高額リユース資産の査定・買取・流通事業",
};

// Flow steps
export const flowSteps = [
  {
    step: "01",
    title: "ご相談",
    description: "公式LINEよりお気軽にご相談ください。",
  },
  {
    step: "02",
    title: "内容確認",
    description: "品目や状態、付属品の有無などを確認します。",
  },
  {
    step: "03",
    title: "仮査定",
    description: "お送りいただいた情報をもとに、査定の目安をご案内します。",
  },
  {
    step: "04",
    title: "本査定",
    description: "必要に応じて実物確認を行い、正式なご案内へ進みます。",
  },
  {
    step: "05",
    title: "ご成約・お手続き",
    description: "内容にご納得いただけた場合、必要なお手続きを進めます。",
  },
];
