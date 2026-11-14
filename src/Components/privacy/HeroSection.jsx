export default function HeroSection() {
  return (
    <header className="relative flex h-[235px] items-center overflow-hidden sm:h-[520px]">
      <picture>
        <source media="(min-width: 640px)" srcSet="/Images/privacy/desk-hero.png" />
        <img
          src="/Images/privacy/mob-hero.png"
          alt="The Kaaba at Masjid al-Haram in Mecca"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[center_54%]"
        />
      </picture>
      <div className="relative mx-auto w-full max-w-[1180px] px-5 md:px-0">
        <nav aria-label="Breadcrumb" className="mb-3 text-[10px] font-inter  font-extralight text-[#D4E0F5] sm:mb-4 sm:text-[14px]">
          <a href="/" className="hover:underline">Home</a>
          <span className="mx-1.5">/</span>
          <span>Privacy Policy</span>
        </nav>
        {/* <h1 className="text-3xl font-bold leading-tight text-[#FFFFFF] font-inter sm:text-[60px]">Privacy Policy</h1> */}
        {/* <p className="mt-2 max-w-[200px]   font-inter leading-5 text-[#E0E8F5] sm:mt-3 sm:max-w-md sm:text-[18px] sm:leading-8">
          How we collect, use and protect your personal information.
        </p> */}
      </div>
    </header>
  );
}