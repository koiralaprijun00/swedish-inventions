import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <div className="border-b">
      <nav className="container flex items-center justify-between">
        {/* Left Side: Logo or Site Title */}
        <div>
          <Link href="/" className="inline-block">
            <Image
              src="/main-logo.png" // Replace with your logo path
              alt="Swedish Inventions"
              width={80}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right Side: Nav Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  )
}
