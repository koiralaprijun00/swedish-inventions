import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "BeerCount 🍺",
  description:
    "Track every beer you enjoy with BeerCount. Log drinks, explore new beers, and keep your stats in sync across devices.",
  metadataBase: new URL("https://beercount.example.com"),
  openGraph: {
    title: "BeerCount 🍺",
    description:
      "Track every beer you enjoy with BeerCount. Log drinks, explore new beers, and keep your stats in sync across devices.",
    images: [
      {
        url: "/og-beercount.png",
        width: 1200,
        height: 630,
        alt: "BeerCount dashboard preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BeerCount 🍺",
    description:
      "Track every beer you enjoy with BeerCount. Log drinks, explore new beers, and keep your stats in sync across devices.",
    images: ["/og-beercount.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-amber-50 text-slate-900 min-h-screen">
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
