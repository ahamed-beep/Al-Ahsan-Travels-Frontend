"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SOCIAL_LINKS = [
  { Icon: FaFacebookF, label: "Facebook", href: "https://facebook.com/holycompanions" },
  { Icon: FaTwitter, label: "Twitter", href: "https://twitter.com/holycompanions" },
  { Icon: FaInstagram, label: "Instagram", href: "https://instagram.com/holycompanions" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "https://linkedin.com/company/holycompanions" },
];

const CONTACT = {
  phone: "+44 20 1234 5678",
  phoneTel: "tel:+442012345678",
  email: "info@holycompanions.co.uk",
  address: "123 High Street, London, UK, E1 1AA",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Holy Companions",
  url: "https://holycompanions.co.uk",
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 High Street",
    addressLocality: "London",
    postalCode: "E1 1AA",
    addressCountry: "GB",
  },
  sameAs: SOCIAL_LINKS.map((s) => s.href),
};

export default function Footer() {
  return (
    <footer className="bg-white text-gray-600 pb-8 px-4 sm:px- lg:px-12">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto">

        <div  className="me-10">
          <img
            src="/Images/Link.png"
            alt="Holy Companions — Hajj & Umrah Travel Agency"
            className="w-80 h-80 object-contain "  
            width={186}                              
            height={186}
            loading="eager"                          
          />
        </div>

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          <nav aria-label="Main footer links">
            <ul className="space-y-2 text-sm">
              <li><Link href="/aboutus" className="text-[#1C398E] hover:underline">About Us</Link></li>
              <li>
                <Link
                  href="/#FeaturedPackages"
                  className="text-[#1C398E] hover:underline"
                >
                  Packages
                </Link>
              </li>
              <li><Link href="/aboutus#our-services" className="text-[#1C398E] hover:underline">Services</Link></li>
            </ul>
          </nav>

          <nav aria-label="Support footer links">
            <ul className="space-y-2 text-sm">
              <li><Link href="/contactus" className="text-[#1C398E] hover:underline">Contact</Link></li>
              <li><Link href="/familyumrahpackage#FAQs" className="text-[#1C398E] hover:underline">FAQs</Link></li>
              <li><Link href="/flight#Flightdeals" className="text-[#1C398E] hover:underline">Travel Guide</Link></li>
            </ul>
          </nav>

          <address className="not-italic">
            <ul className="space-y-4 text-sm">

              <li className="flex items-center gap-2 text-[#1C398E]">
                <Phone size={16} aria-hidden="true" />
                <a href={CONTACT.phoneTel} className="hover:underline">
                  {CONTACT.phone}
                </a>
              </li>

              <li className="flex items-center gap-2 text-[#1C398E]">
                <Mail size={16} aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="hover:underline">
                  {CONTACT.email}
                </a>
              </li>

              <li className="flex items-start gap-2 text-[#1C398E]">
                <MapPin size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <span>
                  123 High Street<br />
                  London, UK, E1 1AA
                </span>
              </li>

            </ul>
          </address>
        </div>

        <div className="border-t border-gray-300 my-8 mb-5" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-[#1C398E] text-center md:text-left">
            © {new Date().getFullYear()} Al-Ahsan-Travels
          </p>

          <div className="flex items-center gap-3" aria-label="Social media links">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <a
                key={label}                        
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Holy Companions on ${label}`}   /* FIX: aria-label */
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-[#1C398E] hover:bg-blue-600 hover:text-white transition duration-300"
              >
                <Icon size={14} aria-hidden="true" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}