export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  colors: string[];
  moreColors?: number;
  sizes: string;
  minOrder: number;
  priceRange: string;
  turnaround: string;
  img: string;
};

export const categories = [
  { slug: "tshirts", name: "T-Shirts", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=500&fit=crop" },
  { slug: "hoodies", name: "Hoodies", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=500&fit=crop" },
  { slug: "caps", name: "Caps & Hats", img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=600&h=500&fit=crop" },
  { slug: "joggers", name: "Joggers & Pants", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&h=500&fit=crop" },
  { slug: "jackets", name: "Jackets", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=500&fit=crop" },
  { slug: "tracksuits", name: "Tracksuits", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=500&fit=crop" },
];

export const products: Product[] = [
  // T-SHIRTS
  { id: "ts-001", name: "Premium Cotton Tee", brand: "Custom Cut & Sew", category: "tshirts", colors: ["#000000", "#ffffff", "#1e3a5f", "#8b0000", "#2d5a27"], moreColors: 12, sizes: "XS - 3XL", minOrder: 50, priceRange: "$4.50 - $8.00", turnaround: "2-3 weeks", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop" },
  { id: "ts-002", name: "Heavyweight Boxy Tee", brand: "Custom Cut & Sew", category: "tshirts", colors: ["#000000", "#ffffff", "#d4c5a9", "#696969"], moreColors: 8, sizes: "S - 2XL", minOrder: 50, priceRange: "$5.50 - $9.50", turnaround: "2-3 weeks", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop" },
  { id: "ts-003", name: "Oversized Drop Shoulder", brand: "Custom Cut & Sew", category: "tshirts", colors: ["#000000", "#ffffff", "#f5f0e6", "#a0522d"], moreColors: 10, sizes: "S - 3XL", minOrder: 50, priceRange: "$6.00 - $10.00", turnaround: "2-3 weeks", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=500&fit=crop" },
  { id: "ts-004", name: "Longline Curved Hem", brand: "Custom Cut & Sew", category: "tshirts", colors: ["#000000", "#ffffff", "#808080", "#1e3a5f"], moreColors: 6, sizes: "S - 2XL", minOrder: 50, priceRange: "$5.00 - $8.50", turnaround: "2-3 weeks", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop" },
  { id: "ts-005", name: "Vintage Wash Tee", brand: "Custom Cut & Sew", category: "tshirts", colors: ["#000000", "#3b3b3b", "#d4c5a9", "#5a3d2b"], moreColors: 5, sizes: "S - 2XL", minOrder: 100, priceRange: "$7.00 - $11.00", turnaround: "3 weeks", img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=500&fit=crop" },

  // HOODIES
  { id: "hd-001", name: "Premium Pullover Hoodie", brand: "Custom Cut & Sew", category: "hoodies", colors: ["#000000", "#ffffff", "#808080", "#1e3a5f", "#8b0000"], moreColors: 10, sizes: "S - 3XL", minOrder: 50, priceRange: "$12.00 - $22.00", turnaround: "2-3 weeks", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop" },
  { id: "hd-002", name: "Heavyweight Zip Hoodie", brand: "Custom Cut & Sew", category: "hoodies", colors: ["#000000", "#ffffff", "#2d5a27", "#696969"], moreColors: 8, sizes: "S - 2XL", minOrder: 50, priceRange: "$14.00 - $25.00", turnaround: "2-3 weeks", img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=500&fit=crop" },
  { id: "hd-003", name: "Oversized Boxy Hoodie", brand: "Custom Cut & Sew", category: "hoodies", colors: ["#000000", "#f5f0e6", "#d4c5a9", "#a0522d"], moreColors: 6, sizes: "S - 3XL", minOrder: 50, priceRange: "$15.00 - $26.00", turnaround: "3 weeks", img: "https://images.unsplash.com/photo-1578768079470-0a4536e2b7da?w=400&h=500&fit=crop" },
  { id: "hd-004", name: "French Terry Hoodie", brand: "Custom Cut & Sew", category: "hoodies", colors: ["#000000", "#ffffff", "#808080"], moreColors: 5, sizes: "S - 2XL", minOrder: 100, priceRange: "$13.00 - $23.00", turnaround: "2-3 weeks", img: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&h=500&fit=crop" },

  // CAPS
  { id: "cp-001", name: "Classic Dad Cap", brand: "Custom Embroidery", category: "caps", colors: ["#000000", "#ffffff", "#1e3a5f", "#8b0000", "#2d5a27"], moreColors: 15, sizes: "One Size", minOrder: 50, priceRange: "$3.50 - $7.00", turnaround: "2 weeks", img: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400&h=500&fit=crop" },
  { id: "cp-002", name: "Structured Snapback", brand: "Custom Embroidery", category: "caps", colors: ["#000000", "#ffffff", "#808080", "#1e3a5f"], moreColors: 10, sizes: "One Size", minOrder: 50, priceRange: "$4.00 - $8.00", turnaround: "2 weeks", img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=400&h=500&fit=crop" },
  { id: "cp-003", name: "5-Panel Camp Cap", brand: "Custom Embroidery", category: "caps", colors: ["#000000", "#d4c5a9", "#2d5a27", "#696969"], moreColors: 8, sizes: "One Size", minOrder: 50, priceRange: "$4.50 - $8.50", turnaround: "2 weeks", img: "https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400&h=500&fit=crop" },

  // JOGGERS
  { id: "jg-001", name: "Slim Fit Jogger", brand: "Custom Cut & Sew", category: "joggers", colors: ["#000000", "#808080", "#1e3a5f", "#2d5a27"], moreColors: 8, sizes: "S - 2XL", minOrder: 50, priceRange: "$10.00 - $18.00", turnaround: "2-3 weeks", img: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=500&fit=crop" },
  { id: "jg-002", name: "Wide Leg Cargo Pant", brand: "Custom Cut & Sew", category: "joggers", colors: ["#000000", "#d4c5a9", "#696969"], moreColors: 5, sizes: "S - 2XL", minOrder: 50, priceRange: "$12.00 - $20.00", turnaround: "3 weeks", img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop" },
  { id: "jg-003", name: "French Terry Sweatpant", brand: "Custom Cut & Sew", category: "joggers", colors: ["#000000", "#ffffff", "#808080"], moreColors: 6, sizes: "S - 3XL", minOrder: 50, priceRange: "$11.00 - $19.00", turnaround: "2-3 weeks", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop" },

  // JACKETS
  { id: "jk-001", name: "Bomber Jacket", brand: "Custom Cut & Sew", category: "jackets", colors: ["#000000", "#1e3a5f", "#2d5a27", "#8b0000"], moreColors: 6, sizes: "S - 2XL", minOrder: 50, priceRange: "$18.00 - $35.00", turnaround: "3 weeks", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop" },
  { id: "jk-002", name: "Windbreaker Jacket", brand: "Custom Cut & Sew", category: "jackets", colors: ["#000000", "#ffffff", "#1e3a5f"], moreColors: 5, sizes: "S - 2XL", minOrder: 50, priceRange: "$15.00 - $28.00", turnaround: "3 weeks", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop" },
  { id: "jk-003", name: "Varsity Jacket", brand: "Custom Cut & Sew", category: "jackets", colors: ["#000000", "#8b0000", "#1e3a5f"], moreColors: 4, sizes: "S - 3XL", minOrder: 100, priceRange: "$22.00 - $40.00", turnaround: "3-4 weeks", img: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=400&h=500&fit=crop" },

  // TRACKSUITS
  { id: "tk-001", name: "Full Tracksuit Set", brand: "Custom Cut & Sew", category: "tracksuits", colors: ["#000000", "#1e3a5f", "#808080", "#8b0000"], moreColors: 6, sizes: "S - 2XL", minOrder: 50, priceRange: "$22.00 - $40.00", turnaround: "3 weeks", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop" },
  { id: "tk-002", name: "Velour Track Set", brand: "Custom Cut & Sew", category: "tracksuits", colors: ["#000000", "#2d5a27", "#8b0000", "#1e3a5f"], moreColors: 4, sizes: "S - 2XL", minOrder: 100, priceRange: "$25.00 - $45.00", turnaround: "3-4 weeks", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop" },
];

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.category === slug);
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
