"use client";

import { FormEvent, useMemo, useState } from "react";
import { getGeneralWhatsAppLink } from "@/utils/whatsapp";

const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";

function formatPhone(number: string) {
  if (!number) return "Not configured";
  const country = number.slice(0, 2);
  const local = number.slice(2);
  return `+${country} ${local.slice(0, 5)} ${local.slice(5)}`;
}

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const whatsappLink = useMemo(() => getGeneralWhatsAppLink(), []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-spacing bg-(--color-secondary)/35">
      <div className="container-width">
        <h2 className="mb-10 text-center text-3xl font-semibold md:text-4xl">
          Get in Touch
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-(--color-border) bg-white p-6 md:p-8">
            <h3 className="text-2xl font-semibold">Goldenwick</h3>
            <p className="mt-5 text-sm text-(--color-text-light)">
              <strong>WhatsApp:</strong> {formatPhone(rawNumber)}
            </p>
            <p className="mt-2 text-sm text-(--color-text-light)">
              <strong>Email:</strong> goldenwick@gmail.com
            </p>
            <p className="mt-2 text-sm text-(--color-text-light)">
              <strong>Location:</strong> India
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-xl bg-[#25D366] px-6 text-sm font-semibold text-white"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-(--color-border) bg-white p-6 md:p-8">
            {submitted ? (
              <p className="rounded-xl bg-(--color-secondary) p-4 text-sm text-(--color-accent)">
                Thanks! We'll reach out via WhatsApp soon.
              </p>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="h-11 w-full rounded-xl border border-(--color-border) px-3 text-sm outline-none focus:border-(--color-primary)"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="h-11 w-full rounded-xl border border-(--color-border) px-3 text-sm outline-none focus:border-(--color-primary)"
              />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Message"
                className="w-full rounded-xl border border-(--color-border) px-3 py-2 text-sm outline-none focus:border-(--color-primary)"
              />
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-(--color-primary) px-6 text-sm font-semibold text-white transition hover:bg-(--color-accent)"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
