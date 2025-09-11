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
    try {
      // TODO: подключите свой backend
      // await fetch("/api/client-settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      await new Promise((r) => setTimeout(r, 700));
      setSubmitted(true);
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
    <section className="relative py-16 md:py-24">
      {/* Декор фона */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/3 -left-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-fuchsia-600/20 via-pink-500/10 to-rose-500/10 blur-3xl" />
        <div className="absolute -bottom-1/3 -right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-violet-600/20 via-purple-500/10 to-sky-500/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <header className="mb-10 text-center">
          <span className="inline-block text-xs uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white/80">Meta‑ready</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Ավելացրու քո էջը SmartBot-ում
          </h1>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Լրացրեք ձևը՝ որպեսզի ակտիվացնենք ձեր Messenger/Instagram ավտոպատասխանները և KPI-ներով հաշվետվությունները։
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
                  <input id="companyName" className={input} name="companyName" value={form.companyName} onChange={onChange} placeholder="BAC Group" />
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

              {/* Թեմաներ */}
              <div>
                <div className="flex items-center justify-between">
                  <label className={label}>Թեմաներ՝ որոնց վրա բոտը կարող է պատասխանել</label>
                  <span className="text-xs text-white/60">{selectedCount} / {presets.length}</span>
                </div>
                <div className="mt-3 grid grid-cols-2 md:grid-cols-3 gap-3 text-white/90">
                  {presets.map((t) => (
                    <label key={t} className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 hover:bg-white/5 transition">
                      <input
                        type="checkbox"
                        className="accent-pink-500 w-4 h-4"
                        value={t}
                        checked={form.allowedTopics.includes(t)}
                        onChange={(e) => onToggleTopic(t, e.target.checked)}
                      />
                      <span className="text-sm">{t}</span>
                    </label>
                  ))}
                </div>
                <input
                  className={`${input} mt-2`}
                  name="allowedTopicsCustom"
                  placeholder="Այլ թեմաներ…"
                  value={form.allowedTopicsCustom}
                  onChange={onChange}
                />
              </div>

              <div>
                <label className={label} htmlFor="forbiddenTopics">Թեմաներ, որոնց վրա չպետք է պատասխանել</label>
                <textarea id="forbiddenTopics" className={input} rows={2} name="forbiddenTopics" placeholder="Օրինակ՝ քաղաքականություն, բժշկություն, ֆինանսներ…" value={form.forbiddenTopics} onChange={onChange} />
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
                  <label className={label} htmlFor="facebookPageUrl">ՁԵՐ Facebook Page-ի հղումը (էջի իրական URL)</label>
                  <input id="facebookPageUrl" className={input} type="url" name="facebookPageUrl" placeholder="օր․ https://facebook.com/MyBusinessPage կամ https://facebook.com/profile.php?id=…" value={form.facebookPageUrl} onChange={onChange} />
                  <p className="mt-1 text-xs text-white/60">Գրեք հենց ձեր բիզնես էջի հղումը, ոչ թե SmartBot‑ի էջը։</p>
                  {errors.facebookPageUrl && <p className="mt-1 text-xs text-red-300">{errors.facebookPageUrl}</p>}
                </div>
                <div>
                  <label className={label} htmlFor="businessManagerId">ՁԵՐ Business Manager ID (եթե ունեք)</label>
                  <input id="businessManagerId" className={input} name="businessManagerId" placeholder="օր․ 123456789012345" value={form.businessManagerId} onChange={onChange} />
                  <p className="mt-1 text-xs text-white/60">Որտեղ գտնել՝ Business settings → Business info → Business Manager ID։ Կարող եք թողնել դատարկ, եթե դեռ չունեք։</p>
                </div>
              </div>

              <div>
                <label className={label} htmlFor="contactPhone">Հեռախոս / WhatsApp</label>
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
                <a href="#pricing" className={`${btn} bg-purple-600 hover:bg-purple-700 text-white`}>Դիտել սակագները</a>
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

            <div className={`${card} p-6 text-white`}>
              <h3 className="text-xl font-semibold mb-3">Classic Page Roles</h3>
              <ol className="list-decimal list-inside space-y-2 text-white/80">
                <li><b>Page Settings</b> → <b>Page roles</b></li>
                <li><b>Assign a new Page role</b></li>
                <li>Մուտքագրեք FB account կամ տվեք access Business Manager-ին</li>
                <li>Ընտրեք <b>Admin</b> → <b>Add</b></li>
                <li>Հաստատեք հրավերը</li>
              </ol>
              <a target="_blank" href="https://www.facebook.com/settings?tab=admin_roles" className={`${btn} mt-4 bg-blue-600 hover:bg-blue-700 text-white`}>
                Տալ Admin Access (Classic)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
