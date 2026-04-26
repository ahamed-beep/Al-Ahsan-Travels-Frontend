"use client";

import React from "react";

// ✅ Har month ka description yahan
const monthContent = {
  january: "January offers ideal conditions for Umrah with pleasant weather and fewer crowds. Experience comfortable temperatures perfect for worship, alongside competitive pricing that makes your spiritual journey more accessible. Start your year with a meaningful pilgrimage.",
  february: "February is a beautiful time for Umrah with mild weather and a peaceful atmosphere. Enjoy a spiritually enriching experience with comfortable conditions and great value packages designed for your sacred journey.",
  march: "March provides excellent weather for Umrah pilgrims with warm days and cool evenings. Take advantage of this blessed month to perform your Umrah with ease and comfort in the holy cities.",
  april: "April is a wonderful month for Umrah with warm and pleasant weather. Explore the holy cities with comfort and devotion, and make the most of this spiritually rewarding time of year.",
  may: "May brings warm temperatures ideal for Umrah travel. With well-priced packages and comfortable conditions, this is a great opportunity to embark on your spiritual journey to Makkah and Madinah.",
  june: "June offers a unique Umrah experience with longer days for worship. Despite the warmer climate, the spiritual energy in the holy cities is unmatched, making your pilgrimage truly unforgettable.",
  july: "July is a peak season for Umrah with vibrant energy in the holy cities. Experience the warmth of faith alongside fellow pilgrims from around the world in this spiritually uplifting month.",
  august: "August provides a deeply spiritual atmosphere for Umrah. With extended worship hours and a strong sense of community among pilgrims, this month offers a truly memorable sacred journey.",
  september: "September marks the beginning of cooler weather, making it an ideal time for Umrah. Enjoy comfortable conditions for worship and take advantage of excellent packages available this month.",
  october: "October offers pleasant weather and a peaceful environment for Umrah. With moderate temperatures and great package deals, this is one of the most popular months for spiritual travel.",
  november: "November is an excellent month for Umrah with cooler temperatures and a serene atmosphere. Perform your worship in comfort and enjoy the spiritual tranquility of the holy cities.",
  december: "December offers a cool and comfortable climate perfect for Umrah. End your year on a spiritually fulfilling note with a meaningful pilgrimage to the blessed cities of Makkah and Madinah.",
};

export default function ContantJanuary({ month = "january" }) {
  const content = monthContent[month.toLowerCase()] || monthContent["january"];

  return (
    <div className="w-full bg-[#FAFAFA] py-10 px-4 flex justify-center">
      <div className="max-w-3xl text-center">
        <p className="text-[#4A5565] text-sm md:text-base leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
}