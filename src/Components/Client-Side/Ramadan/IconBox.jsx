import {
  Users,
  TrendingDown,
  Heart,
  Moon,
  CalendarDays,
  MapPin,
  UsersRound,
  HeadphonesIcon,
  CheckCircle2,
} from "lucide-react";

// ─── Section 1 data ───────────────────────────────────────────────
const benefits = [
  {
    icon: <Users className="w-6 h-6 text-indigo-700" />,
    title: "Less Crowded",
    desc: "Experience the serenity of the holy sites with fewer pilgrims during the first Ashra",
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-indigo-700" />,
    title: "More Affordable",
    desc: "Better rates compared to peak Ramadan periods, making it accessible for all",
  },
  {
    icon: <Heart className="w-6 h-6 text-indigo-700" />,
    title: "Peaceful Worship",
    desc: "Focus on prayers and reflection in a calm, spiritual environment",
  },
  {
    icon: <Moon className="w-6 h-6 text-indigo-700" />,
    title: "Days of Mercy",
    desc: "The first 10 days are dedicated to Allah's mercy (Rahmah) — a blessed time",
  },
];

// ─── Section 2 data ───────────────────────────────────────────────
const supports = [
  {
    icon: <CalendarDays className="w-6 h-6 text-indigo-700" />,
    title: "Travel Flexibility",
    desc: "Multiple departure dates available throughout the first Ashra period",
  },
  {
    icon: <MapPin className="w-6 h-6 text-indigo-700" />,
    title: "Hotel Proximity",
    desc: "Stay close to Masjid al-Haram for easy access to prayers and Tarawih",
  },
  {
    icon: <UsersRound className="w-6 h-6 text-indigo-700" />,
    title: "Group Options",
    desc: "Join organised groups or customise packages for families and friends",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-indigo-700" />,
    title: "Complete Support",
    desc: "24/7 guidance during Ramadan with multilingual support staff",
  },
];

// ─── Section 3 data ───────────────────────────────────────────────
const included = [
  "Return flights to Jeddah/Madinah",
  "Hotel accommodation in Makkah & Madinah",
  "Daily Iftar meals (4★ & 5★ packages)",
  "24/7 multilingual support during Ramadan",
  "Saudi Arabia Umrah visa processing",
  "Ground transportation & transfers",
  "Ziyarat tours of holy sites",
  "Prayer mats and Ihram guidance",
];

// ─── Reusable icon box ────────────────────────────────────────────
function IconBox({ icon }) {
  return (
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2B7FFF33] mb-4">
      {icon}
    </div>
  );
}

export default function WhyChooseFirstAshra() {
  return (
    <div className="bg-[#FFF7ED4D] font-sans">

      {/* ── Section 1: Why Choose ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-center">
        {/* Top heart icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#2B7FFF33] mb-6">
          <Heart className="w-6 h-6 text-[#1C398E]" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] mb-2">
          Why Choose First Ashra?
        </h2>
        <p className="text-[#4A5565] text-sm sm:text-base mb-12">
          The blessed days of mercy offer unique spiritual benefits
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col  text-[#1C398E] items-center text-center">
              <IconBox icon={b.icon} />
              <h3 className="font-bold text-[#101828] mb-2 text-sm sm:text-base">
                {b.title}
              </h3>
              <p className="text-[#4A5565] text-xs sm:text-sm leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 2: Complete Ramadan Support ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#101828] mb-2">
          Complete Ramadan Support
        </h2>
        <p className="text-[#4A5565] text-sm sm:text-base mb-10">
          Everything you need for a blessed First Ashra journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {supports.map((s) => (
            <div
              key={s.title}
              className="flex flex-col items-start text-left bg-[#2B7FFF33] rounded-2xl p-5 border border-[#2B7FFFCC]"
            >
              <IconBox icon={s.icon} className="bg-[#FFFFFF] text-[#1C398E] " />
              <h3 className="font-bold text-[#101828] mb-2 text-sm sm:text-base">
                {s.title}
              </h3>
              <p className="text-[#4A5565] text-xs sm:text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section 3: What's Included ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-[#FFFFFF] rounded-3xl shadow-sm p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101828] text-center mb-8">
            What's Included in All Packages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5   text-[#1C398ECC] shrink-0 mt-0.5" />
                <span className="text-[#364153] text-sm sm:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}