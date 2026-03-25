"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-8">
      <div className="section-divider mb-32" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#b8977e] text-xs tracking-widest uppercase font-medium mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Ready to Manufacture?
            </h2>
            <p className="text-white/35 text-base leading-relaxed mb-10 max-w-md">
              Submit a quote request and we&apos;ll get back to you within 24 hours
              with pricing, timeline, and next steps.
            </p>

            {/* Quick CTA */}
            <Link
              href="/dashboard/rfq/new"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#b8977e] text-black text-sm font-semibold rounded-lg hover:bg-[#d4b896] transition-all mb-12"
            >
              Request a Quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                {
                  label: "Instagram",
                  value: "@wearable_apparels",
                  href: "https://instagram.com/wearable_apparels",
                },
                {
                  label: "Email",
                  value: "hello@wearableapparels.com",
                  href: "mailto:hello@wearableapparels.com",
                },
                {
                  label: "WhatsApp",
                  value: "Chat with us",
                  href: "#",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 py-3 group"
                >
                  <span className="text-white/15 text-xs w-20">{item.label}</span>
                  <span className="text-white/50 text-sm group-hover:text-[#b8977e] transition-colors">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form
              className="glass rounded-2xl p-8 lg:p-10 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-white/25 text-xs mb-2 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/15 focus:border-[#b8977e]/30 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-white/25 text-xs mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="you@brand.com"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/15 focus:border-[#b8977e]/30 focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/25 text-xs mb-2 block">Brand Name</label>
                <input
                  type="text"
                  placeholder="Your brand"
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/15 focus:border-[#b8977e]/30 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-white/25 text-xs mb-2 block">Project Details</label>
                <textarea
                  rows={4}
                  placeholder="What are you looking to produce? Quantity, timeline, details..."
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/15 focus:border-[#b8977e]/30 focus:outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#b8977e] text-black font-semibold text-sm rounded-lg hover:bg-[#d4b896] transition-all"
              >
                Send Message
              </button>
              <p className="text-white/15 text-xs text-center">
                Or submit a detailed request via our{" "}
                <Link href="/dashboard/rfq/new" className="text-[#b8977e]/60 hover:text-[#b8977e]">
                  quote form
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
