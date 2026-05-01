import { Lock, DollarSign, Shield, Award } from "lucide-react";

const features = [
  {
    icon: <Lock className="w-6 h-6 text-[#FFFFFF]" />,
    title: "Fixed Pricing Guarantee",
    desc: "Price locked once you book — no surprises",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#FFFFFF]" />,
    title: "No Hidden Charges",
    desc: "Transparent pricing with everything included upfront",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#FFFFFF]" />,
    title: "Deposit Booking System",
    desc: "Secure your spot with a low deposit, pay the rest later",
  },
  {
    icon: <Award  className="w-6 h-6 text-[#FFFFFF]" />,
    title: "ATOL Protected",
    desc: "Your money is protected and safe with us",
  },
];

export default function PricingFeatures() {
  return (
    <section className="bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#101828]">
          Transparent Pricing & Secure Booking
        </h2>
        <p className="mt-3 text-[#4A5565] text-sm sm:text-base">
          Book with confidence — no surprises, just trust
        </p>

        {/* Features */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Icon box */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1C398E] shadow-md mb-4">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-[#101828]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-[#4A5565] max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}