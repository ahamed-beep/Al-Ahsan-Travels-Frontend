"use client";  // ✅ yeh add karo

import AdminDashboard from "@/Components/Admin-Side/AdminDashboard";
import ProtectedRoute from "@/Components/ProtectedRoute/ProtectedRoute";

export default function AdminPage() {
  return (
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
  );
}