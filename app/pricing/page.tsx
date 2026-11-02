import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">Pricing</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          Flexible quotes, not blanket pricing.
        </h1>
        <p className="mt-5 text-lg leading-8 text-stone-600">
          The launch model is intentionally quote-based. Every job is different, and the final scope depends on
          the size of the task, the area involved, the access conditions, and the amount of labor required.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">What can affect the estimate</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-700">
            <li>• Volume of laundry, clutter, or donation items</li>
            <li>• Access points, parking, or entry logistics</li>
            <li>• Level of sorting or staging needed</li>
            <li>• Time required for travel or setup</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">Current approach</h2>
          <p className="mt-4 text-sm leading-7 text-stone-700">
            During the pilot phase, pricing stays conversational and custom. The goal is to build a fair, transparent
            model that reflects real service needs and the realities of local household work.
          </p>
        </div>

        <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">Next step</h2>
          <p className="mt-4 text-sm leading-7 text-stone-700">
            Request a quote with the basics of the job and we will follow up with next steps, scope review, and a
            fit-for-service conversation before any commitment is made.
          </p>
        </div>
      </div>

      <div className="mt-12 rounded-3xl bg-[#f7efe9] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a4d39]">Ready to talk?</p>
        <h2 className="mt-3 text-3xl font-bold text-stone-900">Tell us what needs attention and we will help scope it.</h2>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-[#b65d3d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9a4e32]"
        >
          Request a quote
        </Link>
      </div>
    </main>
  );
}
