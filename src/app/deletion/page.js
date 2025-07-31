'use client';

import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function DataDeletionPage() {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-16 ${manrope.className}`}>
      <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl">
        <h1 className="text-4xl font-bold text-purple-300 mb-6">🗑️ Data Deletion Instructions</h1>

        <p className="mb-4 text-gray-300">
          If you have connected your Facebook or Instagram page to <strong>SmartBot</strong> and wish to delete your data, please follow one of the methods below:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>
            Send an email to <a href="mailto:support@smartbot.am" className="underline text-blue-300">support@smartbot.am</a> with the subject line: <em>“Data Deletion Request”</em>
          </li>
          <li>
            Or use the contact form at <a href="https://www.smartbot.am/" className="underline text-blue-300">https://www.smartbot.am</a>
          </li>
        </ul>

        <p className="mt-4 text-gray-300">
          We will process your request and permanently delete all associated data (such as page tokens, leads, and messages) within 72 hours.
        </p>

        <p className="text-xs text-gray-500 mt-10">Last updated: July 2025</p>
      </div>
    </main>
  );
}
