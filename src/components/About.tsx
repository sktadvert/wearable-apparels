"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Brands Served", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
  { value: "2-3 Wks", label: "Avg Turnaround", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
  { value: "50 pcs", label: "Minimum Order", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
  { value: "100%", label: "QC Pass Rate", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
];

export default function About() {
  return (
    <section id="about" className="relative py-40 px-6 lg:px-8 snap-section">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0c0a08] to-[#0a0a0a] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#c9a96e] text-xs tracking-[0.25em] uppercase font-medium mb-6">
              About Us
            </span>
            <h2 className="text-5xl md:text-6xl font-black leading-[0.95] mb-10">
              Built for Brands
              <br />
              That <span className="gradient-text">Mean Business</span>
            </h2>
            <div className="space-y-6 text-white/40 leading-relaxed">
              <p>
                Wearable Apparels is a full-service custom apparel manufacturer
                built for independent streetwear brands, emerging designers, and
                established labels looking for a reliable production partner.
              </p>
              <p>
                We understand the streetwear world because we live in it. From
                limited drops to seasonal collections, we handle everything —
                fabric sourcing, cut &amp; sew, printing, embroidery, labeling,
                and packaging.
              </p>
              <p>
                Quality isn&apos;t a buzzword for us. Every piece goes through
                multi-stage inspection. We send samples before full production.
                No surprises, no compromises.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-3xl p-6 text-center group hover:bg-white/[0.06] transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#c9a96e]/10 flex items-center justify-center mx-auto mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                    <path d={stat.icon} />
                  </svg>
                </div>
                <p className="text-3xl font-black gradient-text mb-1">
                  {stat.value}
                </p>
                <p className="text-white/30 text-xs tracking-wider uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
