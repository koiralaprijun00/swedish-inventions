'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import LocaleSwitcher from "./LocalSwitcher"
import { useTranslations } from "next-intl"
import SearchInventions from "./[locale]/components/SearchInventions"
import { useRouter } from "next/navigation"

export default function Navbar({ currentLocale }: { currentLocale: string }) {
  const t = useTranslations("Translations")
  const router = useRouter()
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  
  // Handle click outside of search to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    }
    
    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);
  
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
        
        {/* Mobile controls - LocaleSwitcher and hamburger */}
        <div className="flex items-center space-x-2 md:hidden">
          <LocaleSwitcher currentLocale={currentLocale} />
          
          <button 
            className="p-2 text-primaryBlue"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            {showMobileMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Nav Links, Search and Locale Switcher */}
        <div className="hidden md:flex space-x-4 items-center">          
          <Link 
            href="/" 
            className="p-2 text-primaryBlue transition-all duration-100 ease-in-out hover:text-primaryBlue-900 active:text-primaryBlue-900 border-b border-transparent hover:border-primaryBlue-900 focus:border-primaryBlue active:border-primaryBlue"
          >
            {t("home")}
          </Link>

          <Link 
            href={`/${currentLocale}/timeline`} 
            className="p-2 text-primaryBlue transition-all duration-100 ease-in-out hover:text-primaryBlue-900 active:text-primaryBlue-900 border-b border-transparent hover:border-primaryBlue-900 focus:border-primaryBlue active:border-primaryBlue"
          >
            {t("timeline")}
          </Link>
          
          <Link 
            href={`/${currentLocale}/about`} 
            className="p-2 text-primaryBlue transition-all duration-100 ease-in-out hover:text-primaryBlue-900 active:text-primaryBlue-900 border-b border-transparent hover:border-primaryBlue-900 focus:border-primaryBlue active:border-primaryBlue"
          >
            {t("about")}
          </Link>
          
          {/* Inline Search or Search Icon */}
          <div ref={searchRef} className="relative">
            {showSearch ? (
              <div className="w-56 md:w-80 lg:w-96 transform-gpu transition-all duration-200 ease-in-out origin-right">
                <SearchInventions />
              </div>
            ) : (
              <button 
                className="p-2 text-primaryBlue"
                onClick={() => setShowSearch(true)}
                aria-label={t("search")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            )}
          </div>
          
          <LocaleSwitcher currentLocale={currentLocale} />
        </div>
      </nav>

      {/* Mobile menu */}
      {showMobileMenu && (
        <div className="md:hidden py-2 border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            <Link 
              href="/" 
              className="px-4 py-2 text-primaryBlue"
              onClick={() => setShowMobileMenu(false)}
            >
              {t("home")}
            </Link>
            <Link 
              href={`/${currentLocale}/timeline`} 
              className="px-4 py-2 text-primaryBlue"
              onClick={() => setShowMobileMenu(false)}
            >
              {t("timeline")}
            </Link>
            <Link 
              href={`/${currentLocale}/about`} 
              className="px-4 py-2 text-primaryBlue"
              onClick={() => setShowMobileMenu(false)}
            >
              {t("about")}
            </Link>
            <div className="px-4 py-2">
              <SearchInventions />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}