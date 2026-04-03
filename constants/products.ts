export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tag: string | null;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Lavender Dreams",
    description:
      "A calming blend of French lavender and soft vanilla. Perfect for bedtime rituals.",
    price: 499,
    image: "/images/candle-lavender.jpg",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Sandalwood Serenity",
    description:
      "Rich earthy sandalwood with a hint of rose. Inspired by Indian temples.",
    price: 549,
    image: "/images/candle-sandalwood.jpg",
    tag: "New Arrival",
  },
  {
    id: 3,
    name: "Citrus Bloom",
    description:
      "Bright and energising with orange peel, lemon, and a touch of jasmine.",
    price: 449,
    image: "/images/candle-citrus.jpg",
    tag: null,
  },
  {
    id: 4,
    name: "Midnight Oud",
    description: "Deep, smoky oud with warm amber and musk. An evening luxury.",
    price: 649,
    image: "/images/candle-oud.jpg",
    tag: "Premium",
  },
];
