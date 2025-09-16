// app/layout.tsx (или .js)
import './globals.css';
import { Manrope } from 'next/font/google';
import { metadata as seoMetadata } from './components/seo';
import Script from 'next/script';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// КЛИЕНТ-ТОЛЬКО: никакого SSR
const AnalyticsProvider = dynamic(
  () => import('./components/analytics-provider/analytics-provider'),
  { ssr: false }
);

const manrope = Manrope({ subsets: ['latin'], weight: ['400','600','700'] });
export const metadata = seoMetadata;

// (опционально) полностью отключить SSG для всего приложения
// export const dynamic = 'force-dynamic';

export default function RootLayout({ children }) {
  return (
    <html lang="hy">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4REZ50WN7N" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4REZ50WN7N', { debug_mode: true });
        `}</Script>
      </head>
      <body className={manrope.className}>
        <Suspense fallback={null}>
          <AnalyticsProvider />
          {children}
        </Suspense>
      </body>
    </html>
  );
}
