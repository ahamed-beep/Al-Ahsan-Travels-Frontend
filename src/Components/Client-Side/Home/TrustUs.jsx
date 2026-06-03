"use client";
import Image from "next/image";
import { Shield, Building, Map, Clock } from "lucide-react";

export default function WhyTrustUs() {
  const features = [
    {
      icon: Shield,
      title: "Visa Processing Support",
      desc: "Complete assistance with Saudi visa applications and documentation",
    },
    {
      icon: Building,
      title: "Premium Haram Hotels",
      desc: "Carefully selected accommodations within walking distance of the Haram",
    },
    {
      icon: Map,
      title: "Guided Ziyarah Tours",
      desc: "Expert-led tours to all significant Islamic historical sites",
    },
    {
      icon: Clock,
      title: "24/7 Travel Assistance",
      desc: "Round-the-clock support from our dedicated team throughout your journey",
    },
  ];

  return (
    <section className="w-full bg-[#F7F7F7] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden ">
              <Image
                src="/Images/mosque.png"
                alt="Kaaba"
                width={560}
                height={350}
                className="w-full mt-20 h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>

            {/* ✅ Heading Right Side */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Pilgrims Trust Us
            </h2>

            {/* Cards */}
            <div className="space-y-5">
              {features.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition"
                  >
                    {/* Icon */}
                    <div className="bg-[#1e3a8a] text-white p-3 rounded-lg">
                      <Icon size={20} />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="font-semibold text-lg">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}