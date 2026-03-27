"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

type Category = { slug: string; name: string; img: string };

export default function CatalogClient({
  category,
  products,
  allCategories,
}: {
  category: Category;
  products: Product[];
  allCategories: Category[];
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#67e500] flex items-center justify-center text-[#0f172a] font-extrabold text-[11px]">
                WA
              </div>
              <span className="text-[15px] font-semibold text-white hidden sm:block">
                Wearable Apparels
              </span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-slate-400 text-sm hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-slate-400 text-sm hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/#quote" className="px-5 py-2.5 bg-[#006837] text-white text-[13px] font-bold rounded-lg hover:bg-[#005a2f] transition-all">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-[#67e500] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#0f172a] font-medium">{category.name}</span>
        </div>

        {/* Category header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-2">
              {category.name}
            </h1>
            <p className="text-slate-500 text-sm">
              {products.length} products available · Custom manufacturing from 50 pieces
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/catalog/${c.slug}`}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-all ${
                  c.slug === category.slug
                    ? "bg-[#0f172a] text-white"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                }`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#f7f5f2] mb-3 relative border border-slate-100 group-hover:border-[#67e500]/30 transition-all">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Quick quote badge */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href="/#quote"
                    className="bg-[#006837] text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-md"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>

              {/* Info */}
              <p className="text-[#67e500] text-xs font-semibold mb-0.5">{product.brand}</p>
              <h3 className="text-sm font-semibold text-[#0f172a] mb-1.5 group-hover:text-[#67e500] transition-colors">
                {product.name}
              </h3>

              {/* Color swatches */}
              <div className="flex items-center gap-1 mb-2">
                {product.colors.map((color) => (
                  <span
                    key={color}
                    className="w-4 h-4 rounded-full border border-slate-200"
                    style={{ backgroundColor: color }}
                  />
                ))}
                {product.moreColors && (
                  <span className="text-[10px] text-slate-400 ml-1">+{product.moreColors}</span>
                )}
              </div>

              {/* Details */}
              <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                <span className="flex items-center gap-1">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                  {product.turnaround}
                </span>
                <span>·</span>
                <span>{product.sizes}</span>
              </div>

              {/* Price */}
              <p className="text-sm font-bold text-[#0f172a]">
                {product.priceRange}
                <span className="text-[10px] font-normal text-slate-400 ml-1">/piece</span>
              </p>
              <p className="text-[10px] text-slate-400">Min. {product.minOrder} pcs</p>
            </motion.div>
          ))}
        </div>

        {/* CTA at bottom */}
        <div className="text-center mt-16 pt-10 border-t border-slate-100">
          <h3 className="text-2xl font-bold text-[#0f172a] mb-3">
            Don&apos;t see what you need?
          </h3>
          <p className="text-slate-500 mb-6">
            We can manufacture any custom garment. Tell us your requirements.
          </p>
          <Link
            href="/#quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#006837] text-white text-sm font-bold rounded-xl hover:bg-[#005a2f] transition-all"
          >
            Request a Custom Quote →
          </Link>
        </div>
      </div>
    </div>
  );
}
