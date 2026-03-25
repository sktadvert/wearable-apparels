"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Streetwear Collection", cat: "Cut & Sew", qty: "500 pcs" },
  { title: "Premium Hoodies", cat: "Private Label", qty: "300 pcs" },
  { title: "Limited Drop Series", cat: "Screen Print", qty: "200 pcs" },
  { title: "Athletic Line", cat: "Full Production", qty: "1000 pcs" },
  { title: "Denim Collection", cat: "Cut & Sew", qty: "400 pcs" },
  { title: "Tracksuits Range", cat: "Private Label", qty: "600 pcs" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32 px-6 lg:px-8">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <p className="text-[#b8977e] text-xs tracking-widest uppercase font-medium mb-4">
              Our Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Recent Projects
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-sm">
            A selection of recent manufacturing projects. Your brand could be next.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] rounded-xl img-placeholder flex items-center justify-center mb-4 overflow-hidden group-hover:border-white/10 transition-all">
                <div className="text-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" className="mx-auto mb-2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-white/8 text-[10px]">Product Photo</p>
                </div>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-white/25 text-xs mt-1">{p.cat}</p>
                </div>
                <span className="text-[#b8977e]/50 text-xs font-medium">{p.qty}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
