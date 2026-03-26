"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="bg-[#111111] py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Get a <span className="font-extrabold italic">Free Quote</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Contact us today to receive your <span className="text-[#67e500] font-semibold">free</span> quote! We&apos;re here to help you find the best solution tailored to your needs.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white text-[#111] text-[15px] px-5 py-4 rounded-lg border-2 border-transparent focus:border-[#67e500] focus:outline-none placeholder:text-slate-400 transition-all"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white text-[#111] text-[15px] px-5 py-4 rounded-lg border-2 border-transparent focus:border-[#67e500] focus:outline-none placeholder:text-slate-400 transition-all"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-white text-[#111] text-[15px] px-5 py-4 rounded-lg border-2 border-transparent focus:border-[#67e500] focus:outline-none placeholder:text-slate-400 transition-all"
            />
            <input
              type="text"
              placeholder="Company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-white text-[#111] text-[15px] px-5 py-4 rounded-lg border-2 border-transparent focus:border-[#67e500] focus:outline-none placeholder:text-slate-400 transition-all"
            />
          </div>
          <textarea
            rows={6}
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-white text-[#111] text-[15px] px-5 py-4 rounded-lg border-2 border-transparent focus:border-[#67e500] focus:outline-none placeholder:text-slate-400 transition-all resize-none"
          />
          <div className="text-center pt-4">
            {submitted ? (
              <div className="inline-flex items-center gap-2 px-10 py-4 bg-[#67e500] text-black text-sm font-bold uppercase tracking-wider rounded-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                Submitted Successfully!
              </div>
            ) : (
              <button
                type="submit"
                className="px-12 py-4 bg-[#67e500] text-black text-sm font-bold uppercase tracking-wider rounded-lg hover:bg-[#5acc00] transition-all hover:shadow-lg hover:shadow-[#67e500]/20"
              >
                Ask a Question
              </button>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
