import {
  
  Plane,
  Building2,
  Hotel,
  FileText,
  Users,
  
} from "lucide-react";

const services = [
  {
    icon: <Building2 className="w-6 h-6 text-[#1C398E]" />,
    iconBg: "bg-[#CFE7FF]",
    border: "border-[#8EC5FF]",
    title: "Umrah Packages",
    desc: "Tailored packages for every budget and preference",
  },
  {
    icon: <Plane className="w-6 h-6 text-[#155DFC]" />,
    iconBg: "bg-[#CFE7FF]",
    border: "border-[#BEDBFF]",
    title: "Hajj Packages",
    desc: "Complete Hajj solutions with expert guidance",
  },
  {
    icon: <Plane className="w-6 h-6 text-[#DBEAFE]" />,
    iconBg: "bg-[#FEF3C6]",
    border: "border-[#FEE685]",
    title: "Flight Bookings",
    desc: "Competitive rates with trusted airlines",
  },
  {
    icon: <Hotel className="w-6 h-6 text-[#9810FA]" />,
    iconBg: "bg-[#F3E8FF]",
    border: "border-[#E9D4FF]",
    title: "Hotel Reservations",
    desc: "Premium accommodations in Makkah & Madinah",
  },
  {
    icon: <FileText className="w-6 h-6 text-[#1C398E]" />,
    iconBg: "bg-[#DCFCE7]",
    border: "border-[#BEDBFF]",
    title: "Visa Services",
    desc: "Fast and reliable visa processing",
  },
  {
    icon: <Users className="w-6 h-6 text-[#EC003F]" />,
    iconBg: "bg-[#FFE4E6]",
    border: "border-[#FFCCD3]",
    title: "Group Travel",
    desc: "Special packages for groups and families",
  },
];

export default function OurServices() {
  return (
    <section id="our-services"  className="  md:py-16 px-4 sm:px-6 lg:px-12 bg-[#ffffff]">
      <div className=" mx-auto  px-1   md:py-12 sm:px-10">

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font- font-medium text-[#101828] mb-3">
          Our Services
        </h2>
        <p className="text-center text-sm sm:text-base text-[#4A5565] mb-10">
          Comprehensive travel solutions for all your pilgrimage needs
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border-2 ${service.border}`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${service.iconBg}`}
              >
                {service.icon}
              </div>

              <h3 className="text-base font-bold text-[#101828] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[#4A5565] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}