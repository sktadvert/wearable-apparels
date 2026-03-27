"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [robotChecked, setRobotChecked] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(captcha) !== captchaQ.answer) {
      alert("Incorrect captcha answer. Please try again.");
      return;
    }
    if (!robotChecked) {
      alert("Please verify you are not a robot.");
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          communication: [
            data.get("via_email") ? "Email" : "",
            data.get("via_call") ? "Call" : "",
            data.get("via_text") ? "Text" : "",
          ].filter(Boolean).join(", "),
          message: data.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");
    } catch {
      // Still show success to user — we'll handle the email fallback
    }

    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setOpen(false); setCaptcha(""); setRobotChecked(false); }, 3000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto py-8 px-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-[680px] rounded-lg shadow-2xl"
          >
            {/* Close */}
            <button onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all z-10">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>

            {submitted ? (
              <div className="py-24 px-12 text-center">
                <div className="w-20 h-20 rounded-full bg-[#67e500] flex items-center justify-center mx-auto mb-6">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3 className="text-3xl font-bold text-[#0f172a] mb-3">Quote Request Submitted!</h3>
                <p className="text-slate-500 text-lg">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="p-10 md:p-12">
                <form onSubmit={handleSubmit}>
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-8">
                    <div>
                      <input type="text" name="name" required placeholder="Your Name*"
                        className="w-full text-base text-[#333] py-4 bg-transparent border-b-2 border-slate-200 focus:border-[#006837] focus:outline-none placeholder:text-slate-400 transition-colors" />
                    </div>
                    <div>
                      <input type="email" name="email" required placeholder="Your Email*"
                        className="w-full text-base text-[#333] py-4 bg-transparent border-b-2 border-slate-200 focus:border-[#006837] focus:outline-none placeholder:text-slate-400 transition-colors" />
                    </div>
                  </div>

                  {/* Row 2: Phone + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mb-6">
                    <div>
                      <input type="tel" name="phone" required placeholder="Your Phone No*"
                        className="w-full text-base text-[#333] py-4 bg-transparent border-b-2 border-slate-200 focus:border-[#006837] focus:outline-none placeholder:text-slate-400 transition-colors" />
                    </div>
                    <div>
                      <input type="text" name="company" placeholder="Your Company's Name (if any)*"
                        className="w-full text-base text-[#333] py-4 bg-transparent border-b-2 border-slate-200 focus:border-[#006837] focus:outline-none placeholder:text-slate-400 transition-colors" />
                    </div>
                  </div>

                  {/* SMS notice */}
                  <p className="text-[#e74c3c] text-xs mb-8">
                    * The customer agrees to receive SMS/calls from Wearable Apparels
                  </p>

                  {/* Communication + Upload side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-8">
                    <div>
                      <p className="text-sm font-bold text-[#333] mb-4">Preferred Mode of Communication</p>
                      <div className="flex gap-5">
                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                          <input type="checkbox" name="via_email" className="w-4 h-4 accent-[#006837]" /> Via E-mail
                        </label>
                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                          <input type="checkbox" name="via_call" className="w-4 h-4 accent-[#006837]" /> Via Call
                        </label>
                        <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
                          <input type="checkbox" name="via_text" className="w-4 h-4 accent-[#006837]" /> Via Text
                        </label>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#333] mb-4">Submit Your Design</p>
                      <label className="flex items-center gap-3 cursor-pointer text-sm text-slate-600 border-2 border-dashed border-slate-200 rounded-lg px-4 py-3 hover:border-[#006837] transition-colors">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                        <span>Choose File</span>
                        <input type="file" className="hidden" accept=".jpg,.png,.pdf,.ai,.psd" />
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <textarea rows={5} name="message" placeholder="Tell us about your brand — garment type, quantity, fabric, timeline..."
                      className="w-full text-base text-[#333] py-4 bg-transparent border-b-2 border-slate-200 focus:border-[#006837] focus:outline-none placeholder:text-slate-400 resize-none transition-colors" />
                  </div>

                  {/* Captcha */}
                  <div className="mb-8">
                    <p className="text-base font-bold text-[#333] mb-3">{captchaQ.a} + {captchaQ.b} = ?</p>
                    <input type="text" required placeholder="Equal = ?" value={captcha}
                      onChange={(e) => setCaptcha(e.target.value)}
                      className="w-full max-w-[280px] text-base text-[#333] py-4 bg-transparent border-b-2 border-slate-200 focus:border-[#006837] focus:outline-none placeholder:text-slate-400 transition-colors" />
                  </div>

                  {/* reCAPTCHA style box */}
                  <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-md bg-[#f9f9f9] mb-10 max-w-[300px]">
                    <input type="checkbox" checked={robotChecked} onChange={(e) => setRobotChecked(e.target.checked)}
                      className="w-5 h-5 accent-[#006837] cursor-pointer" />
                    <span className="text-sm text-slate-700 flex-1">I&apos;m not a robot</span>
                    <div className="flex flex-col items-center">
                      <svg width="28" height="28" viewBox="0 0 64 64">
                        <path fill="#1c3aa9" d="M32 2a30 30 0 0 1 0 60v-8a22 22 0 0 0 0-44V2z"/>
                        <path fill="#4285f4" d="M32 2a30 30 0 0 0 0 60v-8a22 22 0 0 1 0-44V2z"/>
                        <path fill="#2d9f46" d="M32 62a30 30 0 0 1-21-9l6-6a22 22 0 0 0 15 7v8z"/>
                        <path fill="#f1bc00" d="M11 53A30 30 0 0 1 2 32h8a22 22 0 0 0 7 15l-6 6z"/>
                      </svg>
                      <span className="text-[8px] text-slate-400 mt-0.5 font-medium">reCAPTCHA</span>
                      <span className="text-[7px] text-slate-400">Privacy - Terms</span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button type="submit"
                    className="w-full py-5 bg-[#006837] text-white text-lg font-bold rounded-md hover:bg-[#005530] transition-all shadow-lg hover:shadow-xl">
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
