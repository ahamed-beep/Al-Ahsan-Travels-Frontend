"use client";

const features = [
    {
        id: 1,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield">
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
        ),
        title: "Comfortable Journey",
        desc: "Modern aircraft with premium amenities for your spiritual journey",
    },
    {
        id: 2,
        icon: (
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
        ),
        title: "Flexible Options",
        desc: "Choose from economy to business class with multiple departure dates",
    },
    {
        id: 3,
        icon: (
            <svg width="24" height="24" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        ),
        title: "Trusted Airlines",
        desc: "Partner with world-class carriers known for reliability and service",
    },
    {
        id: 4,
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-headphones">
                <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
            </svg>
        ),
        title: "Expert Booking Support",
        desc: "24/7 assistance to help you find the perfect flight for your Umrah",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="bg-[#FFFFFF] py-16 px-4">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-semibold text-[#101828] mb-3">
                    Why Choose Our Flight Service
                </h2>
                <p className="text-[#4A5565] text-xl ">
                    We make booking your Umrah flight simple, affordable, and stress-free
                </p>
            </div>

            {/* Cards */}
            <div
                className="max-w-5xl mx-auto gap-5"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                }}
            >
                {features.map((feature) => (
                    <div
                        key={feature.id}
                        className="rounded-2xl p-6 flex flex-col gap-4"
                        style={{ background: "linear-gradient(135deg, #CFE7FF 0%, #FFFFFF 100%)", border: "1px solid #bfdbfe" }}
                    >
                        {/* Icon Box */}
                        <div
                            className="w-12 h-12 rounded-xl text-[#FFFFFF] flex items-center justify-center"
                            style={{ backgroundColor: "#1C398E" }}
                        >
                            {feature.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-[#101828] leading-snug">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#4A5565] leading-relaxed">
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}