import { promises as fs } from "node:fs";
import path from "node:path";

import { NextResponse } from "next/server";

type InquiryRecord = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  service: string;
  zip: string;
  preferredWindow: string;
  summary: string;
};

const inquiryFilePath = path.join(process.cwd(), "data", "inquiries.json");

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, string>;
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const service = String(body.service ?? "").trim();
    const zip = String(body.zip ?? "").trim();
    const preferredWindow = String(body.preferredWindow ?? "").trim();
    const summary = String(body.summary ?? "").trim();
    const company = String(body.company ?? "").trim();

    if (company) {
      return NextResponse.json(
        { error: "Your request could not be submitted." },
        { status: 400 },
      );
    }

    if (!name || !email || !service || !summary) {
      return NextResponse.json(
        { error: "Please complete the required fields before submitting." },
        { status: 400 },
      );
    }

    const payload: InquiryRecord = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      name,
      email,
      service,
      zip,
      preferredWindow,
      summary,
    };

    await fs.mkdir(path.dirname(inquiryFilePath), { recursive: true });

    let existing: InquiryRecord[] = [];
    try {
      const fileContents = await fs.readFile(inquiryFilePath, "utf8");
      existing = fileContents ? (JSON.parse(fileContents) as InquiryRecord[]) : [];
    } catch {
      existing = [];
    }

    existing.unshift(payload);
    await fs.writeFile(
      inquiryFilePath,
      JSON.stringify(existing.slice(0, 250), null, 2),
      "utf8",
    );

    return NextResponse.json({
      success: true,
      message:
        "Thanks! Your request was received. A follow-up message with next steps will come after review.",
    });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Something went wrong while submitting your request.",
      },
      { status: 500 },
    );
  }
}
