export default function TermsPage() {
  return (
    <main className="section-spacing">
      <div className="container-width max-w-3xl">
        <a
          href="/"
          className="inline-flex h-11 items-center rounded-xl border border-(--color-border) bg-white px-4 text-sm font-medium"
        >
          Back to Home
        </a>

        <h1 className="mt-6 text-4xl font-bold">Terms & Conditions / Refund Policy</h1>
        <p className="mt-3 text-sm text-(--color-text-light)">
          Last updated: April 3, 2026
        </p>

        <section className="mt-8 space-y-6 text-[15px] leading-8 text-(--color-text-light)">
          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              Order Confirmation
            </h2>
            <p>
              Orders are confirmed only after payment is received and confirmation
              is completed over WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              No Refund Policy
            </h2>
            <p>
              All sales are final. No refunds will be issued once payment is made.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              Exchange for Damaged Goods
            </h2>
            <p>
              Exchanges are possible only for items damaged during delivery.
              Customers must share clear photo proof within 24 hours of receiving
              the package.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              Delivery Timeline
            </h2>
            <p>
              Standard delivery timelines are 3-5 business days. We are not
              responsible for courier-related delays once the package is handed over
              for shipping.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              Acceptance of Terms
            </h2>
            <p>
              By purchasing from Goldenwick, you acknowledge and agree to all terms
              listed on this page.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
