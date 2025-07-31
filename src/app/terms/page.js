'use client';

import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function TermsPage() {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-16 ${manrope.className}`}>
      <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl">
        <h1 className="text-4xl font-bold text-purple-300 mb-6">📜 Terms of Service</h1>

        <p className="mb-4 text-gray-300">
          By using the <strong>SmartBot</strong> service (“Service”), you agree to the following terms and conditions:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li><strong>Usage:</strong> You may use the Service only for lawful purposes and in accordance with all applicable laws.</li>
          <li><strong>Account Responsibility:</strong> You are responsible for keeping your login credentials secure.</li>
          <li><strong>Data:</strong> SmartBot only processes data from your Facebook/Instagram pages to enable chatbot features. Your data is never shared or sold.</li>
          <li><strong>Modifications:</strong> We reserve the right to modify or discontinue the Service at any time without prior notice.</li>
          <li><strong>Termination:</strong> Violation of these terms may result in suspension or permanent termination of access.</li>
        </ul>

        <p className="text-xs text-gray-500 mt-10">Last updated: July 2025</p>
      </div>
    </main>
  );
}
