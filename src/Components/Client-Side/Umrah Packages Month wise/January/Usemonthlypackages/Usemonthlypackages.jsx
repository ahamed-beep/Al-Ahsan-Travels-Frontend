"use client";

import { useState, useEffect } from "react";
import { API_MONTHLY_UMRAH_BY_MONTH } from "@/constants/api";
import axiosInstance from "@/lib/axios";

export function useMonthlyPackages(month) {
  const [packages3Star, setPackages3Star] = useState(null);
  const [packages4Star, setPackages4Star] = useState(null);
  const [packages5Star, setPackages5Star] = useState(null);
  const [loading, setLoading]             = useState(true);
  const [error, setError]                 = useState(null);

  useEffect(() => {
    if (!month) return;

    async function fetchPackages() {
      setLoading(true);
      setError(null);
      try {
        const { data } = await axiosInstance.get(
          API_MONTHLY_UMRAH_BY_MONTH(month.toLowerCase())
        );

        const list = data?.data ?? [];

        setPackages3Star(list.find((p) => p.starCategory === 3) ?? null);
        setPackages4Star(list.find((p) => p.starCategory === 4) ?? null);
        setPackages5Star(list.find((p) => p.starCategory === 5) ?? null);
      } catch {
     setError("Failed to load packages.");
      } finally {
        setLoading(false);
      }
    }

    fetchPackages();
  }, [month]);

  return { packages3Star, packages4Star, packages5Star, loading, error };
}