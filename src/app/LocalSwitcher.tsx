"use client"

import { usePathname, useRouter } from "next/navigation"

import { useState, useEffect } from "react"
import Cookies from "js-cookie"

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Store the selected locale in a cookie when it changes
  useEffect(() => {
    Cookies.set("NEXT_LOCALE", currentLocale, { path: "/" })
  }, [currentLocale])

  const switchLocale = (locale: string) => {
    if (locale === currentLocale) return // Avoid unnecessary updates

    Cookies.set("NEXT_LOCALE", locale, { path: "/" }) // Store preference
    const newPath = `/${locale}${pathname.replace(/^\/(en|sv)/, "")}`

    router.replace(newPath) // Replace instead of push
  }

  return (
    <div className="relative">
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="p-2 text-sm text-blue-600 hover:bg-gray-200">
        {currentLocale.toUpperCase()} ▼
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50">
          <button
            onClick={() => switchLocale("en")}
            className={`block px-4 py-2 text-sm ${currentLocale === "en" ? "font-bold text-blue-700" : "text-blue-600 hover:underline"}`}
          >
            English
          </button>
          <button
            onClick={() => switchLocale("sv")}
            className={`block px-4 py-2 text-sm ${currentLocale === "sv" ? "font-bold text-blue-700" : "text-blue-600 hover:underline"}`}
          >
            Svenska
          </button>
        </div>
      )}
    </div>
  )
}
