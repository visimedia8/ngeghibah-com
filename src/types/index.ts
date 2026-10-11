export type GhibahMeterStatus =
  | 'TERKONFIRMASI'
  | 'FAKTA_DIGITAL'
  | 'RUMOR_NETIZEN'
  | 'MENUNGGU_TANGGAPAN';

export type ArticleCategory =
  | 'semua'
  | 'seleb-lokal'
  | 'hollywood-barat'
  | 'kpop-asia'
  | 'creator-tiktok';

export interface TimelineNode {
  timeLabel: string;
  title: string;
  description: string;
  receiptType?: 'tweet' | 'statement' | 'video' | 'court' | 'document';
  receiptQuote?: string;
  receiptSource?: string;
}

export interface Author {
  name: string;
  slug: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface GhibahMeterData {
  status: GhibahMeterStatus;
  percentageFact: number;
  percentageRumor: number;
  label: string;
  description: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  category: ArticleCategory;
  categoryLabel: string;
  ghibahMeter: GhibahMeterData;
  heroImage: string;
  imageCaption: string;
  publishedAt: string;
  readingTimeMinutes: number;
  author: Author;
  entities: string[];
  timeline: TimelineNode[];
  digitalReceiptsCount: number;
  isFeatured?: boolean;
  isHero?: boolean;
  trendingScore: number;
}

export interface ControversyRecord {
  year: string;
  title: string;
  status: GhibahMeterStatus;
  summary: string;
  resolution: string;
}

export interface BusinessVenture {
  name: string;
  category: string;
  role: string;
  status: 'Aktif Beroperasi' | 'Non-aktif / Selesai' | 'Divalidasi';
}

export interface AwardRecord {
  year: string;
  award: string;
  category: string;
  result: 'Menang' | 'Nominasi';
}

export interface CelebrityDossierDetail {
  birthDate?: string;
  birthPlace?: string;
  zodiac?: string;
  nationality?: string;
  yearsActive?: string;
  education?: string;
  netWorthEstimate?: string;
  topAffiliations?: string[];
}

export interface Celebrity {
  id: string;
  slug: string;
  name: string;
  stageName: string;
  avatar: string;
  bannerImage: string;
  profession: string;
  age: number;
  agency: string;
  relationshipStatus: string;
  circle: string[];
  verifiedAccounts: {
    platform: 'x' | 'instagram' | 'tiktok' | 'youtube';
    handle: string;
    url: string;
  }[];
  bio: string;
  careerHighlights: string[];
  dramaCount: number;
  sentimentSummary: string;
  dossierDetail?: CelebrityDossierDetail;
  controversies?: ControversyRecord[];
  businessVentures?: BusinessVenture[];
  awards?: AwardRecord[];
  faq?: { question: string; answer: string }[];
}

export interface TrendingTag {
  id: string;
  tag: string;
  slug: string;
  category: string;
  talkCount: string;
  isHot: boolean;
}

export interface KamusEntry {
  id: string;
  term: string;
  slug: string;
  category: 'Slang Warganet' | 'Industri Media' | 'Hukum & Verifikasi' | 'Fandom & K-Pop';
  shortDef: string;
  fullDef: string;
  contextUsage: string;
  realWorldExample: string;
  legalRisk: 'Rendah (Aman)' | 'Sedang (Waspada Etik)' | 'Tinggi (Potensi Delik UU ITE)';
}
