"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "We came with just a sketch and they turned it into a full collection. The quality exceeded our expectations for the price point.",
    name: "Brand Founder",
    company: "Streetwear Brand, USA",
    initials: "JM",
  },
  {
    quote: "As a first-time brand owner, I had no idea how manufacturing worked. They walked me through everything — fabrics, sizing, labeling. Made it easy.",
    name: "Independent Designer",
    company: "Emerging Label, UK",
    initials: "SK",
  },
  {
    quote: "Fast turnaround, consistent quality, and they actually care about small orders. We started with 50 hoodies and now do 500+ per run.",
    name: "Brand Owner",
    company: "Streetwear Label, Canada",
    initials: "RA",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-[#b8977e] text-xs tracking-widest uppercase font-semibold mb-3">
            What Brands Say
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827]">
            Trusted by Independent Brands Worldwide
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white rounded-xl p-7 shadow-sm border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#b8977e" stroke="none">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full bg-[#111827] flex items-center justify-center text-white text-[10px] font-bold">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#111827]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
