export interface Product {
  id: string;
  title: string;
  vendor: string;
  category: string[];
  price: number;
  rating: number;
  sizes?: (number | string)[]; // allow numbers or strings
  image: string;
  inStock: boolean;
  onSale: boolean;
}

export const SAMPLE_PRODUCTS: Product[] = [
  // --- Shoes ---
  {
    id: "1",
    title: "Nike Air Max 90",
    vendor: "Nike",
    category: ["Shoes", "Men", "Sneakers"],
    price: 120,
    rating: 4.5,
    sizes: [7, 8, 9, 10],
    image:
      "https://images.unsplash.com/photo-1600180758895-c7ed46f7ef2d?w=800&q=80",
    inStock: true,
    onSale: false,
  },
  {
    id: "2",
    title: "Adidas Ultraboost 22",
    vendor: "Adidas",
    category: ["Shoes", "Women", "Running"],
    price: 180,
    rating: 4.6,
    sizes: [6, 7, 8, 9],
    image:
      "https://images.unsplash.com/photo-1612427225505-z90f3c225610?w=800&q=80",
    inStock: true,
    onSale: true,
  },

  // --- Clothing ---
  {
    id: "3",
    title: "Levi's 501 Original Jeans",
    vendor: "Levi's",
    category: ["Clothes", "Men", "Jeans"],
    price: 70,
    rating: 4.4,
    sizes: [30, 32, 34, 36],
    image:
      "https://images.unsplash.com/photo-1581089781785-3b0a4cb1233f?w=800&q=80",
    inStock: true,
    onSale: false,
  },
  {
    id: "4",
    title: "Zara Summer Dress",
    vendor: "Zara",
    category: ["Clothes", "Women", "Dresses"],
    price: 50,
    rating: 4.3,
    sizes: ["S", "M", "L"],
    image:
      "https://images.unsplash.com/photo-1600180758885-c7ed46f7ef2d?w=800&q=80",
    inStock: true,
    onSale: true,
  },

  // --- Electronics ---
  {
    id: "5",
    title: "Apple iPhone 15",
    vendor: "Apple",
    category: ["Electronics", "Phones"],
    price: 1200,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1600180758881-c7ed46f7ef2d?w=800&q=80",
    inStock: true,
    onSale: false,
  },
  {
    id: "6",
    title: "Samsung Galaxy S23",
    vendor: "Samsung",
    category: ["Electronics", "Phones"],
    price: 1100,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1600180758880-c7ed46f7ef2d?w=800&q=80",
    inStock: true,
    onSale: true,
  },
  {
    id: "7",
    title: "Sony WH-1000XM5 Headphones",
    vendor: "Sony",
    category: ["Electronics", "Audio"],
    price: 350,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1612497005505-b90f3c12559c?w=800&q=80",
    inStock: true,
    onSale: false,
  },

  // --- Caps & Accessories ---
  {
    id: "8",
    title: "New Era Baseball Cap",
    vendor: "New Era",
    category: ["Accessories", "Caps"],
    price: 25,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1612497025505-c90f3b22569d?w=800&q=80",
    inStock: true,
    onSale: false,
  },
  {
    id: "9",
    title: "Ray-Ban Aviator Sunglasses",
    vendor: "Ray-Ban",
    category: ["Accessories", "Sunglasses"],
    price: 150,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1612497035505-g90f3c22569h?w=800&q=80",
    inStock: true,
    onSale: true,
  },

  // --- More mixed products (clothes, shoes, electronics, caps, bags) ---
  {
    id: "10",
    title: "H&M Hoodie",
    vendor: "H&M",
    category: ["Clothes", "Unisex", "Hoodies"],
    price: 40,
    rating: 4.1,
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1612427045505-h90f3c22569i?w=800&q=80",
    inStock: true,
    onSale: true,
  },
  {
    id: "11",
    title: "Apple MacBook Air M2",
    vendor: "Apple",
    category: ["Electronics", "Laptops"],
    price: 999,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1612427055505-i90f3c22569j?w=800&q=80",
    inStock: true,
    onSale: false,
  },
  {
    id: "12",
    title: "Adidas Sports Bag",
    vendor: "Adidas",
    category: ["Accessories", "Bags"],
    price: 60,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1612427065505-j90f3c22569k?w=800&q=80",
    inStock: true,
    onSale: true,
  },
  {
    id: "13",
    title: "Nike Running Shorts",
    vendor: "Nike",
    category: ["Clothes", "Men", "Shorts"],
    price: 35,
    rating: 4.3,
    sizes: ["S", "M", "L", "XL"],
    image:
      "https://images.unsplash.com/photo-1612427075505-k90f3c22569l?w=800&q=80",
    inStock: true,
    onSale: false,
  },
];
