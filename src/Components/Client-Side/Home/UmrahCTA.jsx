import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UmrahCTA() {
  return (
    <section className="w-full bg-[#1C398E] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
          Ready to Begin Your Umrah Journey?
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          Book a free consultation with our travel experts and let us help you
          plan the spiritual journey of a lifetime.
        </p>

        {/* ✅ Fixed Button */}
        <a href="https://wa.me/447440064066"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Book a free Umrah consultation on WhatsApp"
  className="inline-flex items-center gap-2 bg-[#1C398E] text-white  transition-all duration-300 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl font-medium"
>
  <span className="text-sm sm:text-base font-medium">Book Now</span>
  <ArrowRight size={18} />
</a>

      </div>
    </section>
  );
}