export const getWhatsAppOrderLink = (productName: string) => {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = encodeURIComponent(
    `Hi! I'd like to order "${productName}" from Goldenwick. Please share the payment details.`,
  );

  return `https://wa.me/${number}?text=${message}`;
};

export const getGeneralWhatsAppLink = () => {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message = encodeURIComponent(
    "Hi, I would like to place an order with Goldenwick.",
  );

  return `https://wa.me/${number}?text=${message}`;
};
