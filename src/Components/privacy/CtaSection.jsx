export default function CtaSection() {
  return (
    <footer className="bg-[#1C398E] text-white">
      <div className="md:mx-15 flex max-w-[1180px] flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-0 sm:py-14">
        <h2 className="font-inter text-xl font-bold text-[#FFFFFF] sm:text-[28px] sm:leading-tight">
          Here to help with your privacy
        </h2>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-10">
          <a
            href="mailto:info@alahsantravels.co.uk"
            className="font-inter text-base text-[#FFFFFF] sm:text-[20px]"
          >
            info@alahsantravels.co.uk
          </a>
          <a
            href="tel:+441216670366"
            className="font-inter text-base text-[#FFFFFF] sm:text-[20px]"
          >
            +44 121 667 0366
          </a>
        </div>
      </div>
    </footer>
  );
}