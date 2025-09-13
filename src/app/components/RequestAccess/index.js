"use client";

import { useMemo, useState } from "react";

/**
 * SmartBotConnect — чистый JSX (без TypeScript и внешних UI-библиотек)
 * Next.js + Tailwind. Аккуратные подсказки, фиксы опечаток.
 */
export default function SmartBotConnect() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    companyName: "",
    businessType: "",
    description: "",
    allowedTopics: [],
    allowedTopicsCustom: "",
    forbiddenTopics: "",
    tone: "formal",
    language: "hy",
    facebookPageUrl: "",
    businessManagerId: "",
    fbAccountLink: "",
    contactPhone: "",
    extraNotes: "",
    plan: "",
  });

  const presets = ["ապրանքներ", "գները", "ակցիաներ", "աշխ. ժամերը", "ծառայություններ"];

  const onToggleTopic = (value, checked) => {
    setForm((p) => ({
      ...p,
      allowedTopics: checked ? [...p.allowedTopics, value] : p.allowedTopics.filter((v) => v !== value),
    }));
  };

  const onChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.companyName.trim()) next.companyName = "Մուտքագրեք ընկերության անվանումը";
    if (!form.businessType) next.businessType = "Ընտրեք տեսակը";
    if (!form.plan) next.plan = "Ընտրեք սակագինը";
    const isHttp = (s) => s && (s.startsWith("http://") || s.startsWith("https://"));
    if (!isHttp(form.facebookPageUrl)) next.facebookPageUrl = "Թույլատրելի հղում (https://...)";
    if (!form.language) next.language = "Ընտրեք լեզուն";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const selectedCount = useMemo(() => form.allowedTopics.length, [form.allowedTopics]);

const onSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setLoading(true);
  setErrors({});
  try {
    const res = await fetch("http://localhost:5000/api/intake", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // если нужен cookie/сессия
      body: JSON.stringify(form),
    });

    const data = await res.json().catch(() => ({}));

    // серверная валидация
    if (!res.ok || !data.ok) {
      // если пришли field-ошибки
      if (data?.errors && typeof data.errors === "object") {
        setErrors((p) => ({ ...p, ...data.errors, _root: "Սխալ տվյալներ. ստուգեք դաշտերը" }));
      } else {
        setErrors((p) => ({ ...p, _root: data?.error || "Server error" }));
      }
      return;
    }

    // успех
    setSubmitted(true);
    // по желанию: очистить форму после успеха
    // setForm({ ...form, companyName:"", businessType:"", description:"", allowedTopics:[], allowedTopicsCustom:"", forbiddenTopics:"", tone:"formal", language:"hy", facebookPageUrl:"", businessManagerId:"", fbAccountLink:"", contactPhone:"", extraNotes:"", plan:"" });
    // можно сохранить id заявки: data.id
  } catch (err) {
    setErrors((p) => ({ ...p, _root: "Չհաջողվեց ուղարկել. փորձեք կրկին" }));
  } finally {
    setLoading(false);
  }
};


  // UI классы
  const card = "bg-black/40 border border-white/10 rounded-2xl shadow-lg";
  const label = "block mb-1 font-medium text-white/90";
  const input = "w-full p-3 rounded-xl bg-black/30 text-white placeholder-white/60 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-500/40 focus:border-pink-400/40 transition";
  const btn = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition";

  return (
    <section className="relative ">
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <header className="mb-10 text-center">
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Ավելացրու քո էջը SmartBot-ում
          </h1>
          <p className="mt-3 text-neutral-500 max-w-2xl mx-auto">
            Լրացրեք ձևը՝ որպեսզի ակտիվացնենք ձեր Messenger/Instagram ավտոպատասխանները։
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Форма */}
          <div className={`${card} lg:col-span-2 p-6`}>
            <form onSubmit={onSubmit} className="space-y-6 text-white">
              {errors._root && (
                <div className="flex items-start gap-2 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                  {errors._root}
                </div>
              )}

              {/* Компания */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={label} htmlFor="companyName">Ընկերության անվանում</label>
                  <input id="companyName" className={input} name="companyName" value={form.companyName} onChange={onChange} placeholder="SmartBot" />
                  {errors.companyName && <p className="mt-1 text-xs text-red-300">{errors.companyName}</p>}
                </div>
                <div>
                  <label className={label}>Գործունեության տեսակ</label>
                  <select className={input} name="businessType" value={form.businessType} onChange={onChange}>
                    <option value="">Ընտրեք</option>
                    <option value="supermarket">Սուպերմարկետ</option>
                    <option value="hotel">Հոթել/հյուրանոց</option>
                    <option value="legal">Իրավաբանական</option>
                    <option value="accounting">Հաշվապահական</option>
                    <option value="ecommerce">Online խանութ</option>
                    <option value="other">Այլ</option>
                  </select>
                  {errors.businessType && <p className="mt-1 text-xs text-red-300">{errors.businessType}</p>}
                </div>
              </div>

              <div>
                <label className={label} htmlFor="description">Կարճ նկարագրություն</label>
                <textarea id="description" className={input} rows={3} name="description" value={form.description} onChange={onChange} placeholder="Ինչ եք վաճառում / ինչ ծառայություն է" />
              </div>
              <div>
  <label className={label} htmlFor="plan">Ընտրեք սակագին</label>
  <select
    id="plan"
    className={input}
    name="plan"
    value={form.plan}
    onChange={onChange}
    required
  >
    <option value="">Ընտրեք</option>
    <option value="free">Free / Demo</option>
    <option value="start">Start</option>
    <option value="pro">Pro (ամենահայտնի)</option>
    <option value="pro_plus">Pro Plus</option>
  </select>
</div>
              {/* Լեզու */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={label}>Լեզու</label>
                  <select className={input} name="language" value={form.language} onChange={onChange}>
                    <option value="hy">Հայերեն</option>
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                  </select>
                  {errors.language && <p className="mt-1 text-xs text-red-300">{errors.language}</p>}
                </div>
              </div>

              {/* FB + контакты */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className={label} htmlFor="facebookPageUrl">Ձեր Facebook էջի-ի հղումը</label>
                  <input id="facebookPageUrl" className={input} type="url" name="facebookPageUrl" placeholder="օր․ https://facebook.com/MyBusiness" value={form.facebookPageUrl} onChange={onChange} />
                  {errors.facebookPageUrl && <p className="mt-1 text-xs text-red-300">{errors.facebookPageUrl}</p>}
                </div>
              </div>

              <div>
                <label className={label} htmlFor="contactPhone">Հեռախոս</label>
                <input id="contactPhone" className={input} name="contactPhone" value={form.contactPhone} onChange={onChange} />
              </div>

              <div>
                <label className={label} htmlFor="extraNotes">Լրացուցիչ նշումներ</label>
                <textarea id="extraNotes" className={input} rows={3} name="extraNotes" value={form.extraNotes} onChange={onChange} />
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button type="submit" disabled={loading} className={`${btn} bg-pink-600 hover:bg-pink-700 text-white ${loading ? "opacity-70" : ""}`}>
                  {loading ? "Ուղարկվում է…" : "Ուղարկել հայտ"}
                </button>
              </div>

              {submitted && (
                <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                  Հայտը ստացվել է։ Մենք կկապվենք email-ով շուտով։
                </div>
              )}
            </form>
          </div>

          {/* Инструкции */}
          <div className="space-y-6">
            <div className={`${card} p-6 text-white`}>
              <h3 className="text-xl font-semibold mb-3">New Pages Experience</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                <li>Page → <b>Professional dashboard</b> → <b>Page access</b></li>
                <li><b>Add New</b> → <b>Add a business</b></li>
                <li>Տվեք մեր <b>Business Manager ID</b></li>
                <li>Ընտրեք <b>Full control (Admin)</b></li>
                <li>Հաստատեք հրավերը</li>
              </ol>
              <a target="_blank" href="https://www.facebook.com/settings/?tab=profile_access" className={`${btn} mt-4 bg-blue-600 hover:bg-blue-700 text-white`}>
                Տալ Admin Access (New Pages)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
