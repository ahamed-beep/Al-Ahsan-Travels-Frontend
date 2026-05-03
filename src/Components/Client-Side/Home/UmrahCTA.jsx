import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function UmrahCTA() {
  return (
    <section className="w-full bg-[#2f4aa0] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4">
          Ready to Begin Your <br className="hidden sm:block" />
          Umrah Journey?
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto mb-8">
          Book a free consultation with our travel experts and let us help you
          plan the spiritual journey of a lifetime.
        </p>

        {/* Button */}
        <Link  href="/#hero" className="inline-flex items-center gap-2 bg-[#3b5bcc] hover:bg-[#2f4aa0] transition-all duration-300 px-6 py-3 rounded-lg shadow-lg hover:shadow-xl">
          <span className="text-sm sm:text-base font-medium">Book Now</span>
          <ArrowRight size={18} />
        </Link>

      </div>
    </section>
  );
}