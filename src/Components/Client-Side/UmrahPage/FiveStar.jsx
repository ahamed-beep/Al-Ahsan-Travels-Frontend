import { useState, useEffect } from "react";
import { MessageCircle, Plane, Car, Users, Hotel, FileText, Clock, MapPin } from "lucide-react";
import { API_UMRAH_PACKAGES_BY_CATEGORY } from "@/constants/api";
import axiosInstance from "@/lib/axios";

function PackageCard({ pkg, starLabel }) {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-72 h-48 flex-shrink-0">
                <img src={pkg.imageUrl} alt={pkg.title} className="w-full h-full object-cover" />
            </div>

            <div className="flex-1 p-5 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-[#222222]">{pkg.title}</h3>

                <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-2">
                    <Clock className="h-4 w-4 text-[#4A5565]" /> {pkg.duration}
                </div>

                <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-1">
                    <MapPin className="h-4 w-4 text-[#0B3D2E]" />
                    <span><span className="font-bold text-[#364153]">Makkah:</span> {pkg.makkahHotel}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-1">
                    <MapPin className="h-4 w-4 text-[#0B3D2E]" />
                    <span><span className="font-semibold text-[#364153]">Madinah:</span> {pkg.madinahHotel}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                    {pkg.includesFlight && (
                        <span className="flex items-center gap-1 bg-gray-100 text-xs px-3 py-1 rounded-full">
                            <Plane className="h-4 w-4 text-[#0B3D2E]" /> Flight
                        </span>
                    )}
                    {pkg.includesVisa && (
                        <span className="flex items-center gap-1 bg-gray-100 text-xs px-3 py-1 rounded-full">
                            <FileText className="h-4 w-4 text-[#0B3D2E]" /> Visa
                        </span>
                    )}
                    {pkg.includesTransport && (
                        <span className="flex items-center gap-1 bg-gray-100 text-xs px-3 py-1 rounded-full">
                            <Car className="h-4 w-4 text-[#0B3D2E]" /> Transport
                        </span>
                    )}
                    <span className="flex items-center gap-1 bg-gray-100 text-xs px-3 py-1 rounded-full">
                        <Hotel className="h-4 w-4 text-[#0B3D2E]" /> {starLabel} Hotel
                    </span>
                    {pkg.includesGuide && (
                        <span className="flex items-center gap-1 bg-gray-100 text-xs px-3 py-1 rounded-full">
                            <Users className="h-4 w-4 fill-[#C9A24A] text-[#C9A24A]" /> Guide
                        </span>
                    )}
                </div>
            </div>

            <div className="md:w-48 p-5 flex flex-col items-center justify-center gap-3 relative">
                <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-[#E5E7EB]"></div>
                <p className="text-3xl font-bold text-[#1a3a2a]">{pkg.price}</p>
                <button className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1ebe5d] text-white py-2 px-4 rounded-xl text-sm font-medium transition-colors">
                    <MessageCircle size={16} /> WhatsApp
                </button>
            </div>
        </div>
    );
}

function PackageSection({ title, subtitle, category, starLabel }) {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        axiosInstance
            .get(API_UMRAH_PACKAGES_BY_CATEGORY(category))
            .then((res) => {
                const data = res.data;
                setPackages(Array.isArray(data) ? data : (data.data ?? []));
            })
            .catch(() => setError("Failed to load packages."))
            .finally(() => setLoading(false));
    }, [category]);

    return (
        <div className="max-w-6xl mx-auto mt-10 first:mt-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">{title}</h2>
            <p className="text-sm text-[#4A5565] mt-1 mb-8">{subtitle}</p>

            {loading && (
                <div className="space-y-5">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white rounded-xl shadow-sm h-48 animate-pulse" />
                    ))}
                </div>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {!loading && !error && packages.length === 0 && (
                <p className="text-[#4A5565] text-sm">No packages available.</p>
            )}

            {!loading && !error && packages.length > 0 && (
                <div className="space-y-5">
                    {packages.map((pkg) => (
                        <PackageCard key={pkg._id} pkg={pkg} starLabel={starLabel} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default function FiveStar() {
    return (
        <section className="bg-[#F7F8FA] py-12 px-4">
            <PackageSection
                title="5-Star Umrah Packages"
                subtitle="Balanced comfort and proximity to holy sites"
                category="FIVE_STAR_WITH_FLIGHT"
                starLabel="5★"
            />
            <PackageSection
                title="5-Star Umrah Packages Without Flight"
                subtitle="Balanced comfort and proximity to holy sites"
                category="FIVE_STAR_WITHOUT_FLIGHT"
                starLabel="5★"
            />
        </section>
    );
}