"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f5f7fb] text-gray-600 py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo + Links */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/Images/logo2.png"
                alt="logo"
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold text-[#1C398E] text-lg">
                  Al-Ahsan Travels
                </h3>
                <p className="text-sm text-[#1C398E]">
                  Hajj & Umrah Specialists
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/aboutus" className="text-[#1C398E] hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-[#1C398E] hover:underline">
                  Packages
                </Link>
              </li>
              <li>
                <li>
                  <Link href="/aboutus#our-services" className="text-[#1C398E] hover:underline">
                    Services
                  </Link>
                </li>
              </li>
            </ul>
          </div>

          {/* Middle Links */}
          <div className="md:ml-10">
            <ul className="space-y-2  text-sm">
              <li>
                <Link href="/contact" className="text-[#1C398E] hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-[#1C398E] hover:underline">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/travel-guide" className="text-[#1C398E] hover:underline">
                  Travel Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <ul className="space-y-4 text-sm">

              <li className="flex text-[#1C398E] items-center gap-2">
                <Phone size={16} />
                <span>+44 20 1234 5678</span>
              </li>

              <li className="flex text-[#1C398E] items-center gap-2">
                <Mail size={16} />
                <span>info@holycompanions.co.uk</span>
              </li>

              <li className="flex text-[#1C398E] items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>
                  123 High Street <br />
                  London, UK, E1 1AA
                </span>
              </li>

            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-[#1C398E] text-center md:text-left">
            © 2026 Holy Companions. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center text-[#1C398E] gap-3">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer"
              >
                <Icon size={14} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}