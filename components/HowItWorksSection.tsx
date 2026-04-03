"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Browse our candles",
    description: "Pick your favourite scent from our handcrafted collection.",
  },
  {
    number: "02",
    title: "Click Buy Now",
    description: "You will be redirected to WhatsApp with your product details.",
  },
  {
    number: "03",
    title: "Pay & Confirm",
    description:
      "Share your address after UPI or QR payment confirmation to complete your order.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="section-spacing">
      <div className="container-width">
        <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">
          How to Order
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.14 },
            },
          }}
          className="grid gap-5 md:grid-cols-3"
        >
          {steps.map((step) => (
            <motion.article
              key={step.number}
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl border border-(--color-border) bg-white p-6 shadow-sm"
            >
              <p className="text-4xl font-bold text-[var(--color-primary)]">{step.number}</p>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-(--color-text-light)">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
