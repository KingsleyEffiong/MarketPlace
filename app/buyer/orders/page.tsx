"use client";
import { useState } from "react";
import {
  Search,
  Package,
  Truck,
  ShoppingBag,
  DollarSign,
  ChevronDown,
  Check,
} from "lucide-react";

export default function MyOrders() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Confirmed");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filters = ["Confirmed", "Pending", "Cancelled"];

  const stats = [
    { label: "Total Orders", value: 0, icon: ShoppingBag },
    { label: "Delivered", value: 0, icon: Package },
    { label: "In Transit", value: 0, icon: Truck },
    { label: "Total Spent", value: "$0", icon: DollarSign },
  ];

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 px-5 sm:px-10 md:py-28 text-gray-800">
      {/* Subtle gradient or pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.03),transparent_70%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">My Orders</h1>
          <p className="text-gray-500 text-sm">
            Track and manage your order history
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-4 items-center mb-10 relative">
          {/* Search Bar */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search orders..."
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black outline-none transition"
            />
          </div>

          {/* Custom Dropdown */}
          <div className="relative w-full sm:w-[180px]">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:border-gray-400 transition"
            >
              <span className="text-gray-700">{filter}</span>
              <ChevronDown
                className={`ml-2 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-12 bg-white border border-gray-200 rounded-lg shadow-lg w-full z-20 animate-fadeIn">
                {filters.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setFilter(option);
                      setDropdownOpen(false);
                    }}
                    className={`flex justify-between items-center w-full px-4 py-2 text-sm hover:bg-gray-100 ${
                      option === filter
                        ? "text-black font-medium"
                        : "text-gray-600"
                    }`}
                  >
                    {option}
                    {option === filter && (
                      <Check size={16} className="text-black" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl py-5 shadow-sm hover:shadow-md transition"
            >
              <Icon className="text-gray-600 mb-2" size={22} />
              <p className="text-lg font-semibold">{value}</p>
              <p className="text-gray-500 text-sm">{label}</p>
            </div>
          ))}
        </div>

        {/* No Orders Found */}
        <div className="bg-white border border-gray-200 rounded-xl flex flex-col items-center justify-center py-20 shadow-sm">
          <div className="p-4 rounded-full bg-gray-100 mb-4">
            <Package className="text-gray-500" size={32} />
          </div>
          <h3 className="text-gray-800 text-lg font-medium mb-1">
            No Orders Found
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            You have not placed any orders yet.
          </p>
          <button className="px-5 py-2 text-sm font-medium bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Start Shopping
          </button>
        </div>
      </div>
    </section>
  );
}
