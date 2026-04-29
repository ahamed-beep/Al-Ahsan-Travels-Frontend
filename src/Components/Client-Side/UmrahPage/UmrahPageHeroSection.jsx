import { useState } from "react";
import { FaPlane, FaPassport, FaClock, FaPaperPlane } from "react-icons/fa";

export default function UmrahPageHeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    airport: "",
    adults: "",
    children: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.date) newErrors.date = "Departure Date is required";
    if (!formData.airport.trim()) newErrors.airport = "Airport is required";
    if (!formData.adults) newErrors.adults = "Enter adults";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", formData);
      alert("Form Submitted Successfully ✅");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-x-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Images/Shifting.jpg"
          alt="Kaaba"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a8f]/85 to-[#243E8B]/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 py-10 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE */}
        <div className="text-white space-y-6 px-3 sm:px-4">


          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Umrah Packages
          </h1>

          <p className="text-gray-200 ">
            Explore a range of packages designed for comfort, affordability, and convenience.                   </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-[#c6d7fc] text-black px-4 py-2 rounded-lg w-fit">
              <FaPlane /> Flights Included
            </div>
            <div className="flex items-center gap-3 bg-[#c6d7fc] text-black px-4 py-2 rounded-lg w-fit">
              <FaPassport /> Visa Included
            </div>
            <div className="flex items-center gap-3 bg-[#c6d7fc] text-black px-4 py-2 rounded-lg w-fit">
              <FaClock /> Flexible Duration
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-8 w-full max-w-md mx-auto">
          <h2 className="text-xl text-[#101828] font-semibold mb-6">
            Plan Your Perfect Umrah Journey
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-[#364153]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
                {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
                {errors.phone && <p className="text-red-500 text-xs">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Departure Date *</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
                {errors.date && <p className="text-red-500 text-xs">{errors.date}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Departure Airport *</label>
                <input
                  type="text"
                  name="airport"
                  value={formData.airport}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
                {errors.airport && <p className="text-red-500 text-xs">{errors.airport}</p>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Adults *</label>
                <input
                  type="number"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
                {errors.adults && <p className="text-red-500 text-xs">{errors.adults}</p>}
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Children</label>
                <input
                  type="number"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  className="border rounded-lg px-3 py-2 w-full"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-900 transition"
            >
              <FaPaperPlane /> Get Free Quote
            </button>

            <p className="text-xs text-gray-500 text-center">
              No payment required. We'll send you a personalized quote within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
