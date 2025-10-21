"use client";
import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative w-full py-24 px-6 md:px-16 bg-gradient-to-b from-[#f9fafb] via-white to-[#f1f5f9] overflow-hidden">
      {/* Decorative gradient lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_60%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.15),transparent_60%)] blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4">
            MarketPlace
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Your one-stop shop for premium products — built for quality,
            innovation, and customer trust.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4">
            Customer Support
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-indigo-400 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500mb-4">
            Stay Updated
          </h4>
          <p className="text-gray-300 text-sm mb-4">
            Subscribe to get the latest deals and product updates.
          </p>
          <form className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 py-6 text-center text-gray-400 text-sm relative z-10">
        © {new Date().getFullYear()} ShopSphere. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
