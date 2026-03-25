"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <Scene3D />

      {/* Warm gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#0a0a0a] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen py-32">
          {/* Left: Content */}
          <motion.div variants={stagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#b8977e]/10 text-[#b8977e] text-xs tracking-widest uppercase font-medium border border-[#b8977e]/10">
                Custom Apparel Manufacturing
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              <span className="text-white">We Manufacture</span>
              <br />
              <span className="text-white">Your Clothing</span>
              <br />
              <span className="text-[#b8977e]">Brand.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/40 text-base md:text-lg max-w-lg leading-relaxed mb-10"
            >
              Full-service cut &amp; sew manufacturing for streetwear brands.
              From your design to finished product — screen printing, embroidery,
              private labeling, and packaging. Low MOQ, fast turnaround.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/dashboard/rfq/new"
                className="px-7 py-3.5 bg-[#b8977e] text-black font-semibold text-sm rounded-lg hover:bg-[#d4b896] transition-all"
              >
                Request a Quote
              </Link>
              <a
                href="#process"
                className="px-7 py-3.5 text-white/50 text-sm font-medium border border-white/10 rounded-lg hover:border-white/20 hover:text-white/70 transition-all"
              >
                How It Works
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-10">
              {[
                { value: "50+", label: "Brands Served" },
                { value: "50 pcs", label: "Min Order" },
                { value: "2-3 wks", label: "Turnaround" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-white/25 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/5] rounded-2xl img-placeholder flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15" className="mx-auto mb-3">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-white/10 text-xs">Factory / Product Photo</p>
                </div>
              </div>

              {/* Floating card overlay */}
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-5 max-w-[220px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-md bg-green-500/20 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-white text-sm font-semibold">100% QC</span>
                </div>
                <p className="text-white/30 text-xs leading-relaxed">
                  Every piece inspected before shipping
                </p>
              </div>

              {/* Small accent image */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-xl img-placeholder flex items-center justify-center">
                <p className="text-white/10 text-[10px]">Detail Shot</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#b8977e]/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
