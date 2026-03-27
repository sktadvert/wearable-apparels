"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0f172a] leading-tight mb-5"
        >
          Ready to Launch Your Brand?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-500 text-base sm:text-lg leading-relaxed mb-10"
        >
          Get a free mockup and quote within 24 hours. No minimums too high, no vision too bold.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.dispatchEvent(new Event("openQuoteModal"))}
          className="inline-flex items-center justify-center px-10 py-4 bg-[#67e500] text-[#0f172a] text-base font-bold rounded-xl hover:bg-[#5acc00] transition-all duration-200 cursor-pointer"
        >
          Get a Free Quote
        </motion.button>
      </div>
    </section>
  );
}
