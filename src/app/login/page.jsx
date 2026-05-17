"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import { API_LOGIN, API_VERIFY_TOKEN } from "@/constants/api";

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("token");
      if (!token) { setCheckingSession(false); return; }

      try {
        const res = await axiosInstance.get(API_VERIFY_TOKEN);
        if (res.data.success && res.data.user?.role === "admin") {
          router.replace("/admin-dashboard");
        } else {
          localStorage.clear();
          setCheckingSession(false);
        }
      } catch {
        localStorage.clear();
        setCheckingSession(false);
      }
    };
    autoLogin();
  }, []);

  if (checkingSession) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Email aur password dono daalen");
      return;
    }
    setLoading(true);
    try {
      const res = await axiosInstance.post(API_LOGIN, {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = res.data;

      localStorage.setItem("token",    token);
      localStorage.setItem("userId",   user.id);
      localStorage.setItem("userEmail", user.email);
      localStorage.setItem("userName", user.name);
      localStorage.setItem("userRole", user.role);
      localStorage.setItem("userData", JSON.stringify(user));

      router.replace("/admin-dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login fail hua. Credentials check karein.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-md rounded-2xl w-full max-w-sm p-8">

        <h2 className="text-2xl font-semibold text-center mb-1">Admin Login</h2>
        <p className="text-gray-500 text-sm text-center mb-6">Apni details enter karein</p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email" name="email" value={formData.email}
              onChange={handleChange} placeholder="admin@example.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              disabled={loading}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password" value={formData.password}
                onChange={handleChange} placeholder="••••••••"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10"
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button
            type="submit" disabled={loading}
            className={`w-full py-2 rounded-lg font-medium text-white transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Login ho raha hai..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}