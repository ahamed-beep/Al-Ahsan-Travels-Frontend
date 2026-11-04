"use client";

import { Eye, MapPin, Crown, Star } from "lucide-react";
import UmrahForm from "../ui/UmrahForm";

export default function ClockTowerHero() {
    return (
        <div className="relative w-full min-h-screen flex items-center justify-center">

            {/* Background Image */}
            <img
                src="Images/IMG_0722.JPG.webp"
                alt="Umrah"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 " />

            {/* Content */}
            <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="flex flex-col items-center justify-center text-center gap-5">
                    <span className="bg-[#D1D5DC8A] px-5 py-2 whitespace-nowrap rounded-full text-sm text-white inline-flex items-center gap-2">
                        <Crown className="w-4 h-4 text-[#2B7FFFCC]" /> Luxury Umrah Experience
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        <span className="text-white">Clock Tower Umrah Packages</span>
                    </h1>
                    <p className="text-gray-200 max-w-xl">
                        Stay in the iconic Clock Tower hotels with unmatched proximity <br /> to Masjid al-Haram
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-[#FFFFFF]">
                        <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-[#8EC5FF]" /> 5-Star Luxury
                        </span>
                        <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4 text-[#8EC5FF]" /> Kaaba View Rooms
                        </span>
                        <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4 text-[#8EC5FF]" /> Direct Haram Access
                        </span>
                    </div>
                </div>

                {/* RIGHT SIDE — Form Card */}
                <div className="w-full max-w-md mx-auto lg:ml-auto lg:w-[420px] xl:w-[470px] shrink-0">
                    <div className="bg-[#ffffff] rounded-2xl shadow-xl p-5 sm:p-6 md:p-7">
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#101828] mb-4 sm:mb-5">
                            Plan Your Perfect Umrah Journey
                        </h2>

                        <UmrahForm />
                    </div>
                </div>

            </div>
        </div>
    );
}