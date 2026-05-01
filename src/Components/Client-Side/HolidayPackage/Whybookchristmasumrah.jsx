"use client";

import React from "react";
import Image from "next/image";

const features = [
    "Perfect timing during winter break",
    "Premium packages at seasonal rates",
    "Family-friendly travel schedules",
    "Comfortable winter weather in Saudi Arabia",
    "Early booking advantages",
    "ATOL protected for peace of mind",
];

const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C398E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

export default function WhyBookChristmasUmrah() {
    return (
        <section className="w-full bg-[#C3D8FA33] px-4 py-16">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">

                {/* ── Left Content ── */}
                <div className="flex-1 w-full">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-black text-[#101828] leading-tight mb-4">
                        Why Book Christmas <br className="hidden sm:block" /> Umrah?
                    </h2>

                    {/* Description */}
                    <p className="text-sm md:text-base text-[#364153CC] leading-relaxed mb-8 max-w-md">
                        Christmas holidays offer an ideal window for spiritual reflection
                        and family travel without work commitments.
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-3">
                        {features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm md:text-base text-[#364153E5]">
                                <span className="flex-shrink-0">
                                    <CheckIcon />
                                </span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ── Right Image ── */}
                <div className="flex-1 w-full">
                    <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
                        <img
                            src="/Images/Holidaypic.jpg"
                            className="w-full h-[420px] object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}