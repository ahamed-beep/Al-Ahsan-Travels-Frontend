import Image from "next/image";

const certifications = [
  {
    icon: "/Images/icon1.jpeg",
    label: "Ministry of Hajj Approved",
  },
  {
    icon: "/Images/icon2.jpeg",
    label: "ATOL Protected",
  },
  {
    icon: "/Images/icon3.jpeg",
    label: "IATA Certified",
  },
];

export default function CertifiedTrusted() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#ffffff]">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-[#101828] mb-3">
          Certified & Trusted
        </h2>
        <p className="text-center text-sm sm:text-base text-[#4A5565] mb-10">
          Accredited by leading international travel and pilgrimage authorities
        </p>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1C398E] rounded-2xl py-10 px-6 flex flex-col items-center gap-4"
            >
              <div className=" h-35  flex items-center justify-center overflow-hidden p-2">
                <img
                  src={cert.icon}
                  alt={cert.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[#FFFFFF] font-semibold text-base text-center">
                {cert.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div className="bg-[#CFE7FF] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-center">

          {/* Image */}
          <div className="w-full sm:w-[45%] flex-shrink-0 rounded-xl overflow-hidden h-56 sm:h-64 relative">
            <Image
              src="/Images/AboutUs.webp"  
              alt="Makkah"
              fill
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#101828] mb-4">
              Years of Expertise
            </h3>
            <p className="text-sm text-[#364153] leading-relaxed mb-3">
              Our team of certified professionals brings over a decade of
              experience in organizing successful Umrah and Hajj journeys. We
              stay updated with the latest regulations and requirements to
              ensure smooth processing.
            </p>
            <p className="text-sm text-[#364153] leading-relaxed">
              Every member of our team is dedicated to providing you with
              accurate information, personalized service, and continuous
              support throughout your spiritual journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}