"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function NonHajjBanner() {
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif" }}
      className="w-full bg-[#1C398E] "
    >
      {/* Banner Section */}
      <div
        className="w-full flex items-center justify-center px-4 py-12 sm:py-16 md:py-20"
        style={{
          background: "linear-gradient(135deg, #1e3a8a 0%, #2d4fba 50%, #1e3a8a 100%)",
          minHeight: "160px",
        }}
      >
        {/* Subtle star/dot pattern overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          className={`relative text-center max-w-2xl mx-auto transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          {/* Heading */}
          <h2
            className="text-white font-bold mb-3 leading-tight"
            style={{
              fontSize: "clamp(1.3rem, 4vw, 1.75rem)",
              letterSpacing: "-0.01em",
              textShadow: "0 2px 12px rgba(0,0,0,0.18)",
            }}
          >
            Find the Right Package for Your Budget
          </h2>

          {/* Subtitle */}
          <p
            className="text-blue-100 mb-7"
            style={{
              fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)",
              opacity: 0.88,
              letterSpacing: "0.01em",
            }}
          >
            Explore all our Hajj packages and choose what works best for you
          </p>

          {/* CTA Button */}
          <Link
  href="#packages"
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
  className="inline-flex items-center gap-2 font-semibold rounded-full border-0 cursor-pointer transition-all duration-200"
  style={{
    background: hovered ? "#f0f4ff" : "#ffffff",
    color: "#1e3a8a",
    padding: "0.65rem 1.8rem",
    fontSize: "clamp(0.85rem, 2vw, 0.97rem)",
    boxShadow: hovered
      ? "0 8px 32px rgba(30,58,138,0.22)"
      : "0 2px 12px rgba(0,0,0,0.10)",
    transform: hovered
      ? "translateY(-2px) scale(1.03)"
      : "translateY(0) scale(1)",
    letterSpacing: "0.01em",
  }}
>
  View All Packages

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: "transform 0.2s",
      transform: hovered ? "translateX(3px)" : "translateX(0)",
    }}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
</Link>
        </div>
      </div>
    </div>
  );
}