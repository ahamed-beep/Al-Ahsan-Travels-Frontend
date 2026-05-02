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
            { label: "Non Shifting Hajj", href: "/nonshiftinghajj" },
        ],
    },
    {
        label: "Umrah",
        href: "#",
        dropdown: [
            { label: "Umrah Packages", href: "/umrahpage" },
            { label: "Family Umrah Package", href: "/specialpackage" },
            { label: "Group Umrah Package", href: "/grouppackage" },
            { label: "Three Star Umrah Package", href: "/threestarpackage" },
            { label: "Four Star Umrah Package", href: "/fourstarpackage" },
            { label: "Five Star Umrah Package", href: "/fivestarpackage" },
            { label: "January Umrah Packages", href: "/umrahjanuary" },
            { label: "February Umrah Packages", href: "/umrahfebruary" },
            { label: "March Umrah Packages", href: "/umrahmarch" },
            { label: "April Umrah Packages", href: "/umrahapril" },
            { label: "May Umrah Packages", href: "/umrahmay" },
            { label: "June Umrah Packages", href: "/umrahjune" },
            { label: "July Umrah Packages", href: "/umrahjuly" },
            { label: "August Umrah Packages", href: "/umrahaugust" },
            { label: "September Umrah Packages", href: "/umrahseptember" },
            { label: "October Umrah Packages", href: "/umrahoctober" },
            { label: "November Umrah Packages", href: "/umrahnovember" },
            { label: "December Umrah Packages", href: "/umrahdecember" },
        ],
    },
    {
        label: "Ramadan",
        href: "#",
        dropdown: [
            { label: "1st Ashra Ramzan", href: "/ramadanhajj" },
            { label: "2nd Ashra Ramzan", href: "/secondashra" },
            { label: "3rd Ashra Ramzan", href: "/thirdashra" },
        ],
    },
    {
        label: "Special Packages",
        href: "#",
        dropdown: [
            { label: "Christmas Umrah Packages", href: "/christmasumrahpackage" },
            { label: "Clock Tower Umrah Package", href: "/clocktowerumrahpackage" },
            { label: "Couple Umrah Package", href: "/coupleumrahpackage" },
            {label: "Easter Umrah Packages", href:"/easterumrahpackage"},
            {label: "London Umrah package", href:"/londonumrahpackage"},
            {label: "Manchester Umrah Package", href:"/manchesterumrahpackage"},

        ],
    },
    { label: "flight", href: "/flight" },
    { label: "Contact Us", href: "/contactus" },
];

/* ── Smooth slide-down ── */
function SlideDown({ open, children }) {
    const innerRef = useRef(null);
    const [maxHeight, setMaxHeight] = useState("0px");
    useEffect(() => {
        if (!innerRef.current) return;
        setMaxHeight(open ? `${innerRef.current.scrollHeight}px` : "0px");
    }, [open]);
    return (
        <div style={{ maxHeight, overflow: "hidden", transition: "max-height 0.35s ease" }}>
            <div ref={innerRef}>{children}</div>
        </div>
    );
}

/* ── Chevron ── */
function Chevron({ open }) {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
            <path d="M6 9l6 6 6-6" />
        </svg>
    );
}

/* ── Reusable hover hook ── */
function useHover() {
    const [hovered, setHovered] = useState(false);
    return {
        hovered,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
    };
}

/* ── Desktop nav link ── */
function NavLink({ href, children }) {
    const { hovered, onMouseEnter, onMouseLeave } = useHover();
    return (
        <Link href={href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            style={{
                display: "block", padding: "8px 10px", fontSize: "13px", fontWeight: 500,
                borderRadius: "6px", whiteSpace: "nowrap", textDecoration: "none",
                transition: "color 0.15s, background 0.15s",
                color: hovered ? "#1C398E" : "#374151",
                background: hovered ? "#f5f0e8" : "transparent",
            }}>
            {children}
        </Link>
    );
}

/* ── Desktop dropdown button ── */
function NavButton({ children, hovered, onMouseEnter, onMouseLeave }) {
    return (
        <button onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            style={{
                display: "flex", alignItems: "center", gap: "4px",
                padding: "8px 10px", fontSize: "13px", fontWeight: 500,
                borderRadius: "6px", whiteSpace: "nowrap", border: "none", cursor: "pointer",
                transition: "color 0.15s, background 0.15s",
                color: hovered ? "#1C398E" : "#374151",
                background: hovered ? "#f5f0e8" : "transparent",
            }}>
            {children}
        </button>
    );
}

/* ── Desktop dropdown sub-link ── */
function DropdownLink({ href, children }) {
    const { hovered, onMouseEnter, onMouseLeave } = useHover();
    return (
        <Link href={href} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            style={{
                display: "block", padding: "9px 12px", fontSize: "13px",
                borderRadius: "7px", textDecoration: "none",
                transition: "color 0.15s, background 0.15s",
                color: hovered ? "#1C398E" : "#374151",
                background: hovered ? "#f5f0e8" : "transparent",
            }}>
            {children}
        </Link>
    );
}

/* ── Mobile plain link ── */
function MobileNavLink({ href, children, onClick }) {
    const { hovered, onMouseEnter, onMouseLeave } = useHover();
    return (
        <Link href={href} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            style={{
                display: "block", padding: "12px", fontSize: "15px", fontWeight: 500,
                borderRadius: "8px", textDecoration: "none",
                transition: "color 0.15s, background 0.15s",
                color: hovered ? "#1C398E" : "#374151",
                background: hovered ? "#f5f0e8" : "transparent",
            }}>
            {children}
        </Link>
    );
}

/* ── Mobile dropdown button ── */
function MobileDropdownBtn({ children, onClick }) {
    const { hovered, onMouseEnter, onMouseLeave } = useHover();
    return (
        <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            style={{
                width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px", fontSize: "15px", fontWeight: 500,
                borderRadius: "8px", border: "none", cursor: "pointer",
                transition: "color 0.15s, background 0.15s",
                color: hovered ? "#1C398E" : "#374151",
                background: hovered ? "#f5f0e8" : "transparent",
            }}>
            {children}
        </button>
    );
}

/* ── Mobile sub-link ── */
function MobileSubLink({ href, children, onClick }) {
    const { hovered, onMouseEnter, onMouseLeave } = useHover();
    return (
        <Link href={href} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            style={{
                display: "block", padding: "10px 0", fontSize: "14px", textDecoration: "none",
                transition: "color 0.15s",
                color: hovered ? "#1C398E" : "#4B5563",
            }}>
            {children}
        </Link>
    );
}

/* ── Book Now button ── */
function BookBtn({ href, onClick, mobile }) {
    const { hovered, onMouseEnter, onMouseLeave } = useHover();
    return (
        <Link href="/#hero"  onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
            style={{
                display: "block", textAlign: "center",
                padding: mobile ? "12px" : "8px 20px",
                fontSize: mobile ? "15px" : "13px",
                fontWeight: 600,
                borderRadius: mobile ? "12px" : "999px",
                whiteSpace: "nowrap", textDecoration: "none",
                transition: "background 0.15s",
                background:  "#1C398E" ,
                color: "white",
                ...(mobile ? { width: "100%" } : {}),
            }}>
            Book Now
        </Link>
    );
}

/* ══════════════════════════════════════
   MAIN NAVBAR
══════════════════════════════════════ */
export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    const toggleMobileDropdown = (label) =>
        setOpenDropdown((prev) => (prev === label ? null : label));

    const closeMobile = () => {
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    return (
        <nav className="w-full bg-white border-b border-gray-100 shadow-sm relative z-50">

            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-[64px] sm:h-[70px]">

                    {/* Logo */}
                    <Link href="/" className="shrink-0">
                        <img
                            src="/Images/Logo.webp"
                            alt="Al-Ahsan Travels"
                            className="h-[70px] sm:h-[58px] w-auto object-contain"
                        />
                    </Link>

                    {/* ── Desktop Nav ── */}
                    <ul className="hidden lg:flex whitespace-nowrap items-center gap-0.5 xl:gap-1">
                        {navItems.map((item) => (
                            <li key={item.label} className="relative group">
                                {item.dropdown ? (
                                    <>
                                        <NavButton
                                            hovered={hoveredItem === item.label}
                                            onMouseEnter={() => setHoveredItem(item.label)}
                                            onMouseLeave={() => setHoveredItem(null)}
                                        >
                                            {item.label}
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2.5"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="mt-0.5 transition-transform duration-200 group-hover:rotate-180">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </NavButton>

                                        {/* Desktop Dropdown */}
                                        <div className="absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg min-w-[190px] p-1.5 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible -translate-y-1 group-hover:translate-y-0 transition-all duration-150">
                                            {item.dropdown.map((sub) => (
                                                <DropdownLink key={sub.label} href={sub.href}>
                                                    {sub.label}
                                                </DropdownLink>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <NavLink href={item.href}>{item.label}</NavLink>
                                )}
                            </li>
                        ))}

                        <li className="w-px h-5 bg-gray-200 mx-1 shrink-0" />

                        <li className="shrink-0">
                            <BookBtn href="/book" />
                        </li>
                    </ul>

                    {/* ── Mobile Hamburger ── */}
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

            {/* ── Mobile Menu ── */}
            <SlideDown open={mobileOpen}>
                <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-5">
                    <ul className="mt-2 space-y-0.5">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                {item.dropdown ? (
                                    <>
                                        <MobileDropdownBtn onClick={() => toggleMobileDropdown(item.label)}>
                                            <span>{item.label}</span>
                                            <Chevron open={openDropdown === item.label} />
                                        </MobileDropdownBtn>

                                        <SlideDown open={openDropdown === item.label}>
                                            <ul className="ml-3 mb-1 border-l-2 border-[#f0e6cc] pl-3 py-1">
                                                {item.dropdown.map((sub) => (
                                                    <li key={sub.label}>
                                                        <MobileSubLink href={sub.href} onClick={closeMobile}>
                                                            {sub.label}
                                                        </MobileSubLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </SlideDown>
                                    </>
                                ) : (
                                    <MobileNavLink href={item.href} onClick={closeMobile}>
                                        {item.label}
                                    </MobileNavLink>
                                )}
                            </li>
                        ))}

                        <li className="pt-3">
                            <BookBtn href="/book" onClick={closeMobile} mobile={true} />
                        </li>
                    </ul>
                </div>
            </SlideDown>
        </nav>
    );
}