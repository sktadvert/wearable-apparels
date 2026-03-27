import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, company, communication, message } = data;

    // Log the quote request
    console.log("📩 New Quote Request:", { name, email, phone, company, communication, message });

    // Send email notification via mailto fallback
    // In production, connect to Listmonk or SMTP service
    // For now, store in a local JSON file as backup
    const fs = await import("fs");
    const path = await import("path");

    const quotesDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(quotesDir)) {
      fs.mkdirSync(quotesDir, { recursive: true });
    }

    const quotesFile = path.join(quotesDir, "quotes.json");
    let quotes = [];
    if (fs.existsSync(quotesFile)) {
      quotes = JSON.parse(fs.readFileSync(quotesFile, "utf-8"));
    }

    quotes.push({
      id: Date.now(),
      name,
      email,
      phone,
      company,
      communication,
      message,
      createdAt: new Date().toISOString(),
      status: "new",
    });

    fs.writeFileSync(quotesFile, JSON.stringify(quotes, null, 2));

    return NextResponse.json({ success: true, message: "Quote request received" });
  } catch (error) {
    console.error("Quote submission error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit quote" }, { status: 500 });
  }
}
