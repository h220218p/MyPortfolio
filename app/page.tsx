"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import FloatingElements from "@/components/floating-elements"

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero")

  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-0" />

      {/* Floating decorative elements */}
      <FloatingElements />

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Content */}
      <div className="relative z-10">
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Skills />
        <Projects />
        {/*<Certifications />*/}
        <Contact />
      </div>
    </main>
  )
}
