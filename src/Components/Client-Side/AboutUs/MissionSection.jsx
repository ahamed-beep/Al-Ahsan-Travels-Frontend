"use client";

export default function MissionSection() {
  return (
    <section className="bg-[#f5f7fb] pt-5 md:pt-10 pb-16 px-4 sm:px-6 lg:px-12">
      <div className=" mx-auto  py-6 sm:p-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-5">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#CFE7FF] text-[#1C398E] text-sm px-4 py-2 rounded-full w-fit">
              💙 Our Mission
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#101828] leading-snug">
              Dedicated to Your Spiritual Journey
            </h2>

            {/* Paragraphs */}
            <p className="text-[#364153] text-sm sm:text-base leading-relaxed">
              Al Ahsan  Travel, we are committed to providing comfortable,
              affordable, and hassle-free Umrah and Hajj journeys to pilgrims
              from across the United Kingdom.
            </p>

            <p className="text-[#364153] text-sm sm:text-base leading-relaxed">
              Our customer-first approach means we prioritize your needs,
              ensuring honest and reliable service at every step of your sacred
              journey. We understand the spiritual significance of your
              pilgrimage and work tirelessly to make it memorable.
            </p>

            <p className="text-[#364153] text-sm sm:text-base leading-relaxed">
              With over a decade of experience, certified professionals, and
              Ministry of Hajj approval, we've helped thousands of pilgrims
              fulfill their religious obligations with peace of mind.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="Images/Contact-kabba.webp" 
                alt="Kaaba"
                className="w-full h-[536px] object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}