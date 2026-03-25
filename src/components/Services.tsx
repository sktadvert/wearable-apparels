"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    title: "Custom Cut & Sew",
    desc: "Full garment construction from pattern making to finished product. T-shirts, hoodies, joggers, jackets — any style, any fabric.",
  },
  {
    icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z",
    title: "Screen Printing",
    desc: "High-quality screen printing with vibrant, durable inks. Up to 12 colors, any complexity. Plastisol, water-based, discharge.",
  },
  {
    icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z",
    title: "Embroidery",
    desc: "Premium embroidery for logos, labels, and custom artwork. Flat, 3D puff, chain stitch. Clean stitching, lasting quality.",
  },
  {
    icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z",
    title: "Private Label",
    desc: "Complete private labeling — woven labels, hang tags, neck labels, care labels, packaging. Your brand identity, front and center.",
  },
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "Custom Packaging",
    desc: "Branded polybags, tissue paper, stickers, mailer boxes, premium boxes. Unboxing experience that converts customers.",
  },
  {
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    title: "Fabric Sourcing",
    desc: "Access premium fabrics worldwide. Cotton, French terry, fleece, nylon, custom blends. We source what your design needs.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6 lg:px-8">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <p className="text-[#b8977e] text-xs tracking-widest uppercase font-medium mb-4">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            End-to-End Manufacturing
          </h2>
          <p className="text-white/35 text-base leading-relaxed">
            Everything you need to go from design concept to finished product,
            under one roof. No middlemen, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="bg-[#0a0a0a] p-8 lg:p-10 group hover:bg-[#0d0d0d] transition-colors duration-500"
            >
              <div className="w-10 h-10 rounded-lg bg-[#b8977e]/8 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b8977e" strokeWidth="1.5" opacity="0.7">
                  <path d={s.icon} />
                </svg>
              </div>
              <h3 className="text-base font-semibold mb-2.5 text-white/80 group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-white/30 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
