import Link from "next/link"

const footerSections = [
  {
    title: "Services",
    links: [
      { href: "/web-design", label: "Website Development" },
      { href: "/mobile-apps", label: "Mobile App Development" },
      { href: "/social-media", label: "Social Media Engagement" },
      { href: "/programming", label: "Programming Services" },
      { href: "/custom-tools", label: "Custom Business Tools" },
      { href: "/support", label: "Maintenance & Bug Fixes" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/why-us", label: "Why Us" },
    ],
  },
  {
    title: "Why SoftWebix",
    links: [
      { href: "/faq", label: "FAQ" },
      { href: "/support", label: "Help & Support" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="text-2xl font-bold text-primary-foreground">
                S<span className="text-accent">O</span>FTWEBIX
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Hong Kong's First One-Stop Website Design, Mobile App Development & IT Solutions Company. We make it
              simple and affordable.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-primary-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 SoftWebix. All rights reserved.
            </div>
            <div className="text-2xl font-bold text-primary-foreground">
              S<span className="text-accent">O</span>FTWEBIX
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
