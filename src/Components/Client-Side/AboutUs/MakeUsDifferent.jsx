import {
  HeadphonesIcon,
  ShieldCheck,
  Lock,
  Star,
  Hotel,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-white" />,
    title: "24/7 Support",
    desc: "Round-the-clock assistance for your peace of mind",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "ATOL & IATA Protected",
    desc: "Fully certified and protected bookings",
  },
  {
    icon: <Lock className="w-6 h-6 text-white" />,
    title: "Secure Payments",
    desc: "Safe and encrypted transaction processing",
  },
  {
    icon: <Star className="w-6 h-6 text-white" />,
    title: "Easy Booking",
    desc: "Simple, fast, and hassle-free process",
  },
  {
    icon: <Hotel className="w-6 h-6 text-white" />,
    title: "Certified Hotels",
    desc: "Verified accommodations near holy sites",
  },
  {
    icon: <Heart className="w-6 h-6 text-white" />,
    title: "Customer-First Approach",
    desc: "Your satisfaction is our priority",
  },
];

export default function MakeUsDifferent() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto  px-6 py-12 sm:px-10">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font- font-medium text-[#101828] mb-3">
          What Makes Us Different
        </h2>
        <p className="text-center text-sm sm:text-base text-[#4A5565] mb-10">
          Experience the difference with our comprehensive features and services
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6"
            >
              {/* Icon Box */}
              <div className="w-12 h-12 bg-[#1e3a8a] rounded-xl flex items-center justify-center mb-5">
                {feature.icon}
              </div>

              <h3 className="text-base font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}