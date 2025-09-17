import './globals.css';
import { Manrope } from 'next/font/google';
import { metadata as seoMetadata } from './components/seo';
import Script from 'next/script';
import AnalyticsProvider from './components/analytics-provider/analytics-provider'; // ← обычный импорт, БЕЗ dynamic

const manrope = Manrope({ subsets: ['latin'], weight: ['400','600','700'] });
export const metadata = seoMetadata;

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
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}
