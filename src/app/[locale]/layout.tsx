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
  title: "Swedish Inventions",
  description: "Created by Prijun Koirala",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure the incoming `locale` is valid and set a fallback
  const validLocale = routing.locales.includes(locale as "en" | "sv") ? (locale as "en" | "sv") : "en";
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
