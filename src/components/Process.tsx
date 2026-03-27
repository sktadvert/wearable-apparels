"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Share Your Design",
    desc: "Upload your design, tech pack, or even a rough sketch. Tell us the garment type, quantity, and fabric preferences.",
    img: "https://images.unsplash.com/photo-1557777586-f6682739fcf3?w=400&h=300&fit=crop",
    color: "#67e500",
  },
  {
    num: "02",
    title: "Get Your Quote",
    desc: "We review your requirements and send a detailed quote within 24-48 hours — pricing, fabric options, and timeline.",
    img: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&h=300&fit=crop",
    color: "#5a8ab5",
  },
  {
    num: "03",
    title: "Approve Your Sample",
    desc: "We produce a sample for your sign-off. Check fit, fabric, and finish. Revise until it is perfect — then we go to production.",
    img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=300&fit=crop",
    color: "#6a9a4a",
  },
  {
    num: "04",
    title: "Production & Delivery",
    desc: "Full production with regular photo updates. Every piece QC inspected, branded, packaged, and shipped to your door.",
    img: "https://images.unsplash.com/photo-1665521032636-e8d2f6927053?w=400&h=300&fit=crop",
    color: "#a05a7a",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center"
        >
          <p className="text-[#67e500] text-base md:text-lg tracking-widest uppercase font-bold mb-3">How It Works</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">From Your Idea to Finished Product</h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed">A simple 4-step process. No experience needed — we guide you through everything.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-5 relative">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-extrabold" style={{ backgroundColor: step.color }}>
                  {step.num}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
