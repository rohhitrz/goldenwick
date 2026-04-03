"use client";

import { motion } from "framer-motion";
import { getGeneralWhatsAppLink } from "@/utils/whatsapp";

export default function FloatingWhatsAppButton() {
  return (
    <motion.a
      href={getGeneralWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
        <path
          fill="currentColor"
          d="M19.1 17.8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.5 8.5 0 0 1-2.5-1.5 9.3 9.3 0 0 1-1.7-2.1c-.2-.3 0-.5.2-.7l.5-.6.3-.5c.1-.2 0-.4 0-.6s-.7-1.9-1-2.6c-.2-.7-.5-.6-.7-.6H9c-.2 0-.6 0-.9.3s-1.2 1.1-1.2 2.8 1.3 3.2 1.5 3.4c.2.2 2.5 3.9 6.1 5.3.8.3 1.4.5 1.9.6.8.2 1.6.2 2.2.1.7-.1 1.8-.8 2-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4Z"
        />
        <path
          fill="currentColor"
          d="M16 3.3A12.6 12.6 0 0 0 5.2 22.2L3 29l7-2.2A12.7 12.7 0 1 0 16 3.3Zm0 22.9c-1.8 0-3.5-.5-5-1.4l-.4-.2-4.1 1.3 1.3-4-.3-.4A9.4 9.4 0 1 1 16 26.2Z"
        />
      </svg>
    </motion.a>
  );
}
