'use client';

import { motion } from 'framer-motion';
import { Manrope } from 'next/font/google';
import { Sparkles, Bot, MessageCircle, FileText, UploadCloud } from 'lucide-react';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function SmartBotLanding() {
  return (
    <main className={`min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white ${manrope.className}`}>
      <section className="text-center py-20 px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">
          🧠 SmartBot — Your AI Assistant in Messenger
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Automated replies in Facebook / Instagram using GPT-powered AI.
        </motion.p>
      </section>

      <section className="py-16 px-6 md:px-24 backdrop-blur rounded-3xl mx-4 md:mx-20 bg-white/5 border border-white/10 shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-purple-200 mb-10">📌 What SmartBot Does</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <MessageCircle className="inline w-5 h-5 mr-2 text-pink-400" />, text: 'Replies to messages' },
            { icon: <Bot className="inline w-5 h-5 mr-2 text-indigo-400" />, text: 'Understands complex questions using GPT' },
            { icon: <UploadCloud className="inline w-5 h-5 mr-2 text-yellow-400" />, text: 'Stores leads and customer data' },
            { icon: <MessageCircle className="inline w-5 h-5 mr-2 text-pink-400" />, text: 'Replies to comments (Pro+)' },
            { icon: <FileText className="inline w-5 h-5 mr-2 text-green-400" />, text: 'Generates monthly PDF / Excel reports' },
            { icon: <Sparkles className="inline w-5 h-5 mr-2 text-purple-400" />, text: 'Integrates with your CRM' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/5 hover:bg-white/10 transition duration-300 p-5 rounded-xl shadow-md text-white border border-purple-500/20"
            >
              {item.icon}{item.text}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 text-center">
        <button className="bg-purple-600 hover:bg-purple-700 cursor-pointer text-white font-semibold py-3 px-6 rounded-full transition duration-300">
          <a
            className=""
            href={`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/facebook-auth`}
          >
            Connect Facebook Page
          </a>
        </button>
        <a 
          href="https://www.smartbot.am/privacy-policy" 
          target="_blank" 
          className="text-sm text-gray-400 mt-3 block hover:text-gray-200 underline"
        >
          📄 Privacy Policy
        </a>
      </section>

      <section className="py-16 px-6 bg-gray-800/60 backdrop-blur-lg">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">🎁 Bonuses</h2>
        <ul className="max-w-3xl mx-auto list-disc list-inside space-y-3 text-lg text-purple-200">
          <li><Sparkles className="inline w-5 h-5 mr-2 text-pink-400" />GPT fallback — for unknown questions</li>
          <li><UploadCloud className="inline w-5 h-5 mr-2 text-green-400" />Excel export</li>
          <li><MessageCircle className="inline w-5 h-5 mr-2 text-blue-400" />Auto-save lead details</li>
          <li><MessageCircle className="inline w-5 h-5 mr-2 text-yellow-400" />Comment replies (Pro+)</li>
          <li><FileText className="inline w-5 h-5 mr-2 text-indigo-400" />PDF report with activity</li>
        </ul>
      </section>

      <section className="py-16 px-6 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-6 text-purple-200">📲 How to Join</h2>
        <p className="text-lg text-gray-300 mb-4">Choose a plan, send your Page name, and we’ll connect the bot in 1 minute</p>
        <p className="text-md text-gray-400">Want a free trial? Get 3-day demo connection on your Page</p>
      </section>

      <footer className="py-10 bg-gray-900 text-white text-center border-t border-gray-700">
        <p className="text-lg font-semibold">
          SmartBot — Your AI Assistant in Digital Communication
        </p>
        <p className="mt-2 text-sm text-gray-400">
          📞 +374 99 27 81 81 | 📧 smartbotarm@gmail.com | 📱 @SmartBot_Armenia
        </p>
        <a 
          href="/privacy-policy" 
          className="mt-4 inline-block text-sm text-purple-300 hover:text-purple-400 underline transition duration-200"
        >
         Privacy Policy
        </a>
      </footer>
    </main>
  );
}
