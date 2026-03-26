"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaQ] = useState(() => {
    const a = Math.floor(Math.random() * 8) + 2;
    const b = Math.floor(Math.random() * 8) + 2;
    return { a, b, answer: a + b };
  });

  useEffect(() => {
    const handler = () => setOpen(true);
    document.addEventListener("openQuoteModal", handler);
    return () => document.removeEventListener("openQuoteModal", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(captcha) !== captchaQ.answer) {
      alert("Incorrect captcha answer. Please try again.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false);
    }, 2500);
  };

  const inputClass = "w-full text-[#333] text-[15px] px-0 py-4 bg-transparent border-b-2 border-slate-200 focus:border-[#006837] focus:outline-none placeholder:text-slate-400 transition-all";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl w-full max-w-[700px] max-h-[92vh] overflow-y-auto shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-all z-10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {submitted ? (
              <div className="p-16 text-center">
                <div className="w-20 h-20 rounded-full bg-[#67e500] flex items-center justify-center mx-auto mb-6">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-3xl font-bold text-[#0f172a] mb-3">Quote Submitted!</h3>
                <p className="text-slate-500 text-lg">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-2 gap-8">
                    <input type="text" required placeholder="Your Name*" className={inputClass} />
                    <input type="email" required placeholder="Your Email*" className={inputClass} />
                  </div>

                  {/* Row 2: Phone + Company */}
                  <div className="grid grid-cols-2 gap-8">
                    <input type="tel" required placeholder="Your Phone No*" className={inputClass} />
                    <input type="text" placeholder="Your Company's Name (if any)*" className={inputClass} />
                  </div>

                  {/* SMS consent */}
                  <p className="text-[#67e500] text-xs font-medium">
                    * The customer agrees to receive SMS/calls from Wearable Apparels
                  </p>

                  {/* Row 3: Communication + File Upload */}
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <p className="text-sm font-bold text-[#0f172a] mb-4">Preferred Mode of Communication</p>
                      <div className="flex gap-5">
                        {["Via E-mail", "Via Call", "Via Text"].map((mode) => (
                          <label key={mode} className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-[#006837] rounded" />
                            {mode}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0f172a] mb-4">Submit Your Design</p>
                      <label className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 rounded-lg cursor-pointer hover:bg-slate-200 transition-all text-sm text-slate-600 border border-slate-200">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                        Choose File
                        <input type="file" className="hidden" accept=".jpg,.png,.pdf,.ai,.psd" />
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <textarea
                    rows={5}
                    placeholder="Tell us about your brand"
                    className={inputClass + " resize-none"}
                  />

                  {/* Captcha */}
                  <div>
                    <p className="text-sm font-bold text-[#0f172a] mb-3">{captchaQ.a} + {captchaQ.b} = ?</p>
                    <input
                      type="text"
                      required
                      placeholder="Equal = ?"
                      value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      className="w-[250px] text-[#333] text-[15px] px-0 py-3 bg-transparent border-b-2 border-slate-200 focus:border-[#006837] focus:outline-none placeholder:text-slate-400 transition-all"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full py-5 bg-[#006837] text-white text-base font-bold rounded-lg hover:bg-[#005530] transition-all mt-4"
                  >
                    Submit
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
