import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Link from "next/link";
import "./styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://swedishinventions.com'),
  title: "Swedish Inventions – Innovations That Changed the World",
  description: "Explore groundbreaking Swedish inventions that shaped technology, medicine, and everyday life. Discover Sweden’s legacy of innovation.",
  openGraph: {
    title: "Swedish Inventions – Innovations That Changed the World",
    description: "Explore groundbreaking Swedish inventions that shaped technology, medicine, and everyday life.",
    url: "https://swedishinventions.com",
    siteName: "Swedish Inventions",
    images: [
      {
        url: "/swedish-inventions-thumbnail.jpg", 
        width: 1200,
        height: 630,
        alt: "Swedish Inventions Banner"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swedish Inventions – Innovations That Changed the World",
    description: "Discover famous Swedish innovations that shaped industries worldwide.",
    images: ["/swedish-inventions-thumbnail.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apple Touch Icon */}
        <Link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Viewport for Responsive Design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Swedish Inventions – Innovations That Changed the World" />
        <meta property="og:description" content="Explore groundbreaking Swedish inventions that shaped technology, medicine, and everyday life." />
        <meta property="og:image" content="/swedish-inventions-thumbnail.jpg" />
        <meta property="og:url" content="https://swedishinventions.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Swedish Inventions – Innovations That Changed the World" />
        <meta name="twitter:description" content="Discover famous Swedish innovations that shaped industries worldwide." />
        <meta name="twitter:image" content="/swedish-inventions-thumbnail.jpg" />

        {/* Google Adsense */}
        <meta name="google-adsense-account" content="ca-pub-4708248697764153" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4708248697764153" crossOrigin="anonymous"></script>
      </head>
      <GoogleAnalytics gaId="G-SZZPBRPWY5" />
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
} 