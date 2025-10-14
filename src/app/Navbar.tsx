'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import LocaleSwitcher from "./LocalSwitcher"
import { useTranslations } from "next-intl"
import SearchInventions from "./[locale]/components/SearchInventions"

export default function Navbar({ currentLocale }: { currentLocale: string }) {
  const t = useTranslations("Translations")
  const [showSearch, setShowSearch] = useState(false);
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
    <header className=" bg-background">
      <nav className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/main-logo.png" 
              alt="Swedish Inventions" 
              width={120} 
              height={32} 
              className="h-8 w-auto" 
              priority 
            />
          </Link>
          
          {/* Navigation Controls */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Search */}
            <div ref={searchRef} className="relative">
              {showSearch ? (
                <div className="w-72 max-w-[80vw] sm:w-80">
                  <SearchInventions />
                </div>
              ) : (
                <button 
                  className="p-2 text-primary hover:text-accent transition-colors border-0 bg-transparent focus:outline-offset-2"
                  onClick={() => setShowSearch(true)}
                  aria-label={t("search")}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </div>
            
            <LocaleSwitcher currentLocale={currentLocale} />
          </div>
        </div>
      </nav>
    </header>
  )
}
