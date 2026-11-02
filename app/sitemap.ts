import type { MetadataRoute } from "next";

const lastModified = "2026-01-01";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.messymamasnw.com";

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/how-it-works`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "weekly", priority: 0.9 },
  ];
}
