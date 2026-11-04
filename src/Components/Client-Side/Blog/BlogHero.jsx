import { ChevronRight } from "lucide-react";

export default function BlogHero() {
  return (
    <div className="bg-[#F9FAFB]">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-10 lg:pt-9">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-[13px]">
          <a href="/" className="font-medium text-[#4A5565]  hover:text-gray-900">
            Home
          </a>
          <ChevronRight className="h-3.5 w-3.5 text-[#4A5565]" strokeWidth={2.5} aria-hidden="true" />
          <span className="font-medium text-[#1C398E]  font-inter">Travel Blog</span>
        </nav>

        {/* Heading */}
        <h1 className="mx-auto mt-6 max-w-3xl text-center text-[36px] font-bold leading-[1.15] text-[#101828]  lg:mt-7 md:text-[48px]">
          Your next journey starts here
        </h1>
        <p className="mx-auto mt-4 max-w-[600px] text-[17px] text-center text-base leading-relaxed text-[#4A5565] sm:text-[20px] font-inter lg:mt-5">
          Inspiring destinations, trusted travel advice and thoughtful guides for every step of
          your journey.
        </p>
      </div>
      <div className="pb-10 lg:pb-14" />
    </div>
  );
}