import Link from "next/link";

import { StructuredData } from "@/app/components/structured-data";
import { faqs, howItWorks, serviceHighlights, services, siteConfig } from "@/app/lib/site-data";

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  areaServed: ["Bellingham, WA", "Ferndale, WA", "Whatcom County, WA"],
  url: "https://www.messymamasnw.com",
  priceRange: "Varies",
  serviceType: [
    "Laundry pickup and delivery",
    "Donation drop-off",
    "Decluttering and home reset assistance",
    "Light junk removal",
  ],
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={businessSchema} />

      <main className="flex-1">
        <section className="section-shell py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">
                Local household support
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                A calmer home starts with the right kind of help.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-stone-600">
                Messy Mamas NW helps Bellingham-area households catch up on laundry, donation sorting, small reset
                projects, and the clutter that makes everyday routines feel heavier than they need to.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#b65d3d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9a4e32]"
                >
                  Request help
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-800 transition hover:border-stone-400 hover:bg-stone-50"
                >
                  Explore services
                </Link>
              </div>

              <p className="mt-5 text-sm text-stone-500">Serving Bellingham, Ferndale, and surrounding Whatcom County</p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a4d39]">Why people reach out</p>
              <ul className="mt-5 space-y-4 text-base text-stone-700">
                {serviceHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f3e0d7] text-xs font-bold text-[#8a4d39]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="section-shell py-16">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">Launch services</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                The support you need, without the shame or complexity.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.slice(0, 4).map((service) => (
                <article key={service.title} className="rounded-3xl border border-stone-200 bg-[#f9f6f2] p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a4d39]">{service.status}</p>
                  <h3 className="mt-3 text-xl font-semibold text-stone-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-700">{service.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">How it works</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Simple steps, zero pressure.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e0d7] text-sm font-bold text-[#8a4d39]">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-stone-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-700">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f7efe9]">
          <div className="section-shell py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">Why this feels different</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
                  Support that respects your home and your time.
                </h2>
                <p className="mt-5 text-lg leading-8 text-stone-600">
                  There is no shame in needing extra help. The model is built around practical assistance, clear
                  boundaries, and a process that empowers a home to feel manageable again.
                </p>
              </div>

              <div className="space-y-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">A judgment-free place to start</p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">
                    You can describe the job in plain language, share a few details, and get guidance on the next step without the pressure of a formal quote or a complicated booking flow.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Built for soft launch</p>
                  <p className="mt-2 text-sm leading-7 text-stone-700">
                    The service list is intentionally focused and flexible while the business learns which workflows and scopes fit real local demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell py-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Common questions before you start.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question} className="group rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none text-lg font-semibold text-stone-900">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-stone-700">{faq.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-8">
            <Link href="/faq" className="text-sm font-semibold text-[#9a4e32]">
              View all FAQs →
            </Link>
          </div>
        </section>

        <section className="section-shell pb-16">
          <div className="rounded-[2rem] bg-stone-900 px-6 py-8 text-white sm:px-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-stone-300">Ready when you are</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight">Get a little breathing room back.</h2>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-200"
              >
                Request help
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
