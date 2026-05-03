"use client";

const economyFeatures = [
    "Checked baggage included",
    "Seat selection",
    "In-flight meals",
    "Personal entertainment",
];

const businessFeatures = [
    "Lie-flat seats",
    "Priority boarding",
    "Premium lounge access",
    "Gourmet dining",
    "Extra baggage allowance",
];

function CheckIcon() {
    return (
        <svg width="16" height="16" fill="none" stroke="#1C398E" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

export default function FlightClasses() {
    return (
        <section className="bg-[#F9FAFB] py-16 px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                {/* Economy Class Card */}
                <div className="bg-[#FFFFFF] mt-5 rounded-2xl overflow-hidden shadow-md flex flex-col">
                    <div className="relative">
                        <img
                            src="/Images/Flightpic.webp"
                            alt="Economy Class"
                            className="w-full object-cover"
                            style={{ height: "200px" }}
                        />
                        <span
                            className="absolute top-4 left-4 ml-5 text-[#ffffff] text-xs font-semibold px-3 py-1.5 rounded-full"
                            style={{ backgroundColor: "#1e3a8a",  left: "20px" }}
                        >
                            From £500
                        </span>
                    </div>
                    <div className="p-6 flex flex-col">
                        <h3 className="text-xl font-bold text-[#101828] mb-2">Economy Class</h3>
                        <p className="text-sm text-[#4A5565] leading-relaxed mb-5">
                            Comfortable seating with ample legroom, in-flight entertainment, and complimentary meals. Perfect for budget-conscious pilgrims.
                        </p>
                        <ul className="flex flex-col gap-3">
                            {economyFeatures.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-[#364153]">
                                    <CheckIcon />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Business Class Card */}
                <div
                    className="bg-[#ffffff] rounded-2xl overflow-hidden shadow-md flex flex-col"
                    style={{ border: "2px solid #2B7FFF" }}
                >
                    <div className="relative">
                        <img
                            src="/Images/Flightpic.webp"
                            alt="Business Class"
                            className="w-full object-cover"
                            style={{ height: "200px" }}
                        />
                        <span
                            className="absolute top-4 text-[#FFFFFF] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1"
                            style={{ backgroundColor: "#2B7FFF", left: "20px" }}
                        >
                            <svg width="12" height="12" fill="#FFFFFF" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Premium
                        </span>
                    </div>
                    <div className="p-6 flex flex-col">
                        <h3 className="text-xl font-bold text-[#101828] mb-2">Business Class</h3>
                        <p className="text-sm text-[#4A5565] leading-relaxed mb-5">
                            Travel in luxury with lie-flat seats, priority boarding, premium dining, and exclusive lounge access. The ultimate comfort for your sacred journey.
                        </p>
                        <ul className="flex flex-col gap-3">
                            {businessFeatures.map((f, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-[#364153]">
                                    <CheckIcon className="text-[#2B7FFF]" />
                                    {f}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}