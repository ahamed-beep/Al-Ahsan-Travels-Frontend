import { DollarSign, TrendingUp, Users, Shield, Lock, Award, ShieldCheck } from "lucide-react";

const benefits = [
  {
    iconClass: "bg-[#C6D7FC] text-[#1C398E]",
    icon: <DollarSign size={20} />,
    title: "Lower Cost",
    desc: "Save significantly compared to full-duration near-Haram stays",
  },
  {
    iconClass: "bg-[#C6D7FC] text-[#1C398E]",
    icon: <TrendingUp size={20} />,
    title: "Flexible Options",
    desc: "Choose from various shifting packages based on your budget",
  },
  {
    iconClass: "bg-[#C6D7FC] text-[#1C398E]",
    icon: <Users size={20} />,
    title: "Suitable for Groups",
    desc: "Perfect for families and group travelers seeking affordability",
  },
  {
    iconClass: "bg-[#C6D7FC] text-[#1C398E]",
    icon: <Shield size={20} />,
    title: "Fully Organized",
    desc: "We handle all logistics and accommodation transitions",
  },
];

const trust = [
  {
    icon: <ShieldCheck size={26} />,
    title: "ATOL Protected",
    desc: "Your booking is fully protected",
  },
  {
    icon: <Lock size={26} />,
    title: "Secure Booking",
    desc: "Safe and encrypted payment",
  },
  {
    icon: <Award size={26} />,
    title: "Experienced Staff",
    desc: "20+ years of Hajj expertise",
  },
];

export default function ShiftingHajj() {
  return (
    <div className="bg-[#FAFAFA] font-sans py-12 px-4 sm:px-6 lg:px-8">
      {/* Why Choose Section */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
            Why Choose Shifting Hajj?
          </h2>
          <p className="mt-2 text-[#4A5565] text-base">
            Key benefits that make this option perfect for smart pilgrims
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] border-gray-100 rounded-xl p-5 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200"
            >
              <div
                className={`w-11 h-11 rounded-lg flex  items-center justify-center ${b.iconClass}`}
              >
                {b.icon}
              </div>
              <div>
                <h3 className="text-sm font-medium text-[#1F1F1F]">{b.title}</h3>
                <p className="text-sm text-[#4A5565] leading-relaxed mt-1">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      

      {/* Book with Confidence Section */}
      <div className="max-w-3xl bg-[#FFFFFF] mt-10 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F1F1F] tracking-tight">
            Book with Confidence
          </h2>
          <p className="mt-2 text-[#4A5565] text-base">
            Your journey is protected and secure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {trust.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-[60px] h-[60px] rounded-full bg-[#C6D7FC] flex items-center justify-center text-[#1C398E]">
                {t.icon}
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#1F1F1F]">{t.title}</h4>
                <p className="text-sm text-[#4A5565] mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}