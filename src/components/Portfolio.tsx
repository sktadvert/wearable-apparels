"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "Custom Streetwear Drop", cat: "T-Shirts", qty: "200 pcs", client: "Emerging brand, USA", img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&h=450&fit=crop" },
  { title: "Premium Hoodie Line", cat: "Hoodies", qty: "150 pcs", client: "Independent label, UK", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=450&fit=crop" },
  { title: "Full Tracksuit Set", cat: "Tracksuits", qty: "300 pcs", client: "Startup brand, Canada", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=450&fit=crop" },
  { title: "Graphic Tee Collection", cat: "T-Shirts", qty: "500 pcs", client: "Online brand, Australia", img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=450&fit=crop" },
  { title: "Bomber Jacket Range", cat: "Jackets", qty: "100 pcs", client: "Designer, USA", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=450&fit=crop" },
  { title: "Embroidered Cap Line", cat: "Caps", qty: "250 pcs", client: "Small brand, UK", img: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=600&h=450&fit=crop" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center"
        >
          <p className="text-[#67e500] text-base md:text-lg tracking-widest uppercase font-bold mb-3">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">Recent Projects</h2>
          <p className="text-slate-500 text-base leading-relaxed">
            From streetwear drops to full collections — here are some of the projects we have manufactured for independent brands worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {p.qty} · {p.cat}
                  </span>
                </div>
              </div>
              <h3 className="text-sm font-bold text-[#0f172a] group-hover:text-[#67e500] transition-colors">{p.title}</h3>
              <p className="text-slate-400 text-xs mt-1">{p.client}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
