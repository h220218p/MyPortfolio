"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MessageCircle, MapPin } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    { icon: Mail, href: "talentagaviro@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/talent-gaviro", label: "LinkedIn" },
    { icon: Github, href: "#", label: "https://github.com/h220218p" },
    { icon: MessageCircle, href: "https://wa.me/263779319913", label: "WhatsApp" },
  ]

  return (
    <section
      id="contact"
      className="relative py-20 px-4 bg-gradient-to-b from-secondary/10 to-transparent"
    >
      <div className="max-w-6xl mx-auto">

        {/* Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          animate={{
            y: [0, -10, 0, 10, 0],
            scale: [1, 1.05, 1, 0.95, 1],
            rotate: [0, -2, 0, 2, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        >
          Let’s Connect
        </motion.h2>

        {/* Columns Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE — ADDRESS */}
          <div className="text-left space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">My Location</h3>
            <p className="text-foreground/80 leading-relaxed">
              12010 Glen View 7 Extension<br />
              Harare, Zimbabwe
            </p>

            <div className="flex items-center gap-2 text-accent">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">Geo: -17.8576, 30.9961 (Approx)</span>
            </div>
          </div>

          {/* RIGHT SIDE — SOCIAL LINKS */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-end items-center md:items-end gap-12">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={idx}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 text-foreground/80 hover:text-accent transition-colors group"
                  animate={{ rotateY: [0, 360] }}
                  transition={{
                    duration: 6 + idx,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotateY: 0,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Icon className="w-12 h-12 md:w-16 md:h-16" />
                  <span className="text-lg md:text-xl font-semibold">
                    {link.label}
                  </span>
                </motion.a>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
