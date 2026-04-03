"use client";

import { motion } from "framer-motion";
import { getWhatsAppOrderLink } from "@/utils/whatsapp";

type WhatsAppButtonProps = {
  productName: string;
  className?: string;
  children?: React.ReactNode;
};

export default function WhatsAppButton({
  productName,
  className,
  children,
}: WhatsAppButtonProps) {
  return (
    <motion.a
      href={getWhatsAppOrderLink(productName)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children ?? "Buy Now"}
    </motion.a>
  );
}
