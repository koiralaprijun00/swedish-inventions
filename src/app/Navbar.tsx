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
            <Image 
              src="/main-logo.png" 
              alt="Swedish Inventions" 
              width={80} 
              height={40} 
              className="object-contain w-16 md:w-20" 
              priority 
            />
          </Link>
        </div>

        {/* Right Side: Nav Links and Locale Switcher */}
        <div className="flex space-x-2 md:space-x-6 items-center">
          <Link 
            href="/" 
            className="p-1 md:p-2 text-primaryBlue transition-all duration-100 ease-in-out hover:text-primaryBlue-900 active:text-primaryBlue-900 border-b border-transparent hover:border-primaryBlue-900 focus:border-primaryBlue active:border-primaryBlue"
          >
            {t("home")}
          </Link>
          
          <Link 
            href={`/${currentLocale}/blog`} 
            className="p-1 md:p-2 text-primaryBlue transition-all duration-100 ease-in-out hover:text-primaryBlue-900 active:text-primaryBlue-900 border-b border-transparent hover:border-primaryBlue-900 focus:border-primaryBlue active:border-primaryBlue">
            {t("blog")}
          </Link>
          
          <Link 
            href={`/${currentLocale}/about`} 
            className="p-1 md:p-2 text-primaryBlue transition-all duration-100 ease-in-out hover:text-primaryBlue-900 active:text-primaryBlue-900 border-b border-transparent hover:border-primaryBlue-900 focus:border-primaryBlue active:border-primaryBlue"
          >
            {t("about")}
          </Link>
          <LocaleSwitcher currentLocale={currentLocale} />
        </div>
      </nav>
    </div>
  )
}
