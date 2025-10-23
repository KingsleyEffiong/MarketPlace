"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Save, Globe, DollarSign, Info } from "lucide-react";

function Page() {
  const [storeName, setStoreName] = useState("your_dev");
  const [storeDescription, setStoreDescription] = useState(
    "Premium electronics and gadgets from trusted brands"
  );
  const [country, setCountry] = useState("United States");
  const [currency, setCurrency] = useState("USD ($)");

  return (
    <section className="flex justify-center items-center py-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl p-8"
      >
        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          Store Settings
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Manage your store configuration and preferences
        </p>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Store Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Store Name
            </label>
            <input
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Store Description
            </label>
            <textarea
              rows={2}
              value={storeDescription}
              onChange={(e) => setStoreDescription(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
            />
          </div>

          {/* Country & Currency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <div className="flex items-center px-3 border border-gray-200 bg-gray-50 rounded-md">
                <Globe size={18} className="text-gray-500 mr-2" />
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full py-2 bg-transparent outline-none text-gray-700"
                >
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>India</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <div className="flex items-center px-3 border border-gray-200 bg-gray-50 rounded-md">
                <DollarSign size={18} className="text-gray-500 mr-2" />
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full py-2 bg-transparent outline-none text-gray-700"
                >
                  <option>USD ($)</option>
                  <option>GBP (£)</option>
                  <option>EUR (€)</option>
                  <option>INR (₹)</option>
                  <option>CAD ($)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="button"
            className="flex items-center justify-center gap-2 w-fit px-5 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition mt-4"
          >
            <Save size={18} />
            Save Settings
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Page;
