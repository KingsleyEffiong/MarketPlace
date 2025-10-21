"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Laptop,
  Shirt,
  Home,
  Dumbbell,
  BookOpen,
  HeartPulse,
} from "lucide-react";
import { motion, useAnimationFrame } from "framer-motion";

function MarketPlaceCategory() {
  const categories = [
    {
      name: "Electronics",
      icon: <Laptop className="w-8 h-8 text-indigo-600" />,
      items: "120k+ items",
      link: "/product?category=electronics",
    },
    {
      name: "Fashion",
      icon: <Shirt className="w-8 h-8 text-pink-500" />,
      items: "95k+ items",
      link: "/product?category=fashion",
    },
    {
      name: "Home & Garden",
      icon: <Home className="w-8 h-8 text-green-600" />,
      items: "80k+ items",
      link: "/product?category=home-garden",
    },
    {
      name: "Sports",
      icon: <Dumbbell className="w-8 h-8 text-orange-500" />,
      items: "60k+ items",
      link: "/product?category=sports",
    },
    {
      name: "Books",
      icon: <BookOpen className="w-8 h-8 text-blue-500" />,
      items: "40k+ items",
      link: "/product?category=books",
    },
    {
      name: "Health & Beauty",
      icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
      items: "70k+ items",
      link: "/product?category=health-beauty",
    },
  ];

  // Duplicate items for seamless infinite scroll
  const duplicated = [...categories, ...categories, ...categories];

  const baseVelocity = -40; // scroll speed
  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return;
    x.current += (baseVelocity * delta) / 1000;
    containerRef.current.style.transform = `translateX(${x.current}px)`;

    // Reset position for seamless loop
    if (Math.abs(x.current) > containerRef.current.scrollWidth / 3) {
      x.current = 0;
    }
  });

  return (
    <section className="relative w-full   py-28 px-6 md:px-16 bg-gradient-to-b from-[#f9fafb] via-white to-[#f1f5f9] flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        {/* Background decorative gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,197,253,0.25),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.2),transparent_70%)] blur-3xl pointer-events-none"></div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative text-4xl md:text-5xl font-semibold text-gray-900 mb-20 text-center tracking-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            Shop by Category{" "}
          </span>{" "}
        </motion.h2>

        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-10 w-max will-change-transform"
          >
            {duplicated.map((category, index) => (
              <Link key={index} href={category.link}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative flex flex-col items-center justify-center min-w-[220px] h-[220px]
                rounded-3xl border border-white/30 cursor-pointer
                bg-gradient-to-br from-white/60 via-white/40 to-white/20 
                backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]
                transition-all duration-500"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-lg shadow-inner"
                  >
                    {category.icon}
                  </motion.div>

                  {/* Name */}
                  <span className="mt-5 text-lg font-medium text-gray-800">
                    {category.name}
                  </span>

                  {/* Item Count */}
                  <span className="text-sm text-gray-500">
                    {category.items}
                  </span>

                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-white/10 to-transparent opacity-0 hover:opacity-40 transition duration-500"></div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketPlaceCategory;
