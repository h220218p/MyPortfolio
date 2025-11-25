"use client"

import { motion } from "framer-motion"

export default function About() {
  const softSkills = [
    { icon: "🧠", label: "Problem Solver", desc: "Breaks complex problems into elegant solutions" },
    { icon: "🤝", label: "Team Player", desc: "Collaborates effectively across teams" },
    { icon: "⚡", label: "Adaptable", desc: "Quick to learn and embrace new technologies" },
    { icon: "🎯", label: "Focused", desc: "Prioritizes tasks and delivers results consistently" },
  ]

  return (
    <section id="about" className="relative py-20 px-4 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center tracking-wide">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass p-8 rounded-2xl backdrop-blur-lg border border-border/30">
              <p className="text-foreground/90 leading-relaxed mb-6 text-lg md:text-xl font-medium">
                I’m a <span className="text-accent font-bold">Full-Stack Software Developer</span> with a relentless curiosity 
                for building <span className="text-primary font-semibold">clean, scalable, and intelligent software</span>. 
                My interests include <span className="text-accent font-semibold">AI, NLP, and Automation</span>, where I love turning complex challenges into simple, elegant solutions.
              </p>

              <p className="text-foreground/80 leading-relaxed mb-6 text-base md:text-lg italic">
                I thrive in dynamic environments, constantly learning, experimenting, and pushing boundaries. 
                Every project is an opportunity to craft <span className="text-primary font-medium">seamless user experiences</span> 
                and code that speaks for itself.
              </p>

              <p className="text-foreground/70 leading-relaxed text-base md:text-lg">
                Outside coding, I explore new technologies, contribute to open-source, and share knowledge with the developer community.
              </p>
            </div>
          </motion.div>

          {/* Right Soft Skills */}
          <div className="grid grid-cols-2 gap-6">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  backgroundColor: ["#0ff", "#ff0", "#f0f", "#0f0"][idx % 4],
                  color: "#000",
                  transition: { duration: 0.4, repeat: 1, repeatType: "mirror" },
                }}
                className="glass p-6 rounded-xl group shadow-lg cursor-pointer flex flex-col items-center text-center border border-border/20"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="font-semibold text-lg mb-1 group-hover:text-black">{skill.label}</h3>
                <p className="text-sm text-foreground/70">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
