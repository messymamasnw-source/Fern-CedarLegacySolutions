# Messy Mamas NW

A soft-launch marketing site for a local household support business serving Bellingham, Ferndale, and surrounding Whatcom County communities.

## What is included

- Responsive marketing pages for Home, Services, Pricing, How It Works, About, FAQ, Blog, and Contact
- Service-first messaging aligned with the business strategy and soft-launch rules
- Request-help form with basic validation and honeypot protection
- Local business structured data and SEO files for sitemap and robots.txt
- Secure environment-variable template for future production email delivery

## Local inquiry handling

The contact form posts to `/api/inquiry` and stores submissions locally in `data/inquiries.json` for development and soft-launch review.

This is intentionally a local-first store so the site remains functional in a demo environment without external credentials. For production delivery, add the values from `.env.example` and connect a real email provider such as Resend or SMTP before launching publicly.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Production verification

```bash
npm run lint
npm run build
```

## Deployment notes

- Use the public site URL in `NEXT_PUBLIC_SITE_URL` once the real domain is known.
- Replace the sample domain in `app/sitemap.ts` and `app/robots.ts` if the production domain differs.
- Keep the soft-launch pricing rule in place until a verified quote model is ready.
