"use client";
import AddProductModal from "@/components/seller/AddProduct";
import Stats from "@/components/seller/Stats";
import Tabs from "@/components/seller/tab";
import type { Metadata } from "next";
import React, { useState } from "react";

// export const metadata: Metadata = {
//   title: "Store",
//   description: "Upload and manage your products easily",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 px-5 sm:px-10 md:py-28 text-gray-800 min-h-screen">
      {/* Background gradient/pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.03),transparent_70%)] pointer-events-none" />
      <Stats />
      <Tabs setIsOpen={setIsOpen} />
      <AddProductModal isOpen={isOpen} setIsOpen={setIsOpen} />
      {children}
    </section>
  );
}
