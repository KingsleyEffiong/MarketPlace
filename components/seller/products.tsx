"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, Pencil, Trash2, Plus, Tag, Star } from "lucide-react";
import Image from "next/image";

function VendorProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "High-quality sound with noise cancellation",
      category: "Electronics",
      price: "$299.99",
      discount: "15%",
      rating: "4.8★",
      reviews: "342",
      status: "In Stock",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80",
    },
    {
      id: 2,
      name: "Smartphone Pro Max",
      description: "Latest flagship smartphone with advanced features",
      category: "Electronics",
      price: "$999.99",
      discount: null,
      rating: "4.9★",
      reviews: "567",
      status: "In Stock",
      image:
        "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&q=80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="relative text-gray-800 py-8 max-w-5xl mx-auto">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">My Products</h2>
      </div>

      {/* Animated Products List */}
      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.01 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white/80 backdrop-blur-md border border-gray-200 shadow-md rounded-xl p-5 transition-all hover:shadow-lg"
          >
            {/* Image */}
            <div className="w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                width={128}
                height={128}
              />
            </div>

            {/* Info */}
            <div className="flex-1 w-full">
              <h3 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mb-2">
                {product.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 text-sm mb-3">
                <span className="px-2 py-1 rounded-md bg-blue-50 text-blue-600 font-medium flex items-center gap-1">
                  <Tag size={14} /> {product.category}
                </span>
                <span className="font-semibold text-gray-900">
                  {product.price}
                </span>
                {product.discount && (
                  <span className="text-red-600 bg-red-100 px-2 py-0.5 rounded-md font-semibold">
                    -{product.discount}
                  </span>
                )}
                <span className="flex items-center gap-1 text-yellow-600">
                  <Star size={14} className="fill-yellow-500" />
                  {product.rating}
                  <span className="text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </span>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-md font-medium">
                  {product.status}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition">
                <Eye size={18} className="text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-md transition">
                <Pencil size={18} className="text-gray-600" />
              </button>
              <button className="p-2 bg-red-100 hover:bg-red-200 rounded-md transition">
                <Trash2 size={18} className="text-red-600" />
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default VendorProducts;
