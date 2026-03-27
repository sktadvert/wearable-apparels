"use client";

import { motion } from "framer-motion";

const features = [
  { title: "Your Brand, Your Way", desc: "Custom neck labels, hang tags, packaging — every piece carries your identity, not ours.", icon: "M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" },
  { title: "Streetwear Experts", desc: "We live in the streetwear world. Limited drops, seasonal collections, hype culture — we get it.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Sample Before You Commit", desc: "We produce a physical sample first. You approve fit, fabric, and finish before production starts.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
  { title: "Scale When Ready", desc: "Start with 50 pieces. Reorder 500. We grow with your brand — same quality at every volume.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
];

const stats = [
  { value: "150+", label: "Brands Worldwide" },
  { value: "10K+", label: "Garments Delivered" },
  { value: "6+", label: "Countries Served" },
  { value: "98%", label: "Client Satisfaction" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#0f172a] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top: Why Choose Us */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#67e500] text-base md:text-lg tracking-[0.3em] uppercase font-bold mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Manufacturing Partner That <span className="text-[#67e500]">Delivers Results</span>
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              We work exclusively with independent and emerging clothing brands — the ones
              starting with 50-500 piece runs and growing into established labels. Your success is our business.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#67e500] text-black text-sm font-bold uppercase tracking-wider rounded-xl hover:bg-[#5acc00] transition-all">
              Let&apos;s Talk
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`p-6 rounded-2xl border border-white/[0.06] hover:border-[#67e500]/30 transition-all ${
                  i === 0 ? "bg-[#67e500] text-black border-transparent" : "bg-white/[0.03]"
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke={i === 0 ? "black" : "#67e500"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  className="mb-4"
                >
                  <path d={f.icon} />
                </svg>
                <h4 className={`text-sm font-bold mb-2 ${i === 0 ? "text-black" : "text-white"}`}>{f.title}</h4>
                <p className={`text-xs leading-relaxed ${i === 0 ? "text-black/60" : "text-slate-500"}`}>{f.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-10"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl lg:text-5xl font-extrabold text-[#67e500] mb-2">{s.value}</p>
                <p className="text-slate-500 text-sm uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
