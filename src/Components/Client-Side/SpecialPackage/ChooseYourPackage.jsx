import { useState } from "react";

const packages = [
  {
    id: 1,
    duration: "7 Days / 6 Nights",
    title: "7 Nights Package",
    price: "£699",
    badge: null,
    featured: false,
    features: [
      "Return flights from UK",
      "3★ hotel accommodation",
      "Visa processing included",
      "Ground transportation",
      "Airport transfers",
    ],
  },
  {
    id: 2,
    duration: "10 Days / 9 Nights",
    title: "10 Nights Package",
    price: "£899",
    badge: "Best Value",
    featured: true,
    features: [
      "Return flights from UK",
      "3★ hotel accommodation",
      "Visa processing included",
      "Ground transportation",
      "Airport transfers",
      "Ziyarat tours included",
    ],
  },
  {
    id: 3,
    duration: "14 Days / 13 Nights",
    title: "14 Nights Package",
    price: "£1,099",
    badge: null,
    featured: false,
    features: [
      "Return flights from UK",
      "3★ hotel accommodation",
      "Visa processing included",
      "Ground transportation",
      "Airport transfers",
      "Ziyarat tours included",
      "Extended stay benefits",
    ],
  },
];

export default function ChooseYourPackage() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4 sm:px-8 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-3">
          Choose Your Package
        </h2>
        <p className="text-gray-500 text-base sm:text-lg">
          Flexible durations to suit your schedule
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {packages.map((pkg) => (
          <div key={pkg.id} className="relative flex flex-col">
            {/* Badge */}
            {pkg.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="bg-blue-800 text-white text-sm font-semibold px-5 py-1.5 rounded-full shadow-md whitespace-nowrap">
                  {pkg.badge}
                </span>
              </div>
            )}

            <div
              className={`
                flex flex-col h-full rounded-2xl p-7 transition-all duration-300 cursor-pointer
                ${pkg.featured
                  ? "bg-white border-2 border-blue-400 shadow-2xl shadow-blue-200 scale-105 mt-2"
                  : "bg-blue-50 border border-blue-100 shadow-md hover:shadow-lg"
                }
                ${selected === pkg.id ? "ring-2 ring-blue-500" : ""}
              `}
              onClick={() => setSelected(pkg.id)}
            >
              {/* Duration */}
              <div className="flex items-center gap-2 text-blue-700 text-sm font-medium mb-3">
                <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {pkg.duration}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-blue-900 mb-2">{pkg.title}</h3>

              {/* Price */}
              <div className="mb-1">
                <span className="text-5xl font-extrabold text-blue-900">{pkg.price}</span>
              </div>
              <p className="text-gray-400 text-sm mb-6">per person</p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-blue-800 text-sm">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Button */}
              {pkg.featured ? (
                <button
                  onClick={() => setSelected(pkg.id)}
                  className="w-full bg-blue-800 hover:bg-blue-900 active:scale-[0.98] text-white font-bold py-4 rounded-xl text-base transition-all duration-200 shadow-lg shadow-blue-300"
                >
                  Select Package
                </button>
              ) : (
                <button
                  onClick={() => setSelected(pkg.id)}
                  className="w-full text-blue-800 font-bold py-4 rounded-xl text-base border border-transparent hover:bg-blue-100 transition-all duration-200"
                >
                  Select Package
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Selected confirmation */}
      {selected && (
        <div className="mt-10 bg-blue-800 text-white px-8 py-4 rounded-full text-sm font-semibold shadow-lg animate-bounce-once">
          ✓ {packages.find((p) => p.id === selected)?.title} selected — we'll prepare your quote!
        </div>
      )}
    </section>
  );
}