import ProductFilters from "@/components/FilterProduct";
import React from "react";

function Page() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] py-20 px-5 sm:px-10 md:py-28 text-gray-800">
      {/* Subtle gradient or pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.03),transparent_70%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.03),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <div className="relative text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Product Catalog
        </h1>
        <p className="text-gray-500 mt-3 text-base md:text-lg">
          Discover amazing products from trusted vendors
        </p>
      </div>

      {/* Filters */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <ProductFilters />
      </div>

      {/* Optional subtle divider line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-14" />
    </section>
  );
}

export default Page;
