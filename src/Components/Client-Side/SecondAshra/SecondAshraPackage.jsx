import { Clock, MapPin, Check, MessageCircle } from "lucide-react";

const packages = [
  {
    id: 1,
    stars: 3,
    nights: 7,
    title: "7 Nights Second Ashra Package",
    price: "£895",
    badge: null,
    borderColor: "border-gray-200",
    image: "/Images/Image (5-Star Luxury Umrah).png",
    makkah: "Dar Al Eiman Royal",
    madinah: "Al Aqeeq Hotel",
    features: ["Return Flights", "Umrah Visa", "3★ Hotels", "Transport"],
    whatsappMsg: "I'm interested in the 7 Nights Second Ashra Package (£895)",
  },
  {
    id: 2,
    stars: 4,
    nights: 10,
    title: "10 Nights Second Ashra Package",
    price: "£1,195",
    badge: "Most Popular",
    badgeBg: "bg-blue-600",
    borderColor: "border-orange-400",
    image: "/Images/Image (5-Star Luxury Umrah).png",
    makkah: "Elaf Ajyad Hotel",
    madinah: "Shaza Al Madinah",
    features: ["Return Flights", "Umrah Visa", "4★ Hotels", "Transport", "Iftar"],
    whatsappMsg: "I'm interested in the 10 Nights Second Ashra Package (£1,195)",
  },
  {
    id: 3,
    stars: 5,
    nights: 14,
    title: "14 Nights Second Ashra Package",
    price: "£1,595",
    badge: "Premium",
    badgeBg: "bg-blue-900",
    borderColor: "border-gray-200",
    image: "/Images/Image (5-Star Luxury Umrah).png",
    makkah: "Swissotel Makkah",
    madinah: "Oberoi Al Madinah",
    features: ["Return Flights", "Umrah Visa", "5★ Hotels", "Transport", "Iftar", "Guide"],
    whatsappMsg: "I'm interested in the 14 Nights Second Ashra Package (£1,595)",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-base ${i < count ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function PackageCard({ pkg }) {
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(pkg.whatsappMsg)}`;
  const isPopular = !!pkg.badge;

  return (
    <div
      className={`relative flex flex-col rounded-2xl border-2 ${pkg.borderColor} bg-[#ffffff] shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl`}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        {/* Stars overlay */}
        <div className="absolute bottom-3 left-3">
          <StarRating count={pkg.stars} />
        </div>
        {/* Badge */}
        {pkg.badge && (
          <span
            className={`absolute top-3 right-3 ${pkg.badgeBg} text-white text-xs font-semibold px-3 py-1 rounded-md`}
          >
            {pkg.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        {/* Star label */}
        <div className="flex items-center gap-1.5 text-[#1C398E] text-xs font-semibold">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {pkg.stars}-Star
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#101828] leading-snug">
          {pkg.title}
        </h3>

        {/* Price */}
        <div>
          <p className="text-3xl sm:text-4xl font-extrabold text-[#1C398E]">
            {pkg.price}
          </p>
          <p className="text-xs text-[#6A7282] mt-0.5">per person</p>
        </div>

        <hr className="border-gray-100" />

        {/* Duration */}
        <div className="flex items-center gap-2 text-sm text-[#4A5565]">
          <Clock className="w-4 h-4 text-[#2B7FFF] shrink-0" />
          {pkg.nights} Nights during Second Ashra
        </div>

        <hr className="border-gray-100" />

        {/* Hotels */}
        <div className="space-y-2">
          <div className="flex items-start gap-2 text-sm text-[#101828]">
            <MapPin className="w-4 h-4 text-[#2B7FFF] mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold">Makkah</p>
              <p className="text-[#4A5565] text-xs">{pkg.makkah}</p>
            </div>
          </div>
          <div className="flex items-start gap-2 text-sm text-[#101828]">
            <MapPin className="w-4 h-4 text-[#2B7FFF] mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold">Madinah</p>
              <p className="text-[#4A5565] text-xs">{pkg.madinah}</p>
            </div>
          </div>
        </div>

        <hr className="border-[#E5E7EB]" />

        {/* Features */}
        <ul className="space-y-1.5">
          {pkg.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm text-[#364153]">
              <Check className="w-4 h-4 bg-[#C3D8FA33] text-[#2B7FFFCC] rounded-full  shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 w-full bg-[#25D366]  text-white font-semibold text-sm py-3 rounded-xl transition-colors duration-150"
        >
          <MessageCircle className="w-4 h-4 text-[#FFFFFF]" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function SecondAshraPackage() {
  return (
    <section className="min-h-screen bg-[#FFFFFF] py-14 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#101828] mb-2">
          Choose Your Second Ashra Package
        </h2>
        <p className="text-[#4A5565] text-sm sm:text-base">
          Tailored packages for the blessed days of mercy
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </section>
  );
}