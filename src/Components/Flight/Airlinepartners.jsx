"use client";

const airlines = [
    { id: 1, name: "Egypt Air" },
    { id: 2, name: "Gulf Air" },
    { id: 3, name: "Turkish Airlines" },
    { id: 4, name: "Emirates" },
    { id: 5, name: "Saudi Airlines" },
    { id: 6, name: "Oman Air" },
    { id: 7, name: "Pegasus" },
];

export default function AirlinePartners() {
    return (
        <section className="bg-[#F9FAFB] py-16 px-4">

            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-[#101828] mb-2">
                    Our Airline Partners
                </h2>
                <p className="text-[#4A5565] text-sm">
                    Fly with world-renowned airlines offering comfort and reliability
                </p>
            </div>

            {/* Cards Row */}
            <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
                {airlines.map((airline) => (
                    <div
                        key={airline.id}
                        className="bg-[#FFFFFF] rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center gap-3 p-5"
                        style={{ width: "110px", minHeight: "100px" }}
                    >
                        {/* Icon */}
                        <div className="text-2xl">✈️</div>
                        {/* Name */}
                        <span className="text-xs whitespace-nowrap text-[#364153] font-medium text-center leading-tight">
                            {airline.name}
                        </span>
                    </div>
                ))}
            </div>

        </section>
    );
}