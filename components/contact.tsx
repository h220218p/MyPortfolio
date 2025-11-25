"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/talent-gaviro", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: MessageCircle, href: "https://wa.me/263779319913", label: "WhatsApp" },
  ]

  return (
    <section id="contact" className="relative py-20 px-4 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        {/* Rhythmic Animated Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
          animate={{
            y: [0, -10, 0, 10, 0],
            scale: [1, 1.05, 1, 0.95, 1],
            rotate: [0, -2, 0, 2, 0]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          Let's Connect
        </motion.h2>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-12">
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
                transition={{ duration: 6 + idx, repeat: Infinity, ease: "linear" }}
                whileHover={{ scale: 1.2, rotateY: 0, transition: { duration: 0.3 } }}
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16" />
                <span className="text-lg md:text-xl font-semibold">{link.label}</span>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
