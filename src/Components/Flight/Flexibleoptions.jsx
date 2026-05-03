"use client";
import Link from "next/link";

export default function FlexibleOptions() {
    return (
        <section className="bg-white py-16 px-4">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-3">
                    Flexible Flight Options
                </h2>
                <p className="text-gray-500 text-sm">
                    Customize your journey to match your unique needs
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Card 1 - Dark Blue */}
                <div
                    className="rounded-2xl p-8 flex flex-col gap-5"
                    style={{ backgroundColor: "#1C398E" }}
                >
                    {/* Icon */}
                    <div className="text-[#ffffff]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane-icon lucide-plane"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#ffffff]">Book Flights Only</h3>
                    <p className="text-sm text-blue-200 leading-relaxed">
                        Need just the flight? Book your tickets without hotel packages for maximum flexibility.
                    </p>
                    <button
                        style={{
                            backgroundColor: "#FFFFFF",
                            color: "#2B7FFFCC",
                            border: "1.5px solid white",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            fontWeight: "600",
                            fontSize: "13px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            width: "fit-content",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                        Learn More
                        <svg width="14" height="14" fill="none" stroke="#2B7FFFCC" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Card 2 - White */}
                <div
                    className="rounded-2xl p-8 flex flex-col gap-5"
                    style={{ backgroundColor: "#ffffff", border: "1.5px solid #1C398E" }}
                >
                    {/* Icon */}
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: "#D7EBFF" }}
                    >
                        <svg width="22" height="22" fill="none" stroke="#1C398E" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#101828]">Add to Umrah Packages</h3>
                    <p className="text-sm text-[#4A5565] leading-relaxed">
                        Combine your flight with accommodation and transport for a complete Umrah experience.
                    </p>
                    <button
                        style={{
                            backgroundColor: "#1C398E",
                            color: "#FFFFFF",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            fontWeight: "600",
                            fontSize: "13px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            width: "fit-content",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1e40af")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e3a8a")}
                    >
                        View Packages
                        <svg width="14" height="14" fill="none" stroke="#FFFFFF" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Card 3 - Medium Blue */}
                <div
                    className="rounded-2xl p-8 flex flex-col gap-5"
                    style={{ background: "linear-gradient(135deg, #2B7FFF 0%, rgba(28, 57, 142, 0.9) 100%)" }}
                >
                    {/* Icon */}
                    <div>
                        <svg width="36" height="36" fill="none" stroke="#FFFFFF" strokeWidth={1.8} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#FFFFFF]">Customize Your Journey</h3>
                    <p className="text-sm text-gray-200 leading-relaxed">
                        Work with our experts to create a tailor-made itinerary that suits your schedule.
                    </p>
                    <Link href="/contactus"
                        style={{
                            backgroundColor: "#FFFFFF",
                            color: "#155DFC",
                            border: "1.5px solid white",
                            padding: "10px 20px",
                            borderRadius: "10px",
                            fontWeight: "600",
                            fontSize: "13px",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            width: "fit-content",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                    >
                        Contact Us
                        <svg width="14" height="14" fill="none" stroke="#155DFC" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

            </div>
        </section>
    );
}