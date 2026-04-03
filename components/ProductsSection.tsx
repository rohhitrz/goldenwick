"use client";

import { motion } from "framer-motion";
import ImageWithFallback from "@/components/ImageWithFallback";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/constants/products";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function ProductsSection() {
  return (
    <section id="products" className="section-spacing bg-(--color-secondary)/35">
      <div className="container-width">
        <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">
          Our Candles
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {products.map((product) => (
            <motion.article
              key={product.id}
              variants={cardVariants}
              transition={{ duration: 0.45, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-card) shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover"
                />
                {product.tag ? (
                  <span className="absolute right-3 top-3 rounded-full bg-(--color-primary) px-3 py-1 text-xs font-semibold text-(--color-text-dark)">
                    {product.tag}
                  </span>
                ) : null}
              </div>

              <div className="space-y-3 p-5">
                <h3 className="text-[18px] font-semibold">{product.name}</h3>
                <p
                  className="text-sm leading-6 text-(--color-text-light)"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {product.description}
                </p>
                <p className="text-lg font-bold">₹{product.price}</p>

                <WhatsAppButton
                  productName={product.name}
                  className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-(--color-primary) px-4 text-sm font-semibold text-white transition hover:bg-(--color-accent)"
                >
                  Buy Now
                </WhatsAppButton>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
