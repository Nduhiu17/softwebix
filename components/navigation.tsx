"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/about", label: "ABOUT US" },
    { href: "/web-design", label: "WEB DESIGN" },
    { href: "/social-media", label: "SOCIAL MEDIA" },
    { href: "/mobile-apps", label: "MOBILE APPS" },
    { href: "/programming", label: "PROGRAMMING" },
    { href: "/custom-tools", label: "CUSTOM BUSINESS TOOLS" },
    { href: "/support", label: "SUPPORT" },
    { href: "/contact", label: "CONTACT US" },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-12 w-full">
      <div className="w-full">
        {/* Desktop Navigation: Two Rows */}
        <div className="hidden lg:block w-full">
          <div className="w-full pr-6 lg:pr-8">
            <div className="flex justify-end items-center h-16">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    item.label === "WEB DESIGN" ? "text-cyan-400 font-semibold" : "text-white hover:text-cyan-400"
                  } ${index < navItems.length - 1 ? 'mr-8' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start h-16 max-w-7xl mx-auto px-1 sm:px-6 lg:px-8">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/images/logo.svg" alt="Softwebix Logo" className="h-16 w-auto" />
                <div className="text-2xl font-bold text-white tracking-wider">SOFTWEBIX</div>
              </Link>
            </div>
          </div>
        {/* Mobile Navigation: Single Row */}
        <div className="lg:hidden flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/logo.svg" alt="Softwebix Logo" className="h-10 w-auto" />
              <div className="text-2xl font-bold text-white tracking-wider">SOFTWEBIX</div>
            </Link>
          </div>
          <div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-cyan-400"
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-sm rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors ${
                    item.label === "WEB DESIGN" ? "text-cyan-400 font-semibold" : "text-white hover:text-cyan-400"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
