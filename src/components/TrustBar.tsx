"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Brands Served" },
  { value: "10,000+", label: "Pieces Produced" },
  { value: "6+", label: "Countries Shipped" },
  { value: "100%", label: "QC Inspection" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#0f172a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl lg:text-3xl font-bold text-[#67e500]">{stat.value}</p>
              <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
