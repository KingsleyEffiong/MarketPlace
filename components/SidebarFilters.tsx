import { Search } from "lucide-react";

interface SidebarFiltersProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  priceRange: number[];
  onChangePrice: (range: [number, number]) => void;
  sizes: number[];
  selectedSizes: number[];
  onToggleSize: (size: number) => void;
  inStockOnly: boolean;
  onToggleInStock: (value: boolean) => void;
  onClearFilters: () => void;
}

export function SidebarFilters({
  categories,
  selectedCategory,
  onSelectCategory,
  priceRange,
  onChangePrice,
  sizes,
  selectedSizes,
  onToggleSize,
  inStockOnly,
  onToggleInStock,
  onClearFilters,
}: SidebarFiltersProps) {
  const [min, max] = priceRange;

  return (
    <aside className="bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl shadow-sm p-6 space-y-6">
      {/* Category */}
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">Category</h4>
        <ul className="space-y-1">
          <li
            onClick={() => onSelectCategory("All")}
            className={`cursor-pointer text-sm px-2 py-1 rounded-md ${
              selectedCategory === "All"
                ? "bg-indigo-600 text-white font-medium"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            All categories
          </li>
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`cursor-pointer text-sm px-2 py-1 rounded-md ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white font-medium"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Price Range
        </h4>
        <div className="flex items-center gap-3 mb-3">
          <input
            type="number"
            value={min}
            onChange={(e) => onChangePrice([Number(e.target.value || 0), max])}
            className="w-1/2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
          />
          <input
            type="number"
            value={max}
            onChange={(e) => onChangePrice([min, Number(e.target.value || 0)])}
            className="w-1/2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-sm focus:ring-1 focus:ring-indigo-500 outline-none"
          />
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={max}
          onChange={(e) => onChangePrice([min, Number(e.target.value)])}
          className="w-full accent-indigo-600 cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>₦0</span>
          <span>₦1000</span>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">Size</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((s: number) => (
            <button
              key={s}
              onClick={() => onToggleSize(s)}
              className={`text-sm px-3 py-2 rounded-lg border transition ${
                selectedSizes.includes(s)
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Availability
        </h4>
        <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 accent-indigo-600"
            checked={inStockOnly}
            onChange={() => onToggleInStock(!inStockOnly)}
          />
          In Stock Only
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onClearFilters}
          className="flex-1 py-2 rounded-lg border border-gray-300 text-sm text-gray-700 hover:bg-gray-100 transition"
        >
          Clear
        </button>
        <button className="py-2 px-4 rounded-lg bg-indigo-600 text-white text-sm hover:bg-indigo-700 transition">
          Apply
        </button>
      </div>
    </aside>
  );
}
