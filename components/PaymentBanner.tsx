export default function PaymentBanner() {
  return (
    <section className="section-spacing py-10">
      <div className="container-width">
        <div className="rounded-3xl border border-[#c28735] bg-[linear-gradient(120deg,#E0B66C,#C9973A)] p-7 text-(--color-text-dark) shadow-lg md:p-10">
          <h2 className="text-3xl font-semibold">Easy & Secure Payments</h2>
          <p className="mt-4 max-w-4xl text-sm leading-7 text-[#2b241c] md:text-base">
            We accept UPI, Google Pay, PhonePe, and bank transfers. Once you click
            Buy Now, share your order on WhatsApp. After payment confirmation via
            QR or UPI, send us your delivery details and we will ship your candles
            within 3-5 business days.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full bg-white/70 px-4 py-2">UPI</span>
            <span className="rounded-full bg-white/70 px-4 py-2">GPay</span>
            <span className="rounded-full bg-white/70 px-4 py-2">PhonePe</span>
            <span className="rounded-full bg-white/70 px-4 py-2">NEFT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
