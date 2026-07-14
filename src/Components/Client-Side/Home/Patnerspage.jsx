"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const baseLogos = [
  {
    name: "Hilton",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.02 AM.jpeg",
  },
  {
    name: "Mövenpick",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.03 AM (1).jpeg",
  },
  {
    name: "Pakistan International Airlines",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.03 AM (2).jpeg",
  },
  {
    name: "Zee Overseas",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.03 AM.jpeg",
  },
  {
    name: "Saudi Tourism Authority",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.04 AM (1).jpeg",
  },
  {
    name: "Etihad Airways",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.04 AM (2).jpeg",
  },
  {
    name: "Turkish Airlines",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.05 AM (2).jpeg",
  },
  {
    name: "Partner",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.05 AM.jpeg",
  },
  {
    name: "Dar Al Eiman Co.",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.06 AM (1).jpeg",
  },
  {
    name: "Royal Jordanian",
    src: "/Images/WhatsApp Image 2026-07-02 at 3.08.06 AM.jpeg",
  },
];

export default function PartnersCarousel() {
  const [visible, setVisible] = useState(4);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [noTransition, setNoTransition] = useState(false);

  // Responsive visible items
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisible(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisible(2); // Tablet
      } else {
        setVisible(4); // Desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logos = [...baseLogos, ...baseLogos.slice(0, visible)];
  const total = baseLogos.length;
  const itemWidth = 100 / visible;

  const next = useCallback(() => {
    setIndex((prev) => prev + 1);
  }, []);

  const prev = useCallback(() => {
    if (index === 0) {
      setNoTransition(true);
      setIndex(total - 1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setNoTransition(false));
      });
    } else {
      setIndex((prev) => prev - 1);
    }
  }, [index, total]);

  // Auto slide every 1.5 sec
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      next();
    }, 1500);

    return () => clearInterval(timer);
  }, [paused, next]);

  // Infinite loop
  useEffect(() => {
    if (index === total) {
      const timeout = setTimeout(() => {
        setNoTransition(true);
        setIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => setNoTransition(false));
        });
      }, 600);

      return () => clearTimeout(timeout);
    }
  }, [index, total]);

  return (
    <section className="w-full bg-[#F7F7F7] py-14 px-4">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          We are partners with
        </h2>

        <p className="mt-3 text-gray-500">
          Trusted global partners for years
        </p>
      </div>

      {/* Slider */}
      <div
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
      

        {/* Images */}
        <div className="overflow-hidden flex-1">
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * itemWidth}%)`,
              transition: noTransition
                ? "none"
                : "transform 600ms ease-in-out",
            }}
          >
            {logos.map((logo, i) => (
              <div
                key={i}
                className="shrink-0 px-2"
                style={{
                  width: `${itemWidth}%`,
                }}
              >
                <div className="h-32 sm:h-40 flex items-center justify-center p-4">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={120}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

       
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {baseLogos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all duration-300 ${
              i === index % total
                ? "w-6 h-2 rounded-full bg-gray-800"
                : "w-2 h-2 rounded-full bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}