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
    setTimeout(() => { setSubmitted(false); setOpen(false); }, 2500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto p-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/50" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#eeeef5] w-full max-w-[550px] shadow-2xl my-4"
            style={{ borderRadius: "4px" }}
          >
            {/* Close */}
            <button onClick={() => setOpen(false)}
              className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-slate-500 hover:text-black transition-colors z-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {submitted ? (
              <div className="p-20 text-center bg-white m-5" style={{ borderRadius: "2px" }}>
                <div className="w-20 h-20 rounded-full bg-[#67e500] flex items-center justify-center mx-auto mb-6">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">Quote Submitted!</h3>
                <p className="text-slate-500">We will get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="p-5">
                <div className="bg-white p-10" style={{ borderRadius: "2px" }}>
                  <form onSubmit={handleSubmit}>
                    {/* Name + Email */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                      <input type="text" required placeholder="Your Name*"
                        className="w-full text-[15px] text-[#333] pb-3 bg-transparent border-b border-slate-300 focus:border-[#1a6b8a] focus:outline-none placeholder:text-slate-400" />
                      <input type="email" required placeholder="Your Email*"
                        className="w-full text-[15px] text-[#333] pb-3 bg-transparent border-b border-slate-300 focus:border-[#1a6b8a] focus:outline-none placeholder:text-slate-400" />
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-2 gap-8 mb-4">
                      <input type="tel" required placeholder="Your Phone No*"
                        className="w-full text-[15px] text-[#333] pb-3 bg-transparent border-b border-slate-300 focus:border-[#1a6b8a] focus:outline-none placeholder:text-slate-400" />
                      <input type="text" placeholder="Your Company`s Name(if any)*"
                        className="w-full text-[15px] text-[#333] pb-3 bg-transparent border-b border-slate-300 focus:border-[#1a6b8a] focus:outline-none placeholder:text-slate-400" />
                    </div>

                    {/* SMS notice */}
                    <p className="text-[#e74c3c] text-xs mb-6">
                      * The customer agrees to receive SMS/calls from +92-300-0836201
                    </p>

                    {/* Communication + Upload */}
                    <div className="grid grid-cols-2 gap-8 mb-6">
                      <div>
                        <p className="text-[13px] font-bold text-[#333] mb-3">Prefferred Mode of communication</p>
                        <div className="flex gap-3">
                          <label className="flex items-center gap-1.5 text-[12px] text-slate-600 cursor-pointer">
                            <input type="checkbox" className="w-3.5 h-3.5" /> Via E-mail
                          </label>
                          <label className="flex items-center gap-1.5 text-[12px] text-slate-600 cursor-pointer">
                            <input type="checkbox" className="w-3.5 h-3.5" /> Via Call
                          </label>
                          <label className="flex items-center gap-1.5 text-[12px] text-slate-600 cursor-pointer">
                            <input type="checkbox" className="w-3.5 h-3.5" /> Via Text
                          </label>
                        </div>
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-[#333] mb-3">Submit Your Design</p>
                        <input type="file" className="text-[12px] text-slate-600 file:mr-2 file:py-1 file:px-3 file:rounded file:border file:border-slate-300 file:text-[12px] file:bg-white file:text-slate-700" accept=".jpg,.png,.pdf,.ai" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mb-8">
                      <textarea rows={5} placeholder="Tell us about your brand"
                        className="w-full text-[15px] text-[#333] pb-3 bg-transparent border-b border-slate-300 focus:border-[#1a6b8a] focus:outline-none placeholder:text-slate-400 resize-none" />
                    </div>

                    {/* Captcha */}
                    <div className="mb-6">
                      <p className="text-[15px] font-bold text-[#333] mb-3">{captchaQ.a}+{captchaQ.b}=?</p>
                      <input type="text" required placeholder="Equal = ?" value={captcha}
                        onChange={(e) => setCaptcha(e.target.value)}
                        className="w-[220px] text-[15px] text-[#333] pb-3 bg-transparent border-b border-slate-300 focus:border-[#1a6b8a] focus:outline-none placeholder:text-slate-400" />
                    </div>

                    {/* reCAPTCHA style */}
                    <div className="flex items-center gap-3 p-3 border border-slate-300 rounded bg-[#f9f9f9] mb-8 w-[220px]">
                      <input type="checkbox" required className="w-5 h-5" />
                      <span className="text-[13px] text-slate-600 flex-1">I&apos;m not a robot</span>
                      <div className="flex flex-col items-center">
                        <svg width="24" height="24" viewBox="0 0 64 64"><path fill="#1c3aa9" d="M32 2a30 30 0 0 1 0 60v-8a22 22 0 0 0 0-44V2z"/><path fill="#4285f4" d="M32 2a30 30 0 0 0 0 60v-8a22 22 0 0 1 0-44V2z"/><path fill="#2d9f46" d="M32 62a30 30 0 0 1-21-9l6-6a22 22 0 0 0 15 7v8z"/><path fill="#f1bc00" d="M11 53A30 30 0 0 1 2 32h8a22 22 0 0 0 7 15l-6 6z"/></svg>
                        <span className="text-[7px] text-slate-400 mt-0.5">reCAPTCHA</span>
                        <span className="text-[6px] text-slate-400">Privacy - Terms</span>
                      </div>
                    </div>

                    {/* Submit */}
                    <button type="submit"
                      className="w-full py-4 bg-[#1a6b8a] text-white text-[15px] font-bold rounded hover:bg-[#15596f] transition-all">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
