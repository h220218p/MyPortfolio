"use client"

import { useState } from "react"

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "HTML", "CSS", "Javascript", "Tailwind CSS"],
      color: "from-blue-400 to-cyan-400",
    },
    {
      category: "Backend",
      skills: ["Django", "Python", "Python", "MySQL", "MongoDB", "REST APIs"],
      color: "from-purple-400 to-pink-400",
    },
    {
      category: "DevOps",
      skills: ["Docker", "Git", "Linux Servers"],
      color: "from-orange-400 to-red-400",
    },
    {
      category: "Emerging Technologies",
      skills: ["Internet of Things", "AI & Machine Learning"],
      color: "from-green-400 to-emerald-400",
    },
  ]

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCategory(idx)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={`glass p-8 rounded-lg glass-hover transition-all ${
                hoveredCategory === idx ? "scale-105" : ""
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm font-medium hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
