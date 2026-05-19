// app/layout.tsx

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '../components/Header';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Anna Kompaniets — Développeuse Full Stack',
  description:
    'Portfolio d’Anna Kompaniets, développeuse full stack en recherche d’alternance Master Informatique à partir de septembre 2026.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="site-shell">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}