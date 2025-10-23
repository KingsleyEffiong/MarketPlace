"use client";
import React, { useState } from "react";
import { X, ChevronDown, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface AddProductModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddProductModal({
  isOpen,
  setIsOpen,
}: AddProductModalProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    discount: "",
    imageUrl: "",
    inStock: true,
  });

  const categories = ["Electronics", "Fashion", "Beauty", "Home"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSelect = (category: string) => {
    setFormData({ ...formData, category });
    setShowDropdown(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product added:", formData);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="fixed z-50 bg-white/30 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl 
                       w-[95%] sm:w-[90%] md:w-[80%] lg:max-w-lg 
                       top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-y-auto max-h-[90vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-white/20 px-4 sm:px-6 py-4">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                Add New Product
              </h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="text-gray-600 hover:text-black w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {/* Product Name */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Product Name*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter product name"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Category */}
              <div className="relative">
                <label className="text-sm font-medium text-gray-700">
                  Category*
                </label>
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="mt-1 flex items-center justify-between px-3 py-2 rounded-lg bg-white/70 border border-gray-300 cursor-pointer focus-within:ring-2 focus-within:ring-black transition"
                >
                  <span className="text-gray-700 text-sm sm:text-base">
                    {formData.category || "Select category"}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-500 transition-transform ${
                      showDropdown ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute z-50 mt-1 w-full bg-white/90 backdrop-blur-lg border border-gray-200 rounded-lg shadow-md overflow-hidden"
                    >
                      {categories.map((cat) => (
                        <li
                          key={cat}
                          onClick={() => handleSelect(cat)}
                          className={`flex items-center justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 ${
                            formData.category === cat
                              ? "bg-gray-200 font-medium"
                              : ""
                          }`}
                        >
                          {cat}
                          {formData.category === cat && (
                            <Check size={16} className="text-gray-700" />
                          )}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Description */}
              <div className="col-span-1 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black h-24 resize-none"
                />
              </div>

              {/* Price */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Price*
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Discount */}
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Discount %
                </label>
                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Image URL */}
              <div className="col-span-1 md:col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="Enter image URL"
                  className="w-full mt-1 px-3 py-2 rounded-lg bg-white/70 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* In Stock */}
              <div className="flex items-center gap-2 mt-2 col-span-1 md:col-span-2">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={formData.inStock}
                  onChange={handleChange}
                  className="accent-black w-5 h-5 rounded"
                />
                <label className="text-sm font-medium text-gray-700">
                  In Stock
                </label>
              </div>

              {/* Buttons */}
              <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="w-full sm:w-auto px-4 py-2 rounded-lg border border-gray-400 hover:bg-gray-100 transition text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-5 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition text-sm font-medium"
                >
                  Add Product
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
