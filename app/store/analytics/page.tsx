"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Clock, Rocket, Mail } from "lucide-react";

function Page() {
  return (
    <section className="flex flex-col items-center justify-center  text-gray-800 px-6 text-center">
      {/* Icon with animation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6 p-4 bg-blue-100 rounded-2xl shadow-inner"
      >
        <BarChart3 className="w-10 h-10 text-blue-600" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl sm:text-4xl font-semibold mb-3"
      >
        Analytics Dashboard Coming Soon
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-600 max-w-md mb-6"
      >
        We’re working hard to bring you powerful insights and visual analytics.
        Stay tuned — it’ll be worth the wait!
      </motion.p>

      {/* Icons Row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex items-center gap-4 text-blue-600 mb-6"
      >
        <Clock size={24} />
        <Rocket size={24} />
        <BarChart3 size={24} />
      </motion.div>

      {/* Email or Notify Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
      >
        <Mail size={18} />
        <span>Notify Me</span>
      </motion.button>

      {/* Footer */}
      <p className="mt-10 text-xs text-gray-400">
        © {new Date().getFullYear()} AnalyticsPro. All rights reserved.
      </p>
    </section>
  );
}

export default Page;
