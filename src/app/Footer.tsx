// Footer.tsx
import Link from "next/link"
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Navigation Links */}
        <nav className="mb-4 flex space-x-4 text-sm">
          <Link href="/about" className="text-gray-500 hover:text-gray-700">
            About
          </Link>
          <Link href="/contact" className="text-gray-500 hover:text-gray-700">
            Contact
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="mb-4 flex space-x-4">
          <a href="https://www.youtube.com/@allswedish" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600">
            <FaYoutube size={20} />
          </a>
          <a href="https://x.com/allthingssweden" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/allfromsweden/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500">
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {currentYear} Swedish Inventions. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
