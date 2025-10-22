"use client";

import React from "react";
import { ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import { Stars } from "./StarProductRating";

export function ProductCard({ product }: any) {
  function formatCurrency(n: number) {
    return `₦${n.toFixed(2)}`;
  }

  return (
    <article className="group bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
        {product.onSale && (
          <span className="absolute left-3 top-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
            SALE
          </span>
        )}
      </div>

      <div className="mt-4 flex-1">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">{product.vendor}</p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            <div className="text-lg font-bold text-gray-900">
              {formatCurrency(product.price)}
            </div>
            <Stars value={product.rating} />
          </div>
          <span
            className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              product.inStock
                ? "bg-green-50 text-green-700"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <button
          disabled={!product.inStock}
          className={`w-full flex items-center justify-center gap-2 text-sm font-medium py-2.5 rounded-xl transition-all duration-300 ${
            product.inStock
              ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-500 hover:to-blue-500 shadow-sm"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          Add to cart
        </button>

        <button className="p-2.5 rounded-xl border border-gray-200 text-gray-500 hover:text-rose-500 hover:border-rose-200 transition">
          <Heart className="w-5 h-5" />
        </button>
      </div>
    </article>
  );
}
