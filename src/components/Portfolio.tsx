"use client";

import { motion } from "framer-motion";

const categories = ["All", "T-Shirts", "Hoodies", "Tracksuits", "Jackets", "Caps"];

const projects = [
  { title: "Custom Streetwear Drop", cat: "T-Shirts", qty: "200 pcs", client: "Emerging brand, USA" },
  { title: "Premium Hoodie Line", cat: "Hoodies", qty: "150 pcs", client: "Independent label, UK" },
  { title: "Full Tracksuit Set", cat: "Tracksuits", qty: "300 pcs", client: "Startup brand, Canada" },
  { title: "Graphic Tee Collection", cat: "T-Shirts", qty: "500 pcs", client: "Online brand, Australia" },
  { title: "Bomber Jacket Range", cat: "Jackets", qty: "100 pcs", client: "Designer, USA" },
  { title: "Embroidered Cap Line", cat: "Caps", qty: "250 pcs", client: "Small brand, UK" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-[#b8977e] text-xs tracking-widest uppercase font-semibold mb-3">
              Our Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
              Recent Manufacturing Projects
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm">
            A few examples of what we&apos;ve produced for independent brands like yours.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat, i) => (
            <button
              key={cat}
              className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
                i === 0
                  ? "bg-[#111827] text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-xl img-placeholder flex items-center justify-center mb-4 overflow-hidden group-hover:shadow-md transition-shadow">
                <div className="text-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b8977e" strokeWidth="0.5" className="mx-auto mb-2">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="text-gray-300 text-xs">Product Photo</p>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#111827]">{p.title}</h3>
                  <p className="text-gray-400 text-xs mt-1">{p.client} · {p.qty}</p>
                </div>
                <span className="text-xs font-medium text-[#b8977e] bg-[#b8977e]/8 px-2 py-0.5 rounded">
                  {p.cat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
