"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#f8e6bd_0%,#fffdf7_55%,#fffdf7_100%)]" />

      <motion.div
        animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror" }}
        className="pointer-events-none absolute top-24 h-40 w-40 rounded-full bg-[radial-gradient(circle,#f2cd80_0%,rgba(255,255,255,0)_70%)] blur-xl"
      />

      <div className="container-width relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-(--color-secondary)"
        >
          <svg viewBox="0 0 24 24" className="h-9 w-9 text-[var(--color-primary)]" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12.8 1.2c.4 2.5-.4 4.1-1.8 5.6-1.6 1.6-3.6 3.5-3.6 6.5 0 2.6 2 4.7 4.6 4.7s4.6-2.1 4.6-4.7c0-1.9-.8-3.6-2.4-5.3-.8-.8-1.4-1.8-1.4-2.8 0-1.1.4-2.1 0-4Z"
            />
          </svg>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-4xl leading-tight font-bold md:text-6xl"
        >
          Handcrafted Candles for Every Moment
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-(--color-text-light) md:text-lg"
        >
          Explore our artisan candle collection - made with love in India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="#products"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-(--color-primary) px-6 text-sm font-semibold text-white transition hover:bg-(--color-accent)"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="inline-flex h-11 items-center justify-center rounded-xl border border-(--color-border) bg-white px-6 text-sm font-semibold text-(--color-text-dark) transition hover:border-[var(--color-primary)]"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
