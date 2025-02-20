'use client'

import Link from "next/link"
import Image from "next/image"
import LocaleSwitcher from "./LocalSwitcher"
import { useTranslations } from "next-intl"

export default function Navbar({ currentLocale }: { currentLocale: string }) {
  const t = useTranslations("Translations")
  return (
    <div className="border-b">
      <nav className="container flex items-center justify-between">
        {/* Left Side: Logo */}
        <div>
          <Link href="/" className="inline-block">
            <Image src="/main-logo.png" style={{ width: "auto", height: "auto" }} alt="Swedish Inventions" width={80} height={40} className="object-contain" priority />
          </Link>
        </div>

        {/* Right Side: Nav Links and Locale Switcher */}
        <div className="flex space-x-6 items-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            {t("home")}
          </Link>
          <Link href={`/${currentLocale}/about`} className="text-gray-600 hover:text-gray-900">
            {t("about")}
          </Link>
          <LocaleSwitcher currentLocale={currentLocale} />
        </div>
      </nav>
    </div>
  )
}
