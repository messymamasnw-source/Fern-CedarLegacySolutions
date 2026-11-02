import { values } from "@/app/lib/site-data";

export default function AboutPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">About</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
            Practical support for homes that are full, busy, and running on empty.
          </h1>
          <p className="mt-5 text-lg leading-8 text-stone-600">
            Messy Mamas NW exists for the moments when the laundry is still folded in baskets, the donation pile is
            in the hallway, and the house needs a reset without shame or lectures. The philosophy is simple: real
            homes get messy, and help should feel respectful, reliable, and genuinely useful.
          </p>
        </div>

        <div className="rounded-3xl bg-[#f7efe9] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8a4d39]">Our approach</p>
          <p className="mt-4 text-base leading-7 text-stone-700">
            We serve families and households across Bellingham and surrounding Whatcom County communities with a
            warm, local, no-judgment style. The goal is not perfection; it is making a hard week feel a little more
            manageable.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map((value) => (
          <article key={value.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-900">{value.title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">{value.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
