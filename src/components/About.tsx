"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-pad bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#b8977e] text-xs tracking-widest uppercase font-semibold mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              A Manufacturing Partner That Gets Streetwear
            </h2>
            <div className="space-y-4 text-gray-400 text-[15px] leading-relaxed mb-10">
              <p>
                We&apos;re not a massive factory that treats small brands as an afterthought.
                We specialize in working with independent and emerging clothing brands — the ones
                starting with 50-500 piece runs and growing from there.
              </p>
              <p>
                We understand the streetwear world because we live in it. Limited drops, seasonal
                collections, custom everything — we handle it all, from fabric sourcing to
                your customer&apos;s doorstep.
              </p>
            </div>

            {/* Key differentiators */}
            <div className="space-y-4">
              {[
                { title: "Low Minimums", desc: "Start with just 50 pieces per style. Perfect for testing designs before scaling." },
                { title: "Fast Turnaround", desc: "2-3 weeks from approved sample to finished production. No endless waiting." },
                { title: "Quality First", desc: "Multi-stage QC inspection on every single piece. Samples before production." },
                { title: "Full Service", desc: "Fabric, cut & sew, print, embroider, label, package — one partner, zero hassle." },
              ].map((item, i) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#b8977e]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#b8977e" strokeWidth="3">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.title}</p>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Photos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-[3/4] rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
              <div className="text-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15" className="mx-auto mb-2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-white/10 text-xs">Factory Photo</p>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mt-8">
              <div className="text-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.15" className="mx-auto mb-2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-white/10 text-xs">Production Process</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
