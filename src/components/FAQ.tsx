"use client";

import { useState } from "react";

const categories = [
  { id: "ordering", label: "Ordering & Pricing" },
  { id: "production", label: "Production & Quality" },
  { id: "customization", label: "Customization" },
  { id: "shipping", label: "Shipping & Logistics" },
];

const faqs: Record<string, { q: string; a: string }[]> = {
  ordering: [
    {
      q: "What is the minimum order quantity (MOQ)?",
      a: "Our MOQ starts at just 50 pieces per style. Each color variation within a style requires a minimum of 50 units. This makes us ideal for independent brands testing new designs or doing limited drops."
    },
    {
      q: "How do I place an order with Wearable Apparels?",
      a: "Simply click 'Get Started' and fill out the quote form with your requirements — garment type, quantity, fabric preference, and any customization needed. Our team reviews your request and sends a detailed quote within 24 hours. You can also reach us directly on WhatsApp at 0300 0836201."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept bank transfers (wire), Western Union, MoneyGram, Payoneer, Ria, and debit card payments. For new clients, we typically require 50% upfront and 50% before shipping. Repeat clients may qualify for flexible payment terms."
    },
    {
      q: "How much does it cost to manufacture custom clothing?",
      a: "Pricing depends on the garment type, fabric, quantity, and level of customization. A basic cotton t-shirt starts differently than a fully custom embroidered hoodie. We provide detailed quotes with no hidden fees — setup charges, printing costs, labeling, and packaging are all itemized upfront."
    },
    {
      q: "Do you charge for samples?",
      a: "Yes, samples are charged separately as they require individual attention and resources. Sample costs vary by complexity — typically 2-3x the unit production price. However, sample costs are often adjusted or credited once you proceed with a bulk order."
    },
    {
      q: "Can I modify my order after placing it?",
      a: "Minor modifications are possible before production begins. Once fabric is cut and production starts, changes become difficult and may incur additional charges. We always confirm every detail with you before starting production to avoid surprises."
    },
  ],
  production: [
    {
      q: "How long does production take?",
      a: "Standard production takes 2-3 weeks after sample approval. First-time samples typically take 5-7 business days. Rush orders may be accommodated depending on current production capacity — reach out to discuss your timeline."
    },
    {
      q: "How do you ensure quality control?",
      a: "Every garment goes through multi-stage QC inspection — from raw material check, through in-line production monitoring, to final piece-by-piece inspection before packing. We check stitching, measurements, color accuracy, print quality, and overall finish."
    },
    {
      q: "Do you provide production updates?",
      a: "Absolutely. We send regular photo and video updates at key stages — fabric sourcing, cutting, sewing, printing/embroidery, QC, and packing. You know exactly where your order stands at all times."
    },
    {
      q: "What happens if there is a quality issue?",
      a: "We stand behind our work. If any garments don't meet the agreed specifications, we will remake them at no extra cost. We photograph every batch before shipping so issues are caught early."
    },
    {
      q: "Can you handle large volume orders?",
      a: "Yes. While our MOQ starts at 50 pieces, our facility can handle orders up to 10,000+ units per month. We scale production based on your needs."
    },
    {
      q: "Do you offer tech pack or design assistance?",
      a: "Yes. If you have a rough sketch, reference image, or even just an idea — our design team can help create a tech pack with detailed specs. We can also work from your existing tech packs."
    },
  ],
  customization: [
    {
      q: "What printing methods do you offer?",
      a: "We offer screen printing (plastisol & water-based), DTF (Direct-to-Film), DTG (Direct-to-Garment), puff printing, sublimation, heat transfer, and discharge printing."
    },
    {
      q: "Do you offer embroidery services?",
      a: "Yes. We provide flat embroidery, 3D puff embroidery, chain stitch, and appliqué work. Our embroidery machines handle intricate logos and designs with precision."
    },
    {
      q: "Can I add my own brand labels and tags?",
      a: "Absolutely — private labeling is one of our core services. We create custom woven labels, printed labels, hang tags, care labels, and size tags."
    },
    {
      q: "What fabrics and materials do you work with?",
      a: "We work with cotton (ring-spun, combed, organic), polyester, tri-blend, French terry, fleece, nylon, spandex blends, mesh, satin, and more."
    },
    {
      q: "Can you do custom packaging?",
      a: "Yes. We offer branded polybags, tissue paper wrapping, custom mailer boxes, hang tags, stickers, and thank-you cards."
    },
    {
      q: "How do you ensure accurate color matching?",
      a: "We use Pantone color references for precise matching. For prints, we do color proofs before full production."
    },
  ],
  shipping: [
    {
      q: "Do you ship internationally?",
      a: "Yes, we ship worldwide. We have shipped to the USA, UK, Canada, Australia, Germany, UAE, and 6+ other countries. We handle all export documentation and customs paperwork."
    },
    {
      q: "What shipping methods do you offer?",
      a: "We offer air freight (DHL, FedEx, UPS — 5-7 days), sea freight (for large orders — 15-30 days), and economy options."
    },
    {
      q: "Can I use my own shipping account?",
      a: "Yes, many clients prefer to use their own DHL/FedEx/UPS accounts or third-party freight forwarders. We can ship to your forwarder's warehouse or directly to your door."
    },
    {
      q: "How can I track my shipment?",
      a: "Once your order ships, we provide a tracking number and carrier details. You can track your package in real-time."
    },
    {
      q: "Do you handle customs and duties?",
      a: "We prepare all export documentation including commercial invoices, packing lists, and certificates of origin. Import duties and taxes at your destination are the buyer's responsibility."
    },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("ordering");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const switchCategory = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(null);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 lg:py-32 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-16 lg:gap-20">

          {/* LEFT — Heading + Category Nav */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-[#67e500] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Support
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-10">
              Everything you need to know about working with us.
            </p>

            {/* Category Nav */}
            <div className="flex flex-row lg:flex-col gap-1.5 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => switchCategory(cat.id)}
                  className={`
                    px-4 py-2.5 rounded-md text-[13px] font-medium text-left
                    transition-all duration-200
                    ${
                      activeCategory === cat.id
                        ? "bg-[#67e500]/10 text-[#67e500]"
                        : "text-slate-500 hover:text-slate-300 hover:bg-white/[0.03]"
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — Accordion */}
          <div>
            {faqs[activeCategory]?.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`
                    border-b border-white/[0.06]
                    ${i === 0 ? "border-t border-white/[0.06]" : ""}
                  `}
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="w-full flex items-center justify-between gap-8 py-6 text-left group"
                  >
                    <span
                      className={`text-[15px] font-medium leading-relaxed transition-colors duration-200 ${
                        isOpen ? "text-white" : "text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {faq.q}
                    </span>

                    {/* Plus / Minus toggle */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#67e500] text-black"
                          : "bg-white/[0.06] text-slate-500 group-hover:bg-white/[0.1]"
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      >
                        {isOpen ? (
                          <path d="M2 6h8" />
                        ) : (
                          <>
                            <path d="M6 2v8" />
                            <path d="M2 6h8" />
                          </>
                        )}
                      </svg>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"}
                    `}
                  >
                    <p className="text-slate-500 text-sm leading-[1.8] pr-12">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
