"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

export default function LocaleSwitcher({ currentLocale }: { currentLocale: string }) {
  const pathname = usePathname()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const switchLocale = (locale: string) => {
    const newPath = `/${locale}${pathname.replace(/^\/(en|sv)/, "")}`
    return newPath
  }

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button onClick={() => setDropdownOpen(!dropdownOpen)} className="p-2 text-sm text-blue-600 hover:bg-gray-200">
        {currentLocale.toUpperCase()} ▼
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen &&
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-50">
          <Link
            href={switchLocale("en")}
            className={`block px-4 py-2 text-sm ${currentLocale === "en" ? "font-bold text-blue-700" : "text-blue-600 hover:underline"}`}
            onClick={() => setDropdownOpen(false)}
          >
            English
          </Link>
          <Link
            href={switchLocale("sv")}
            className={`block px-4 py-2 text-sm ${currentLocale === "sv" ? "font-bold text-blue-700" : "text-blue-600 hover:underline"}`}
            onClick={() => setDropdownOpen(false)}
          >
            Svenska
          </Link>
        </div>}
    </div>
  )
}
