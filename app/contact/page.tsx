import { ContactForm } from "@/app/components/contact-form";

export default function ContactPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">Contact</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          Tell us what needs attention.
        </h1>
        <p className="mt-5 text-lg leading-8 text-stone-600">
          The contact form is the easiest place to start. Share the service you need, the scope of the work, and
          any access notes that will help build a realistic next step.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
        <ContactForm />

        <aside className="space-y-5">
          <div className="rounded-3xl bg-[#f7efe9] p-6">
            <h2 className="text-xl font-semibold text-stone-900">What to include</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-stone-700">
              <li>• The service you are asking about</li>
              <li>• A rough description of what needs attention</li>
              <li>• Your location or ZIP code</li>
              <li>• Timing preferences or urgency</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-900">Service area</h2>
            <p className="mt-3 text-sm leading-7 text-stone-700">
              Bellingham, Ferndale, and nearby Whatcom County communities, with outside-area requests reviewed on a
              case-by-case basis.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
