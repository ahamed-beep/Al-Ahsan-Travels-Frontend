"use client";

import { Check, Heart } from "lucide-react";
import UmrahForm from "../ui/UmrahForm";

export default function CoupleHero() {
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
                    <span className="bg-[#FFFFFF] bg-opacity-80 px-5 py-2 whitespace-nowrap rounded-full text-sm border border-[#FFCCD380] text-gray-400 inline-flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-400" /> Designed for Couples
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        <span className="text-white">Couple Umrah Packages</span>
                    </h1>
                    <p className="text-gray-200 max-w-xl">
                        Embark on a sacred journey together with packages crafted for comfort and intimacy
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-[#FFFFFF]">
                        <span className="flex items-center gap-1">
                            <Check className="w-4 h-4 text-[#8EC5FF]" /> Flights Included
                        </span>
                        <span className="flex items-center gap-1">
                            <Check className="w-4 h-4 text-[#8EC5FF]" /> Visa Included
                        </span>
                        <span className="flex items-center gap-1">
                            <Check className="w-4 h-4 text-[#8EC5FF]" /> Private Rooms
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