export default function PrivacyPolicyPage() {
  return (
    <main className="section-spacing">
      <div className="container-width max-w-3xl">
        <a
          href="/"
          className="inline-flex h-11 items-center rounded-xl border border-(--color-border) bg-white px-4 text-sm font-medium"
        >
          Back to Home
        </a>

        <h1 className="mt-6 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-(--color-text-light)">
          Last updated: April 3, 2026
        </p>

        <section className="mt-8 space-y-6 text-[15px] leading-8 text-(--color-text-light)">
          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              Information We Collect
            </h2>
            <p>
              When you place an order, we may collect your name, phone number,
              delivery address, and other contact details shared by you through
              WhatsApp.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              How We Use Your Data
            </h2>
            <p>
              We use your information only for order confirmation, payment
              coordination, shipping communication, and customer support related to
              your purchase from Goldenwick.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              Payment Data
            </h2>
            <p>
              Goldenwick does not store your card, bank account, or UPI payment
              credentials. Payment handling is done through direct customer-provided
              methods and confirmations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              Third-Party Service
            </h2>
            <p>
              Orders are processed through WhatsApp, a service provided by Meta.
              Your use of WhatsApp is subject to Meta&apos;s own privacy terms and
              policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-(--color-text-dark)">
              Contact Us
            </h2>
            <p>
              For privacy-related concerns, contact us on WhatsApp or email at
              goldenwick@gmail.com.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
