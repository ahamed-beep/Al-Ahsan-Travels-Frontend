import {    FaMapMarkerAlt } from "react-icons/fa";
import { MessageCircle, Plane , Car , Hotel , FileText ,Clock , MapPin } from "lucide-react";

const packages = [
    {
        title: "4-Star Umrah 7 Days",
        duration: "7 Days / 6 Nights",
        makkah: "Dar Al Eiman Royal",
        madinah: "Al Aqeeq Hotel",
        price: "£899",
        image: "/Images/Image (5-Star Luxury Umrah).png",
    },
    {
        title: "4-Star Umrah 14 Days",
        duration: "14 Days / 13 Nights",
        makkah: "Makkah Hotel",
        madinah: "Taibah Hotel",
        price: "£899",
        image: "/Images/Image (5-Star Luxury Umrah).png",
    },
    {
        title: "4-Star Umrah 14 Days",
        duration: "14 Days / 13 Nights",
        makkah: "Makkah Hotel",
        madinah: "Taibah Hotel",
        price: "£1,199",
        image: "/Images/Image (5-Star Luxury Umrah).png",
    },
];

export default function FourStar() {
    return (
        <section className="bg-[#F7F8FA] py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
                    4-Star Umrah Packages
                </h2>
                <p className="text-sm text-[#4A5565] mt-1 mb-8">
                    Balanced comfort and proximity to holy sites
                </p>

                {/* Cards */}
                <div className="space-y-5">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Image */}
                            <div className="md:w-72 h-48 md:h-auto flex-shrink-0">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Middle Content */}
                            <div className="flex-1 p-5 flex flex-col justify-center">
                                <h3 className="text-lg font-bold text-[#222222]">{pkg.title}</h3>

                                <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-2">
                                    <Clock  className=" h-4 w-4 text-[#4A5565]" /> {pkg.duration}
                                </div>

                                <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-1">
                                    <MapPin className="h-4 w-4 text-[#0B3D2E]" />
                                    <span>
                                        <span className="font-bold text-[#364153]">Makkah:</span> {pkg.makkah}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-1">
                                    <MapPin className="h-4 w-4 text-[#0B3D2E]" />
                                    <span>
                                        <span className="font-semibold text-[#364153]">Madinah:</span> {pkg.madinah}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="flex items-center gap-1 bg-gray-100  text-xs px-3 py-1 rounded-full">
                                        <Plane className="h-4 w-4 text-[#0B3D2E]"/> Flight
                                    </span>
                                    <span className="flex items-center gap-1 bg-gray-100  text-xs px-3 py-1 rounded-full">
                                        <FileText className="h-4 w-4 text-[#0B3D2E]" /> Visa
                                    </span>
                                    <span className="flex items-center gap-1 bg-gray-100  text-xs px-3 py-1 rounded-full">
                                        <Car className="h-4 w-4 text-[#0B3D2E]" /> Transport
                                    </span>
                                    <span className="flex items-center gap-1 bg-gray-100  text-xs px-3 py-1 rounded-full">
                                        <Hotel className="h-4 w-4 text-[#0B3D2E]" /> 4★ Hotel
                                    </span>
                                </div>
                            </div>

                            {/* Right Side - Price + WhatsApp */}
                            <div className="md:w-48 p-5 flex flex-col items-center justify-center gap-3 relative">
                               <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-[#E5E7EB]"></div>
                                <p className="text-3xl font-bold text-[#1a3a2a]">{pkg.price}</p>
                                <button className="w-full flex items-center justify-center gap-2  bg-[#25d366] hover:bg-[#1ebe5d] text-white py-2 px-4 rounded-xl text-sm font-medium transition-colors">
                                    <MessageCircle size={16} /> WhatsApp
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            {/* {4 star umrah package without flight} */}

                        <div className="max-w-6xl mt-10 mx-auto">
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-[#222222]">
                    4-Star  umrah packages without flight
                </h2>
                <p className="text-sm text-[#4A5565] mt-1 mb-8">
                    Balanced comfort and proximity to holy sites
                </p>

                {/* Cards */}
                <div className="space-y-5">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row"
                        >
                            {/* Image */}
                            <div className="md:w-72 h-48 md:h-auto flex-shrink-0">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Middle Content */}
                            <div className="flex-1 p-5 flex flex-col justify-center">
                                <h3 className="text-lg font-bold text-[#222222]">{pkg.title}</h3>

                                <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-2">
                                    <Clock  className=" h-4 w-4 text-[#4A5565]" /> {pkg.duration}
                                </div>

                                <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-1">
                                    <MapPin className="h-4 w-4 text-[#0B3D2E]" />
                                    <span>
                                        <span className="font-bold text-[#364153]">Makkah:</span> {pkg.makkah}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-[#4A5565] mt-1">
                                    <MapPin className="h-4 w-4 text-[#0B3D2E]" />
                                    <span>
                                        <span className="font-semibold text-[#364153]">Madinah:</span> {pkg.madinah}
                                    </span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="flex items-center gap-1 bg-gray-100  text-xs px-3 py-1 rounded-full">
                                        <Plane className="h-4 w-4 text-[#0B3D2E]"/> Flight
                                    </span>
                                    <span className="flex items-center gap-1 bg-gray-100  text-xs px-3 py-1 rounded-full">
                                        <FileText className="h-4 w-4 text-[#0B3D2E]" /> Visa
                                    </span>
                                    <span className="flex items-center gap-1 bg-gray-100  text-xs px-3 py-1 rounded-full">
                                        <Car className="h-4 w-4 text-[#0B3D2E]" /> Transport
                                    </span>
                                    <span className="flex items-center gap-1 bg-gray-100  text-xs px-3 py-1 rounded-full">
                                        <Hotel className="h-4 w-4 text-[#0B3D2E]" /> 4★ Hotel
                                    </span>
                                </div>
                            </div>

                            {/* Right Side - Price + WhatsApp */}
                            <div className="md:w-48 p-5 flex flex-col items-center justify-center gap-3 relative">
                               <div className="absolute left-0 top-1/4 bottom-1/4 w-[2px] bg-[#E5E7EB]"></div>
                                <p className="text-3xl font-bold text-[#1a3a2a]">{pkg.price}</p>
                                <button className="w-full flex items-center justify-center gap-2  bg-[#25d366] hover:bg-[#1ebe5d] text-white py-2 px-4 rounded-xl text-sm font-medium transition-colors">
                                    <MessageCircle size={16} /> WhatsApp
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
           
        </section>
        
    );
}