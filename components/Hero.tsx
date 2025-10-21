"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Truck,
  Headphones,
} from "lucide-react";

function Hero() {
  const features = [
    {
      title: "Trusted Vendors",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-500" />,
      text: "10,000+ verified sellers",
    },
    {
      title: "Secure Payments",
      icon: <CreditCard className="w-5 h-5 text-emerald-500" />,
      text: "Multiple options available",
    },
    {
      title: "Fast Delivery",
      icon: <Truck className="w-5 h-5 text-orange-400" />,
      text: "Get your products quickly",
    },
    {
      title: "24/7 Support",
      icon: <Headphones className="w-5 h-5 text-rose-500" />,
      text: "Always here to help",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f9f9fb] to-[#eef2ff] py-24 px-5 sm:px-10 md:py-36 flex items-center justify-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(147,197,253,0.25),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.25),transparent_70%)] blur-3xl pointer-events-none" />

      {/* Light flares */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-60 sm:w-80 h-60 sm:h-80 bg-pink-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl w-full gap-10 md:gap-16">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Discover{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
              Premium Products
            </span>{" "}
            You’ll Love
          </h1>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            Shop smarter. From top-tier gadgets to everyday essentials — explore
            a world of quality and innovation, built for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 justify-center md:justify-start">
            <Button className="group relative bg-indigo-600 text-white px-12 md:py-4 py-6 rounded-full text-base sm:text-lg flex items-center gap-2 overflow-hidden shadow-[0_8px_25px_rgba(99,102,241,0.35)] hover:shadow-[0_8px_35px_rgba(99,102,241,0.5)] transition-all">
              <span>Start Shopping</span>
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-700 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </Button>

            <Button className="border border-gray-200 bg-white/70 backdrop-blur-xl text-gray-900 px-6 md:py-4 py-6 rounded-full text-base sm:text-lg font-medium hover:bg-white transition-all">
              Become a Vendor
            </Button>
          </div>

          {/* Inline Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-14">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start text-gray-700"
              >
                <div className="p-3 bg-white/60 backdrop-blur-md rounded-full shadow-sm">
                  {f.icon}
                </div>
                <h4 className="font-semibold mt-3 text-sm">{f.title}</h4>
                <p className="text-xs text-gray-500">{f.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] h-[400px] sm:h-[480px] rounded-[2rem] overflow-hidden border border-white/20 bg-white/30 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/patrick-tomasso-nWvWBV0sv04-unsplash.jpg"
              alt="Marketplace showcase"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating Badges */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 bg-white/80 backdrop-blur-xl rounded-full shadow-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-700 font-medium"
          >
            ⭐ 100k+ Listed Items
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-2 sm:bottom-0 left-2 sm:left-0 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-md"
          >
            Free Shipping
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
