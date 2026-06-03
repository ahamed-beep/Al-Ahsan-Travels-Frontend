const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5S18 2 16.5 3.5L13 7 4.8 5.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
    title: "Flights",
    desc: "Return flights from London Heathrow",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
    title: "Visa Processing",
    desc: "Complete visa assistance",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <rect x="6" y="7" width="4" height="4" rx="0.5" />
        <rect x="10" y="7" width="4" height="4" rx="0.5" />
        <rect x="14" y="7" width="4" height="4" rx="0.5" />
        <rect x="6" y="11" width="4" height="2" rx="0.5" />
        <rect x="14" y="11" width="4" height="2" rx="0.5" />
      </svg>
    ),
    title: "Hotel Stay",
    desc: "Quality accommodation near Haram",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Transport",
    desc: "Ground transfers included",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    title: "24/7 Support",
    desc: "Always available to help",
  },
];

export default function EverythingIncluded() {
  return (
    <section className="w-full py-14 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#101828] tracking-tight mb-2">
            Everything You Need Included
          </h2>
          <p className="text-[#4A5565] text-sm sm:text-base lg:text-lg">
            Comprehensive packages with complete travel support
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#f4f6fb] rounded-2xl px-5 py-8 sm:px-10 sm:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3">

                {/* Icon Box */}
                <div
                  style={{
                    backgroundColor: "#E8ECFB",
                    borderRadius: "16px",
                    width: "58px",
                    height: "58px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>

                {/* Text */}
                <div>
                  <p className="text-sm font-bold text-[#101828] mb-1">{feature.title}</p>
                  <p className="text-xs text-[#4A5565] leading-relaxed">{feature.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}