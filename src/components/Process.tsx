"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  {
    num: "1",
    title: "Share Your Design",
    desc: "Upload your design, tech pack, or even a rough sketch. Tell us the garment type, quantity, and fabric preferences.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 80 80" fill="none">
        {/* Clipboard with pencil */}
        <circle cx="40" cy="40" r="36" fill="#f0e6d6" />
        <rect x="24" y="18" width="28" height="38" rx="3" stroke="#b8977e" strokeWidth="2" fill="white" />
        <rect x="32" y="14" width="12" height="8" rx="2" stroke="#b8977e" strokeWidth="2" fill="white" />
        <line x1="30" y1="30" x2="46" y2="30" stroke="#b8977e" strokeWidth="1.5" opacity="0.5" />
        <line x1="30" y1="36" x2="42" y2="36" stroke="#b8977e" strokeWidth="1.5" opacity="0.5" />
        <line x1="30" y1="42" x2="44" y2="42" stroke="#b8977e" strokeWidth="1.5" opacity="0.5" />
        <path d="M48 38L56 30L60 34L52 42L48 43L48 38Z" fill="#b8977e" stroke="#b8977e" strokeWidth="1" />
      </svg>
    ),
  },
  {
    num: "2",
    title: "Get Your Quote",
    desc: "We review your requirements and send a detailed quote within 24-48 hours — pricing, fabric options, and timeline.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 80 80" fill="none">
        {/* Document with checkmark and price tag */}
        <circle cx="40" cy="40" r="36" fill="#d6e6f0" />
        <rect x="22" y="18" width="30" height="40" rx="3" stroke="#5a8ab5" strokeWidth="2" fill="white" />
        <line x1="28" y1="28" x2="46" y2="28" stroke="#5a8ab5" strokeWidth="1.5" opacity="0.4" />
        <line x1="28" y1="34" x2="42" y2="34" stroke="#5a8ab5" strokeWidth="1.5" opacity="0.4" />
        <line x1="28" y1="40" x2="38" y2="40" stroke="#5a8ab5" strokeWidth="1.5" opacity="0.4" />
        <circle cx="54" cy="46" r="12" fill="#5a8ab5" />
        <text x="49" y="51" fill="white" fontSize="14" fontWeight="bold">$</text>
        <path d="M28 46L32 50L40 42" stroke="#5a8ab5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    num: "3",
    title: "Approve Your Sample",
    desc: "We produce a sample for your sign-off. Check fit, fabric, and finish. Revise until it's perfect — then we go to production.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 80 80" fill="none">
        {/* T-shirt with magnifying glass */}
        <circle cx="40" cy="40" r="36" fill="#e6f0d6" />
        <path d="M28 28L18 36L24 40V58H52V40L58 36L48 28" stroke="#6a9a4a" strokeWidth="2" fill="white" />
        <path d="M28 28C28 28 33 24 38 24C43 24 48 28 48 28" stroke="#6a9a4a" strokeWidth="2" />
        <circle cx="54" cy="52" r="8" stroke="#6a9a4a" strokeWidth="2" fill="white" />
        <line x1="60" y1="58" x2="64" y2="62" stroke="#6a9a4a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M52 50L54 52L57 49" stroke="#6a9a4a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: "4",
    title: "Production & Delivery",
    desc: "Full production with regular photo updates. Every piece QC inspected, branded, packaged, and shipped to your door.",
    icon: (
      <svg width="56" height="56" viewBox="0 0 80 80" fill="none">
        {/* Package / shipping box */}
        <circle cx="40" cy="40" r="36" fill="#f0d6e6" />
        <path d="M20 32L40 22L60 32V52L40 62L20 52V32Z" stroke="#a05a7a" strokeWidth="2" fill="white" />
        <path d="M20 32L40 42L60 32" stroke="#a05a7a" strokeWidth="2" />
        <line x1="40" y1="42" x2="40" y2="62" stroke="#a05a7a" strokeWidth="2" />
        <path d="M30 27L50 37" stroke="#a05a7a" strokeWidth="1.5" opacity="0.4" />
        <path d="M34 48L40 52L46 48" stroke="#a05a7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M40 44V52" stroke="#a05a7a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section id="process" className="section-pad bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#b8977e] text-xs tracking-widest uppercase font-semibold mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            From Your Idea to Finished Product
          </h2>
          <p className="text-gray-500 leading-relaxed">
            A simple 4-step process. No experience needed — we guide you through everything.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="text-center group"
            >
              {/* Illustrated icon */}
              <div className="flex justify-center mb-5">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Step number + title */}
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="text-3xl font-bold text-gray-200">{step.num}</span>
                <h3 className="text-base font-semibold text-[#111827]">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed max-w-[250px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/dashboard/rfq/new"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111827] text-white text-sm font-semibold rounded-lg hover:bg-[#1f2937] transition-all"
          >
            Start Your Project — It&apos;s Free
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="text-gray-400 text-xs mt-3">No commitment. Get a quote first.</p>
        </div>
      </div>
    </section>
  );
}
