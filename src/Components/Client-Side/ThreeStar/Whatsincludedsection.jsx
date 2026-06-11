"use client";

import { Award, Lock, Shield } from "lucide-react";
import React from "react";

// ── Icons ──────────────────────────────────────────────────────────────────

const FlightIcon = () => (

  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane">
    <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
  </svg>
);

const HotelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-hotel">
    <path d="M10 22v-6.57"/><path d="M12 11h.01"/><path d="M12 7h.01"/>
    <path d="M14 15.43V22"/><path d="M15 16a5 5 0 0 0-6 0"/><path d="M16 11h.01"/>
    <path d="M16 7h.01"/><path d="M8 11h.01"/><path d="M8 7h.01"/>
    <rect x="4" y="2" width="16" height="20" rx="2"/>
  </svg>
);

const VisaIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/>
    <path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>
  </svg>
);

const CarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car">
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
    <circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>
  </svg>
);

const ShieldIcon = () => <Shield size={32} />;
const LockIcon = () => <Lock size={32} />;
const BadgeIcon = () => <Award size={32} />;

// ── Data ───────────────────────────────────────────────────────────────────

const included = [
    {
        icon: <FlightIcon />,
        title: "Flights Included",
        desc: "Return flights from major UK airports",
    },
    {
        icon: <HotelIcon />,
        title: "Quality Hotels",
        desc: "Comfortable 3-star accommodation",
    },
    {
        icon: <VisaIcon />,
        title: "Visa Assistance",
        desc: "Complete visa processing support",
    },
    {
        icon: <CarIcon />,
        title: "Transportation",
        desc: "All ground transfers included",
    },
];

const whyUs = [
    {
        icon: <ShieldIcon />,
        title: "ATOL Protected",
        desc: "Your booking is fully protected",
    },
    {
        icon: <LockIcon />,
        title: "Secure Booking",
        desc: "Safe and encrypted payment",
    },
    {
        icon: <BadgeIcon />,
        title: "Experienced Staff",
        desc: "20+ years of Hajj expertise",
    },
];

// ── Component ──────────────────────────────────────────────────────────────

export default function WhatsIncludedSection() {
    return (
        <div className="bg-[#FFFFFF] w-full">

            {/* ── What's Included ── */}
            <section className="max-w-5xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-black text-[#1C398E] mb-2">
                    What&apos;s Included
                </h2>
                <p className="text-sm md:text-base text-[#1F1F1F] mb-12">
                    Everything you need for a complete Umrah experience
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {included.map((item, i) => (
                        <div key={i} className="flex flex-col items-start text-left">
                            {/* Icon Box */}
                            <div
                                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                                style={{ background: "linear-gradient(135deg, #2B7FFF33 0%, #155DFC33 100%)" }}
                            >
                               <span className="text-[#1C398E]"> {item.icon} </span>
                            </div>
                            <h3 className="text-sm md:text-base font-bold text-[#1C398E] mb-1">
                                {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-[#364153] leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>


            {/* ── Why Choose Us ── */}
            <section className="max-w-4xl mx-auto px-6 py-16 text-center">
                <h2 className="text-3xl md:text-4xl font-black text-[#1C398E] mb-2">
                    Why Choose Us
                </h2>
                <p className="text-sm md:text-base text-[#1F1F1F] mb-12">
                    Your trusted partner for Umrah pilgrimage
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {whyUs.map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            {/* Circle Icon */}
                            <div
                                className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                                style={{ background: "#C6D7FC" }}
                            >
                               <span className="text-[#1C398E] "> {item.icon} </span>
                            </div>
                            <h3 className="text-sm md:text-base font-bold text-[#1F1F1F] mb-1">
                                {item.title}
                            </h3>
                            <p className="text-xs md:text-sm text-[#4A5565]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}