import { useState, useEffect } from "react"
import { AuctusButton } from "./AuctusButton"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Stack", href: "#stack" },
    { label: "Seguridad", href: "#seguridad" },
    { label: "Industrias", href: "#industrias" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" }
  ]

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "navbar-blur" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-tight font-bold text-sm">AG</span>
            </div>
            <span className="ml-2 text-lg font-tight font-bold text-fg-100">
              Auctus Growth
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-fg-300 hover:text-fg-100 transition-colors text-sm underline-link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <AuctusButton size="sm">
              Agendá tu diagnóstico
            </AuctusButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-fg-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-line-700 mt-4 pt-4 pb-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-fg-300 hover:text-fg-100 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <AuctusButton size="sm" className="w-full">
                  Agendá tu diagnóstico
                </AuctusButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}