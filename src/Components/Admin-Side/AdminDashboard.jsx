"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Home, Users2, DollarSign, MessageSquare, History,
  LogOut, X, PanelLeftOpen, PanelLeftClose, Megaphone,
  ChartColumn, Shield, User,
  Package,
  Plane,
} from "lucide-react";
import PackagesManager from "./HomeFeaturedPackages/PackagesManager";
import InquiryManagement from "./Inquiries/InquiryManagement";
import ShiftingHajjManager from "./ShiftingHajjPackage/ShiftingHajjManager";
import UmrahPackagesManager from "./UmrahPackage/UmrahPackagesManager";
import GroupFamilyPackagesManager from "./GroupFamilyPackages/GroupFamilyPackagesManager.jsx";
import NonShiftingHajjManager from "./NonShiftingHajj/NonShiftingHajjManager";
import HajjInquiryManager from "./HajjInquiry/HajjInquiryManager";
import PricingPackageManager from "./PricingPackage/PricingPackageManager";
import MonthlyUmrahPackagesManager from "./Monthlyumrahpackagesmanager/Monthlyumrahpackagesmanager";
import AshraPackagesManager from "./AshraPackagesManager/AshraPackagesManager";
import SpecialPackagesManager from "./Specialpackagesmanager/Specialpackagesmanager";
import FlightDealsManager from "./FlightDealsManager/FlightDealsManager";
import ContactInquiriesManager from "./ContactInquiriesManager/ContactInquiriesManager";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  useEffect(() => {
    const handleResize = () => setSidebarOpen(window.innerWidth >= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    if (!window.confirm("Logout karna chahte ho?")) return;
    setLoggingOut(true);
    localStorage.clear();
    router.replace("/login");
  };

  const menuItems = [
   { id: "packages", label: "Home Featured packages", icon: Package },
{ id: "inquiries", label: "Inquiries", icon: MessageSquare },
   { id: "hajj", label: "Shifting Hajj Packages", icon: Package },
   { id: "nonShiftingHajj", label: "Non-Shifting Hajj Packages", icon: Package },
 { id: "umrahPackages", label: "Umrah Packages", icon: Package },
      { id: "groupFamilyPackages",label: "Group & Family Packages",    icon: Users2 },
 { id: "hajjInquiries", label: "Hajj Inquiries", icon: MessageSquare },
    { id: "pricingPackages", label: "Pricing Packages", icon: Package },
{ id: "monthlyUmrahPackages", label: "Monthly Umrah Packages", icon: Package },
{ id: "ashraPackages", label: "Ashra Packages", icon: Package },
{ id: "specialPackages", label: "Special Packages", icon: Package },
 { id: "flightDeals", label: "Flight Deals", icon: Plane },
  { id: "contactInquiries", label: "Contact Inquiries", icon: MessageSquare },
  ];

  const renderContent = () => {
    switch (activeItem) {
  case "packages": return <PackagesManager />;
     case "inquiries": return <InquiryManagement />;
case "hajj": return <ShiftingHajjManager />;
case "nonShiftingHajj": return <NonShiftingHajjManager />;
case "umrahPackages": return <UmrahPackagesManager />;
  case "groupFamilyPackages": return <GroupFamilyPackagesManager />;
   case "hajjInquiries": return <HajjInquiryManager />;
    case "pricingPackages": return <PricingPackageManager />;
case "monthlyUmrahPackages": return <MonthlyUmrahPackagesManager />;
case "ashraPackages": return <AshraPackagesManager />;
case "specialPackages": return <SpecialPackagesManager />;
    case "flightDeals": return <FlightDealsManager />;  
      case "contactInquiries": return <ContactInquiriesManager />;
      default: return <Overview />;
    }
  };

  const getTitle = () => menuItems.find((m) => m.id === activeItem)?.label || "Dashboard";

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed md:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200 flex flex-col z-50 transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>

        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ChartColumn className="w-5 h-5 text-gray-700" />
            <span className="font-semibold text-sm text-gray-800">Admin Panel</span>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 rounded hover:bg-gray-100">
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {menuItems.map(({ id, label, icon: Icon }) => (
              <li key={id}>
                <button
                  onClick={() => {
                    setActiveItem(id);
                    if (window.innerWidth < 768) setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                    activeItem === id
                      ? "bg-blue-50 text-blue-600 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-3 border-t border-gray-200">
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {loggingOut ? "Logging out..." : "Sign Out"}
          </button>
        </div>

      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Topbar */}
        <header className="flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-200">
          <button
            onClick={() => setSidebarOpen((p) => !p)}
            className="p-2 rounded hover:bg-gray-100"
          >
            {sidebarOpen
              ? <PanelLeftClose className="w-5 h-5 text-gray-600" />
              : <PanelLeftOpen className="w-5 h-5 text-gray-600" />
            }
          </button>
          <span className="font-medium text-gray-800">{getTitle()}</span>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>

      </div>
    </div>
  );
}

// ─── Overview Page ───────────────────────────────────────────────────────────
function Overview() {
  const stats = [
    { label: "Total Users",    value: "1,240",  color: "bg-blue-50 text-blue-600" },
    { label: "Total Revenue",  value: "$48,200", color: "bg-green-50 text-green-600" },
    { label: "Messages",       value: "320",     color: "bg-purple-50 text-purple-600" },
    { label: "Active Today",   value: "87",      color: "bg-orange-50 text-orange-600" },
    
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Welcome back, Admin 👋</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-xl p-5 ${s.color}`}>
            <p className="text-sm font-medium opacity-75">{s.label}</p>
            <p className="text-2xl font-bold mt-1">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-700 mb-4">Recent Activity</h3>
        <ul className="divide-y divide-gray-100">
          {[
            { user: "Ali Hassan",    action: "New registration",   time: "2 min ago" },
            { user: "Sara Khan",     action: "Withdrawal request", time: "15 min ago" },
            { user: "Ahmed Raza",    action: "Package upgraded",   time: "1 hr ago" },
            { user: "Fatima Malik",  action: "New registration",   time: "3 hr ago" },
          ].map((item, i) => (
            <li key={i} className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-gray-800">{item.user}</p>
                <p className="text-xs text-gray-500">{item.action}</p>
              </div>
              <span className="text-xs text-gray-400">{item.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ─── Placeholder for other pages ─────────────────────────────────────────────
function PlaceholderPage({ title }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
        <p className="text-gray-400 mt-2">Yeh section abhi under development hai</p>
      </div>
    </div>
  );
}