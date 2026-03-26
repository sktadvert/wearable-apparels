"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Quote request submitted! We'll get back to you within 24 hours.");
  };

  const inputClass = "w-full bg-white text-[#0f172a] text-base px-5 py-4 rounded-lg border-none focus:ring-2 focus:ring-[#67e500] focus:outline-none placeholder:text-slate-400";

  return (
    <section id="quote" className="bg-black py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-3">
            Get a <span className="font-extrabold italic">Free Quote</span>
          </h2>
          <p className="text-slate-400 text-base">
            Contact us today to receive your <span className="text-[#67e500]">free</span> quote! We&apos;re here to help you find the best solution tailored to your needs.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClass}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClass}
            />
            <input
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={inputClass}
            />
          </div>
          <textarea
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputClass + " resize-none"}
          />
          <div className="text-center pt-2">
            <button
              type="submit"
              className="px-10 py-4 bg-[#67e500] text-black text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-[#5acc00] transition-all"
            >
              Ask a Question
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
