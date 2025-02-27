import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Libre_Franklin } from "next/font/google";
import "./styles/globals.css";

// Configure Libre Franklin font
const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-libre-franklin", // Optional: for custom CSS usage
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swedishinventions.com"),
  title: "Swedish Inventions – Innovations That Changed the World",
  description:
    "Explore groundbreaking Swedish inventions that shaped technology, medicine, and everyday life. Discover Sweden’s legacy of innovation.",
  openGraph: {
    title: "Swedish Inventions – Innovations That Changed the World",
    description:
      "Explore groundbreaking Swedish inventions that shaped technology, medicine, and everyday life.",
    url: "https://swedishinventions.com",
    siteName: "Swedish Inventions",
    images: [
      {
        url: "/swedish-inventions-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Swedish Inventions Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@allthingssweden",
    creator: "@allthingssweden",
    title: "Swedish Inventions – Innovations That Changed the World",
    description: "Discover famous Swedish innovations that shaped industries worldwide.",
    images: ["/swedish-inventions-thumbnail.jpg"], // Fixed path
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apple Touch Icon */}
        <link rel="preload" href="/apple-touch-icon.png" as="image" />
<link rel="preload" href="/favicon.ico" as="image" sizes="any" />

        {/* Viewport for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta
          property="og:title"
          content="Swedish Inventions – Innovations That Changed the World"
        />
        <meta
          property="og:description"
          content="Explore groundbreaking Swedish inventions that shaped technology, medicine, and everyday life."
        />
        <meta property="og:image" content="/swedish-inventions-thumbnail.jpg" />
        <meta property="og:url" content="https://swedishinventions.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Swedish Inventions – Innovations That Changed the World"
        />
        <meta
          name="twitter:description"
          content="Discover famous Swedish innovations that shaped industries worldwide."
        />
        <meta name="twitter:image" content="/swedish-inventions-thumbnail.jpg" />
      </head>
      <GoogleAnalytics gaId="G-SZZPBRPWY5" />
      <body className={`${libreFranklin.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}