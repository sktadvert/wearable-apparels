"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6 lg:px-8">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left: Photos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="aspect-[3/4] rounded-xl img-placeholder flex items-center justify-center">
              <div className="text-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" className="mx-auto mb-2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-white/8 text-[10px]">Factory Photo</p>
              </div>
            </div>
            <div className="aspect-[3/4] rounded-xl img-placeholder flex items-center justify-center mt-8">
              <div className="text-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" opacity="0.1" className="mx-auto mb-2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="text-white/8 text-[10px]">Team / Process</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b8977e] text-xs tracking-widest uppercase font-medium mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Built for Brands That Mean Business
            </h2>

            <div className="space-y-5 text-white/35 text-[15px] leading-relaxed mb-12">
              <p>
                Wearable Apparels is a full-service custom apparel manufacturer
                for independent streetwear brands, emerging designers, and
                established labels looking for a reliable production partner.
              </p>
              <p>
                We handle everything — fabric sourcing, pattern making,
                cut &amp; sew, printing, embroidery, labeling, and packaging.
                One partner for your entire production chain.
              </p>
              <p>
                Quality isn&apos;t a buzzword for us. Every single piece goes
                through multi-stage inspection. We send samples before full
                production. No surprises, no compromises.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "50+", label: "Brands Served" },
                { value: "2-3 Wks", label: "Avg Turnaround" },
                { value: "50 pcs", label: "Minimum Order" },
                { value: "100%", label: "QC Pass Rate" },
              ].map((stat) => (
                <div key={stat.label} className="py-4 border-t border-white/[0.06]">
                  <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/25 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
