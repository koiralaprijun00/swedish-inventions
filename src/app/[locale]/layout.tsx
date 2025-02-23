import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import type { Metadata } from "next";
import ContactForm from "../ContactForm";
import Navbar from "../Navbar";
import Tabs from '../[locale]/components/Tabs.js'
import Footer from "../Footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Swedish Inventions – Innovations That Changed the World",
  description: "Explore groundbreaking Swedish inventions that shaped technology, medicine, and everyday life. Discover Sweden’s legacy of innovation."
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {

  // Default to "en" if locale is missing
  const { locale = "en" } = await params;

  /// Ensure the incoming locale is valid
  const validLocale = routing.locales.includes(locale as "en" | "sv")
    ? (locale as "en" | "sv")
    : "en";
  if (!routing.locales.includes(validLocale)) {
    notFound();
  }

  const messages = await getMessages({ locale: validLocale });

  return (
        <NextIntlClientProvider locale={validLocale} messages={messages}>
          <Navbar currentLocale={validLocale} />
          {children}
          <ContactForm />
          <Tabs />
          <Footer />
        </NextIntlClientProvider>
  );
}
