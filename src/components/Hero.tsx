"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="relative bg-[#f8f7f4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8977e]/10 text-[#b8977e] text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b8977e]" />
                For Emerging &amp; Independent Brands
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-[#111827] mb-6"
            >
              Launch Your Clothing Brand — We Handle Manufacturing
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Starting a clothing line? We make it easy. Custom cut &amp; sew, printing,
              embroidery, labeling, and packaging — starting from just 50 pieces.
              Perfect for new and growing streetwear brands.
            </motion.p>

            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/dashboard/rfq/new"
                className="px-7 py-3.5 bg-[#111827] text-white text-sm font-semibold rounded-lg hover:bg-[#1f2937] transition-all"
              >
                Get a Free Quote
              </Link>
              <a
                href="#process"
                className="px-7 py-3.5 text-[#111827] text-sm font-medium border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                How It Works
              </a>
            </motion.div>

            {/* Trust stats */}
            <motion.div variants={fadeUp} transition={{ duration: 0.5 }} className="flex gap-8 pt-6 border-t border-gray-200">
              {[
                { value: "50+", label: "Brands Served" },
                { value: "50 pcs", label: "Min Order" },
                { value: "2-3 Wks", label: "Turnaround" },
                { value: "100%", label: "QC Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-bold text-[#111827]">{stat.value}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl img-placeholder flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#b8977e" strokeWidth="0.5" className="mx-auto mb-3">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-[#b8977e]/40 text-sm font-medium">Factory / Product Hero Image</p>
                  <p className="text-gray-300 text-xs mt-1">Recommended: 800x600px</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3 border border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">Quality Verified</p>
                  <p className="text-xs text-gray-400">Every piece inspected</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="h-16 bg-gradient-to-b from-[#f8f7f4] to-white" />
    </section>
  );
}
