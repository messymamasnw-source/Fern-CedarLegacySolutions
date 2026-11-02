import { faqs } from "@/app/lib/site-data";

export default function FaqPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">FAQ</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          Questions before you request a little help?
        </h1>
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-3xl border border-stone-200 bg-white p-5 shadow-sm">
            <summary className="cursor-pointer list-none text-lg font-semibold text-stone-900">
              {faq.question}
            </summary>
            <p className="mt-4 text-sm leading-7 text-stone-700">{faq.answer}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
