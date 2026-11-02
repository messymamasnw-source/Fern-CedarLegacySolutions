import Link from "next/link";

import { blogPosts } from "@/app/lib/site-data";

export default function BlogPage() {
  return (
    <main className="section-shell py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9a4e32]">Blog & community updates</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
          Helpful rhythms for the homes and routines we carry every day.
        </h1>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.title} className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a4d39]">Community note</p>
            <h2 className="mt-4 text-2xl font-semibold text-stone-900">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-700">{post.summary}</p>
            <Link href={post.href} className="mt-6 inline-block text-sm font-semibold text-[#9a4e32]">
              Read more
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
