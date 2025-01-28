import type { Metadata } from "next";
import { GoogleTagManager } from '@next/third-parties/google'
import { Geist, Geist_Mono } from "next/font/google";
import ContactForm from "./ContactForm";
import Navbar from "./Navbar";
import "./globals.css";
import Footer from "./Footer";

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
        <Navbar />
        {children}
        <ContactForm />
        <Footer />
      </body>
      
    </html>
  );
}
