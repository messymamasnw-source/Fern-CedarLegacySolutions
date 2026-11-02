import Link from "next/link";

import { services } from "@/app/lib/site-data";

export default function ServicesPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">Services</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          Household help designed for real life.
        </h1>
        <p className="mt-5 text-lg text-stone-600">
          A soft-launch service menu focused on the jobs that tend to pile up fast: laundry,
          sorting, donation drop-off, and the reset work that helps a home feel manageable again.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="flex h-full flex-col rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-stone-900">{service.title}</h2>
              <span className="rounded-full bg-[#f3e0d7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#8a4d39]">
                {service.status}
              </span>
            </div>

            <p className="mt-4 text-base leading-7 text-stone-600">{service.summary}</p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Includes</h3>
                <ul className="mt-3 space-y-2 text-sm text-stone-700">
                  {service.includes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Typical exclusions</h3>
                <ul className="mt-3 space-y-2 text-sm text-stone-700">
                  {service.excludes.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center justify-center rounded-full border border-[#b65d3d] px-4 py-2 text-sm font-semibold text-[#9a4e32] transition hover:bg-[#f7efe9]"
            >
              Request this service
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
