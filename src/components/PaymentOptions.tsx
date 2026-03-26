"use client";

import { motion } from "framer-motion";

const payments = [
  { name: "Bank Transfer", logo: "https://img.icons8.com/fluency/96/bank-building.png" },
  { name: "Debit Card", logo: "https://img.icons8.com/fluency/96/bank-cards.png" },
  { name: "Western Union", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Western_Union_logo.svg/500px-Western_Union_logo.svg.png" },
  { name: "MoneyGram", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MoneyGram_Logo.svg/500px-MoneyGram_Logo.svg.png" },
  { name: "Ria", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Ria_Main_Logo_Descriptor_Color_RGB.png" },
  { name: "Payoneer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Payoneer_logo.svg/500px-Payoneer_logo.svg.png" },
  { name: "Remittance", logo: "https://img.icons8.com/fluency/96/money-transfer.png" },
];

export default function PaymentOptions() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl text-[#0f172a] text-center">
            Payment <span className="font-extrabold italic">Options</span>
          </h2>
        </motion.div>

        <div className="inline-flex flex-wrap items-center justify-center gap-5">
          {payments.map((p) => (
            <div
              key={p.name}
              className="w-[140px] h-[80px] rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#67e500]/30 transition-all p-3"
            >
              <img src={p.logo} alt={p.name} className="max-h-[40px] max-w-[110px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
