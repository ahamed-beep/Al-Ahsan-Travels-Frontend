"use client";

import { Check } from "lucide-react";
import UmrahForm from "../ui/UmrahForm";

export default function EasterHero() {
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
                <div className="lg:ml-10 text-center lg:text-left space-y-6">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
                        Easter Umrah Packages
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-white max-w-xl mx-auto lg:mx-0">
                        Make the most of your Easter break with a spiritual journey to the Holy Cities
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-xs sm:text-sm text-white">
                        <span className="flex items-center gap-1">
                            <Check className="w-4 h-4 text-white" /> Flights + Visa Included
                        </span>
                        <span className="flex items-center gap-1">
                            <Check className="w-4 h-4 text-white" /> Group-Friendly Hotels
                        </span>
                        <span className="flex items-center gap-1">
                            <Check className="w-4 h-4 text-white" /> 24/7 Support
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