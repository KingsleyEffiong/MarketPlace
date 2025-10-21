"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const products = [
  {
    id: 1,
    image: "/images/c-d-x-PDX_a_82obo-unsplash.jpg",
    category: "Electronics",
    title: "Premium Wireless Headphones",
    description:
      "Noise-cancelling, long battery life, and crystal-clear sound.",
    tagline: "Experience studio-quality sound anywhere.",
    rating: 4.8,
    reviews: 312,
    price: "$249.99",
  },
  {
    id: 2,
    image: "/images/genesis-warner-P779eLIuKyU-unsplash.jpg",
    category: "Fashion",
    title: "Designer Leather Handbag",
    description: "Luxury handcrafted bag made with 100% genuine leather.",
    tagline: "Elegance that complements your lifestyle.",
    rating: 4.6,
    reviews: 98,
    price: "$189.99",
  },
  {
    id: 3,
    image: "/images/corey-young-EE12bF0xm5c-unsplash.jpg",
    category: "Home & Kitchen",
    title: "Smart Coffee Maker",
    description:
      "Brew the perfect coffee with Wi-Fi control and smart presets.",
    tagline: "Wake up to perfection in every cup.",
    rating: 4.7,
    reviews: 145,
    price: "$199.99",
  },
];

function FeaturedProducts() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 bg-gradient-to-b from-[#f9fafb] via-white to-[#f1f5f9] overflow-hidden">
      {/* Background soft gradient lights */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,197,253,0.25),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.25),transparent_70%)] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 mb-14">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            Our Featured Products{" "}
          </span>{" "}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group perspective"
            >
              {/* Card Container */}
              <div className="relative w-full h-[420px] transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                {/* FRONT SIDE */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-[0_6px_30px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden backface-hidden">
                  <div className="relative w-full h-60 overflow-hidden rounded-t-3xl">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
                  </div>

                  <div className="flex-1 flex flex-col justify-center items-center text-center p-6 relative">
                    <span className="text-sm font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mb-3 inline-block">
                      {product.category}
                    </span>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>

                    <p className="text-gray-500 text-sm mb-4 px-2">
                      {product.tagline}
                    </p>

                    <div className="flex items-center gap-1 text-yellow-500 mb-3">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-gray-800 font-medium">
                        {product.rating}
                      </span>
                      <span className="text-gray-400 text-sm">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Subtle hint for flip */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-center"
                    >
                      <Button
                        variant="outline"
                        className="group bg-white/50 backdrop-blur-md border border-gray-200 hover:bg-indigo-600 hover:text-white transition-all duration-300 text-sm flex items-center gap-2 rounded-full"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* BACK SIDE */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] text-center flex flex-col justify-between p-6 rotate-y-180 backface-hidden">
                  <div className="flex-1 flex flex-col justify-center items-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-3 px-2">
                      {product.description}
                    </p>

                    <div className="flex justify-center items-center gap-1 text-yellow-500 mb-4">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-gray-800 font-medium">
                        {product.rating}
                      </span>
                      <span className="text-gray-400 text-sm">
                        ({product.reviews})
                      </span>
                    </div>

                    <p className="text-2xl font-bold text-gray-900 mb-5">
                      {product.price}
                    </p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-center"
                  >
                    <Button className="group relative overflow-hidden bg-indigo-600 text-white px-8 py-3 rounded-full text-sm flex items-center gap-2 shadow-[0_4px_15px_rgba(99,102,241,0.35)] hover:shadow-[0_6px_25px_rgba(99,102,241,0.5)] transition-all duration-300">
                      <span>Add to Cart</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
