"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ShoppingCart, User, Search, Menu, X, ArrowRight } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-white/60 border-b border-gray-200/50 shadow-md"
    >
      {/* ✅ Consistent container width */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-5 px-6 md:px-10 transition-all duration-300">
        {/* Left: Logo + Menu Toggle (Mobile) */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-black text-[20px] font-bold"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
              MarketPlace
            </span>{" "}
          </motion.h1>
          <button
            className="md:hidden text-gray-800 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Center: Nav links (desktop & tablet) */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="
            hidden md:flex flex-wrap gap-6 items-center
            text-gray-600 font-medium text-[16px] px-3
          "
        >
          <li className="cursor-pointer hover:text-black transition-colors">
            Home
          </li>
          <li className="cursor-pointer hover:text-black transition-colors">
            Product
          </li>
          <li className="cursor-pointer hover:text-black transition-colors">
            My Store
          </li>
        </motion.ul>

        {/* Middle: Search bar (desktop only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="
            hidden lg:flex relative flex-1 justify-center mx-4
            max-w-lg
          "
        >
          <Search className="w-[14px] h-[14px] text-gray-800 absolute top-1/2 left-3 -translate-y-1/2" />
          <Input
            placeholder="Search products..."
            className="
              w-full border border-gray-300 pl-10 text-[16px] text-black
              bg-white/70 backdrop-blur-sm
              focus:ring-1 focus:ring-gray-400 transition-all duration-200
            "
          />
        </motion.div>

        {/* Right: Cart + Buttons (desktop & tablet) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hidden md:flex gap-6 items-center"
        >
          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-gray-800 transition-transform duration-300 hover:scale-110" />
            <div className="absolute -top-5 -right-3 w-[20px] h-[20px] rounded-full flex justify-center items-center bg-black text-white text-xs">
              3
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 items-center text-gray-600 font-medium text-[16px]">
            {/* Orders Button (Indigo Glow) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button className="group relative overflow-hidden bg-indigo-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] transition-all duration-300">
                <span>Orders</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Button>
            </motion.div>

            {/* Account */}
            <div className="flex gap-2 items-center cursor-pointer hover:text-black transition-colors">
              <User className="w-[17px] h-[17px]" />
              <span>Account</span>
            </div>

            {/* Logout Button (Glass Style) */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button className="relative border border-white/40 text-gray-800 bg-white/60 backdrop-blur-xl px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white/80 hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
                Logout
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Mobile / Tablet dropdown menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            md:hidden flex flex-col gap-6 px-6 py-6 bg-white/80 backdrop-blur-lg
            border-t border-gray-200 shadow-[0_8px_25px_rgba(0,0,0,0.08)]
            text-gray-700 font-medium text-[16px]
          "
        >
          <ul className="flex flex-col gap-4">
            <li className="cursor-pointer hover:text-black transition-colors">
              Home
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              Product
            </li>
            <li className="cursor-pointer hover:text-black transition-colors">
              My Store
            </li>
          </ul>

          {/* Search (for mobile/tablet) */}
          <div className="relative mt-4">
            <Search className="w-[14px] h-[14px] text-gray-800 absolute top-1/2 left-3 -translate-y-1/2" />
            <Input
              placeholder="Search..."
              className="
                w-full border border-gray-300 pl-10 text-[16px] text-black
                bg-white/70 backdrop-blur-sm
                focus:ring-1 focus:ring-gray-400 transition-all duration-200
              "
            />
          </div>

          {/* Cart + User icons */}
          <div className="flex items-center justify-between mt-2">
            <div className="relative cursor-pointer">
              <ShoppingCart className="w-6 h-6 text-gray-800" />
              <div className="absolute -top-5 -right-3 w-[20px] h-[20px] rounded-full flex justify-center items-center bg-black text-white text-xs">
                3
              </div>
            </div>
            <User className="w-[17px] h-[17px]" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button className="group relative overflow-hidden bg-indigo-600 text-white px-6 py-2 rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.5)] transition-all duration-300">
                <span>Orders</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Button className="relative border border-white/40 text-gray-800 bg-white/60 backdrop-blur-xl px-6 py-2 rounded-full font-medium transition-all duration-300 hover:bg-white/80 hover:shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
                Logout
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

export default Navbar;
