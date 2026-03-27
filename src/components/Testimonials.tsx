"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "framer-motion";

const brands = [
  { name: "EMPXRA", style: "font-black tracking-[0.15em]" },
  { name: "AINES SPORTS", style: "font-extrabold tracking-wide" },
  { name: "GALAXY CLUB", style: "font-black italic" },
  { name: "ARCHIVES MOTORSPORT", style: "font-extrabold tracking-tight" },
  { name: "HOLY SPIRIT", style: "font-black tracking-[0.2em]" },
  { name: "HUSTLERS PRAY", style: "font-extrabold" },
  { name: "HOT N BADDIES", style: "font-black tracking-tight" },
  { name: "FOREVER ZONED", style: "font-extrabold tracking-[0.15em]" },
  { name: "VALE FOREVER", style: "font-black tracking-wide" },
  { name: "SNGL TRN", style: "font-extrabold tracking-[0.3em]" },
  { name: "DRIP DISTRICT", style: "font-black italic" },
  { name: "NOCTURNAL", style: "font-extrabold tracking-wider" },
];

const chats = [
  {
    name: "Matthew",
    status: "online",
    time: "2:34 PM",
    messages: [
      { from: "them", text: "yo", t: "2:30 PM" },
      { from: "them", text: "u guys do custom hoodies right", t: "2:30 PM" },
      { from: "us", text: "yeah bro we do", t: "2:33 PM" },
      { from: "us", text: "what u need?", t: "2:33 PM" },
      { from: "them", text: "200 hoodies w embroidered logo. heavyweight fleece", t: "2:34 PM" },
      { from: "them", text: "whats the price looking like", t: "2:34 PM" },
      { from: "us", text: "depends on the design. send me ur artwork ill get u exact pricing tmrw", t: "2:36 PM" },
      { from: "them", text: "bet sending now", t: "2:36 PM" },
      { from: "them", text: "📷 IMG-20250915-WA0034.jpg", t: "2:37 PM", type: "image" },
      { from: "us", text: "got it 👍 ill have the quote ready by tmrw", t: "2:40 PM" },
      { from: "them", text: "bro shipment came in today", t: "3 weeks later" },
      { from: "them", text: "these are crazy good", t: "" },
      { from: "them", text: "way better than what we were getting before ngl", t: "" },
      { from: "us", text: "glad u fw them 🤝", t: "" },
      { from: "them", text: "def reordering. probably 300 this time", t: "" },
    ],
  },
  {
    name: "Christopher James Walker",
    status: "last seen today at 11:45 AM",
    time: "11:22 AM",
    messages: [
      { from: "them", text: "hi there", t: "11:20 AM" },
      { from: "them", text: "im starting a tshirt brand but honestly have no clue about manufacturing lol", t: "11:20 AM" },
      { from: "us", text: "haha no worries we get that a lot", t: "11:22 AM" },
      { from: "us", text: "just send ur design even if its rough and we handle everything from there", t: "11:22 AM" },
      { from: "them", text: "wait fr? like fabric and everything?", t: "11:23 AM" },
      { from: "us", text: "yep. fabric sourcing cutting sewing printing labels packaging shipping", t: "11:24 AM" },
      { from: "us", text: "full service", t: "11:24 AM" },
      { from: "them", text: "thats actually perfect", t: "11:25 AM" },
      { from: "us", text: "📞 Voice call (2:34)", t: "3 days later", type: "call" },
      { from: "them", text: "YOOO the samples came 😍", t: "10 days later" },
      { from: "them", text: "these look way better than i expected", t: "" },
      { from: "them", text: "approve for production lets goooo", t: "" },
    ],
  },
  {
    name: "D. Thompson",
    status: "online",
    time: "5:47 PM",
    messages: [
      { from: "them", text: "hey quick question", t: "5:40 PM" },
      { from: "them", text: "can u do 100 bomber jackets in like 2 weeks? we have a popup coming up", t: "5:41 PM" },
      { from: "us", text: "2 weeks is tight", t: "5:44 PM" },
      { from: "us", text: "but if u approve sample by thursday we can do it", t: "5:45 PM" },
      { from: "them", text: "done. sending design rn", t: "5:46 PM" },
      { from: "them", text: "sample looks good. approved ✅", t: "2 days later" },
      { from: "them", text: "jackets arrived this morning", t: "13 days later" },
      { from: "them", text: "every single one is on point", t: "" },
      { from: "them", text: "u guys fr saved our event thanks 🙏", t: "" },
    ],
  },
  {
    name: "KB",
    status: "last seen yesterday at 8:20 PM",
    time: "9:15 AM",
    messages: [
      { from: "them", text: "sup", t: "9:10 AM" },
      { from: "them", text: "do u make beanies", t: "9:10 AM" },
      { from: "us", text: "yeah we do jacquard embroidered and printed", t: "9:13 AM" },
      { from: "them", text: "nice. whats the MOQ", t: "9:14 AM" },
      { from: "us", text: "50 pcs", t: "9:14 AM" },
      { from: "them", text: "thats actually reasonable most places want 500+", t: "9:15 AM" },
      { from: "them", text: "sending artwork gimme a sec", t: "9:15 AM" },
      { from: "us", text: "📷 sample_beanie_v2.jpg", t: "5 days later", type: "image" },
      { from: "them", text: "looks fire. approved ✅", t: "" },
      { from: "them", text: "yo they sold out in 3 days lmaooo", t: "4 weeks later" },
      { from: "them", text: "need like 130 more same design", t: "" },
      { from: "us", text: "on it 🧢", t: "" },
    ],
  },
  {
    name: "Austin Reed III",
    status: "typing...",
    time: "3:08 PM",
    messages: [
      { from: "them", text: "hey man", t: "3:02 PM" },
      { from: "them", text: "so we got the first batch and the quality is solid", t: "3:03 PM" },
      { from: "them", text: "but the neck label placement is slightly off on a few pieces", t: "3:03 PM" },
      { from: "us", text: "oh really? send me pics ill check", t: "3:05 PM" },
      { from: "them", text: "📷 [image]", t: "3:06 PM" },
      { from: "us", text: "i see it. thats on us. well fix it for the next batch no charge", t: "3:07 PM" },
      { from: "them", text: "appreciate that fr", t: "3:08 PM" },
      { from: "them", text: "2nd batch just arrived and everything is perfect this time 👌", t: "2 weeks later" },
      { from: "them", text: "this is why we keep coming back", t: "" },
    ],
  },
  {
    name: "Nathaniel Williams",
    status: "online",
    time: "7:30 PM",
    messages: [
      { from: "them", text: "been tryna find a manufacturer for months", t: "7:22 PM" },
      { from: "them", text: "everyone wants minimum 500 pcs or the prices are crazy", t: "7:23 PM" },
      { from: "us", text: "we start at 50 pcs", t: "7:25 PM" },
      { from: "them", text: "wait actually?", t: "7:25 PM" },
      { from: "us", text: "yeah. same quality same attention. we built this for small brands", t: "7:27 PM" },
      { from: "them", text: "ok im sold whats the process", t: "7:28 PM" },
      { from: "us", text: "send design > we quote > sample > approve > production > ship", t: "7:29 PM" },
      { from: "us", text: "usually 2-3 weeks total", t: "7:29 PM" },
      { from: "them", text: "placing our 3rd order btw", t: "3 months later" },
      { from: "them", text: "not going anywhere else lol", t: "" },
    ],
  },
  {
    name: "J",
    status: "last seen today at 10:30 AM",
    time: "10:45 AM",
    messages: [
      { from: "them", text: "whats good", t: "10:40 AM" },
      { from: "them", text: "need a quote for tracksuits", t: "10:40 AM" },
      { from: "them", text: "matching top and bottom. custom fabric", t: "10:41 AM" },
      { from: "us", text: "what fabric u thinking?", t: "10:43 AM" },
      { from: "them", text: "french terry 400gsm", t: "10:43 AM" },
      { from: "us", text: "we can source that. how many sets?", t: "10:44 AM" },
      { from: "them", text: "100 to start. if quality is good well do 500+", t: "10:45 AM" },
      { from: "us", text: "perfect. send me the designs and ill have pricing by tmrw morning", t: "10:45 AM" },
      { from: "them", text: "📞 Missed voice call", t: "6 weeks later", type: "missed_call" },
      { from: "them", text: "yo sorry missed ur call", t: "" },
      { from: "them", text: "just wanted to say the tracksuits are selling crazy rn", t: "" },
      { from: "them", text: "need another 80 sets same spec", t: "" },
    ],
  },
  {
    name: "Tom",
    status: "last seen 2 days ago",
    time: "4:15 PM",
    messages: [
      { from: "them", text: "hey i was referred by kyle", t: "4:10 PM" },
      { from: "them", text: "he said u guys did his beanies", t: "4:10 PM" },
      { from: "us", text: "oh yeah kyle! good dude. what can we help with?", t: "4:12 PM" },
      { from: "them", text: "need joggers. slim fit. with side stripe", t: "4:13 PM" },
      { from: "them", text: "around 150 pcs", t: "4:13 PM" },
      { from: "us", text: "we can def do that. what fabric?", t: "4:14 PM" },
      { from: "them", text: "whatever u recommend for premium feel", t: "4:15 PM" },
      { from: "us", text: "320gsm french terry. soft hand feel, holds shape well after wash", t: "4:15 PM" },
      { from: "them", text: "sounds good lets do it", t: "4:16 PM" },
    ],
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14 flex flex-col items-center"
        >
          <p className="text-[#67e500] text-base md:text-lg tracking-widest uppercase font-bold mb-3">Trusted Partners</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0f172a] mb-4">
            Brands We&apos;ve Worked With
          </h2>
          <p className="text-slate-500 text-base">
            Real conversations with our clients — from first message to repeat orders.
          </p>
        </motion.div>

        {/* Auto-scrolling brand logos */}
        <div className="relative mb-16">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-12 w-max">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} className="flex items-center justify-center h-16 px-6 shrink-0 opacity-25 hover:opacity-100 transition-opacity duration-300">
                <span className={`text-xl md:text-2xl text-[#0f172a] ${brand.style} select-none`}>{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp-style chat cards */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          speed={600}
        >
          {chats.map((chat, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#0b141a] rounded-2xl overflow-hidden h-[320px] sm:h-[360px] flex flex-col">
                {/* WhatsApp header */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#67e500] flex items-center justify-center text-black text-xs font-bold">
                    {chat.name[0]}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold blur-[3px] select-none">{chat.name}</p>
                    <p className="text-[#8696a0] text-[10px]">{chat.status}</p>
                  </div>
                  <div className="flex gap-4 text-[#8696a0]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z"/></svg>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7a2 2 0 10-.001-4.001A2 2 0 0012 7zm0 2a2 2 0 10-.001 3.999A2 2 0 0012 9zm0 6a2 2 0 10-.001 3.999A2 2 0 0012 15z"/></svg>
                  </div>
                </div>

                {/* Chat body */}
                <div className="flex-1 px-3 py-3 space-y-2 overflow-hidden" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"400\" height=\"400\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cdefs%3E%3Cpattern id=\"p\" width=\"40\" height=\"40\" patternUnits=\"userSpaceOnUse\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"0.5\" fill=\"%23ffffff08\"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\"400\" height=\"400\" fill=\"%23060d11\"/%3E%3Crect width=\"400\" height=\"400\" fill=\"url(%23p)\"/%3E%3C/svg%3E')" }}>
                  {chat.messages.map((msg, j) => (
                    <div key={j}>
                      {msg.t && msg.t.includes("later") && (
                        <div className="text-center my-2">
                          <span className="text-[9px] bg-[#182229] text-[#8696a0] px-3 py-1 rounded-full">{msg.t}</span>
                        </div>
                      )}
                      {(msg as any).type === "call" ? (
                        <div className="flex justify-start">
                          <div className="bg-[#1f2c34] rounded-lg px-3 py-2 flex items-center gap-3 rounded-tl-none">
                            <div className="w-8 h-8 rounded-full bg-[#005c4b] flex items-center justify-center shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#67e500"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                            </div>
                            <div>
                              <p className="text-[#e9edef] text-[11px] font-medium">Voice call</p>
                              <p className="text-[#8696a0] text-[9px]">{msg.text.replace("📞 ", "")}</p>
                            </div>
                          </div>
                        </div>
                      ) : (msg as any).type === "missed_call" ? (
                        <div className="flex justify-start">
                          <div className="bg-[#1f2c34] rounded-lg px-3 py-2 flex items-center gap-3 rounded-tl-none">
                            <div className="w-8 h-8 rounded-full bg-[#3b1015] flex items-center justify-center shrink-0">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="#ef4444"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                            </div>
                            <div>
                              <p className="text-[#ef4444] text-[11px] font-medium">Missed voice call</p>
                              <p className="text-[#8696a0] text-[9px]">Tap to call back</p>
                            </div>
                            <span className="text-[8px] text-[#8696a0] ml-auto">{msg.t && !msg.t.includes("later") ? msg.t : ""}</span>
                          </div>
                        </div>
                      ) : (msg as any).type === "image" ? (
                        <div className={`flex ${msg.from === "us" ? "justify-end" : "justify-start"}`}>
                          <div className={`max-w-[85%] px-2 py-2 rounded-lg ${msg.from === "us" ? "bg-[#005c4b] rounded-tr-none" : "bg-[#1f2c34] rounded-tl-none"}`}>
                            <div className="bg-[#0b141a] rounded-md w-[180px] h-[100px] flex items-center justify-center mb-1">
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                            </div>
                            <p className="text-[10px] text-[#8696a0]">{msg.text}</p>
                          </div>
                        </div>
                      ) : (
                        <div className={`flex ${msg.from === "us" ? "justify-end" : "justify-start"}`}>
                          <div className={`max-w-[85%] px-3 py-1.5 rounded-lg text-[12px] leading-relaxed ${
                            msg.from === "us"
                              ? "bg-[#005c4b] text-[#e9edef] rounded-tr-none"
                              : "bg-[#1f2c34] text-[#e9edef] rounded-tl-none"
                          }`}>
                            {msg.text}
                            {msg.t && !msg.t.includes("later") && msg.t !== "" && (
                              <span className="text-[8px] text-[#8696a0] ml-2 float-right mt-1">
                                {msg.t}
                                {msg.from === "us" && " ✓✓"}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
