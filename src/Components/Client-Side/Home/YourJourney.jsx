"use client";
import Image from "next/image";

export default function JourneySection() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
            Your Journey,
            <br />
            <span className="text-[#2b4c9a]">
              Thoughtfully Planned
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 mt-6 text-sm md:text-base leading-relaxed">
            We understand that performing Hajj or Umrah is a once-in-a-lifetime
            spiritual journey. Our experienced team ensures every detail is
            meticulously planned, allowing you to focus entirely on your worship
            and connection with Allah.
          </p>

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            From the moment you book until you return home, we provide
            comprehensive support, comfortable accommodations, and
            knowledgeable guidance to make your pilgrimage truly memorable
            and spiritually enriching.
          </p>

          {/* Stats */}
          <div className="flex gap-12 mt-10">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#2b4c9a]">
                6K+
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Visitors Served
              </p>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-[#2b4c9a]">
                10K+
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                Years Experience
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full">
          <div className="rounded-2xl overflow-hidden ">
            <Image
              src="/Images/Image (Medina).webp" // 👈 same image
              alt="Kaaba"
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}