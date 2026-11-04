"use client";

const PHONE_DISPLAY = "+44 121 667 0366";
const PHONE_TEL = "+441216670366";
const WHATSAPP_DISPLAY = "+44 121 667 0366";
const WHATSAPP_NUMBER = "441216670366";
const EMAIL_ADDRESS = "info@alahsantravels.co.uk";

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.02l-2.2 2.19z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className="shrink-0">
      <path d="M16.04 3C9.37 3 3.98 8.39 3.98 15.06c0 2.25.62 4.44 1.8 6.35L3 29l7.79-2.72a12.06 12.06 0 005.25 1.2h.01c6.67 0 12.06-5.39 12.06-12.06C28.11 8.75 22.72 3.36 16.04 3zm0 22.02h-.01a10 10 0 01-5.1-1.4l-.37-.22-3.63 1.27 1.29-3.53-.24-.36a9.97 9.97 0 01-1.53-5.31c0-5.53 4.5-10.03 10.04-10.03 5.53 0 10.03 4.5 10.03 10.04 0 5.53-4.5 10.04-10.03 10.04zm5.5-7.51c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

export default function TopBar() {
  return (
    <div className="w-full bg-white text-[#1C398E] border-b border-gray-100">
      <div className="w-full max-w-full px-2 sm:px-2.5 lg:px-4 flex flex-wrap items-center justify-center sm:justify-between gap-x-2 gap-y-1 h-auto py-1.5 text-[11px] xs:text-[12px] sm:text-[13px]">
        <div className="flex items-center flex-wrap justify-center gap-1.5 sm:gap-3 md:gap-4 min-w-0">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center gap-1 sm:gap-1.5 no-underline text-white bg-[#1C398E] hover:opacity-90 transition-opacity duration-150 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap shrink-0"
          >
            <PhoneIcon />
            <span className="hidden md:inline">Call</span>
            <span className="font-medium">{PHONE_DISPLAY}</span>
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 sm:gap-1.5 no-underline text-white bg-[#1C398E] hover:opacity-90 transition-opacity duration-150 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap shrink-0"
          >
            <WhatsAppIcon />
            <span className="font-medium">{WHATSAPP_DISPLAY}</span>
          </a>
        </div>

        <a
          href={`mailto:${EMAIL_ADDRESS}`}
          className="flex items-center gap-1 sm:gap-1.5 no-underline text-[#1C398E] hover:opacity-75 transition-opacity duration-150 min-w-0 max-w-full"
        >
          <MailIcon />
          <span className="hidden sm:inline shrink-0">mail</span>
          <span className="font-medium truncate max-w-[180px] xs:max-w-[220px] sm:max-w-none">
            {EMAIL_ADDRESS}
          </span>
        </a>
      </div>
    </div>
  );
}