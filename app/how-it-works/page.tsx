import { howItWorks } from "@/app/lib/site-data";

export default function HowItWorksPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">How it works</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          A simple process for a messy moment.
        </h1>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {howItWorks.map((step, index) => (
          <article key={step.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e0d7] text-sm font-bold text-[#8a4d39]">
              {index + 1}
            </div>
            <h2 className="mt-5 text-xl font-semibold text-stone-900">{step.title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">{step.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
