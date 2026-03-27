"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="mb-12 sm:mb-16">
      <div>
        <div className="bg-gradient-to-br from-[#0f172a] via-[#162033] to-[#0f172a] py-12 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#67e500]/[0.04] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#006837]/[0.06] rounded-full blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-3xl mx-auto flex flex-col items-center"
          >
            <p className="text-[#67e500] text-base md:text-lg tracking-[0.3em] uppercase font-bold mb-6">Get in Touch</p>

            <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] text-center">
              Ready to Start
              <br />
              <span className="text-[#67e500]">Manufacturing?</span>
            </h3>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12 max-w-xl text-center">
              Contact us today to receive your free quote. We are here to help you find the best solution tailored to your needs.
            </p>

            <button
              onClick={() => document.dispatchEvent(new Event("openQuoteModal"))}
              className="inline-flex items-center gap-3 px-8 py-4 sm:px-16 sm:py-6 bg-[#67e500] text-black text-base sm:text-xl font-extrabold uppercase tracking-wider rounded-2xl hover:bg-[#5acc00] transition-all hover:shadow-2xl hover:shadow-[#67e500]/20 cursor-pointer mb-10 sm:mb-14"
            >
              Get a Free Quote
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
              {[
                { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14", title: "Free Sampling", desc: "Physical sample before production" },
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: "Quality Guaranteed", desc: "Multi-stage QC on every piece" },
                { icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", title: "24hr Response", desc: "We reply within 24 hours" },
              ].map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#67e500]/10 flex items-center justify-center shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#67e500" strokeWidth="2"><path d={item.icon} /></svg>
                  </div>
                  <div className="text-center">
                    <p className="text-white text-sm font-bold">{item.title}</p>
                    <p className="text-slate-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
