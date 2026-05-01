"use client";

import { useState, useEffect } from "react";
import {
  Book, Home, MapPin, Shirt, Calendar,
  CircleCheckBig, CircleAlert, X, Menu,
} from "lucide-react";
import Link from "next/link";

const sections = [
  { id: "intro", label: "Introduction", icon: <Book size={16} /> },
  { id: "kaaba", label: "The Kaaba", icon: <Home size={16} /> },
  { id: "meeqat", label: "Meeqat", icon: <MapPin size={16} /> },
  { id: "ihram", label: "Ihram", icon: <Shirt size={16} /> },
  { id: "types", label: "Types of Hajj", icon: <Calendar size={16} /> },
  { id: "steps", label: "Step-by-Step Guide", icon: <CircleCheckBig size={16} /> },
  { id: "obligations", label: "Obligations", icon: <CircleAlert size={16} /> },
  { id: "tawaf", label: "Tawaf", icon: <Calendar size={16} /> },
  { id: "tips", label: "Tips & Advice", icon: <CircleAlert size={16} /> },
];

export default function HajjGuide() {
  const [activeSection, setActiveSection] = useState("intro");
  const [drawerOpen, setDrawerOpen] = useState(false);

  // track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const scrollTo = (id) => {
    setActiveSection(id);
    setDrawerOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const SidebarNav = () => (
    <nav className="py-2 w-full">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className={[
            "w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-left",
            "rounded-lg mx-1 transition-all duration-200 active:scale-[0.98]",
            activeSection === s.id
              ? "bg-blue-900 text-white shadow-md"
              : "text-gray-700 hover:bg-blue-50 hover:text-blue-900",
          ].join(" ")}
          style={{ width: "calc(100% - 8px)" }}
        >
          <span className="flex-shrink-0 opacity-80">{s.icon}</span>
          <span className="truncate">{s.label}</span>
        </button>
      ))}
    </nav>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">

      {/* ── Mobile Top Bar ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-900 flex items-center justify-center">
            <Book size={14} className="text-white" />
          </div>
          <h1 className="text-base font-bold text-gray-900">Hajj Guide</h1>
        </div>
        <button
          onClick={() => setDrawerOpen(true)}
          className="p-2 rounded-lg bg-blue-900 text-white flex items-center gap-1.5 text-sm font-medium"
        >
          <Menu size={16} />
          <span>Menu</span>
        </button>
      </div>

      {/* ── Mobile Drawer Overlay ── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          style={{ background: "rgba(0,0,0,0.45)" }}
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        className={[
          "fixed top-0 left-0 h-full w-72 z-50 bg-white shadow-2xl lg:hidden",
          "transition-transform duration-300 ease-in-out flex flex-col",
          drawerOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-blue-900 flex items-center justify-center">
            </div>
            <span className="font-bold text-gray-900 text-sm">Contents</span>
          </div>
          <button
            onClick={() => setDrawerOpen(false)}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
          >
            <X size={18} />
          </button>
        </div>
        {/* Drawer nav */}
        <div className="flex-1 overflow-y-auto py-2 px-2">
          <SidebarNav />
        </div>
      </div>

      {/* ── Page Layout ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 pt-16 lg:pt-8">

          {/* ── Desktop Sidebar ── */}
          <aside className="hidden lg:flex flex-col w-60 flex-shrink-0">
            <div className="sticky top-8 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">

                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Contents</h2>
              </div>
              <div className="py-2 px-2">
                <SidebarNav />
              </div>
            </div>
          </aside>

          {/* ── Main Content ── */}
          <main className="flex-1 min-w-0 pb-16 space-y-5">

            {/* Introduction */}
            <section id="intro" className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Introduction to Hajj</h1>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                Hajj is the annual Islamic pilgrimage to Makkah, Saudi Arabia, and one of the Five
                Pillars of Islam. It is obligatory for every adult Muslim who is physically and
                financially capable to perform it at least once in their lifetime.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                The pilgrimage occurs during the Islamic month of Dhul Hijjah and involves a series
                of rituals that commemorate the actions of Prophet Ibrahim (Abraham) and his family.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-900 rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-blue-900 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" />
                  </svg>
                  <span className="font-semibold text-blue-900">Key Points</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Hajj takes place during the 8th–13th of Dhul Hijjah",
                    "Approximately 2–3 million pilgrims perform Hajj annually",
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

            {/* The Kaaba */}
            <section id="kaaba" className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">The Kaaba</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                The Kaaba is the cuboid building at the center of Islam's most important mosque,
                Masjid al-Haram in Makkah. It is considered the most sacred site in Islam and serves
                as the qibla (direction of prayer) for Muslims worldwide.
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3">Historical Significance</h3>
              <ul className="space-y-2">
                {[
                  "Built by Prophet Ibrahim and his son Ismail",
                  "Contains the Black Stone (Hajar al-Aswad)",
                  "Covered with the Kiswa (black silk cloth with gold embroidery)",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Meeqat */}
            <section id="meeqat" className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Meeqat</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Meeqat (plural: Mawaqit) are designated boundary stations where pilgrims must enter
                the state of Ihram before proceeding to Makkah for Hajj or Umrah.
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">The Five Main Meeqat Points</h3>
              <div className="space-y-3">
                {[
                  { name: "Dhul Hulaifah (Abyar Ali)", desc: "For pilgrims from Madinah and beyond" },
                  { name: "Al-Juhfah (Rabigh)", desc: "For pilgrims from Syria, Egypt, and North Africa" },
                  { name: "Qarn al-Manazil", desc: "For pilgrims from Najd and East" },
                  { name: "Yalamlam", desc: "For pilgrims from Yemen and beyond" },
                  { name: "Dhat Irq", desc: "For pilgrims from Iraq" },
                ].map((m) => (
                  <div key={m.name} className="border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4">
                    <p className="font-semibold text-gray-800 text-sm">{m.name}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{m.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ihram */}
            <section id="ihram" className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Ihram</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Ihram is the sacred state a Muslim must enter before performing Hajj or Umrah. It
                involves specific clothing, intentions (niyyah), and behavioral restrictions.
              </p>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Ihram Clothing</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="border-l-4 border-blue-900 bg-blue-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2 text-sm">For Men</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {["Two white seamless cloths (Izar and Rida)", "No stitched garments", "Head must remain uncovered"].map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-900 flex-shrink-0" />{i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 bg-yellow-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-800 mb-2 text-sm">For Women</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {["Normal modest Islamic clothing", "Face and hands must be uncovered", "Any color is acceptable"].map((i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />{i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 border-l-4 border-yellow-500 rounded-lg p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  </svg>
                  <span className="font-semibold text-yellow-700 text-sm">Important Prohibitions in Ihram</span>
                </div>
                <ul className="space-y-2">
                  {["No cutting of hair or nails", "No use of perfume or scented products", "No hunting or killing animals", "No sexual relations or intimate contact", "No arguing or fighting"].map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Types of Hajj */}
            <section id="types" className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Types of Hajj</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                There are three types of Hajj that pilgrims can perform, each with different procedures and timings.
              </p>
              <div className="space-y-4">
                {[
                  { title: "1. Hajj al-Tamattu (Interrupted)", desc: "Perform Umrah first during the Hajj months, exit Ihram, then re-enter Ihram for Hajj on the 8th of Dhul Hijjah.", tag: "Most common type • Requires sacrifice (Qurbani)", tagColor: "text-blue-600", active: true },
                  { title: "2. Hajj al-Qiran (Combined)", desc: "Perform Umrah and Hajj together with one Ihram, without exiting the state of Ihram in between.", tag: "Requires sacrifice (Qurbani)", tagColor: "text-gray-500", active: false },
                  { title: "3. Hajj al-Ifrad (Single)", desc: "Perform Hajj only, entering Ihram specifically for Hajj without performing Umrah.", tag: "No sacrifice required", tagColor: "text-gray-500", active: false },
                ].map((t) => (
                  <div key={t.title} className={["rounded-xl border-2 p-4 sm:p-5", t.active ? "border-blue-900" : "border-gray-200"].join(" ")}>
                    <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{t.title}</p>
                    <p className="text-gray-600 text-sm mb-3">{t.desc}</p>
                    <p className={`text-xs font-medium ${t.tagColor}`}>{t.tag}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Step-by-Step */}
            <section id="steps" className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Step-by-Step Hajj Journey</h2>
              <div className="space-y-4">
                {[
                  { n: 1, date: "8th Dhul Hijjah", title: "Ihram & Mina", desc: "Enter the state of Ihram and proceed to Mina. Spend the day and night in worship." },
                  { n: 2, date: "9th Dhul Hijjah", title: "Day of Arafat", desc: "Stand at Arafat from noon until sunset – the most important day of Hajj." },
                  { n: 3, date: "9th Night", title: "Muzdalifah", desc: "Proceed to Muzdalifah after sunset, pray Maghrib and Isha, and collect pebbles." },
                  { n: 4, date: "10th Dhul Hijjah", title: "Rami & Sacrifice", desc: "Stone the Jamrat al-Aqaba, offer sacrifice, and shave/trim hair." },
                  { n: 5, date: "10th–13th", title: "Tawaf al-Ifadah", desc: "Perform Tawaf al-Ifadah and Saʿi between Safa and Marwah." },
                  { n: 6, date: "11th–13th", title: "Days of Tashreeq", desc: "Return to Mina and stone all three Jamarat daily after noon." },
                  { n: 7, date: "Final Day", title: "Farewell Tawaf", desc: "Perform Tawaf al-Wada (Farewell Tawaf) before leaving Makkah." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-900 flex items-center justify-center text-white font-bold text-sm">
                      {step.n}
                    </div>
                    <div className="flex-1 border border-gray-200 rounded-xl px-4 sm:px-5 py-3 sm:py-4">
                      <p className="text-xs font-semibold text-yellow-600 mb-1">{step.date}</p>
                      <p className="font-semibold text-gray-900 text-sm">{step.title}</p>
                      <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Obligations */}
            <section id="obligations" className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-[30px] font-bold text-[#1F1F1F] mb-3">Obligations of Hajj</h2>
              <p className="text-[#1F1F1F] mb-6 text-sm sm:text-base">
                The obligations (Wajibat) of Hajj are actions that must be performed. Missing any requires a penalty (dam).
              </p>
              <ul className="space-y-3">
                {[
                  { title: "Entering Ihram from Meeqat", desc: "Pilgrim must assume Ihram before crossing the Meeqat boundary" },
                  { title: "Standing at Arafat until Sunset", desc: "Remain at Arafat from noon until sunset on the 9th of Dhul Hijjah" },
                  { title: "Spending Night at Muzdalifah", desc: "Stay at Muzdalifah from after sunset on 9th until after midnight" },
                  { title: "Spending Nights in Mina", desc: "Stay overnight in Mina on the 10th, 11th, and 12th nights" },
                  { title: "Stoning the Jamarat", desc: "Throw pebbles at the three pillars on specific days" },
                  { title: "Shaving or Trimming Hair", desc: "Men must shave or trim hair; women trim a fingertip's length" },
                  { title: "Farewell Tawaf (Tawaf al-Wada)", desc: "Perform final Tawaf before leaving Makkah" },
                ].map((ob) => (
                  <li key={ob.title} className="flex items-start gap-4 bg-gray-50 rounded-xl px-5 py-4">
                    <div className="text-[#1C398E]"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none " stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335" /><path d="m9 11 3 3L22 4" /></svg> </div>
                    <div>
                      <p className="font-semibold text-[#1F1F1F] text-sm sm:text-base">{ob.title}</p>
                      <p className="text-[#4A5565] text-sm mt-0.5">{ob.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Tawaf */}
            <section
              id="tawaf"
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8"
            >
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1F1F1F] mb-2">
                Tawaf - Circling the Kaaba
              </h2>

              <p className="text-[#1F1F1F] text-sm sm:text-base mb-6 leading-relaxed">
                Tawaf is the act of circling the Kaaba seven times counterclockwise.
                It is a fundamental ritual in both Hajj and Umrah.
              </p>

              {/* Steps */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#1F1F1F] mb-4">
                How to Perform Tawaf
              </h3>

              <div className="space-y-5">
                {[
                  {
                    num: "1",
                    title: "Begin at the Black Stone",
                    desc: 'Start from the Black Stone corner, raise hands and say "Bismillah, Allahu Akbar"',
                  },
                  {
                    num: "2",
                    title: "Circle Counterclockwise",
                    desc: "Keep the Kaaba on your left and walk counterclockwise around it",
                  },
                  {
                    num: "3",
                    title: "Complete Seven Circuits",
                    desc: "One complete circuit is from the Black Stone back to it. Repeat seven times",
                  },
                  {
                    num: "4",
                    title: "Pray at Maqam Ibrahim",
                    desc: "After completing Tawaf, pray two rakats behind the Station of Ibrahim",
                  },
                ].map((step) => (
                  <div key={step.num} className="flex gap-4">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 rounded-full bg-[#1C398E] text-[#FFFFFF] flex items-center justify-center text-sm font-semibold">
                        {step.num}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="font-semibold text-[#1F1F1F] text-sm sm:text-base">
                        {step.title}
                      </h4>
                      <p className="text-[#1F1F1F] text-xs sm:text-sm mt-1">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tips Box */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-blue-600 font-semibold text-sm">ℹ️ Tawaf Tips</span>
                </div>

                <ul className="space-y-2 text-sm text-gray-700 list-disc pl-5">
                  <li>Men should perform Raml (brisk walking) in first three circuits</li>
                  <li>Make dua (supplication) throughout the Tawaf</li>
                  <li>Stay focused and avoid pushing others</li>
                </ul>
              </div>
            </section>

            {/* Tips & Advice */}
            <section id="tips" className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Tips &amp; Practical Advice</h2>
              <p className="text-gray-500 text-sm mb-6">Essential tips to help you have a smooth and spiritually fulfilling Hajj experience.</p>
              <div className="space-y-4 mb-8">
                {[
                  {
                    color: "bg-green-50", iconColor: "text-green-600", titleColor: "text-green-800", dotColor: "bg-green-500",
                    title: "Preparation Tips",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
                    tips: ["Start physical preparation months before – practice walking long distances", "Learn Hajj rituals and duas in advance", "Get all required vaccinations and health checks", "Pack light but include essentials (comfortable shoes, sunscreen, medications)"],
                  },
                  {
                    color: "bg-yellow-50", iconColor: "text-yellow-600", titleColor: "text-yellow-800", dotColor: "bg-yellow-500",
                    title: "During Hajj",
                    icon: <><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01" /></>,
                    tips: ["Stay hydrated – drink plenty of water, especially during Arafat", "Use an umbrella for sun protection", "Keep your group leader's contact information accessible", "Be patient with crowds and maintain good character"],
                  },
                  {
                    color: "bg-red-50", iconColor: "text-red-500", titleColor: "text-red-700", dotColor: "bg-red-400",
                    title: "Common Mistakes to Avoid",
                    icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />,
                    tips: ["Don't rush or push others during Tawaf or stoning", "Don't perform rituals without proper knowledge", "Don't neglect rest – exhaustion can lead to mistakes", "Don't forget to make dua – this is a blessed time"],
                  },
                ].map((block) => (
                  <div key={block.title} className={`${block.color} rounded-xl p-4 sm:p-5`}>
                    <div className="flex items-center gap-2 mb-3">
                      <svg className={`w-5 h-5 ${block.iconColor} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">{block.icon}</svg>
                      <span className={`font-semibold ${block.titleColor} text-sm`}>{block.title}</span>
                    </div>
                    <ul className="space-y-1.5 text-sm text-gray-700">
                      {block.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${block.dotColor} flex-shrink-0`} />{tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Quick Summary */}
              <div className="bg-blue-900 rounded-2xl p-5 sm:p-6 mb-6 text-white">
                <h3 className="text-base sm:text-lg font-bold mb-4">Quick Summary</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
                  {[
                    { heading: "Key Steps", items: ["Enter Ihram at Meeqat", "Spend day at Arafat (9th)", "Night at Muzdalifah", "Stone Jamarat (10th–13th)", "Perform Tawaf & Saʿi", "Shave/trim hair", "Farewell Tawaf"] },
                    { heading: "Key Rules", items: ["Maintain state of Ihram", "No perfume or scents", "No cutting hair/nails", "No hunting", "Maintain good character", "Stay with your group"] },
                    { heading: "Important Reminders", items: ["Stay hydrated always", "Be patient in crowds", "Make lots of dua", "Follow your guide", "Rest when needed", "Keep emergency contacts"] },
                  ].map((col) => (
                    <div key={col.heading}>
                      <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">{col.heading}</p>
                      <ul className="space-y-1">
                        {col.items.map((s) => (
                          <li key={s} className="flex items-start gap-1.5 text-sm text-blue-100">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-300 flex-shrink-0" />{s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="rounded-2xl border border-gray-200 p-6 sm:p-8 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Need Help Planning Your Hajj?</h3>
                <p className="text-gray-500 text-sm mb-5">
                  Our experienced team is here to guide you through every step of your sacred journey. Book a free consultation to discuss your Hajj plans.
                </p>
                <Link href="/#hero"  className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors duration-200">
                  Book Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}