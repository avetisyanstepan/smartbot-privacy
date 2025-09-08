'use client';

import { motion } from 'framer-motion';
import { Manrope } from 'next/font/google';
import { MessageCircle, Bot, UploadCloud, FileText, Sparkles, Inbox, GitCompare } from 'lucide-react';

const manrope = Manrope({ subsets: ['latin'], weight: ['400', '600', '700'] });

export default function SmartBotLanding() {
  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white ${manrope.className}`}
    >
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            transition: { type: 'spring', stiffness: 200, damping: 12 },
          }}
          className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          🧠 SmartBot — Ձեր AI օգնականը Messenger-ում և Instagram-ում
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
        >
          Ավտոմատ պատասխաններ 24/7, լիդերի պահպանում և AI-պատասխաններ՝ ձեր բիզնեսի համար։
        </motion.p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="#pricing"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
          >
            Սկսել անվճար
          </a>
          <a
            href="#connect"
            className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-semibold"
          >
            Ստանալ demo
          </a>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-12 px-6 bg-white/5 border-y border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            { icon: '⏱', text: 'Պատասխանում է < 1 րոպեում' },
            { icon: '📈', text: 'Լիդերի աճ մինչև +30%' },
            { icon: '💸', text: 'Ավելի էժան, քան ադմինի 1 օրվա աշխատավարձը' },
            { icon: '🌐', text: 'Հայերեն / Ռուսերեն / Անգլերեն' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-xl p-6 text-purple-200 text-lg font-medium"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 md:px-24">
        <h2 className="text-3xl font-semibold text-center text-purple-200 mb-10">
          📌 Ինչ է անում SmartBot-ը
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: <MessageCircle className="inline w-5 h-5 mr-2 text-pink-400" />,
              text: 'Պատասխանում է մեսենջերի հաղորդագրություններին 24/7',
            },
            {
              icon: <Bot className="inline w-5 h-5 mr-2 text-indigo-400" />,
              text: 'Հասկանում է բարդ հարցերը GPT-ով',
            },
            {
              icon: <UploadCloud className="inline w-5 h-5 mr-2 text-yellow-400" />,
              text: 'Պահպանում է հաճախորդների տվյալները (լիդեր)',
            },
            {
              icon: <FileText className="inline w-5 h-5 mr-2 text-green-400" />,
              text: 'Տալիս է ամսական PDF / Excel հաշվետվություն',
            },
            {
              icon: <Sparkles className="inline w-5 h-5 mr-2 text-purple-400" />,
              text: 'AI fallback և նոր հարցերի մշակումը',
            },
            {
              icon: <Inbox className="inline w-5 h-5 mr-2 text-blue-400" />,
              text: 'Աշխատում է Chatwoot-ի միջոցով՝ որպես վստահելի կամուրջ',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/5 hover:bg-white/10 transition duration-300 p-5 rounded-xl shadow-md text-white border border-purple-500/20"
            >
              {item.icon}
              {item.text}
            </motion.div>
          ))}
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-12 px-6 md:px-16 bg-white/5 border-y border-white/10">
        <h2 className="text-2xl font-semibold text-center text-purple-200 mb-6">🔄 Համեմատություն</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto text-sm">
          <div className="p-4 bg-gray-900/50 rounded-xl">
            <GitCompare className="w-5 h-5 mb-1 text-red-400" />
            <h3 className="font-bold mb-1">Առանց SmartBot</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Ադմինը offline, ուշացած պատասխաններ</li>
              <li>Լիդերը հաճախ կորչում են</li>
              <li>Չկա հաշվետվություն և վերլուծություն</li>
            </ul>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-xl">
            <GitCompare className="w-5 h-5 mb-1 text-green-400" />
            <h3 className="font-bold mb-1">SmartBot-ով</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>24/7 պատասխաններ՝ առանց ուշացման</li>
              <li>Լիդերի ավտոմատ պահպանում CRM-ում</li>
              <li>Ամսական հաշվետվություններ և վիճակագրություն</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-purple-200 mb-10">
          💵 Սակագներ
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Բոլոր պլանները գործում են <b>միայն 1 էջի</b> համար (FB կամ IG)։
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Free */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="mt-2 text-gray-300">0 ֏ / ամսական</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>• 1 էջ (FB/IG)</li>
              <li>• 50 հաղորդագրություն / ամիս</li>
              <li>• Մինչև 5 շաբլոն</li>
              <li>• Հիմնական ավտոպատասխաններ</li>
              <li>• Էլ. փոստով աջակցություն</li>
            </ul>
          </div>

          {/* Start */}
          <div className="bg-white/10 border border-purple-500/30 rounded-2xl p-6 shadow-xl">
            <h3 className="text-2xl font-bold">Start</h3>
            <p className="mt-2 text-gray-300">25 000 ֏ / ամսական</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>• 1 էջ (FB/IG)</li>
              <li>• 2 000 հաղորդագրություն / ամիս</li>
              <li>• Մինչև 20 շաբլոն (FAQ)</li>
              <li>• Լիդերի պահպանում</li>
              <li>• Աջակցություն չաթով</li>
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">
              Pro{' '}
              <span className="ml-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                Ամենահանրաճանաչ
              </span>
            </h3>
            <p className="mt-2 text-gray-300">60 000 ֏ / ամսական</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>• 1 էջ (FB/IG)</li>
              <li>• 5 000 հաղորդագրություն / ամիս</li>
              <li>• Մինչև 80 շաբլոն</li>
              <li>• Լիդերի պահպանում</li>
              <li>• AI-պատասխաններ (GPT)</li>
              <li>• Ընդլայնված վիճակագրություն և հաշվետվություններ</li>
            </ul>
          </div>

          {/* Individual */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-bold">Individual</h3>
            <p className="mt-2 text-gray-300">Հատուկ առաջարկ</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              <li>• 1 էջ (FB/IG)</li>
              <li>• Անսահմանափակ շաբլոններ</li>
              <li>• White-label վահանակ</li>
              <li>• Ինտեգրացիաներ խոշոր բիզնեսի համար</li>
              <li>• SLA 24/7</li>
            </ul>
          </div>
        </div>
      </section>

      {/* E-COMMERCE ADD-ON */}
      <section className="py-16 px-6 md:px-24 bg-white/5 border-y border-white/10">
        <h2 className="text-3xl font-semibold text-center text-purple-200 mb-6">
          🛒 Էլ․ առևտրի հավելում
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300">
          Խոշոր կատալոգների համար՝ ավտոմատ շաբլոնների գեներացիա (CSV/Excel/ինտեգրացիա),
          գների/պաշարների թարմացում իրական ժամանակում։ Շաբլոնների սահմանափակում՝ չկա։ Գործում է նույն 1 էջի համար։
        </p>
        <p className="mt-3 text-center text-gray-200">
          💵 +20 000–40 000 ֏ / ամիս (կախված ծավալից)
        </p>
      </section>

      {/* HOW TO CONNECT */}
      <section id="connect" className="py-16 px-6 md:px-24">
        <h2 className="text-3xl font-semibold text-center text-purple-200 mb-8">
          🔌 Ինչպես միացնել
        </h2>
        <div className="max-w-4xl mx-auto space-y-4 text-gray-200">
          <ol className="list-decimal list-inside space-y-3">
            <li>Ուղարկեք ձեր էջի հղումը (FB կամ IG):</li>
            <li>
              Տվեք <b>Page Access: Full Control (Admin)</b> կամ Partner Access՝ որպեսզի կարողանանք
              հրապարակել բոթի անունից, միացնել ինտեգրացիաները և ստանալ անհրաժեշտ իրադարձությունները։
            </li>
            <li>Մենք կապում ենք SmartBot-ը ձեր էջին և կատարում Chatwoot/CRM կարգավորումները։</li>
            <li>Ստանում եք 3-օրյա demo հաշվետվություն և առաջարկ՝ ըստ արդյունքի։</li>
          </ol>
          <p className="text-sm text-gray-400">
            * Բոլոր հասանելիությունները կառավարելի են ձեր կողմից, կարող եք ցանկացած պահին սահմանափակել/հանել։ Աշխատում ենք 2FA-ով և պահպանում ենք միայն անհրաժեշտ իրավասությունները։
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-800/60">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          ❓ Հաճախ տրվող հարցեր
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-gray-300">
          <div>
            <p className="font-semibold">Ինչ իրավունք է պետք տալ?</p>
            <p>
              Պետք է տալ Page Access: Full Control (Admin) կամ Partner Access, որպեսզի բոթը
              կարողանա աշխատել պաշտոնական API-ով և միացվեն ինտեգրացիաները (Chatwoot/CRM):
            </p>
          </div>
          <div>
            <p className="font-semibold">Անվտա՞նգ է արդյոք:</p>
            <p>
              Այո, մենք օգտագործում ենք Meta-ի պաշտոնական մեխանիզմները, բոլոր գործողությունները
              լոգավորվում են, և հասանելիությունները կարող եք ցանկացած պահի դադարեցնել:
            </p>
          </div>
          <div>
            <p className="font-semibold">Ինչի՞ համար է պետք Chatwoot-ը:</p>
            <p>
              Chatwoot-ը բաց կոդով հաղորդակցման հարթակ է, որը ծառայում է որպես վստահելի կամուրջ․ ձեր բոլոր հաղորդագրությունները պահվում են անվտանգ CRM-ում, իսկ SmartBot-ը աշխատում է որպես AI շերտ՝ ավտոմատացնելով պատասխանները:
            </p>
          </div>
          <div>
            <p className="font-semibold">Կարո՞ղ եմ փորձել նախ demo-ով:</p>
            <p>
              Այո, տրամադրում ենք 3-օրյա անվճար demo՝ նույն օրը միացման հնարավորությամբ:
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-black text-center">
        <h2 className="text-3xl font-semibold mb-6 text-purple-200">📲 Սկսե՞նք</h2>
        <p className="text-lg text-gray-300 mb-2">
          SmartBot-ը կաշխատի ձեր էջում ընդամենը 1 րոպեում։
        </p>
        <div className="mt-4 flex items-center justify-center gap-4">
          <a
            href="#pricing"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-semibold"
          >
            Սկսել հիմա
          </a>
          <a
            href="#connect"
            className="bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-xl font-semibold"
          >
            Ստանալ demo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-gray-900 text-white text-center border-t border-gray-700">
        <p className="text-lg font-semibold">
          SmartBot — Ձեր AI օգնականը թվային հաղորդակցման մեջ
        </p>
        <p className="mt-2 text-sm text-gray-400">
          📞 +374 99 27 81 81 | 📧 smartbotarm@gmail.com | 📱 @SmartBot_Armenia
        </p>
        <div className="mt-4 space-x-4 text-sm">
          <a
            href="/privacy-policy"
            className="text-purple-300 hover:text-purple-400 underline"
          >
            Privacy Policy
          </a>
          <a href="/terms" className="text-purple-300 hover:text-purple-400 underline">
            Terms of Service
          </a>
          <a
            href="/data-deletion"
            className="text-purple-300 hover:text-purple-400 underline"
          >
            Data Deletion
          </a>
        </div>
        <div className="mt-6 text-xs text-gray-500">
          Powered by{' '}
          <a
            href="https://www.chatwoot.com"
            target="_blank"
            className="underline hover:text-purple-300"
          >
            Chatwoot
          </a>
        </div>
      </footer>
    </main>
  );
}
