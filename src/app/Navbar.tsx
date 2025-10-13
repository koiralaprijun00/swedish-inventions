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
    <header className="border-b border-border bg-background">
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
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              {t("home")}
            </Link>
            
            {/* Search */}
            <div ref={searchRef} className="relative">
              {showSearch ? (
                <div className="w-80">
                  <SearchInventions />
                </div>
              ) : (
                <button 
                  className="p-2 text-primary hover:text-accent transition-colors"
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LocaleSwitcher currentLocale={currentLocale} />
            <button 
              className="p-2 text-primary"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label="Toggle menu"
            >
              {showMobileMenu ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-border">
            <div className="py-4 space-y-4">
              <Link 
                href="/" 
                className="block text-sm font-medium text-primary hover:text-accent transition-colors"
                onClick={() => setShowMobileMenu(false)}
              >
                {t("home")}
              </Link>
              <div className="pt-2">
                <SearchInventions />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}