"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  const scrollToSection = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? "glass py-4" : "py-6"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/*<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm"></span>
          </div>*/}
          <span className="text-xl font-bold gradient-text">Talent Aleck Gaviro</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id ? "text-accent" : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur border-t border-border mt-2">
          <div className="flex flex-col gap-4 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left text-sm font-medium hover:text-accent transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
