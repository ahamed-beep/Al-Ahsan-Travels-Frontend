import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Plane, Car, Hotel, Star, FileText, Clock, MapPin } from "lucide-react";
import { API_UMRAH_PACKAGES_BY_CATEGORY } from "@/constants/api";
import axiosInstance from "@/lib/axios";

const WA_NUMBER = "447911123456"; // ← apna WhatsApp number yahan daalo

const formatPrice = (price) =>
  typeof price === "number" ? `£${price.toLocaleString("en-GB")}` : price;

function PackageCard({ pkg }) {
  const waMessage = encodeURIComponent(`I'm interested in: ${pkg.title}`);
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  const badges = [
    { show: pkg.includesFlight, icon: <Plane className="h-4 w-4 text-[#0B3D2E]" />, label: "Flight" },
    { show: pkg.includesVisa, icon: <FileText className="h-4 w-4 text-[#0B3D2E]" />, label: "Visa" },
    { show: pkg.includesTransport, icon: <Car className="h-4 w-4 text-[#0B3D2E]" />, label: "Transport" },
    { show: pkg.isCustom, icon: <Star className="h-4 w-4 stroke-[#C9A24A] text-[#C9A24A]" />, label: "Custom" },
    { show: pkg.isVip, icon: <Star className="h-4 w-4 stroke-[#C9A24A] text-[#C9A24A]" />, label: "VIP" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">

      {/* ✅ next/image */}
      <div className="relative md:w-72 h-48 flex-shrink-0">
        <Image
          src={pkg.imageUrl}
          alt={pkg.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 288px"
        />
      </div>

      {/* Details */}
      <div className="flex-1 p-5 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-[#222222]">{pkg.title}</h3>

        <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-2">
          <Clock className="h-4 w-4 text-[#4A5565]" /> {pkg.duration}
        </div>

        <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-1">
          <MapPin className="h-4 w-4 text-[#0B3D2E]" />
          <span>
            <span className="font-bold text-[#364153]">Makkah:</span> {pkg.makkahHotel}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-1">
          <MapPin className="h-4 w-4 text-[#0B3D2E]" />
          <span>
            <span className="font-semibold text-[#364153]">Madinah:</span> {pkg.madinahHotel}
          </span>
        </div>

        {/* ✅ Badges — array se */}
        <div className="flex flex-wrap gap-2 mt-4">
          {badges.filter((b) => b.show).map((b, i) => (
            <span key={i} className="flex items-center gap-1 bg-gray-100 text-xs px-3 py-1 rounded-full">
              {b.icon} {b.label}
            </span>
          ))}
        </div>
      </div>

      {/* Price + WhatsApp */}
      <div className="md:w-48 p-5 flex flex-col items-center justify-center gap-3 relative">
        <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-[#E5E7EB]" />

        {/* ✅ Formatted price */}
        <p className="text-3xl font-semibold text-[#1a3a2a]">{formatPrice(pkg.price)}</p>

        {/* ✅ Working WhatsApp link */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white py-2 px-4 rounded-xl text-sm font-medium transition-colors"
        >
          <MessageCircle size={16} /> WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function CustomSpecial() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axiosInstance
      .get(API_UMRAH_PACKAGES_BY_CATEGORY("CUSTOM_SPECIAL"))
      .then((res) => {
        const data = res.data;
        setPackages(Array.isArray(data) ? data : (data.data ?? []));
      })
      .catch(() => setError("Packages load nahi ho sake. Dobara try karein."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="bg-[#F7F8FA] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
          Custom & Special Packages
        </h2>
        <p className="text-sm text-[#4A5565] mt-1 mb-8">
          Tailored packages for unique requirements and groups
        </p>

        {loading && (
          <div className="space-y-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm h-48 animate-pulse" />
            ))}
          </div>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {!loading && !error && packages.length === 0 && (
          <p className="text-[#4A5565] text-sm">Is waqt koi package available nahi hai.</p>
        )}

        {!loading && !error && packages.length > 0 && (
          <div className="space-y-5">
            {packages.map((pkg) => (
              <PackageCard key={pkg._id} pkg={pkg} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}