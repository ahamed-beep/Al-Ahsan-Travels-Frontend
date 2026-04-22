"use client";

import { useState } from "react";

const sections = [
  { id: "introduction", label: "Introduction", icon: "🕌" },
  { id: "kaaba", label: "The Kaaba", icon: "🏛️" },
  { id: "meeqat", label: "Meeqat", icon: "📍" },
  { id: "ihram", label: "Ihram", icon: "🤍" },
  { id: "types", label: "Types of Hajj", icon: "📋" },
  { id: "stepbystep", label: "Step-by-Step Guide", icon: "🗺️" },
  { id: "obligations", label: "Obligations", icon: "✅" },
  { id: "tawaf", label: "Tawaf", icon: "🔄" },
  { id: "tips", label: "Tips & Advice", icon: "💡" },
];

export default function HajjGuide() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollTo = (id) => {
    setActiveSection(id);
    setSidebarOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Mobile Top Bar ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <h1 className="text-lg font-bold text-gray-900">Hajj Guide</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg bg-blue-900 text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={sidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      <div className="flex lg:pt-0 pt-14">

        {/* ── Sidebar ── */}
        <aside
          className={[
            "fixed lg:sticky top-0 left-0 h-screen z-40 w-64",
            "bg-white border-r border-gray-200 shadow-lg lg:shadow-none",
            "flex flex-col transition-transform duration-300",
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          ].join(" ")}
        >
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
              Contents
            </h2>
          </div>
          <nav className="flex-1 overflow-y-auto py-2">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={[
                  "w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-all duration-150 text-left",
                  activeSection === s.id
                    ? "bg-blue-900 text-white"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-900",
                ].join(" ")}
              >
                <span className="text-base">{s.icon}</span>
                <span>{s.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ── Main Content ── */}
        <main className="flex-1 max-w-3xl mx-auto px-4 py-8 lg:px-10 space-y-6">

          {/* ── Introduction ── */}
          <section id="introduction" className="bg-white rounded-2xl shadow-sm p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Introduction to Hajj</h1>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hajj is the annual Islamic pilgrimage to Makkah, Saudi Arabia, and one of the Five
              Pillars of Islam. It is obligatory for every adult Muslim who is physically and
              financially capable to perform it at least once in their lifetime.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              The pilgrimage occurs during the Islamic month of Dhul Hijjah and involves a series
              of rituals that commemorate the actions of Prophet Ibrahim (Abraham) and his family.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-900 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
                </svg>
                <span className="font-semibold text-blue-900">Key Points</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Hajj takes place during the 8th\u201313th of Dhul Hijjah",
                  "Approximately 2\u20133 million pilgrims perform Hajj annually",
                  "Physical and financial capability are prerequisites",
                ].map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-900 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── The Kaaba ── */}
          <section id="kaaba" className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Kaaba</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Kaaba is the cuboid building at the center of Islam&apos;s most important mosque,
              Masjid al-Haram in Makkah. It is considered the most sacred site in Islam and serves
              as the qibla (direction of prayer) for Muslims worldwide.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Historical Significance</h3>
            <ul className="space-y-2">
              {[
                "Built by Prophet Ibrahim and his son Ismail",
                "Contains the Black Stone (Hajar al-Aswad)",
                "Covered with the Kiswa (black silk cloth with gold embroidery)",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Meeqat ── */}
          <section id="meeqat" className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Meeqat</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Meeqat (plural: Mawaqit) are designated boundary stations where pilgrims must enter
              the state of Ihram before proceeding to Makkah for Hajj or Umrah.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">The Five Main Meeqat Points</h3>
            <div className="space-y-3">
              {[
                { name: "Dhul Hulaifah (Abyar Ali)", desc: "For pilgrims from Madinah and beyond" },
                { name: "Al-Juhfah (Rabigh)", desc: "For pilgrims from Syria, Egypt, and North Africa" },
                { name: "Qarn al-Manazil", desc: "For pilgrims from Najd and East" },
                { name: "Yalamlam", desc: "For pilgrims from Yemen and beyond" },
                { name: "Dhat Irq", desc: "For pilgrims from Iraq" },
              ].map((m) => (
                <div key={m.name} className="border border-gray-200 rounded-xl px-5 py-4">
                  <p className="font-semibold text-gray-800 text-sm">{m.name}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Ihram ── */}
          <section id="ihram" className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ihram</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Ihram is the sacred state a Muslim must enter before performing Hajj or Umrah. It
              involves specific clothing, intentions (niyyah), and behavioral restrictions.
            </p>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ihram Clothing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="border-l-4 border-blue-900 bg-blue-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">For Men</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {[
                    "Two white seamless cloths (Izar and Rida)",
                    "No stitched garments",
                    "Head must remain uncovered",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-900 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-l-4 border-yellow-500 bg-yellow-50 rounded-lg p-4">
                <p className="font-semibold text-gray-800 mb-2">For Women</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {[
                    "Normal modest Islamic clothing",
                    "Face and hands must be uncovered",
                    "Any color is acceptable",
                  ].map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-yellow-500 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                <span className="font-semibold text-yellow-700">Important Prohibitions in Ihram</span>
              </div>
              <ul className="space-y-2">
                {[
                  "No cutting of hair or nails",
                  "No use of perfume or scented products",
                  "No hunting or killing animals",
                  "No sexual relations or intimate contact",
                  "No arguing or fighting",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2 text-gray-700 text-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ── Types of Hajj ── */}
          <section id="types" className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Types of Hajj</h2>
            <p className="text-gray-600 mb-6">
              There are three types of Hajj that pilgrims can perform, each with different
              procedures and timings.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "1. Hajj al-Tamattu (Interrupted)",
                  desc: "Perform Umrah first during the Hajj months, exit Ihram, then re-enter Ihram for Hajj on the 8th of Dhul Hijjah.",
                  tag: "Most common type \u2022 Requires sacrifice (Qurbani)",
                  tagColor: "text-blue-600",
                  active: true,
                },
                {
                  title: "2. Hajj al-Qiran (Combined)",
                  desc: "Perform Umrah and Hajj together with one Ihram, without exiting the state of Ihram in between.",
                  tag: "Requires sacrifice (Qurbani)",
                  tagColor: "text-gray-500",
                  active: false,
                },
                {
                  title: "3. Hajj al-Ifrad (Single)",
                  desc: "Perform Hajj only, entering Ihram specifically for Hajj without performing Umrah.",
                  tag: "No sacrifice required",
                  tagColor: "text-gray-500",
                  active: false,
                },
              ].map((t) => (
                <div
                  key={t.title}
                  className={[
                    "rounded-xl border-2 p-5",
                    t.active ? "border-blue-900" : "border-gray-200",
                  ].join(" ")}
                >
                  <p className="font-semibold text-gray-900 mb-2">{t.title}</p>
                  <p className="text-gray-600 text-sm mb-3">{t.desc}</p>
                  <p className={`text-xs font-medium ${t.tagColor}`}>{t.tag}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Step-by-Step ── */}
          <section id="stepbystep" className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Hajj Journey</h2>
            <div className="space-y-4">
              {[
                { n: 1, date: "8th Dhul Hijjah",  title: "Ihram & Mina",      desc: "Enter the state of Ihram and proceed to Mina. Spend the day and night in worship." },
                { n: 2, date: "9th Dhul Hijjah",  title: "Day of Arafat",     desc: "Stand at Arafat from noon until sunset \u2013 the most important day of Hajj." },
                { n: 3, date: "9th Night",         title: "Muzdalifah",        desc: "Proceed to Muzdalifah after sunset, pray Maghrib and Isha, and collect pebbles." },
                { n: 4, date: "10th Dhul Hijjah", title: "Rami & Sacrifice",  desc: "Stone the Jamrat al-Aqaba, offer sacrifice, and shave/trim hair." },
                { n: 5, date: "10th\u201313th",   title: "Tawaf al-Ifadah",  desc: "Perform Tawaf al-Ifadah and Sa\u02bci between Safa and Marwah." },
                { n: 6, date: "11th\u201313th",   title: "Days of Tashreeq", desc: "Return to Mina and stone all three Jamarat daily after noon." },
                { n: 7, date: "Final Day",         title: "Farewell Tawaf",   desc: "Perform Tawaf al-Wada (Farewell Tawaf) before leaving Makkah." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm">
                    {step.n}
                  </div>
                  <div className="flex-1 border border-gray-200 rounded-xl px-5 py-4">
                    <p className="text-xs font-semibold text-yellow-600 mb-1">{step.date}</p>
                    <p className="font-semibold text-gray-900 text-sm">{step.title}</p>
                    <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Obligations ── */}
          <section id="obligations" className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Obligations of Hajj</h2>
            <p className="text-gray-600 mb-6">
              The essential acts (Wajibat) that must be performed during Hajj. Missing these
              requires a penalty (dam).
            </p>
            <ul className="space-y-3">
              {[
                "Entering Ihram at the Meeqat",
                "Spending the night at Muzdalifah",
                "Stoning the Jamarat",
                "Shaving or trimming the hair",
                "Performing Sa\u02bci between Safa and Marwah",
                "Performing Farewell Tawaf",
              ].map((ob) => (
                <li key={ob} className="flex items-center gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {ob}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Tawaf ── */}
          <section id="tawaf" className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tawaf</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tawaf is the act of circumambulating (walking around) the Kaaba seven times in a
              counterclockwise direction. It is one of the most important rituals of Hajj and Umrah.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Tawaf al-Qudum",  desc: "Arrival Tawaf performed upon reaching Makkah",     color: "bg-blue-50 border-blue-200" },
                { title: "Tawaf al-Ifadah", desc: "Obligatory Tawaf performed on 10th Dhul Hijjah",   color: "bg-green-50 border-green-200" },
                { title: "Tawaf al-Wada",   desc: "Farewell Tawaf before departing from Makkah",      color: "bg-yellow-50 border-yellow-200" },
              ].map((t) => (
                <div key={t.title} className={`rounded-xl border p-4 ${t.color}`}>
                  <p className="font-semibold text-gray-800 text-sm mb-1">{t.title}</p>
                  <p className="text-gray-600 text-xs">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Tips & Advice ── */}
          <section id="tips" className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Tips &amp; Practical Advice</h2>
            <p className="text-gray-500 text-sm mb-6">
              Essential tips to help you have a smooth and spiritually fulfilling Hajj experience.
            </p>

            <div className="space-y-4 mb-8">

              {/* Preparation Tips */}
              <div className="bg-green-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-green-800">Preparation Tips</span>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {[
                    "Start physical preparation months before \u2013 practice walking long distances",
                    "Learn Hajj rituals and duas in advance",
                    "Get all required vaccinations and health checks",
                    "Pack light but include essentials (comfortable shoes, sunscreen, medications)",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* During Hajj */}
              <div className="bg-yellow-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
                  </svg>
                  <span className="font-semibold text-yellow-800">During Hajj</span>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {[
                    "Stay hydrated \u2013 drink plenty of water, especially during Arafat",
                    "Use an umbrella for sun protection",
                    "Keep your group leader\u2019s contact information accessible",
                    "Be patient with crowds and maintain good character",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Mistakes */}
              <div className="bg-red-50 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                  <span className="font-semibold text-red-700">Common Mistakes to Avoid</span>
                </div>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {[
                    "Don\u2019t rush or push others during Tawaf or stoning",
                    "Don\u2019t perform rituals without proper knowledge",
                    "Don\u2019t neglect rest \u2013 exhaustion can lead to mistakes",
                    "Don\u2019t forget to make dua \u2013 this is a blessed time",
                  ].map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Summary */}
            <div className="bg-blue-900 rounded-2xl p-6 mb-6 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Summary</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">
                    Key Steps
                  </p>
                  <ul className="space-y-1 text-sm text-blue-100">
                    {[
                      "Enter Ihram at Meeqat",
                      "Spend day at Arafat (9th)",
                      "Night at Muzdalifah",
                      "Stone Jamarat (10th\u201313th)",
                      "Perform Tawaf & Sa\u02bci",
                      "Shave/trim hair",
                      "Farewell Tawaf",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-1.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-300 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">
                    Key Rules
                  </p>
                  <ul className="space-y-1 text-sm text-blue-100">
                    {[
                      "Maintain state of Ihram",
                      "No perfume or scents",
                      "No cutting hair/nails",
                      "No hunting",
                      "Maintain good character",
                      "Stay with your group",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-1.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-300 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">
                    Important Reminders
                  </p>
                  <ul className="space-y-1 text-sm text-blue-100">
                    {[
                      "Stay hydrated always",
                      "Be patient in crowds",
                      "Make lots of dua",
                      "Follow your guide",
                      "Rest when needed",
                      "Keep emergency contacts",
                    ].map((s) => (
                      <li key={s} className="flex items-start gap-1.5">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-300 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-gray-200 p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need Help Planning Your Hajj?</h3>
              <p className="text-gray-500 text-sm mb-5">
                Our experienced team is here to guide you through every step of your sacred
                journey. Book a free consultation to discuss your Hajj plans.
              </p>
              <button className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200">
                Book Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}