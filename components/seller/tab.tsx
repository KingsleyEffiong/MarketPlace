"use client";
import React from "react";
import { Plus } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface TabsProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Tabs({ setIsOpen }: TabsProps) {
  const tabs = ["Products", "Orders", "Analytics", "Settings"];
  const pathname = usePathname();
  const router = useRouter();

  const lastSegment = pathname.split("/").filter(Boolean).pop() || "";

  return (
    <div className="flex flex-wrap items-center gap-3 mb-8 border-b border-gray-200 pb-3 py-30 max-w-5xl mx-auto">
      {tabs.map((tab, i) => {
        const tabLower = tab.toLowerCase();
        const isActive =
          (tabLower === "products" &&
            (pathname === "/store" || lastSegment === "store")) ||
          lastSegment === tabLower;

        const route = tabLower === "products" ? "/store" : `/store/${tabLower}`;

        return (
          <button
            key={i}
            onClick={() => router.push(route)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              isActive
                ? "bg-gray-900 text-white"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        );
      })}

      {/* Add Product Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="ml-auto flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        <Plus size={18} />
        <span className="font-medium">Add Product</span>
      </motion.button>
    </div>
  );
}

export default Tabs;
