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
          🧠 SmartBot — Ձեր AI օգնականը Messenger-ում
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
          Ավտոմատ պատասխաններ Facebook / Instagram-ում՝ GPT արհեստական բանականությամբ։
        </motion.p>
      </section>

      <section className="py-16 px-6 md:px-24 backdrop-blur rounded-3xl mx-4 md:mx-20 bg-white/5 border border-white/10 shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-purple-200 mb-10">📌 Ինչ է անում SmartBot-ը</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: <MessageCircle className="inline w-5 h-5 mr-2 text-pink-400" />, text: 'Պատասխանում է հաղորդագրություններին' },
            { icon: <Bot className="inline w-5 h-5 mr-2 text-indigo-400" />, text: 'Հասկանում է բարդ հարցերը GPT-ով' },
            { icon: <UploadCloud className="inline w-5 h-5 mr-2 text-yellow-400" />, text: 'Պահում է հաճախորդների տվյալները (լիդեր)' },
            { icon: <MessageCircle className="inline w-5 h-5 mr-2 text-pink-400" />, text: 'Պատասխանում է մեկնաբանություններին (Pro+)' },
            { icon: <FileText className="inline w-5 h-5 mr-2 text-green-400" />, text: 'Տալիս է ամսական PDF / Excel հաշվետվություն' },
            { icon: <Sparkles className="inline w-5 h-5 mr-2 text-purple-400" />, text: 'Ինտեգրվում է CRM-ի հետ' },
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

      {/* <section className="py-16 px-6 bg-gradient-to-br from-purple-800/90 to-indigo-900/80">
        <h2 className="text-3xl font-semibold text-center text-white mb-10">💰 Փաթեթներ</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '10,000 դր.',
              setup: '28,000 դր. տեղադրում',
              features: ['10 շաբլոն', '100 GPT պատասխան']
            },
            {
              name: 'Standard',
              price: '12,000 դր.',
              setup: '36,000 դր. տեղադրում',
              features: ['PDF հաշվետվություն', '25 շաբլոն']
            },
            {
              name: 'Pro',
              price: '14,500 դր.',
              setup: '44,000 դր. տեղադրում',
              features: ['CRM ինտեգրում', 'Վերլուծություն']
            },
            {
              name: 'Pro+',
              price: '17,000 դր.',
              setup: '49,000 դր. տեղադրում',
              features: ['Մեկնաբանության պատասխան', 'Թեմատիկ GPT']
            },
          ].map((pkg, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-black/20 border border-purple-600 p-6 rounded-2xl shadow-xl text-center text-white backdrop-blur-md hover:shadow-purple-800/50 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-purple-300 mb-2">{pkg.name}</h3>
              <p className="text-xl text-white mb-1">{pkg.price}</p>
              <p className="text-sm text-gray-300 mb-4">{pkg.setup}</p>
              <ul className="text-left list-disc list-inside text-sm">
                {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </section> */}

      <section className="py-16 px-6 bg-gray-800/60 backdrop-blur-lg">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">🎁 Բոնուսներ</h2>
        <ul className="max-w-3xl mx-auto list-disc list-inside space-y-3 text-lg text-purple-200">
          <li><Sparkles className="inline w-5 h-5 mr-2 text-pink-400" />GPT fallback — եթե հարցը նոր է</li>
          <li><UploadCloud className="inline w-5 h-5 mr-2 text-green-400" />Excel արտահանում</li>
          <li><MessageCircle className="inline w-5 h-5 mr-2 text-blue-400" />Լիդերի տվյալների ավտոմատ պահպանում</li>
          <li><MessageCircle className="inline w-5 h-5 mr-2 text-yellow-400" />Մեկնաբանության պատասխան (Pro+)</li>
          <li><FileText className="inline w-5 h-5 mr-2 text-indigo-400" />PDF հաշվետվություն՝ ակտիվությամբ</li>
        </ul>
      </section>

      <section className="py-16 px-6 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-6 text-purple-200">📲 Ինչպես միանալ</h2>
        <p className="text-lg text-gray-300 mb-4">Ընտրեք փաթեթ, ուղարկեք էջի անունը և մենք 1 րոպեում միացնում ենք բոթը</p>
        <p className="text-md text-gray-400">Ցանկանու՞մ եք փորձել անվճար։ Ստացեք 3-օրյա demo միացում Ձեր էջի վրա։</p>
      </section>

     <footer className="py-10 bg-gray-900 text-white text-center border-t border-gray-700">
        <p className="text-lg font-semibold">
          SmartBot — Ձեր AI օգնականը թվային հաղորդակցման մեջ
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
