"use client";

import { useState } from "react";

import { services } from "@/app/lib/site-data";

const initialForm = {
  name: "",
  email: "",
  service: services[0].title,
  zip: "",
  preferredWindow: "",
  summary: "",
  company: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof typeof initialForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (form.company.trim()) {
      setStatus("error");
      setMessage("Your request could not be submitted.");
      return;
    }

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Submission failed.");
      }

      setStatus("success");
      setMessage(result.message || "Your request was received.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-stone-700">
          Your name
          <input
            required
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-base text-stone-800 outline-none transition focus:border-[#b65d3d] focus:bg-white"
            placeholder="Name"
          />
        </label>

        <label className="text-sm font-medium text-stone-700">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-base text-stone-800 outline-none transition focus:border-[#b65d3d] focus:bg-white"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="text-sm font-medium text-stone-700">
          Service needed
          <select
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-base text-stone-800 outline-none transition focus:border-[#b65d3d] focus:bg-white"
          >
            {services.map((service) => (
              <option key={service.title} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-stone-700">
          ZIP code or service area
          <input
            value={form.zip}
            onChange={(event) => updateField("zip", event.target.value)}
            className="mt-2 w-full rounded-2xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-base text-stone-800 outline-none transition focus:border-[#b65d3d] focus:bg-white"
            placeholder="Whatcom County ZIP"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-stone-700">
        Preferred timing
        <input
          value={form.preferredWindow}
          onChange={(event) => updateField("preferredWindow", event.target.value)}
          className="mt-2 w-full rounded-2xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-base text-stone-800 outline-none transition focus:border-[#b65d3d] focus:bg-white"
          placeholder="Example: Weekday mornings or next 2 weeks"
        />
      </label>

      <label className="block text-sm font-medium text-stone-700">
        Tell us what needs attention
        <textarea
          required
          value={form.summary}
          onChange={(event) => updateField("summary", event.target.value)}
          className="mt-2 min-h-32 w-full rounded-2xl border border-stone-300 bg-stone-50 px-3 py-2.5 text-base text-stone-800 outline-none transition focus:border-[#b65d3d] focus:bg-white"
          placeholder="Describe the area, the size of the job, and any access notes that would help us understand the task."
        />
      </label>

      <input
        type="text"
        value={form.company}
        onChange={(event) => updateField("company", event.target.value)}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-[#b65d3d] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9a4e32] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send request"}
        </button>

        <p className="text-xs text-stone-500">No account required. Questions are reviewed by the service team.</p>
      </div>

      {message ? (
        <p
          className={
            status === "success" ? "text-sm font-medium text-emerald-700" : "text-sm font-medium text-red-700"
          }
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
