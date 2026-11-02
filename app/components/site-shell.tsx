import Link from "next/link";

import { navItems, siteConfig } from "@/app/lib/site-data";

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-[#f8f3eb]/95 backdrop-blur-sm">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3 text-left" aria-label="Messy Mamas NW home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d77b5d] text-base font-bold text-white shadow-sm">
            M
          </span>
          <span>
            <span className="block text-lg font-semibold text-stone-900">{siteConfig.name}</span>
            <span className="block text-xs uppercase tracking-[0.22em] text-stone-500">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm text-stone-700 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#b65d3d]">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.contactPath}
          className="inline-flex items-center justify-center rounded-full bg-[#b65d3d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#9a4e32]"
        >
          Request help
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-[#f5efe8]">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-stone-900">{siteConfig.name}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-stone-600">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Explore</h2>
          <ul className="mt-3 space-y-2 text-sm text-stone-700">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[#b65d3d]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">Service area</h2>
          <p className="mt-3 text-sm leading-6 text-stone-700">{siteConfig.serviceArea}</p>
          <Link href={siteConfig.contactPath} className="mt-4 inline-block text-sm font-semibold text-[#9a4e32]">
            Start a request
          </Link>
        </div>
      </div>
      <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
        © 2026 {siteConfig.name}. Local support for real homes and real routines.
      </div>
    </footer>
  );
}
