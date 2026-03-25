"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "Share your vision — designs, fabrics, quantities. We listen, advise, and plan your production roadmap.", side: "left" },
  { num: "02", title: "Sampling", desc: "We create detailed samples for your approval. Iterate until it's perfect — no compromises.", side: "right" },
  { num: "03", title: "Production", desc: "Quality-controlled manufacturing with regular updates. Every single piece inspected before shipping.", side: "left" },
  { num: "04", title: "Delivery", desc: "Packaged with your branding and shipped worldwide. Your collection, ready for the market.", side: "right" },
];

export default function Process() {
  return (
    <section id="process" className="relative py-40 px-6 lg:px-8 snap-section overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#080a0c] to-[#0a0a0a] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#c9a96e] text-xs tracking-[0.25em] uppercase font-medium mb-6">
            Process
          </span>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.95]">
            From Concept
            <br />
            <span className="gradient-text">to Creation</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#c9a96e]/20 to-transparent -translate-x-1/2 hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: step.side === "left" ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`relative flex items-center mb-20 last:mb-0 ${
                step.side === "right" ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[#c9a96e] bg-[#0a0a0a] z-10 hidden md:block" />

              {/* Card */}
              <div className={`w-full md:w-[calc(50%-40px)] ${step.side === "right" ? "md:mr-auto md:ml-[40px]" : "md:ml-auto md:mr-[40px]"}`}>
                <div className="glass rounded-3xl p-8 group hover:bg-white/[0.06] transition-all duration-500">
                  <span className="text-5xl font-black text-[#c9a96e]/10 block mb-2">
                    {step.num}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#c9a96e] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
