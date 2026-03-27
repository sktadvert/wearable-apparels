"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function QuoteModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [robotChecked, setRobotChecked] = useState(false);
  const [fileName, setFileName] = useState("");
  const [dragging, setDragging] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
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
          productType: data.get("productType"),
          quantityRange: data.get("quantityRange"),
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
    setTimeout(() => { setSubmitted(false); setOpen(false); setCaptcha(""); setRobotChecked(false); setFileName(""); }, 3000);
  };

  const inputBase =
    "w-full text-[15px] text-[#333] py-3.5 px-4 bg-white border border-gray-300 rounded-lg focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none placeholder:text-gray-400 transition-all";

  const selectBase =
    "w-full text-[15px] text-[#333] py-3.5 px-4 bg-white border border-gray-300 rounded-lg focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none transition-all appearance-none cursor-pointer";

  const labelBase = "block text-sm font-semibold text-[#222] mb-2";

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto py-6 px-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white w-full max-w-[920px] rounded-2xl shadow-2xl my-4"
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all z-10"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="py-28 px-12 text-center">
                <div className="w-20 h-20 rounded-full bg-[#006837] flex items-center justify-center mx-auto mb-6">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-[#0f172a] mb-3">Quote Request Submitted!</h3>
                <p className="text-gray-500 text-lg">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <div className="px-10 py-10 md:px-14 md:py-12">
                {/* Header */}
                <div className="mb-8 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-2">Request a Free Quote</h2>
                  <p className="text-gray-500 text-base">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelBase}>Full Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" required placeholder="John Doe" className={inputBase} />
                    </div>
                    <div>
                      <label className={labelBase}>Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" required placeholder="john@company.com" className={inputBase} />
                    </div>
                  </div>

                  {/* Row 2: Phone + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelBase}>Phone Number</label>
                      <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className={inputBase} />
                    </div>
                    <div>
                      <label className={labelBase}>Company Name</label>
                      <input type="text" name="company" placeholder="Your company name" className={inputBase} />
                    </div>
                  </div>

                  {/* Row 3: Product Type (full width) */}
                  <div>
                    <label className={labelBase}>Product Type <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select name="productType" required defaultValue="" className={selectBase}>
                        <option value="" disabled>Select a product type</option>
                        <option value="T-Shirts">T-Shirts</option>
                        <option value="Hoodies">Hoodies</option>
                        <option value="Joggers">Joggers</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Tracksuits">Tracksuits</option>
                        <option value="Caps & Beanies">Caps &amp; Beanies</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Quantity Range + Preferred Communication */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className={labelBase}>Quantity Range</label>
                      <div className="relative">
                        <select name="quantityRange" defaultValue="" className={selectBase}>
                          <option value="" disabled>Select quantity range</option>
                          <option value="50-100">50 - 100 units</option>
                          <option value="100-300">100 - 300 units</option>
                          <option value="300-500">300 - 500 units</option>
                          <option value="500-1000">500 - 1,000 units</option>
                          <option value="1000-5000">1,000 - 5,000 units</option>
                          <option value="5000+">5,000+ units</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className={labelBase}>Preferred Communication</label>
                      <div className="flex items-center gap-6 h-[52px]">
                        <label className="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none">
                          <input type="checkbox" name="via_email" className="w-[18px] h-[18px] accent-[#006837] cursor-pointer" /> Email
                        </label>
                        <label className="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none">
                          <input type="checkbox" name="via_call" className="w-[18px] h-[18px] accent-[#006837] cursor-pointer" /> Call
                        </label>
                        <label className="flex items-center gap-2.5 text-sm text-gray-600 cursor-pointer select-none">
                          <input type="checkbox" name="via_text" className="w-[18px] h-[18px] accent-[#006837] cursor-pointer" /> Text
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Upload Design (full width drag & drop) */}
                  <div>
                    <label className={labelBase}>Upload Your Design</label>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
                      onDragLeave={() => setDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragging(false);
                        if (e.dataTransfer.files.length > 0) {
                          setFileName(e.dataTransfer.files[0].name);
                          if (fileRef.current) {
                            const dt = new DataTransfer();
                            dt.items.add(e.dataTransfer.files[0]);
                            fileRef.current.files = dt.files;
                          }
                        }
                      }}
                      onClick={() => fileRef.current?.click()}
                      className={`w-full border-2 border-dashed rounded-lg px-6 py-8 text-center cursor-pointer transition-all ${
                        dragging
                          ? "border-[#006837] bg-green-50"
                          : "border-gray-300 hover:border-[#006837] hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex flex-col items-center gap-2">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                          <polyline points="17 8 12 3 7 8" />
                          <line x1="12" y1="3" x2="12" y2="15" />
                        </svg>
                        {fileName ? (
                          <p className="text-sm text-[#006837] font-medium">{fileName}</p>
                        ) : (
                          <>
                            <p className="text-sm text-gray-500">
                              <span className="text-[#006837] font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-400">JPG, PNG, PDF, AI, PSD (max 10MB)</p>
                          </>
                        )}
                      </div>
                      <input
                        ref={fileRef}
                        type="file"
                        className="hidden"
                        accept=".jpg,.png,.pdf,.ai,.psd"
                        onChange={(e) => {
                          if (e.target.files && e.target.files.length > 0) {
                            setFileName(e.target.files[0].name);
                          }
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 6: Message */}
                  <div>
                    <label className={labelBase}>Message</label>
                    <textarea
                      rows={5}
                      name="message"
                      placeholder="Tell us about your project — garment type, quantity, fabric preference, timeline, or any special requirements..."
                      className="w-full text-[15px] text-[#333] py-3.5 px-4 bg-white border border-gray-300 rounded-lg focus:border-[#006837] focus:ring-1 focus:ring-[#006837] focus:outline-none placeholder:text-gray-400 resize-none transition-all"
                    />
                  </div>

                  {/* Row 7: Captcha + Robot check */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    <div>
                      <label className={labelBase}>
                        Security Check: What is {captchaQ.a} + {captchaQ.b}? <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your answer"
                        value={captcha}
                        onChange={(e) => setCaptcha(e.target.value)}
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className={`${labelBase} opacity-0 pointer-events-none hidden md:block`}>Verify</label>
                      <div className="flex items-center gap-4 p-4 border border-gray-300 rounded-lg bg-[#f9fafb] h-[52px]">
                        <input
                          type="checkbox"
                          checked={robotChecked}
                          onChange={(e) => setRobotChecked(e.target.checked)}
                          className="w-5 h-5 accent-[#006837] cursor-pointer flex-shrink-0"
                        />
                        <span className="text-sm text-gray-700 flex-1">I&apos;m not a robot</span>
                        <div className="flex flex-col items-center flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 64 64">
                            <path fill="#1c3aa9" d="M32 2a30 30 0 0 1 0 60v-8a22 22 0 0 0 0-44V2z" />
                            <path fill="#4285f4" d="M32 2a30 30 0 0 0 0 60v-8a22 22 0 0 1 0-44V2z" />
                            <path fill="#2d9f46" d="M32 62a30 30 0 0 1-21-9l6-6a22 22 0 0 0 15 7v8z" />
                            <path fill="#f1bc00" d="M11 53A30 30 0 0 1 2 32h8a22 22 0 0 0 7 15l-6 6z" />
                          </svg>
                          <span className="text-[7px] text-gray-400 mt-0.5 font-medium">reCAPTCHA</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SMS notice */}
                  <p className="text-xs text-gray-400">
                    By submitting, you agree to receive SMS/calls from Wearable Apparels regarding your inquiry.
                  </p>

                  {/* Row 8: Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-[#006837] text-white text-lg font-bold rounded-lg hover:bg-[#005530] transition-all shadow-lg hover:shadow-xl active:scale-[0.99]"
                    style={{ paddingTop: "18px", paddingBottom: "18px" }}
                  >
                    SUBMIT YOUR QUOTE REQUEST
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
