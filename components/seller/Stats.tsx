import React from "react";
import { Package, DollarSign, ShoppingCart, Star } from "lucide-react";

function Stats() {
  const stats = [
    {
      title: "Total Products",
      value: "2",
      icon: <Package className="w-5 h-5 text-gray-500" />,
    },
    {
      title: "Total Revenue",
      value: "$1764.96",
      icon: <DollarSign className="w-5 h-5 text-gray-500" />,
    },
    {
      title: "Total Orders",
      value: "3",
      icon: <ShoppingCart className="w-5 h-5 text-gray-500" />,
    },
    {
      title: "Average Rating",
      value: "4.8★",
      icon: <Star className="w-5 h-5 text-gray-500" />,
    },
  ];

  return (
    <div className="w-full text-center">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Vendor Dashboard
        </h1>
        <p className="text-gray-500 mt-3 text-base md:text-lg">
          Welcome back,{" "}
          <span className="font-semibold text-gray-800">your_dev!</span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-lg rounded-2xl p-6 flex flex-col gap-3 justify-between transition-transform hover:scale-[1.02] hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 font-medium">{item.title}</p>
              {item.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900">{item.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;
