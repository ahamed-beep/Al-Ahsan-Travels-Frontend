export default function ThankYou() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F9FAFB]">
      {/* Main content */}
      <main className="flex-1 px-4 pb-8 pt-5 sm:px-8 sm:pt-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-5 font-inter flex items-center gap-1.5 text-[14px] sm:mb-8 sm:text-[12px]">
          <a
            href="/"
            className="text-[#4A5565] transition-colors hover:text-gray-700"
          >
            Home
          </a>
          <svg
            className="h-[18px] w-[24px] text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[#1C398E]" aria-current="page">
            Thank you
          </span>
        </nav>

        {/* Card */}
        <div className="mx-auto w-full max-w-[600px] rounded-[14px] border-[1px] border-[#E5E7EB] bg-white px-6 py-10 my-8 md:my-0 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:px-12 sm:py-14">
          {/* Check badge with halo */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EEF2FB] sm:mb-8 sm:h-[72px] sm:w-[72px]">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1C398E] sm:h-[48px] sm:w-[48px]">
           <img src="/Images/thankyou/Receivedcheck.png" className="h-[20px] w-[30px]" alt="" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-inter font-bold tracking-tight text-[#101828] sm:text-[48px] sm:leading-[1.15]">
            Thank you!
          </h1>

          {/* Subheading */}
          <p className="mt-2.5 text-[20px] font-semibold text-[#101828] sm:mt-3 sm:text-base">
            We&rsquo;ve received your inquiry.
          </p>

          {/* Info box */}
          <div className="mt-7 rounded-xl bg-gray-50 px-5 py-5 sm:mt-9 sm:px-8 sm:py-6">
            <p className="text-[15px] font-semibold text-[#1C398E] sm:text-[16px]">
              What happens next?
            </p>
            <p className="mx-auto font-inter mt-2 max-w-[420px] text-sm leading-relaxed text-[#4A5565] sm:mt-2.5 sm:text-[16px]">
              Our travel specialists will review your inquiry and get in touch
              using the contact details you provided.
            </p>
          </div>

          {/* Button */}
          <div className="mt-7 sm:mt-9">
            <a
              href="/"
              className="inline-flex w-full items-center font-inter justify-center rounded-[10px] bg-[#1C398E] px-8 py-3 text-[14px] font-semibold text-[#FFFFFF] transition-colors hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 sm:w-auto"
            >
              Back to home
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-6 border-t-[1px] border-[#E5E7EB] px-4 py-5 text-center sm:py-6">
        <p className="text-[14px] text-[#4A5565]">
          Haji &amp; Umrah specialists. Here for every step of your journey.
        </p>
      
      </footer>
    </div>
  );
}