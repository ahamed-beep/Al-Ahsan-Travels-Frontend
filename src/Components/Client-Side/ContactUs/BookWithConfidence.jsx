import { Shield, Award, Lock } from "lucide-react";

const badges = [
  {
    icon: <img src="/Images/icon2.jpeg" alt="ATOL Protected"   className=" h-30 " />,
    title: "ATOL Protected",
    desc: "Your bookings are fully protected",
  },
  {
    icon: <img src="/Images/icon3.jpeg" alt="IATA Certified" className=" h-30 " />,
    title: "IATA Certified",
    desc: "Internationally recognized standards",
  },
  {
    icon: <img src="/Images/icon1.jpeg" alt="Secure Payments" className=" h-30 " />,
    title: "Ministry of Hajj Approved",
    desc: "Safe and encrypted transactions",
  },
];

export default function BookWithConfidence() {
  return (
    <section className="bg-[#F9FAFB] py-14 px-4 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-medium text-[#101828] mb-2">
          Book With Confidence
        </h2>
        <p className="text-[#4A5565] text-sm sm:text-base">
          Your safety and security are our top priorities
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="bg-[#FFFFFF] border border-gray-100 rounded-2xl shadow-sm px-8 py-10 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-200"
          >
            {/* Icon */}
            <div className=" h-35  flex items-center justify-center">
              {badge.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-bold text-[#101828]">{badge.title}</h3>
              <p className="text-sm text-[#4A5565]">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}