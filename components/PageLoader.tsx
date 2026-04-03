"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background"
        >
          <motion.div
            animate={{ y: [0, -8, 0], opacity: [0.85, 1, 0.85] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-(--color-secondary)"
          >
            <svg viewBox="0 0 24 24" className="h-9 w-9 text-[var(--color-primary)]" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12.8 1.2c.4 2.5-.4 4.1-1.8 5.6-1.6 1.6-3.6 3.5-3.6 6.5 0 2.6 2 4.7 4.6 4.7s4.6-2.1 4.6-4.7c0-1.9-.8-3.6-2.4-5.3-.8-.8-1.4-1.8-1.4-2.8 0-1.1.4-2.1 0-4Z"
              />
            </svg>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
