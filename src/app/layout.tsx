import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import FloatingButtons from "@/components/FloatingButtons";
import QuoteModal from "@/components/QuoteModal";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              name: "Wearable Apparels",
              description: "Premium custom apparel manufacturing for streetwear brands. Cut & sew, screen printing, embroidery, private labeling.",
              url: "https://wearableapparels.com",
              telephone: "+923000836201",
              email: "info@wearableapparels.com",
              address: { "@type": "PostalAddress", addressCountry: "PK" },
              sameAs: [
                "https://instagram.com/wearable_apparels",
                "https://facebook.com/wearableapparels",
                "https://tiktok.com/@wearable_apparels",
              ],
              priceRange: "$$",
              openingHours: "Mo-Sa 09:00-18:00",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Custom Apparel Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Cut & Sew" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Screen Printing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Embroidery" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Private Labeling" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Packaging" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SessionProvider>
          {children}
          <FloatingButtons />
          <QuoteModal />
        </SessionProvider>

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
