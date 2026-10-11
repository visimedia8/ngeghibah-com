import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kamus Istilah Pop-Kultur & Ghibah — Glosarium Bahasa Gaul & Etika Siber',
  description:
    'Glosarium resmi istilah pop-kultur, bahasa gaul internet (Spill, Blind Item, Delulu, Cegil, Receipts), taktik industri showbiz, dan batasan hukum UU ITE di NgeGhibah.com.',
  alternates: {
    canonical: 'https://ngeghibah.com/kamus',
  },
  openGraph: {
    title: 'Kamus Istilah Pop-Kultur & Ghibah — Glosarium Terverifikasi',
    description:
      'Pahami kosakata drama warganet, taktik showbiz industri hiburan, dan risiko hukum delik digital di balik setiap istilah viral.',
    url: 'https://ngeghibah.com/kamus',
  },
};

export default function KamusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
