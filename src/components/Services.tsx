"use client";

import { motion } from "framer-motion";

const services = [
  { icon: "01", title: "Custom Cut & Sew", desc: "Full-service garment construction from pattern making to finished product. Your designs, our expertise." },
  { icon: "02", title: "Screen Printing", desc: "High-quality screen printing with vibrant, durable inks. Up to 12 colors, any complexity." },
  { icon: "03", title: "Embroidery", desc: "Premium embroidery for logos, labels, and custom artwork. Clean stitching, lasting quality." },
  { icon: "04", title: "Private Label", desc: "Complete private labeling — woven labels, hang tags, packaging. Your brand, front and center." },
  { icon: "05", title: "Custom Packaging", desc: "Branded packaging from polybags to premium boxes. Unboxing experience that converts." },
  { icon: "06", title: "Fabric Sourcing", desc: "Access premium fabrics worldwide. Cotton, polyester, blends, custom developments." },
];

export default function Services() {
  return (
    <section id="services" className="relative py-40 px-6 lg:px-8 snap-section">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#c9a96e] text-xs tracking-[0.25em] uppercase font-medium mb-6">
            Services
          </span>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.95]">
            End-to-End
            <br />
            <span className="gradient-text">Manufacturing</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group glass rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-500 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 text-[120px] font-black text-white/[0.02] leading-none select-none -mr-4 -mt-6">
                {s.icon}
              </div>
              <div className="relative">
                <span className="text-[#c9a96e] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
                  {s.icon}
                </span>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#c9a96e] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-white/35 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#c9a96e]/0 group-hover:text-[#c9a96e] transition-all duration-300">
                  <span className="text-xs font-medium">Learn more</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
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
