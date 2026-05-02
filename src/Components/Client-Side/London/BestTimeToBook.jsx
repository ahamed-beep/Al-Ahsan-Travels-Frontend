const months = [
  { name: "January", price: "Low", crowds: "Minimal", priceColor: "text-green-600" },
  { name: "February", price: "Low", crowds: "Minimal", priceColor: "text-green-600" },
  { name: "March", price: "Medium", crowds: "Moderate", priceColor: "text-green-600" },
];

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TrendDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
    <polyline points="17 18 23 18 23 12" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function BestTimeToBook() {
  return (
    <section className="w-full bg-white py-14 px-4">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] tracking-tight mb-2">
            Best Time to Book from London
          </h2>
          <p className="text-[#4A5565] text-base">
            Save more during off-peak months with better availability
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {months.map((month, i) => (
            <div key={i} className="bg-blue-100 rounded-2xl px-8 py-10 flex flex-col items-center text-center gap-5">

              {/* Icon — top center */}
              <div className="w-12 h-12 rounded-full bg-[#1C398E] flex items-center justify-center shrink-0">
                <CalendarIcon />
              </div>

              {/* Month Name */}
              <h3 className="text-xl font-bold text-[#101828]">{month.name}</h3>

              {/* Price & Crowds */}
              <div className="flex flex-col gap-2 text-sm ml-20 text-[#101828] w-full text-left">
                <p className="flex items-center gap-1">
                  <TrendDownIcon />
                  <span className="font-semibold">Price:</span>&nbsp;
                  <span className={month.priceColor}>{month.price}</span>
                </p>
                <p className="flex items-center gap-1">
                  <CheckIcon />
                  <span className="font-semibold">Crowds:</span>&nbsp;
                  <span className="text-[#4A5565]">{month.crowds}</span>
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-[#4A5565] text-sm">
          Book during January–March for the best value and peaceful experience
        </p>

      </div>
    </section>
  );
}