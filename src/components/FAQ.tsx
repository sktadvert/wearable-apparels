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
      a: "Every garment goes through multi-stage QC inspection — from raw material check, through in-line production monitoring, to final piece-by-piece inspection before packing. We check stitching, measurements, color accuracy, print quality, and overall finish. Photos and videos of finished products are shared before shipping."
    },
    {
      q: "Do you provide production updates?",
      a: "Absolutely. We send regular photo and video updates at key stages — fabric sourcing, cutting, sewing, printing/embroidery, QC, and packing. You know exactly where your order stands at all times."
    },
    {
      q: "What happens if there is a quality issue with my order?",
      a: "We stand behind our work. If any garments don't meet the agreed specifications, we will remake them at no extra cost. We photograph every batch before shipping so issues are caught early. Our goal is long-term partnerships, not one-time transactions."
    },
    {
      q: "Can you handle large volume orders?",
      a: "Yes. While our MOQ starts at 50 pieces, our facility can handle orders up to 10,000+ units per month. We scale production based on your needs — whether it is a 50-piece test run or a 5,000-piece seasonal collection."
    },
    {
      q: "Do you offer tech pack or design assistance?",
      a: "Yes. If you have a rough sketch, reference image, or even just an idea — our design team can help create a tech pack with detailed specs. We can also work from your existing tech packs if you already have them."
    },
  ],
  customization: [
    {
      q: "What printing methods do you offer?",
      a: "We offer screen printing (plastisol & water-based), DTF (Direct-to-Film), DTG (Direct-to-Garment), puff printing, sublimation, heat transfer, and discharge printing. Each method has its strengths — we help you choose the best one for your design and budget."
    },
    {
      q: "Do you offer embroidery services?",
      a: "Yes. We provide flat embroidery, 3D puff embroidery, chain stitch, and appliqué work. Our embroidery machines handle intricate logos and designs with precision. We can embroider on t-shirts, hoodies, caps, jackets, and more."
    },
    {
      q: "Can I add my own brand labels and tags?",
      a: "Absolutely — private labeling is one of our core services. We create custom woven labels, printed labels, hang tags, care labels, and size tags. Your brand identity is applied to every piece so it looks like it came from your own factory."
    },
    {
      q: "What fabrics and materials do you work with?",
      a: "We work with cotton (ring-spun, combed, organic), polyester, tri-blend, French terry, fleece, nylon, spandex blends, mesh, satin, and more. If you need a specific fabric, we can source it. We also provide fabric swatches before production."
    },
    {
      q: "Can you do custom packaging?",
      a: "Yes. We offer branded polybags, tissue paper wrapping, custom mailer boxes, hang tags, stickers, and thank-you cards. Your unboxing experience is part of your brand — we help make it memorable."
    },
    {
      q: "How do you ensure accurate color matching?",
      a: "We use Pantone color references for precise matching. For prints, we do color proofs before full production. We also send sample photos under natural lighting so you can verify colors before we proceed."
    },
  ],
  shipping: [
    {
      q: "Do you ship internationally?",
      a: "Yes, we ship worldwide. We have shipped to the USA, UK, Canada, Australia, Germany, UAE, and 6+ other countries. We handle all export documentation and customs paperwork."
    },
    {
      q: "What shipping methods do you offer?",
      a: "We offer air freight (DHL, FedEx, UPS — 5-7 days), sea freight (for large orders — 15-30 days), and economy options. Shipping costs depend on order weight, volume, and destination. We provide shipping quotes alongside production quotes."
    },
    {
      q: "Can I use my own shipping account or freight forwarder?",
      a: "Yes, many clients prefer to use their own DHL/FedEx/UPS accounts or third-party freight forwarders. We can ship to your forwarder's warehouse or directly to your door — whatever works best for your business."
    },
    {
      q: "How can I track my shipment?",
      a: "Once your order ships, we provide a tracking number and carrier details. You can track your package in real-time. We also notify you at key milestones — when it is dispatched, in transit, and delivered."
    },
    {
      q: "Do you handle customs and duties?",
      a: "We prepare all export documentation including commercial invoices, packing lists, and certificates of origin. Import duties and taxes at your destination are the buyer's responsibility — but we guide you on what to expect based on your country."
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
    <section id="faq" className="py-20 sm:py-28 bg-[#0f172a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#67e500] text-sm font-semibold tracking-[3px] uppercase mb-3">
            Got Questions?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Everything you need to know about working with Wearable Apparels.
            Can&apos;t find what you&apos;re looking for? Reach out on WhatsApp.
          </p>
        </div>

        {/* Category Tabs — horizontal centered pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => switchCategory(cat.id)}
              className={`
                px-5 py-2.5 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-semibold
                tracking-wide transition-all duration-200
                ${
                  activeCategory === cat.id
                    ? "bg-[#67e500] text-[#0f172a] shadow-[0_0_18px_rgba(103,229,0,0.25)]"
                    : "border border-slate-600 text-slate-400 hover:border-slate-400 hover:text-white"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Cards */}
        <div className="flex flex-col gap-4">
          {faqs[activeCategory]?.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`
                  rounded-xl transition-all duration-200
                  ${isOpen ? "bg-white/[0.07] ring-1 ring-[#67e500]/20" : "bg-white/[0.04] hover:bg-white/[0.06]"}
                `}
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 sm:px-8 sm:py-6 text-left"
                >
                  <span
                    className={`text-[15px] sm:text-base font-medium leading-snug ${
                      isOpen ? "text-white" : "text-slate-200"
                    }`}
                  >
                    {faq.q}
                  </span>

                  {/* Toggle icon */}
                  <span
                    className={`
                      shrink-0 w-8 h-8 rounded-full flex items-center justify-center
                      text-lg font-light transition-all duration-200 select-none
                      ${isOpen ? "bg-[#67e500] text-[#0f172a]" : "bg-white/10 text-slate-400"}
                    `}
                  >
                    {isOpen ? "\u2212" : "+"}
                  </span>
                </button>

                {/* Answer — expand/collapse */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 pb-5 sm:px-8 sm:pb-6">
                    <p className="text-slate-400 text-sm sm:text-[15px] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-500 text-sm mb-4">Still have questions?</p>
          <a
            href="https://wa.me/923000836201"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-sm sm:text-base font-semibold rounded-full hover:bg-[#1eba58] hover:shadow-[0_0_30px_rgba(37,211,102,0.35)] transition-all duration-200"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
