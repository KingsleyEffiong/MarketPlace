"use client";

import React, { useMemo, useState } from "react";
import { Search, Package } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { SidebarFilters } from "./SidebarFilters";
import { SAMPLE_PRODUCTS } from "@/data/ProductData";

const PRODUCTS_PER_PAGE = 8;

export interface Product {
  id: string;
  title: string;
  vendor: string;
  category: string[];
  price: number;
  rating: number;
  sizes?: (number | string)[];
  image: string;
  inStock: boolean;
  onSale: boolean;
}

export default function ProductCatalogPage() {
  const [query, setQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [view, setView] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const categories = useMemo<string[]>(() => {
    const cats = new Set<string>();
    SAMPLE_PRODUCTS.forEach((p) => p.category.forEach((c) => cats.add(c)));
    return Array.from(cats);
  }, []);

  const sizes: number[] = [33, 34, 35, 36, 37, 38, 39, 40];

  const filtered = useMemo<Product[]>(() => {
    let list = SAMPLE_PRODUCTS.filter((p) => {
      const q = query.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.vendor.toLowerCase().includes(q) ||
        p.category.join(" ").toLowerCase().includes(q)
      );
    });

    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category.includes(selectedCategory));
    }

    const [minP, maxP] = priceRange;
    list = list.filter((p) => p.price >= minP && p.price <= maxP);

    if (selectedSizes.length > 0) {
      list = list.filter((p) =>
        selectedSizes.some((s) => p.sizes?.includes(s))
      );
    }

    if (inStockOnly) list = list.filter((p) => p.inStock);

    return list;
  }, [query, selectedCategory, priceRange, selectedSizes, inStockOnly]);

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filtered.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  function toggleSize(s: number) {
    setSelectedSizes((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  const resetFilters = () => {
    setQuery("");
    setSelectedCategory("All");
    setPriceRange([0, 1000]);
    setSelectedSizes([]);
    setInStockOnly(false);
    setCurrentPage(1);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Sidebar */}
        <SidebarFilters
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          priceRange={priceRange}
          onChangePrice={setPriceRange}
          sizes={sizes}
          selectedSizes={selectedSizes}
          onToggleSize={toggleSize}
          inStockOnly={inStockOnly}
          onToggleInStock={setInStockOnly}
          onClearFilters={resetFilters}
        />

        {/* Products */}
        <main className="space-y-8">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm p-5 flex flex-wrap gap-4 items-center justify-between">
            <div className="text-sm text-gray-600">
              Found{" "}
              <span className="font-semibold text-gray-900">
                {filtered.length}
              </span>{" "}
              products
            </div>

            <div className="relative w-full sm:w-1/2 md:w-1/3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-sm focus:ring-2 focus:ring-indigo-200 outline-none transition"
              />
            </div>
          </div>

          {/* Products Grid */}
          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr"
                : "flex flex-col gap-4"
            }
          >
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                <Package className="w-20 h-20 mb-6 text-gray-300" />
                <p className="text-xl font-semibold mb-2">No products found</p>
                <p className="text-gray-500 mb-6 text-center">
                  We couldn’t find any products matching your search or filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-md disabled:opacity-50"
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded-md ${
                    currentPage === i + 1 ? "bg-indigo-600 text-white" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-md disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </main>
      </div>
    </section>
  );
}
