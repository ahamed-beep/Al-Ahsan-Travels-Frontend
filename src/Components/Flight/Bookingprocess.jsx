"use client";

const steps = [
    { id: 1, title: "Select Route", desc: "Choose your departure city" },
    { id: 2, title: "Choose Airline", desc: "Compare prices & schedules" },
    { id: 3, title: "Confirm Booking", desc: "Secure payment & details" },
    { id: 4, title: "Receive Ticket", desc: "Get e-ticket via email" },
];

export default function BookingProcess() {
    return (
        <section className="bg-gray-50 py-16 px-4">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#101828] mb-2">
                    Simple Booking Process
                </h2>
                <p className="text-[#4A5565] text-md">
                    Book your Umrah flight in 4 easy steps
                </p>
            </div>

            {/* Steps */}
            <div className="max-w-4xl mx-auto">
                <div className="flex items-start justify-between relative">

                    {/* Connector Line */}
                    <div
                        className="absolute"
                        style={{
                            height: "2px",
                            background: "linear-gradient(to right, #3b82f6, #bfdbfe)",
                            width: "75%",
                            left: "12.5%",
                            top: "24px",
                            zIndex: 0,
                        }}
                    />

                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="flex flex-col items-center text-center relative z-10"
                            style={{ width: "25%" }}
                        >
                            {/* Circle */}
                            <div
                                className="w-12 h-12 rounded-full flex items-center justify-center text-[#FFFFFF] font-bold text-lg mb-4"
                                style={{ backgroundColor: "#1C398E" }}
                            >
                                {step.id}
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-[#101828] mb-1">
                                {step.title}
                            </h3>

                            {/* Desc */}
                            <p className="md:text-md text-xs text-[#4A5565] leading-relaxed px-2">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}