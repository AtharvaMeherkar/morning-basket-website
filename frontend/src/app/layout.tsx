import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MorningBasket - Fresh Fruits Delivered Every Morning",
  description: "Washed, hygienically cleaned fruits delivered fresh every morning in Pune. Subscribe to our fruit baskets for a calm, reliable morning routine for your family.",
  keywords: ["fresh fruits", "fruit delivery", "morning delivery", "ozonated water", "hygiene", "subscription", "healthy eating", "Pune", "fruit basket", "organic fruits"],
  authors: [{ name: "MorningBasket" }],
  metadataBase: new URL("https://morningbasket.in"),
  openGraph: {
    title: "MorningBasket - Fresh Fruits Delivered Every Morning",
    description: "Washed, hygienically cleaned fruits delivered fresh every morning. A calm, reliable morning routine for your family.",
    url: "https://morningbasket.in",
    type: "website",
    locale: "en_IN",
    siteName: "MorningBasket",
    images: [
      {
        url: "/images/hero-fruits.png",
        width: 1200,
        height: 630,
        alt: "Fresh fruit basket from MorningBasket",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MorningBasket - Fresh Fruits Delivered Every Morning",
    description: "Washed, hygienically cleaned fruits delivered fresh every morning.",
    images: ["/images/hero-fruits.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MorningBasket",
  description: "Fresh, hygienically cleaned fruits delivered every morning to families in Pune",
  url: "https://morningbasket.in",
  telephone: "+918698292415",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411037",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.5204",
    longitude: "73.8567",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "06:00",
    closes: "10:00",
  },
  priceRange: "₹₹",
  servesCuisine: "Fruits",
  image: "https://morningbasket.in/images/hero-fruits.png",
  sameAs: ["https://wa.me/918698292415"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2d614e" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

