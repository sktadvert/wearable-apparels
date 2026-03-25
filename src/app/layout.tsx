import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wearable Apparels | Custom Apparel Manufacturing",
  description:
    "Premium custom cut & sew manufacturing for streetwear brands. Low MOQ, fast turnaround, quality-first production. Request a free quote today.",
  keywords: [
    "custom apparel manufacturing",
    "streetwear manufacturer",
    "cut and sew",
    "private label clothing",
    "screen printing",
    "embroidery",
    "low MOQ manufacturer",
    "custom clothing manufacturer",
    "apparel production",
    "clothing manufacturer low MOQ",
  ],
  openGraph: {
    title: "Wearable Apparels | Custom Apparel Manufacturing",
    description:
      "Premium custom cut & sew manufacturing for streetwear brands worldwide. From first sample to full production.",
    url: "https://wearableapparels.com",
    siteName: "Wearable Apparels",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wearable Apparels",
    description: "Custom apparel manufacturing for streetwear brands",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SessionProvider>{children}</SessionProvider>

        {/* Umami Analytics */}
        {process.env.NEXT_PUBLIC_UMAMI_URL && (
          <Script
            src={`${process.env.NEXT_PUBLIC_UMAMI_URL}/script.js`}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
