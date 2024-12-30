import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swedish Inventions",
  description: "Created by Prijun Koirala",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-adsense-account" content="ca-pub-4708248697764153"></meta>
      </head>
      <GoogleTagManager gtmId="G-WJ47ZHVZ27" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>

    <footer className="w-full py-8 bg-white border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="text-sm text-gray-500">
            <span>Showcasing Contribution of Sweden to the World</span>
          </div>
          <div className="mt-4 flex space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Contact
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              Credits
            </a>
          </div>
          <div className="mt-4 text-xs text-gray-400">
            © {new Date().getFullYear()} People of Sweden. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
    </html>
  );
}
