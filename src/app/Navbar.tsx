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
    <header className="container">
      <nav className="site-nav">
        <Link href="/" className="flex items-center">
          <Image 
            src="/main-logo.png" 
            alt="Swedish Inventions" 
            width={100} 
            height={28} 
            className="h-7 w-auto" 
            priority 
          />
        </Link>
        
        <div className="site-nav__actions">
          <div ref={searchRef} className="relative">
            {showSearch ? (
              <div className="w-64 max-w-[75vw]">
                <SearchInventions />
              </div>
            ) : (
              <button 
                className="p-1.5 hover:opacity-60 transition-opacity border-0 bg-transparent"
                onClick={() => setShowSearch(true)}
                aria-label={t("search")}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            )}
          </div>
          
          <LocaleSwitcher currentLocale={currentLocale} />
        </div>
      </nav>
    </header>
  )
}
