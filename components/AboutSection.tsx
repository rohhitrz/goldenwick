"use client";

import { motion } from "framer-motion";
import ImageWithFallback from "@/components/ImageWithFallback";

const features = ["Natural Wax", "Hand Poured", "Made in India"];

export default function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <div className="container-width">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-3xl font-semibold md:text-4xl"
        >
          Our Story
        </motion.h2>

        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-(--color-border) bg-white"
          >
            <ImageWithFallback
              src="/images/about.jpg"
              alt="Goldenwick artisan candle making"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-base leading-8 text-(--color-text-light)">
              Goldenwick began as a small family dream to create candles that feel
              warm, soulful, and personal. Every candle is hand poured in small
              batches using quality natural wax blends and carefully layered
              fragrance notes. We believe everyday spaces deserve beauty and calm,
              and every order is crafted with love in India.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {features.map((feature) => (
                <span
                  key={feature}
                  className="inline-flex items-center rounded-full border border-(--color-border) bg-(--color-secondary) px-4 py-2 text-sm font-medium text-(--color-accent)"
                >
                  {feature}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
