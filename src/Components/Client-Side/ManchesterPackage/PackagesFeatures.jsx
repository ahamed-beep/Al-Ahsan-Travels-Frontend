import { Plane, MapPin, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: <Plane className="w-6 h-6 text-[#1C398E]" />,
    title: "Flights from Manchester",
    desc: "Direct or connecting flights from Manchester Airport",
  },
  {
    icon: <MapPin className="w-6 h-6 text-[#1C398E]" />,
    title: "Hotels Near Haram",
    desc: "All hotels within walking distance of Masjid al-Haram",
  },
  {
    icon: <Users className="w-6 h-6 text-[#1C398E]" />,
    title: "Group Sharing Options",
    desc: "4 people per room options available for savings",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#1C398E]" />,
    title: "Customizable Packages",
    desc: "Tailor your package to fit your schedule and budget",
  },
];

export default function PackageFeatures() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101828]">
          Everything Included in Your Package
        </h2>
        <p className="mt-3 text-[#4A5565] text-sm sm:text-base">
          Complete Umrah solutions from Manchester — no hidden extras
        </p>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#E5E7EB] rounded-xl border border-gray-200 p-6 text-left hover:shadow-md transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#1C398E1A] mb-4">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#101828]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-[#4A5565]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}