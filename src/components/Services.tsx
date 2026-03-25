"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "✂️",
    title: "Custom Cut & Sew",
    desc: "From your design to finished garment. T-shirts, hoodies, joggers, jackets — any style. We handle pattern making, grading, and full construction.",
  },
  {
    icon: "🎨",
    title: "Screen Printing",
    desc: "Vibrant, durable prints in up to 12 colors. Plastisol, water-based, or discharge inks. Perfect for graphic tees and streetwear.",
  },
  {
    icon: "🧵",
    title: "Embroidery",
    desc: "Premium embroidery for logos and custom artwork. Flat, 3D puff, and chain stitch options. Clean stitching that lasts.",
  },
  {
    icon: "🏷️",
    title: "Private Labeling",
    desc: "Your brand, front and center. Woven labels, hang tags, neck labels, care labels — complete branding for your clothing line.",
  },
  {
    icon: "📦",
    title: "Custom Packaging",
    desc: "Branded polybags, tissue paper, stickers, and mailer boxes. Create an unboxing experience your customers remember.",
  },
  {
    icon: "🌍",
    title: "Fabric Sourcing",
    desc: "Access to premium fabrics worldwide. Cotton, French terry, fleece, nylon, custom blends. We find the right fabric for your design.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#b8977e] text-xs tracking-widest uppercase font-semibold mb-3">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Everything You Need to Launch Your Clothing Line
          </h2>
          <p className="text-gray-500 leading-relaxed">
            From a single design idea to a fully branded, packaged product ready to sell.
            No experience needed — we guide you through every step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="bg-[#f8f7f4] rounded-xl p-7 card-hover group"
            >
              <span className="text-2xl mb-4 block">{s.icon}</span>
              <h3 className="text-base font-semibold text-[#111827] mb-2 group-hover:text-[#b8977e] transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
