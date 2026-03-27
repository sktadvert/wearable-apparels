"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Custom Cut & Sew",
    desc: "From your design to finished garment. T-shirts, hoodies, joggers, jackets — pattern making, grading, and full construction.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop&q=90",
  },
  {
    title: "Screen Printing",
    desc: "Vibrant, durable prints in up to 12 colors. Plastisol, water-based, or discharge inks for graphic tees and streetwear.",
    img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=400&fit=crop&q=90",
  },
  {
    title: "Embroidery",
    desc: "Premium embroidery for logos and artwork. Flat, 3D puff, and chain stitch. Clean stitching that lasts.",
    img: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&h=400&fit=crop&q=90",
  },
  {
    title: "Private Labeling",
    desc: "Woven labels, hang tags, neck labels, care labels — complete branding for your clothing line.",
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=400&fit=crop&q=90",
  },
  {
    title: "Custom Packaging",
    desc: "Branded polybags, tissue paper, stickers, mailer boxes. An unboxing experience your customers remember.",
    img: "https://images.unsplash.com/photo-1607166452427-7e4477c2f32b?w=600&h=400&fit=crop&q=90",
  },
  {
    title: "Fabric Sourcing",
    desc: "Premium fabrics worldwide. Cotton, French terry, fleece, nylon, custom blends — we find the right fabric.",
    img: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop&q=90",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[#f7f5f2]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-[#67e500] text-sm tracking-widest uppercase font-bold mb-4">Our Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0f172a] mb-5">
            Everything You Need to Launch Your Line
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
            From a single design idea to a fully branded, packaged product ready to sell.
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
              className="bg-white rounded-2xl overflow-hidden card-hover group border border-transparent hover:border-[#67e500]/20"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#67e500] transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
