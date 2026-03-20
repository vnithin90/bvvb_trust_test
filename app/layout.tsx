import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brahmashri Valiveru VenkataRama Bhotulu Trust - Religious & Charitable Trust',
  description: 'Serving humanity with devotion. A religious and charitable trust dedicated to education,food distribution, and spiritual upliftment.',
  keywords: 'charity, trust, religious trust, NGO, donation, volunteer, seva, service, humanitarian',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
