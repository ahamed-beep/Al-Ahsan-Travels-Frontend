"use client";
import Link from "next/link";

export default function FlightCTA() {
  return (
    <section
      className="w-full  py-24 px-4 flex flex-col items-center text-center"
      style={{ background: "#1C398E" }}
    >
      {/* Plane Icon */}
      <div className="mt-10 text-[#ffffff] w-4 h-4">
       <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane-icon lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-semibold text-[#FFFFFF] max-w-2xl leading-tight mt-10 mb-5">
        Start Your Umrah Journey with the Right Flight
      </h2>

      {/* Subtext */}
      <p className="text-white text-sm max-w-md leading-relaxed mb-10">
        Compare prices, choose your preferred airline, and book with confidence. Your spiritual journey begins with us.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4 mb-10 flex-wrap justify-center">
        {/* Book Now - White */}
        <Link  href="/#hero"
          style={{
            backgroundColor: "#FFFFFF",
            color: "#2B7FFFCC",
            border: "none",
            padding: "14px 32px",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f4ff")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "white")}
        >
          Book Now
        </Link>

        {/* Contact Agent - Outline */}
        <Link href="/contactus"
          style={{
            backgroundColor: "transparent",
            color: "#FFFFFF",
            border: "1.5px solid white",
            padding: "14px 32px",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
        >
          Contact Agent
          <svg width="14" height="14" fill="none" stroke="#FFFFFF" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}