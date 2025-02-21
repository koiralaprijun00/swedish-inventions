import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google"
import "./styles/globals.css";

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
    <html lang='en' suppressHydrationWarning>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4708248697764153"
     crossOrigin="anonymous"></script>
      <meta name="google-adsense-account" content="ca-pub-4708248697764153" />
      </head>
      <GoogleAnalytics gaId="G-WJ47ZHVZ27" />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
      
    </html>
  );
}
