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
          <li>We only access Page messages to provide AI-powered auto-replies.</li>
          <li>We do not share or sell your data to third parties.</li>
          <li>All data is securely processed via Meta’s API according to Meta’s Platform Terms.</li>
          <li>To request data deletion, please contact: <a href="mailto:info@smartbot.am" className="underline text-blue-300">info@smartbot.am</a></li>
        </ul>

        <h2 className="text-2xl mt-10 font-semibold text-purple-200">📄 Գաղտնիության քաղաքականություն</h2>

        <p className="mt-4 text-gray-300">
          Այս քաղաքականությունը բացատրում է, թե ինչպես է <strong>SmartBot</strong>-ը հավաքում և օգտագործում տեղեկությունները, երբ դուք միացնում եք ձեր Facebook կամ Instagram էջը։
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-200 mt-2">
          <li>Մենք չենք պահում մասնավոր հաղորդագրությունները։</li>
          <li>Մենք մուտք ենք գործում էջի հաղորդագրություններին՝ միայն GPT-ով ավտոմատ պատասխաններ ուղարկելու համար։</li>
          <li>Մենք երբեք չենք տարածում կամ վաճառում Ձեր տվյալները։</li>
          <li>Տվյալները մշակվում են ապահով կերպով՝ ըստ Meta-ի API պայմանների։</li>
          <li>Տվյալների հեռացման հարցման համար կարող եք գրել <a href="mailto:info@smartbot.am" className="underline text-blue-300">info@smartbot.am</a> հասցեին։</li>
        </ul>

        <p className="text-xs text-gray-500 mt-10">
          Last updated: July 2025
        </p>
      </div>
    </main>
  );
}
