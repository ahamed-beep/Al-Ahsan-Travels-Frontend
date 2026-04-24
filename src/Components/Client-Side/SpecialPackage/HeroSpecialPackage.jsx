import { useState } from "react";

export default function HeroSpecialPackage() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    departureDate: "",
    departureAirport: "",
    adults: "",
    children: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.phone) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1600&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-8 lg:px-16">
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-16">

          {/* Left: Hero Text */}
          <div className="flex-1 text-white max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block animate-pulse"></span>
              Affordable 3-Star Umrah Packages
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Your Spiritual
              <br />
              Journey
              <br />
              <span className="text-blue-400">Starts Here</span>
            </h1>

            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Experience a comfortable and affordable Umrah pilgrimage with our
              carefully curated 3-star packages. Quality service, trusted
              support.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: "✓", text: "5000+ Happy Pilgrims" },
                { icon: "✓", text: "ATOL Protected" },
                { icon: "✓", text: "24/7 Support" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-white/70 text-sm">
                  <span className="text-blue-400 font-bold">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="w-full max-w-md lg:max-w-lg">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Request Sent!</h3>
                  <p className="text-gray-500 text-sm">We'll send you a personalized quote within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ fullName: "", phone: "", departureDate: "", departureAirport: "", adults: "", children: "" }); }}
                    className="mt-6 text-blue-600 text-sm font-semibold hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Plan Your Perfect Umrah Journey
                  </h2>

                  <div className="space-y-4">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Ali"
                          required
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+44 20 1234 5678"
                          required
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1 flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                          Departure Date
                        </label>
                        <input
                          type="date"
                          name="departureDate"
                          value={form.departureDate}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1 flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                          Departure Airport
                        </label>
                        <input
                          type="text"
                          name="departureAirport"
                          value={form.departureAirport}
                          onChange={handleChange}
                          placeholder="e.g. London Heathrow"
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1 flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                          Adults
                        </label>
                        <select
                          name="adults"
                          value={form.adults}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                        >
                          <option value="">Select</option>
                          {[1,2,3,4,5,6,7,8,9,10].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1 flex items-center gap-1">
                          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                          Children
                        </label>
                        <select
                          name="children"
                          value={form.children}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
                        >
                          <option value="">Select</option>
                          {[0,1,2,3,4,5].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full bg-blue-700 hover:bg-blue-800 active:scale-[0.98] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base transition-all duration-200 shadow-lg shadow-blue-200 disabled:opacity-70"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Get Free Quote
                        </>
                      )}
                    </button>

                    <p className="text-center text-gray-400 text-xs">
                      No payment required. We'll send you a personalized quote within 24 hours.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}