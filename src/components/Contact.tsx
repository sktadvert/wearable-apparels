"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#b8977e] text-xs tracking-widest uppercase font-semibold mb-3">
              Get In Touch
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-5">
              Ready to Start Manufacturing?
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
              Whether you have a finished design or just an idea — reach out and
              we&apos;ll help you bring it to life. First quote is always free.
            </p>

            <Link
              href="/dashboard/rfq/new"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#111827] text-white text-sm font-semibold rounded-lg hover:bg-[#1f2937] transition-all mb-10"
            >
              Submit a Quote Request
            </Link>

            <div className="space-y-3 pt-8 border-t border-gray-100">
              {[
                { label: "Instagram", value: "@wearable_apparels", href: "https://instagram.com/wearable_apparels" },
                { label: "Email", value: "hello@wearableapparels.com", href: "mailto:hello@wearableapparels.com" },
                { label: "WhatsApp", value: "Chat with us", href: "#" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 py-2 group"
                >
                  <span className="text-gray-300 text-xs w-20 shrink-0">{item.label}</span>
                  <span className="text-gray-600 text-sm group-hover:text-[#b8977e] transition-colors">
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form
              className="bg-[#f8f7f4] rounded-2xl p-8 lg:p-10 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-lg font-semibold text-[#111827] mb-2">Send us a message</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-xs mb-1.5 block">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#111827] placeholder:text-gray-300 focus:border-[#b8977e] focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="text-gray-400 text-xs mb-1.5 block">Email</label>
                  <input
                    type="email"
                    placeholder="you@brand.com"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#111827] placeholder:text-gray-300 focus:border-[#b8977e] focus:outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1.5 block">Brand Name</label>
                <input
                  type="text"
                  placeholder="Your brand"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#111827] placeholder:text-gray-300 focus:border-[#b8977e] focus:outline-none transition-all"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1.5 block">Tell us about your project</label>
                <textarea
                  rows={4}
                  placeholder="What would you like to manufacture? Garment type, quantity, timeline..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-[#111827] placeholder:text-gray-300 focus:border-[#b8977e] focus:outline-none transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-[#111827] text-white font-semibold text-sm rounded-lg hover:bg-[#1f2937] transition-all"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
