"use client";

import { Phone, Mail, MessageCircle, MapPin, ChevronRight } from "lucide-react";

const cards = [
  {
    icon: <Phone className="w-5 h-5" />,
    iconBg: "bg-[#D0FAE5]",
    iconColor: "text-[#009966]",
    borderColor: "border-[#A4F4CF]",
    linkColor: "text-green-600 hover:text-green-700",
    title: "Call Us",
    subtitle: "Speak to our team",
    lines: ["0203 097 1507", "0741 835 0475"],
    actionLabel: "Call Now",
    onAction: () => { window.location.href = "tel:02030971507"; },
  },
  {
    icon: <Mail className="w-5 h-5" />,
    iconBg: "bg-[#DBEAFE]",
    iconColor: "text-[#155DFC]",
    borderColor: "border-[#BEDBFF]",
    linkColor: "text-blue-500 hover:text-blue-600",
    title: "Email Us",
    subtitle: "Send us a message",
    lines: ["sales@ihsantravels.com"],
    actionLabel: "Send Email",
    onAction: () => { window.location.href = "mailto:sales@ihsantravels.com"; },
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    iconBg: "bg-[#DCFCE7]",
    iconColor: "text-[#00A63E]",
    borderColor: "border-[#B9F8CF]",
    linkColor: "text-green-500 hover:text-green-600",
    title: "WhatsApp",
    subtitle: "Quick response",
    lines: ["Chat with us instantly"],
    actionLabel: "Open WhatsApp",
    onAction: () => {
      window.open(
        "https://wa.me/441234567890?text=" +
          encodeURIComponent("Assalamu Alaikum, I would like to inquire about Umrah packages."),
        "_blank"
      );
    },
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    iconBg: "bg-[#FEF3C6]",
    iconColor: "text-[#E17100]",
    borderColor: "border-[#FEE685]",
    linkColor: "text-yellow-600 hover:text-yellow-700",
    title: "Visit Office",
    subtitle: "Come see us",
    lines: ["Manchester", "Burnley"],
    actionLabel: "Get Directions",
    onAction: () => {
      window.open("https://maps.google.com?q=Manchester,UK", "_blank");
    },
  },
];

export default function ContactCards() {
  return (
    <section className="bg-[#ffffff] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className={[
              "flex flex-col gap-4 bg-[#ffffff] rounded-2xl border p-6 shadow-sm",
              "hover:shadow-md transition-shadow duration-200",
              card.borderColor,
            ].join(" ")}
          >
            {/* Icon */}
            <div className={["w-12 h-12 rounded-xl flex items-center justify-center", card.iconBg, card.iconColor].join(" ")}>
              {card.icon}
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-medium text-[#101828]">{card.title}</h3>
              <p className="text-sm text-[#6A7282]">{card.subtitle}</p>
            </div>

            {/* Info Lines */}
            <div className="flex flex-col gap-0.5">
              {card.lines.map((line) => (
                <p key={line} className="text-sm font-medium text-[#364153]">{line}</p>
              ))}
            </div>

            {/* Action Link */}
            <button
              onClick={card.onAction}
              className={["flex items-center gap-1 text-sm font-regular mt-auto transition-colors duration-150", card.linkColor].join(" ")}
            >
              {card.actionLabel}
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}