"use client";
import { useEffect, useState } from "react";
import { Search, ArrowRight } from "lucide-react";

const CATEGORIES = ["All stories", "Destinations", "Travel tips", "Umrah guides"];

const formatDate = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

export default function FeaturedBlogSection({
  featured = null,
  activeCategory = "All stories",
  onCategoryChange = () => {},
  search = "",
  onSearchChange = () => {},
}) {
  const [expanded, setExpanded] = useState(true);

  // Desktop screenshot shows the story expanded, mobile shows it collapsed.
  useEffect(() => {
    setExpanded(window.innerWidth >= 1024);
  }, []);

  return (
    <>
      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-10 lg:pt-11">
        {/* Filters + search */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid grid-cols-2 gap-3 lg:flex lg:gap-3">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => onCategoryChange(category)}
                  className={
                    "inline-flex w-full items-center justify-center rounded-[10px] px-4 py-2.5 text-[14px] font-medium transition-colors font-inter lg:w-auto lg:justify-start " +
                    (isActive
                      ? "bg-[#1C398E] py-2 md:py-0 text-[#FFFFFF] "
                      : "border border-gray-200 bg-[#F9FAFB] text-[#4A5565] hover:bg-gray-100")
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="relative lg:w-72">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Search articles..."
              className="w-full rounded-lg border-[1px] border-[#E5E7EB] bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-[#4A5565] focus:border-blue-700 focus:outline-hidden"
            />
          </div>
        </div>

        {/* Featured story card */}
        {featured && (
          <article className="mt-8 overflow-hidden rounded-[14px] border-[1px] border-[#E5E7EB] bg-[#F9FAFB] shadow-sm lg:mt-8 lg:grid lg:grid-cols-[1.15fr_1fr]">
            {/* Image */}
            <div className="relative">
              <img
                src={featured.image}
                alt={featured.title}
                width={1200}
                height={900}
                className="aspect-[9/7] h-full w-full object-cover lg:aspect-auto lg:min-h-[500px]"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-[10px] bg-[#FFFFFF] px-3 py-1.5 shadow-sm lg:left-5 lg:top-5">
                <img src="/Images/blog/star.png" className="h-[16px] w-[16px]" alt="" />
                <span className="text-[12px] font-inter font-semibold text-[#1C398E]">Featured story</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 lg:p-10">
              <p className="text-[12px] font-inter     font-bold uppercase tracking-wider text-[#1C398E]">
                {featured.category}
              </p>
              <h2 className="mt-3 text-[28px] font-bold leading-[1.2] tracking-tight text-[#101828] font-inter lg:mt-4 lg:max-w-[460px] lg:text-[38px]">
                {featured.title}
              </h2>
              <p className="mt-4 font-inter leading-relaxed text-[#4A5565] lg:mt-5 text-[16px]">
                {featured.excerpt}
              </p>

              <div className="mt-4 flex items-center gap-2 font-inter text-[12px] text-[#4A5565] lg:mt-5">
                <img src="/Images/blog/calender.png" className="h-4 w-4 text-[#4A5565]" alt="" />
                <span>{formatDate(featured.publishedAt || featured.createdAt)}</span>
                <span aria-hidden="true">&middot;</span>
                <span>{featured.readTime}</span>
              </div>

              {expanded ? (
                <>
                  <p className="mt-4 text-sm font-inter leading-relaxed text-[#4A5565] lg:mt-5 md:text-[16px] whitespace-pre-line">
                    {featured.body}
                  </p>
                  <button
                    type="button"
                    onClick={() => setExpanded(false)}
                    className="mt-4 text-[14px] font-bold text-[#1C398E] hover:text-blue-900 lg:mt-5"
                  >
                    Show less
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  className="mt-5 flex  items-center w-full md:w-auto justify-center  gap-2 rounded-[10px] bg-[#1C398E] px-5 py-3 text-[14px] font-semibold text-[#FFFFFF] transition-colors hover:bg-blue-800"
                >
                  Read More
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </button>
              )}
            </div>
          </article>
        )}
      </div>
      <div className="pb-10 lg:pb-16" />
    </>
  );
}