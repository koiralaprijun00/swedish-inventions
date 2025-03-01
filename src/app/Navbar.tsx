'use client'

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import LocaleSwitcher from "./LocalSwitcher"
import { useTranslations } from "next-intl"
import SearchInventions from "./[locale]/components/SearchInventions"
import { useRouter } from "next/navigation"

export default function Navbar({ currentLocale }: { currentLocale: string }) {
  const t = useTranslations("Translations")
  const router = useRouter()
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  
  // Handle advanced search button click
  const handleAdvancedSearch = () => {
    router.push(`/${currentLocale}/search`)
  }
  
  return (
    <div className="border-b">
      <nav className="container flex items-center justify-between py-3">
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
        
        {/* Middle: Search bar (hidden on mobile) */}
        <div className="hidden md:block flex-1 max-w-sm mx-8">
          <SearchInventions />
        </div>

        {/* Right Side: Nav Links and Locale Switcher */}
        <div className="flex space-x-2 md:space-x-6 items-center">
          {/* Mobile search toggle */}
          <button 
            className="md:hidden p-2 text-primaryBlue"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
            aria-label={t("search")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          <Link 
            href="/" 
            className="p-1 md:p-2 text-primaryBlue transition-all duration-100 ease-in-out hover:text-primaryBlue-900 active:text-primaryBlue-900 border-b border-transparent hover:border-primaryBlue-900 focus:border-primaryBlue active:border-primaryBlue"
          >
            {t("home")}
          </Link>

          <Link 
            href={`/${currentLocale}/timeline`} 
            className="p-1 md:p-2 text-primaryBlue transition-all duration-100 ease-in-out hover:text-primaryBlue-900 active:text-primaryBlue-900 border-b border-transparent hover:border-primaryBlue-900 focus:border-primaryBlue active:border-primaryBlue"
          >
            {t("timeline")}
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
      
      {/* Mobile search bar (expandable) */}
      {showMobileSearch && (
        <div className="md:hidden py-3 px-4 border-t border-gray-100 transition-all">
          <div className="flex items-center">
            <div className="flex-1">
              <SearchInventions />
            </div>
            <button 
              className="ml-2 p-2 text-gray-400 hover:text-gray-600"
              onClick={() => setShowMobileSearch(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-2 text-right">
            <button
              onClick={handleAdvancedSearch}
              className="text-xs text-primaryBlue hover:underline"
            >
              {currentLocale === "en" ? "Advanced Search" : "Avancerad sökning"} →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}