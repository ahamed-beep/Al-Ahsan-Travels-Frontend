import { CheckCircle } from "lucide-react";
import Image from "next/image";

const reasons = [
  "Comfortable and hassle-free travel arrangements",
  "Dedicated support team throughout your journey",
  "Certified and experienced professionals",
  "Personalized itineraries to suit your needs",
  "Competitive pricing with transparent costs",
  "Ministry of Hajj approved packages",
  "Flexible payment options available",
  "Emergency support during your trip",
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl sm:text-3xl font- tmediumext-[#101828] mb-8">
            Why Pilgrims Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
            {reasons.map((reason, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#1C398E] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#364153] leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[45%] flex-shrink-0">
          <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/Images/AboutUs.webp"
              alt="Makkah"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}