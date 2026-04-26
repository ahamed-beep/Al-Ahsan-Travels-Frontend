"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, MapPin, Send } from "lucide-react";

export default function FlightHero() {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        date: "",
        airport: "",
        adults: "",
        children: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // WhatsApp message generate
        const message = `
Name: ${formData.fullName}
Phone: ${formData.phone}
Date: ${formData.date}
Airport: ${formData.airport}
Adults: ${formData.adults}
Children: ${formData.children}
`;

        const whatsappURL = `https://wa.me/923001234567?text=${encodeURIComponent(
            message
        )}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center text-white">
            {/* Background Image */}
            <div className="absolute w-full inset-0">
                <img
                    src="/Images/Shifting.jpg"
                    alt="Hajj background"
                    className="h-full w-full  object-cover"
                />
                <div className="absolute inset-0 " />
            </div>

            {/* ✅ Content */}
            <div className="relative z-10 max-w-7xl w-full px-4 grid lg:grid-cols-2 gap-12 justify-center items-center">
                {/* LEFT SIDE */}
                <div className="flex flex-col items-center justify-center text-center gap-5">

                    <span className="bg-[#1C398E] bg-opacity-80 px-5 py-2 rounded-full text-sm text-white">
                        Affordable 3-Star Umrah Packages
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        <span className="text-white">Your Spiritual Journey</span> <br />
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Starts Here
                        </span>
                    </h1>

                    <p className="text-gray-200 max-w-xl">
                        Experience a comfortable and affordable Umrah pilgrimage with our
                        carefully curated packages. Trusted service and support.
                    </p>

                </div>
                {/* RIGHT SIDE FORM */}
                <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md mx-auto">

                    <h2 className="text-xl font-semibold mb-5">
                        Plan Your Perfect Umrah Journey
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Name + Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                            <div>
                                <label className="text-sm font-medium">Full Name *</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Phone *</label>
                                <input
                                    type="text"
                                    name="phone"
                                    onChange={handleChange}
                                    required
                                    className="mt-1 w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                        </div>

                        {/* Date + Airport */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                            <div>
                                <label className="text-sm font-medium">Departure Date</label>
                                <div className="flex items-center border rounded-lg px-3 mt-1">
                                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                                    <input
                                        type="date"
                                        name="date"
                                        onChange={handleChange}
                                        className="w-full py-2 outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium">Airport</label>
                                <div className="flex items-center border rounded-lg px-3 mt-1">
                                    <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                                    <input
                                        type="text"
                                        name="airport"
                                        onChange={handleChange}
                                        className="w-full py-2 outline-none"
                                    />
                                </div>
                            </div>

                        </div>

                        {/* Adults + Children */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                            <div>
                                <label className="text-sm font-medium">Adults</label>
                                <input
                                    type="number"
                                    name="adults"
                                    onChange={handleChange}
                                    className="mt-1 w-full border rounded-lg px-3 py-2"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Children</label>
                                <input
                                    type="number"
                                    name="children"
                                    onChange={handleChange}
                                    className="mt-1 w-full border rounded-lg px-3 py-2"
                                />
                            </div>

                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-medium"
                        >
                            <Send size={16} /> Get Quote on WhatsApp
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}