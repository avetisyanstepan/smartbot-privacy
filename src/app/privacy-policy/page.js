'use client';

import { Manrope } from 'next/font/google';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function PrivacyPolicyPage() {
  return (
    <main className={`min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-16 ${manrope.className}`}>
      <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 shadow-xl">
        <h1 className="text-4xl font-bold text-purple-300 mb-6">📄 Privacy Policy</h1>

        <p className="mb-4 text-gray-300">
          This Privacy Policy explains how <strong>SmartBot</strong> collects, uses, and protects information when you connect your Facebook or Instagram Page.
        </p>

        <h2 className="text-2xl mt-6 font-semibold text-purple-200">1. Permissions We Request</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200 mt-2">
          <li><strong>pages_show_list</strong>: to fetch the list of Pages you manage.</li>
          <li><strong>pages_read_user_content</strong>: to access public comments and mentions on your Page posts.</li>
          <li><strong>pages_manage_engagement</strong>: to reply, like, or delete comments on your Page.</li>
          <li><strong>pages_manage_metadata</strong>: to access Page metadata required for system operations.</li>
        </ul>

        <h2 className="text-2xl mt-6 font-semibold text-purple-200">2. How We Use This Data</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200 mt-2">
          <li>Enable admins to monitor and respond to comments from SmartBot Dashboard.</li>
          <li>Run AI analysis (spam filtering, sentiment detection, reply suggestions).</li>
          <li>Improve the stability and performance of our automation tools.</li>
        </ul>

        <h2 className="text-2xl mt-6 font-semibold text-purple-200">3. Data Privacy and Security</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-200 mt-2">
          <li>We do <strong>not</strong> store private messages.</li>
          <li>We do <strong>not</strong> share or sell your data to third parties.</li>
          <li>All data is securely processed through Meta’s official Graph API.</li>
        </ul>

        <h2 className="text-2xl mt-6 font-semibold text-purple-200">4. Data Deletion</h2>
        <p className="text-gray-300 mt-2">
          To request data deletion or disconnect your Page, contact us at:
          <br />
          <a href="mailto:info@smartbot.am" className="underline text-blue-300">info@smartbot.am</a>
        </p>

        <p className="text-xs text-gray-500 mt-10">
          Last updated: July 2025
        </p>
      </div>
    </main>
  );
}
