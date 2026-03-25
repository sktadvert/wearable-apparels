"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 px-6 lg:px-8 snap-section">
      <div className="absolute inset-0 bg-gradient-to-t from-[#c9a96e]/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-[#c9a96e] text-xs tracking-[0.25em] uppercase font-medium mb-6">
            Get Started
          </span>
          <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6">
            Let&apos;s Build
            <br />
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-white/35 max-w-lg mx-auto leading-relaxed">
            Ready to bring your designs to life? Drop us a message and
            we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-[2rem] p-8 md:p-12 space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-white/30 text-xs tracking-wider uppercase mb-2 block">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-white/15 focus:border-[#c9a96e]/50 focus:outline-none focus:bg-white/[0.06] transition-all text-sm"
              />
            </div>
            <div>
              <label className="text-white/30 text-xs tracking-wider uppercase mb-2 block">
                Email
              </label>
              <input
                type="email"
                placeholder="you@brand.com"
                className="w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-white/15 focus:border-[#c9a96e]/50 focus:outline-none focus:bg-white/[0.06] transition-all text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-white/30 text-xs tracking-wider uppercase mb-2 block">
              Brand Name
            </label>
            <input
              type="text"
              placeholder="Your brand"
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-white/15 focus:border-[#c9a96e]/50 focus:outline-none focus:bg-white/[0.06] transition-all text-sm"
            />
          </div>
          <div>
            <label className="text-white/30 text-xs tracking-wider uppercase mb-2 block">
              Tell us about your project
            </label>
            <textarea
              rows={5}
              placeholder="What are you looking to produce? Quantity, timeline, details..."
              className="w-full bg-white/[0.04] border border-white/[0.08] rounded-2xl px-5 py-4 text-white placeholder:text-white/15 focus:border-[#c9a96e]/50 focus:outline-none focus:bg-white/[0.06] transition-all resize-none text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-[#c9a96e] text-black font-bold rounded-2xl hover:bg-[#e0c992] transition-all hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(201,169,110,0.3)] text-sm tracking-wide"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { label: "Instagram", value: "@wearable_apparels", href: "https://instagram.com/wearable_apparels", icon: "M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zM12 15a3 3 0 110-6 3 3 0 010 6zM16.5 7.5a1 1 0 110-2 1 1 0 010 2z" },
            { label: "Email", value: "hello@wearableapparels.com", href: "mailto:hello@wearableapparels.com", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            { label: "WhatsApp", value: "Chat with us", href: "#", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass rounded-2xl p-6 text-center group hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center mx-auto mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
                  <path d={item.icon} />
                </svg>
              </div>
              <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-1">
                {item.label}
              </p>
              <p className="text-[#c9a96e] text-sm font-medium group-hover:text-[#e0c992] transition-colors">
                {item.value}
              </p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
