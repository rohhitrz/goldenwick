"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 text-[var(--color-primary)]">
      <path
        fill="currentColor"
        d="M12.8 1.2c.4 2.5-.4 4.1-1.8 5.6-1.6 1.6-3.6 3.5-3.6 6.5 0 2.6 2 4.7 4.6 4.7s4.6-2.1 4.6-4.7c0-1.9-.8-3.6-2.4-5.3-.8-.8-1.4-1.8-1.4-2.8 0-1.1.4-2.1 0-4ZM12 22c-4 0-7.2-3.2-7.2-7.2 0-2.9 1.4-4.9 3.1-6.7.6-.6 1.2-1.2 1.6-1.9.2 2.2 1.5 3.7 2.8 5 1.6 1.6 2.5 2.8 2.5 4.7A2.8 2.8 0 0 1 12 18.7a2.8 2.8 0 0 1-2.8-2.8H7.8A4.2 4.2 0 0 0 12 20.1a4.2 4.2 0 0 0 4.2-4.2c0-2.4-1.2-4.1-2.9-5.8-.8-.8-1.5-1.6-1.9-2.6-.2.4-.5.8-.8 1.2-1.2 1.4-2.7 3-2.7 5.4 0 2.2 1.8 4 4 4s4-1.8 4-4c0-2.5-1.1-4.4-2.8-6.2.7-1.2 1.1-2.6.9-4.1 2.9 2.1 4.8 5.1 4.8 8.9A7.2 7.2 0 0 1 12 22Z"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[color:var(--color-bg)]/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-width flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <FlameIcon />
          <span className="text-2xl font-semibold">Goldenwick</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-(--color-text-light) transition-colors hover:text-(--color-accent)"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-(--color-border) bg-white md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="block h-0.5 w-5 bg-[var(--color-text-dark)]" />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.div
              className="fixed inset-0 bg-black/35"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col gap-6 bg-background p-6 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-(--color-border)"
                aria-label="Close navigation menu"
              >
                ✕
              </button>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-(--color-border) bg-white px-4 py-3 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
