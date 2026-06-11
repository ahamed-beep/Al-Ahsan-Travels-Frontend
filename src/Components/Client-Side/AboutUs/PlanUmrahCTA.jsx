import Link from "next/link";
import { Heart } from "lucide-react";

export default function PlanUmrahCTA() {
  return (
    <section className="bg-[#1C398E] py-10 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className=" mx-auto flex flex-col items-center text-center gap-6">

        {/* Icon */}
        <Heart className="w-10 h-10 text-[#FFFFFF]" strokeWidth={1.5} />

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#ffffff] leading-tight">
          Plan Your Umrah With Confidence
        </h2>

        {/* Subtext */}
        <p className="text-sm sm:text-base text-[#ECFDF5] max-w-xl leading-relaxed">
          Join thousands of satisfied pilgrims who have trusted us with their
          spiritual journey. Let us help you create memories that last a lifetime.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/contactus"
            className="px-8 py-3 bg-[#ffffff] text-[#1e3a8a] font-semibold text-sm rounded-lg hover:bg-blue-50 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            href="/shiftinghajj#Packages"
            className="px-8 py-3 border-2 border-white text-white font-semibold text-sm rounded-lg hover:bg-white hover:text-[#1e3a8a] transition duration-300"
          >
            View Packages
          </Link>
        </div>

      </div>
    </section>
  );
}