"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const navItems = [
    { label: "Home", href: "/" },
    {
        label: "Hajjj",
        href: "#",
        dropdown: [
            { label: "Hajj Guide line", href: "/hajjguidline" },
            { label: "Shifting Hajj", href: "/shiftinghajj" },
            { label: "Non Shifting Hajj", href: "/hajj/group" },
            
        ],
    },
    {
        label: "Umrah",
        href: "#",
        dropdown: [
            { label: "Umrah Packages", href: "/umrah/packages" },
            { label: "Economy Umrah", href: "/umrah/economy" },
            { label: "Luxury Umrah", href: "/umrah/luxury" },
            { label: "Family Umrah", href: "/umrah/family" },
            { label: "Umrah Visa", href: "/umrah/visa" },
        ],
    },
    {
        label: "Ramadan",
        href: "#",
        dropdown: [
            { label: "Ramadan Umrah", href: "/ramadan/umrah" },
            { label: "Last 10 Nights", href: "/ramadan/last-10-nights" },
            { label: "Laylat ul Qadr", href: "/ramadan/laylat-ul-qadr" },
        ],
    },
    {
        label: "Special Packages",
        href: "#",
        dropdown: [
            { label: "Honeymoon Package", href: "/packages/honeymoon" },
            { label: "Group Discount", href: "/packages/group" },
            { label: "VIP Packages", href: "/packages/vip" },
            { label: "Student Packages", href: "/packages/student" },
        ],
    },
    { label: "Flights", href: "/flights" },
    { label: "Contact Us", href: "/contact" },
];

/* ── Smooth slide-down component ── */
function SlideDown({ open, children }) {
    const innerRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");

    useEffect(() => {
        if (!innerRef.current) return;
        if (open) {
            setMaxHeight(`${innerRef.current.scrollHeight}px`);
        } else {
            setMaxHeight("0px");
        }
    }, [open]);

    return (
        <div
            style={{
                maxHeight,
                overflow: "hidden",
                transition: "max-height 0.35s ease",
            }}
        >
            <div ref={innerRef}>{children}</div>
        </div>
    );
}

/* ── Chevron SVG ── */
const Chevron = ({ open }) => (
    <svg
        width="14" height="14" viewBox="0 0 24 24"
        fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        style={{
            transition: "transform 0.25s ease",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
        }}
    >
        <path d="M6 9l6 6 6-6" />
    </svg>
);

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobileDropdown = (label) =>
        setOpenDropdown((prev) => (prev === label ? null : label));

    const closeMobile = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    return (
        <nav className="w-full bg-white border-b border-gray-100 shadow-sm relative z-50">

            {/* ── Navbar Top Bar ── */}
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[64px] sm:h-[70px]">

                    {/* Logo */}
                    <Link href="/" className="shrink-0">
                        <img
                            src="/Images/logo.webp"
                            alt="Al-Ahsan Travels"
                            className="h-[50px] sm:h-[58px] w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-wrap">
                        {navItems.map((item) => (
                            <li key={item.label} className="relative group">
                                {item.dropdown ? (
                                    <>
                                        <button className="flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[13px] xl:text-[14px] font-medium text-gray-700 rounded-md hover:bg-[#f5f0e8] hover:text-[#c8a44a] transition-colors whitespace-nowrap">
                                            {item.label}
                                            <svg
                                                width="12" height="12" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor"
                                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                                className="mt-0.5 transition-transform duration-200 group-hover:rotate-180"
                                            >
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
                                        {/* Desktop Dropdown */}
                                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg min-w-[180px] p-1.5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible -translate-y-1 group-hover:translate-y-0 transition-all duration-150">
                                            {item.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.label}
                                                    href={sub.href}
                                                    className="block px-3 py-2.5 text-[13px] text-gray-700 rounded-lg hover:bg-[#f5f0e8] hover:text-[#c8a44a] transition-colors"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block px-2.5 xl:px-3 py-2 text-[13px] xl:text-[14px] font-medium text-gray-700 rounded-md hover:bg-[#f5f0e8] hover:text-[#c8a44a] transition-colors whitespace-nowrap"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}

                        <li className="w-px h-5 bg-gray-200 mx-1 shrink-0" />

                        {/* Desktop Book Now */}
                        <li className="shrink-0">
                            <Link
                                href="/book"
                                className="px-4 xl:px-5 py-2 bg-[#1a1a2e] text-white text-[13px] xl:text-[14px] font-semibold rounded-full hover:bg-[#c8a44a] transition-colors whitespace-nowrap"
                            >
                                Book Now
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile: only Hamburger */}
                    <button
                        className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
                        onClick={() => setMobileOpen((p) => !p)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        ) : (
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* ── Mobile Slide-Down Menu ── */}
            <SlideDown open={mobileOpen}>
                <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-5">
                    <ul className="mt-2 space-y-0.5">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                {item.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileDropdown(item.label)}
                                            className="w-full flex items-center justify-between px-3 py-3 text-[15px] font-medium text-gray-700 rounded-lg hover:bg-[#f5f0e8] hover:text-[#c8a44a] transition-colors"
                                        >
                                            <span>{item.label}</span>
                                            <Chevron open={openDropdown === item.label} />
                                        </button>

                                        {/* Sub items slide */}
                                        <SlideDown open={openDropdown === item.label}>
                                            <ul className="ml-3 mb-1 border-l-2 border-[#f0e6cc] pl-3 py-1">
                                                {item.dropdown.map((sub) => (
                                                    <li key={sub.label}>
                                                        <Link
                                                            href={sub.href}
                                                            className="block py-2.5 text-[14px] text-gray-600 hover:text-[#c8a44a] transition-colors"
                                                            onClick={closeMobile}
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </SlideDown>
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="block px-3 py-3 text-[15px] font-medium text-gray-700 rounded-lg hover:bg-[#f5f0e8] hover:text-[#c8a44a] transition-colors"
                                        onClick={closeMobile}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </li>
                        ))}

                        {/* Book Now — inside mobile menu, full width */}
                        <li className="pt-3">
                            <Link
                                href="/book"
                                className="block w-full text-center py-3 bg-[#1a1a2e] text-white text-[15px] font-semibold rounded-xl hover:bg-[#c8a44a] transition-colors duration-200"
                                onClick={closeMobile}
                            >
                                Book Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </SlideDown>
        </nav>
    );
}