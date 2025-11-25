"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero({ setActiveSection }) {
  // Typewriter effect
  const [displayText, setDisplayText] = useState("")
  const fullText = "Full-Stack Developer"
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText(fullText.slice(0, textIndex + 1))
        setTextIndex(textIndex + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [textIndex])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4"
    >
      {/* Background Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary opacity-10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent opacity-10 rounded-full blur-3xl animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* ⚡ 3D Rotating Image */}
        <motion.div
          className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-accent/60"
          initial={{ scale: 0.9 }}
          animate={{
            scale: [0.9, 1, 0.95, 1],
            boxShadow: [
              "0px 0px 20px rgba(0, 255, 180, 0.3)",
              "0px 0px 40px rgba(0, 255, 180, 0.5)",
              "0px 0px 20px rgba(0, 255, 180, 0.3)",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
        >
          {/* Y-axis rotation container */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ perspective: 1000 }}
            animate={{ rotateY: [0, 360] }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{
              rotateY: 0,
              rotateX: [0, -8, 8, 0],
              rotateZ: [0, 2, -2, 0],
              transition: { duration: 2, repeat: Infinity, repeatType: "mirror" },
            }}
          >
            <motion.img
              src="/myPic.jpeg"
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          </motion.div>

          {/* Orbiting particles */}
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full"
              style={{ top: "50%", left: "50%" }}
              animate={{
                x: [
                  Math.cos((i / 6) * 2 * Math.PI) * 50,
                  Math.cos(((i + 1) / 6) * 2 * Math.PI) * 50,
                ],
                y: [
                  Math.sin((i / 6) * 2 * Math.PI) * 50,
                  Math.sin(((i + 1) / 6) * 2 * Math.PI) * 50,
                ],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 6,
                delay: i * 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>

        {/* Badge */}
        <motion.div
          className="mt-6 mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full glass"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Zap size={16} className="text-accent" />
          <span className="text-sm text-accent">Available for opportunities</span>
        </motion.div>

        {/* Heading */}
<h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight relative">
  <span className="gradient-text relative inline-block">
    {displayText}
  </span>

  {/* Glitch shimmer */}
  <span className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 blur-md opacity-20 bg-gradient-to-r from-accent via-primary to-purple-500 animate-pulse"></span>

  <span className="animate-pulse ml-1">|</span>
</h1>

{/* Subtitle */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.8 }}
  className="text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm p-3 rounded-xl bg-secondary/20 border border-border/20"
>
  I build systems the way a strategist runs a city—precise, relentless, and always
  two steps ahead. In a world full of noise, I craft intelligent, razor-sharp 
  software that delivers results—never excuses.
</motion.p>

{/* CTA Buttons */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
>
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,255,180,0.5)" }}
    whileTap={{ scale: 0.95 }}
    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
    className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:bg-primary/90"
  >
    View My Work <ArrowRight size={20} />
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05, backgroundColor: "rgba(0,255,180,0.05)" }}
    whileTap={{ scale: 0.95 }}
    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
    className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold transition-all"
  >
    Get In Touch
  </motion.button>
</motion.div>

{/* Tech Stack */}
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="flex flex-wrap justify-center gap-3 text-sm"
>
  {["Python", "React", "Django", "MongoDB"].map((tech, index) => (
    <motion.div
      key={tech}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 0 15px rgba(0,255,180,0.4)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="px-4 py-1.5 rounded-full bg-secondary/40 text-foreground/80 border border-accent/30 shadow-sm backdrop-blur-sm"
    >
      {tech}
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  )
} 
