"use client"

import { useState } from "react"
import Link from "next/link"

// Icons
const MenuIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "/about", label: "ABOUT US" },
    { href: "/web-design", label: "WEB DESIGN" },
    { href: "/social-media", label: "SOCIAL MEDIA" },
    { href: "/mobile-apps", label: "MOBILE APPS" },
    { href: "/programming", label: "PROGRAMMING" },
    { href: "/custom-tools", label: "CUSTOM BUSINESS TOOLS" },
    { href: "/support", label: "SUPPORT" },
    { href: "/contact", label: "CONTACT US" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm w-full py-2 sm:py-3 md:py-4 lg:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl md:text-2xl">
            SoftWebix
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2 py-1 text-xs xl:text-sm font-medium transition-colors whitespace-nowrap ${
                  item.label === "WEB DESIGN" 
                    ? "text-cyan-400 font-semibold" 
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/95 z-40 transition-all duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 px-4 py-20 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg sm:text-xl font-medium transition-colors py-2 ${
                item.label === "WEB DESIGN" 
                  ? 'text-cyan-400' 
                  : 'text-white hover:text-cyan-400'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
