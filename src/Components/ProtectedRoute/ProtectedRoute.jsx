"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import { API_VERIFY_TOKEN } from "@/constants/api";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("userRole");

      // ✅ Pehle local check — agar token ya role nahi toh seedha login
      if (!token || role !== "admin") {
        localStorage.clear();
        router.replace("/login");
        return;
      }

      // ✅ Phir backend se verify karo
      try {
        const res = await axiosInstance.get(API_VERIFY_TOKEN);

        console.log("Verify response:", res.data); // ← dekho kya aa raha hai

        if (res.data.success && res.data.user?.role === "admin") {
          setChecking(false); // ✅ sab theek hai, dashboard dikhao
        } else {
          localStorage.clear();
          router.replace("/login");
        }
      } catch {
        localStorage.clear();
        router.replace("/login");
      }
    };

    verify();
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600" />
      </div>
    );
  }

  return children;
}