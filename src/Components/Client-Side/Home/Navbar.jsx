"use client";

import { useState, useRef, useEffect, useCallback, useId } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Hajj",
    href: "#",
    dropdown: [
      { label: "Hajj guideline",    href: "/hajjguidline"    },
      { label: "Shifting Hajj",     href: "/shiftinghajj"    },
      { label: "Non-Shifting Hajj", href: "/nonshiftinghajj" },
    ],
  },
  {
    label: "Umrah",
    href: "#",
    dropdown: [
      { label: "Umrah packages",           href: "/umrahpage"        },
      { label: "Family Umrah package",     href: "/familyumrahpackage"   },
      { label: "Group Umrah package",      href: "/grouppackage"     },
      { label: "Three-star Umrah package", href: "/threestarpackage" },
      { label: "Four-star Umrah package",  href: "/fourstarpackage"  },
      { label: "Five-star Umrah package",  href: "/fivestarpackage"  },
      { label: "January Umrah packages",   href: "/umrahjanuary"     },
      { label: "February Umrah packages",  href: "/umrahfebruary"    },
      { label: "March Umrah packages",     href: "/umrahmarch"       },
      { label: "April Umrah packages",     href: "/umrahapril"       },
      { label: "May Umrah packages",       href: "/umrahmay"         },
      { label: "June Umrah packages",      href: "/umrahjune"        },
      { label: "July Umrah packages",      href: "/umrahjuly"        },
      { label: "August Umrah packages",    href: "/umrahaugust"      },
      { label: "September Umrah packages", href: "/umrahseptember"   },
      { label: "October Umrah packages",   href: "/umrahoctober"     },
      { label: "November Umrah packages",  href: "/umrahnovember"    },
      { label: "December Umrah packages",  href: "/umrahdecember"    },
    ],
  },
  {
    label: "Ramadan",
    href: "#",
    dropdown: [
      { label: "1st Ashra Ramzan", href: "/ramadanhajj" },
      { label: "2nd Ashra Ramzan", href: "/secondashra" },
      { label: "3rd Ashra Ramzan", href: "/thirdashra"  },
    ],
  },
  {
    label: "Special packages",
    href: "#",
    dropdown: [
      { label: "Christmas Umrah packages",  href: "/christmasumrahpackage"  },
      { label: "Clock Tower Umrah package", href: "/clocktowerumrahpackage" },
      { label: "Couple Umrah package",      href: "/coupleumrahpackage"     },
      { label: "Easter Umrah packages",     href: "/easterumrahpackage"     },
      { label: "London Umrah package",      href: "/londonumrahpackage"     },
      { label: "Manchester Umrah package",  href: "/manchesterumrahpackage" },
    ],
  },
  { label: "Flight",     href: "/flight"    },
  { label: "Contact us", href: "/contactus" },
];

// ─── SlideDown animation (mobile) ────────────────────────────────────────────
function SlideDown({ open, id, children }) {
  const innerRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (!innerRef.current) return;
    setMaxHeight(open ? `${innerRef.current.scrollHeight}px` : "0px");
  }, [open]);

  return (
    <div
      id={id}
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

// ─── Chevron icon ─────────────────────────────────────────────────────────────
function Chevron({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        transition: "transform 0.25s ease",
        transform: open ? "rotate(180deg)" : "rotate(0deg)",
        flexShrink: 0,
      }}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

// ─── Shared class strings ─────────────────────────────────────────────────────
const linkCls =
  "block px-[10px] py-2 text-[13px] font-medium rounded-[6px] whitespace-nowrap no-underline " +
  "text-gray-700 hover:text-[#1C398E] hover:bg-[#f5f0e8] transition-colors duration-150";

const dropdownLinkCls =
  "block px-3 py-[9px] text-[13px] rounded-[7px] no-underline " +
  "text-gray-700 hover:text-[#1C398E] hover:bg-[#f5f0e8] transition-colors duration-150";

const mobileLinkCls =
  "block px-3 py-3 text-[15px] font-medium rounded-lg no-underline " +
  "text-gray-700 hover:text-[#1C398E] hover:bg-[#f5f0e8] transition-colors duration-150";

const mobileSubLinkCls =
  "block py-[10px] text-[14px] no-underline " +
  "text-gray-600 hover:text-[#1C398E] transition-colors duration-150";

const mobileDropdownBtnCls =
  "w-full flex items-center justify-between px-3 py-3 text-[15px] font-medium rounded-lg border-0 cursor-pointer bg-transparent " +
  "text-gray-700 hover:text-[#1C398E] hover:bg-[#f5f0e8] transition-colors duration-150";

// ══════════════════════════════════════════════════════════════════════════════
//  MAIN NAVBAR
// ══════════════════════════════════════════════════════════════════════════════
export default function Navbar() {
  const [drawerOpen, setDrawerOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // FIX: closeTimer ref — setTimeout ID store karta hai
  const closeTimer   = useRef(null);
  const mobileDrawerId = useId();

  // ── Helpers ──────────────────────────────────────────────────────────────
  const openDD = useCallback((label) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  }, []);

  const cancelClose = useCallback(() => {
    clearTimeout(closeTimer.current);
  }, []);

  const toggleMobileDropdown = useCallback(
    (label) => setOpenDropdown((prev) => (prev === label ? null : label)),
    []
  );

  const closeDrawer = useCallback(() => {
    setDrawerOpen(false);
    setOpenDropdown(null);
  }, []);

  const toggleDrawer = useCallback(() => setDrawerOpen((p) => !p), []);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  // Escape key closes drawer
  useEffect(() => {
    if (!drawerOpen) return;
    const handleKey = (e) => { if (e.key === "Escape") closeDrawer(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [drawerOpen, closeDrawer]);

  // Cleanup timer on unmount
  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <nav
      aria-label="Main navigation"
      className="w-full bg-white border-b border-gray-100 shadow-sm relative z-50"
    >
      <div className="w-full px-2.5 py-1 lg:px-4">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">

          {/* ── Logo ── */}
          <Link href="/" className="shrink-0" aria-label="Al-Ahsan Travels — Home">
            <img
              src="/Images/Link.png"
              alt="Al-Ahsan Travels — Hajj & Umrah specialists"
              width={120}
              height={60}
              className="h-[60px] w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden lg:flex whitespace-nowrap items-center gap-0.5 xl:gap-1 list-none m-0 p-0">
            {navItems.map((item) => {
              const dropdownId = `dd-${item.label.toLowerCase().replace(/\s+/g, "-")}`;
              const isOpen = openDropdown === item.label;

              return (
                <li key={item.label} className="relative">
                  {item.dropdown ? (
                    <>
                      {/* Trigger button */}
                      <button
                        aria-expanded={isOpen}
                        aria-controls={dropdownId}
                        aria-haspopup="true"
                        onMouseEnter={() => openDD(item.label)}
                        onMouseLeave={scheduleClose}
                        className={
                          "flex items-center gap-1 px-[10px] py-2 text-[13px] font-medium rounded-[6px] " +
                          "whitespace-nowrap border-0 cursor-pointer bg-transparent " +
                          "text-gray-700 hover:text-[#1C398E] hover:bg-[#f5f0e8] transition-colors duration-150"
                        }
                      >
                        {item.label}
                        <svg
                          width="12" height="12" viewBox="0 0 24 24"
                          fill="none" stroke="currentColor" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round"
                          aria-hidden="true"
                          style={{
                            transition: "transform 0.2s ease",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>

                      {/*
                        FIX: Wrapper div mein pt-2 (padding-top) hai —
                        yeh invisible bridge ka kaam karta hai.
                        Mouse jab button se dropdown tak jaata hai toh
                        is gap mein bhi mouseenter fire hota hai
                        aur cancelClose() call hoti hai.
                      */}
                      <div
                        id={dropdownId}
                        onMouseEnter={cancelClose}
                        onMouseLeave={scheduleClose}
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          paddingTop: "6px", // ← bridge gap
                          zIndex: 50,
                          // Visibility
                          opacity: isOpen ? 1 : 0,
                          visibility: isOpen ? "visible" : "hidden",
                          transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                          transition: "opacity 0.15s ease, transform 0.15s ease, visibility 0.15s",
                          pointerEvents: isOpen ? "auto" : "none",
                        }}
                      >
                        <div
                          role="menu"
                          className="bg-white border border-gray-100 rounded-xl shadow-lg min-w-[200px] p-1.5"
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              role="menuitem"
                              className={dropdownLinkCls}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link href={item.href} className={linkCls}>
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}

            <li className="w-px h-5 bg-gray-200 mx-1 shrink-0" aria-hidden="true" />
            <li className="shrink-0">
              <Link
                href="/#hero"
                className="block px-5 py-2 text-[13px] font-semibold rounded-full whitespace-nowrap no-underline bg-[#1C398E] text-white hover:bg-[#162d70] transition-colors duration-150"
              >
                Book now
              </Link>
            </li>
          </ul>

          {/* ── Mobile Hamburger ── */}
          <button
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
            aria-expanded={drawerOpen}
            aria-controls={mobileDrawerId}
            onClick={toggleDrawer}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {drawerOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ── Overlay ── */}
      {drawerOpen && (
        <div
          onClick={closeDrawer}
          aria-hidden="true"
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* ── Mobile Drawer ── */}
      <div
        id={mobileDrawerId}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "75%",
          maxWidth: "280px",
          background: "white",
          zIndex: 50,
          transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.32s cubic-bezier(.4,0,.2,1)",
          overflowY: "auto",
          boxShadow: drawerOpen ? "4px 0 20px rgba(0,0,0,0.15)" : "none",
        }}
      >
        {/* Drawer Logo */}
        <div className="h-16 flex items-center px-4 border-b border-gray-100">
          <Link href="/" onClick={closeDrawer} aria-label="Al-Ahsan Travels — Home">
            <img
              src="/Images/Link.png"
              alt="Al-Ahsan Travels"
              width={96}
              height={48}
              style={{ height: 48, width: "auto", objectFit: "contain" }}
            />
          </Link>
        </div>


        <ul className="p-2 m-0 list-none">
          {navItems.map((item) => {
            const isOpen = openDropdown === item.label;
            const subId  = `mob-dd-${item.label.toLowerCase().replace(/\s+/g, "-")}`;

            return (
              <li key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      aria-expanded={isOpen}
                      aria-controls={subId}
                      className={mobileDropdownBtnCls}
                    >
                      <span>{item.label}</span>
                      <Chevron open={isOpen} />
                    </button>

                    <SlideDown open={isOpen} id={subId}>
                      <ul
                        style={{
                          marginLeft: 12,
                          marginBottom: 4,
                          borderLeft: "2px solid #f0e6cc",
                          paddingLeft: 12,
                          paddingTop: 4,
                          paddingBottom: 4,
                          listStyle: "none",
                        }}
                      >
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              href={sub.href}
                              onClick={closeDrawer}
                              className={mobileSubLinkCls}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </SlideDown>
                  </>
                ) : (
                  <Link href={item.href} onClick={closeDrawer} className={mobileLinkCls}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}

          <li className="pt-3">
            <Link
              href="/#hero"
              onClick={closeDrawer}
              className="block text-center w-full px-3 py-3 text-[15px] font-semibold rounded-xl no-underline bg-[#1C398E] text-white hover:bg-[#162d70] transition-colors duration-150"
            >
              Book now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}