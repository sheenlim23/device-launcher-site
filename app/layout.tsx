import type { Metadata, Viewport } from 'next';
import { Chakra_Petch, Instrument_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const display = Chakra_Petch({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--font-display' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body' });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono' });

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time; used to make social-share image URLs absolute.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Device Launcher',
  description:
    'Run Android emulators without Android Studio, and see and control your real Android phone on your Windows PC. Pair with one QR code.',
  openGraph: {
    title: 'Device Launcher',
    description: 'Android emulators without Android Studio. Your real phone on your PC, paired by QR.',
    images: ['/assets/app-devices.jpg'],
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect x='9' y='3' width='14' height='26' rx='4' fill='none' stroke='%233df2ff' stroke-width='2.4'/%3E%3Ccircle cx='16' cy='24' r='1.6' fill='%23b6ff3d'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  themeColor: '#06080d',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
