import './globals.css'
import { Manrope } from 'next/font/google'
import { metadata as seoMetadata } from './components/seo'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata = seoMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="hy">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SmartBot",
              "url": "https://smartbot.am",
              "applicationCategory": "Chatbot",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "10000",
                "priceCurrency": "AMD"
              },
              "description": "AI chatbot for Facebook Messenger & Instagram with GPT auto-replies.",
              "publisher": {
                "@type": "Organization",
                "name": "SmartBot"
              }
            })
          }}
        />
      </head>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  )
}
