"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Streetwear Collection", cat: "Cut & Sew", gradient: "from-[#c9a96e]/30 via-[#c9a96e]/10 to-transparent" },
  { title: "Premium Hoodies", cat: "Private Label", gradient: "from-[#4a6fa5]/30 via-[#4a6fa5]/10 to-transparent" },
  { title: "Limited Drop Series", cat: "Screen Print", gradient: "from-[#8b5e3c]/30 via-[#8b5e3c]/10 to-transparent" },
  { title: "Denim Line", cat: "Full Production", gradient: "from-[#6b7b8d]/30 via-[#6b7b8d]/10 to-transparent" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-40 px-6 lg:px-8 snap-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#c9a96e] text-xs tracking-[0.25em] uppercase font-medium mb-6">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.95]">
            Crafted with
            <br />
            <span className="gradient-text">Precision</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              <div className={`h-80 bg-gradient-to-br ${p.gradient} glass flex items-end p-8 transition-all duration-700 group-hover:scale-[1.02]`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="relative z-10">
                  <span className="text-[#c9a96e] text-xs tracking-[0.2em] uppercase font-medium block mb-2">
                    {p.cat}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {p.title}
                  </h3>
                </div>
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
