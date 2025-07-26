// app/privacy-policy/page.tsx
'use client';

import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function PrivacyPolicyPage() {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-16 ${manrope.className}`}>
      <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl">
        <h1 className="text-4xl font-bold text-purple-300 mb-6">📄 Privacy Policy</h1>

        <p className="mb-4 text-gray-300">
          This Privacy Policy explains how <strong>SmartBot</strong> collects and uses information when you connect your Facebook or Instagram Page.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>We do not store private conversations.</li>
          <li>We access Page messages only to provide AI-powered auto-replies.</li>
          <li>We do not share or sell your data.</li>
          <li>Data is processed securely via Meta’s API according to Meta’s Platform Terms.</li>
          <li>You can contact us for data removal at your@email.com.</li>
        </ul>

        <h2 className="text-2xl mt-10 font-semibold text-purple-200">📄 Գաղտնիության քաղաքականություն</h2>

        <p className="mt-4 text-gray-300">
          <strong>SmartBot</strong>-ը չի պահում անձնական հաղորդագրություններ։ Մենք օգտագործում ենք մուտք դեպի Ձեր էջ՝ ավտոմատ պատասխաններ ուղարկելու համար՝ GPT-ով։
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-200 mt-2">
          <li>Մենք չենք տարածում կամ վաճառում Ձեր տվյալները։</li>
          <li>Տվյալները մշակվում են Meta-ի API-ով՝ ապահով կերպով։</li>
          <li>Դուք կարող եք գրել մեզ տվյալների հեռացման համար։</li>
        </ul>

        <p className="text-xs text-gray-500 mt-10">
          Last updated: July 2025
        </p>
      </div>
    </main>
  );
}
