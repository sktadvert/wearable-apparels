"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Submit Your Brief",
    desc: "Tell us what you need — garment type, quantity, fabric, design references. Upload tech packs or mockups. We respond within 24 hours.",
  },
  {
    num: "02",
    title: "Get a Quote",
    desc: "We review your requirements and send a detailed quote with pricing, timeline, and fabric recommendations. No hidden fees.",
  },
  {
    num: "03",
    title: "Sample Approval",
    desc: "We produce samples for your sign-off. Iterate on fit, fabric, and details until you're 100% satisfied before full production.",
  },
  {
    num: "04",
    title: "Production & Delivery",
    desc: "Quality-controlled manufacturing with regular photo updates. Every piece inspected. Packaged with your branding and shipped worldwide.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 px-6 lg:px-8">
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
            How It Works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            From Concept to Delivery
          </h2>
          <p className="text-white/35 text-base leading-relaxed">
            A simple 4-step process. You focus on your brand,
            we handle the manufacturing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-white/[0.06] to-transparent" />
              )}

              <div className="text-4xl font-bold text-[#b8977e]/15 mb-4">
                {step.num}
              </div>
              <h3 className="text-base font-semibold text-white/80 mb-3">
                {step.title}
              </h3>
              <p className="text-white/30 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/dashboard/rfq/new"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#b8977e] text-black text-sm font-semibold rounded-lg hover:bg-[#d4b896] transition-all"
          >
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
