"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
   
    {
      title: "An AI-Driven Smart Pest Monitoring & Environmental Intelligence System",
      description: "Interactive data visualization dashboard with real-time metrics and custom reporting.",
      tags: ["React", "D3.js", "Node.js", "WebSocket"],
      image: "/analytics-dashboard.png",
      link: "#",
      github: "#",
    },
    {
      title: "Social Collaboration App",
      description: "A real-time matchmaking and communication platform that enables seamless connection through instant messaging, photo sharing, and smart compatibility management.",
      tags: ["Next.js", "Firebase", "Tailwind", "Socket.io"],
      image: "/collaboration-app.jpg",
      link: "#",
      github: "#",
    },
    {
      title: "Crime Linkage analysis using Natural Language Processing and Modus Operandi Profiling",
      description: "Intelligent system that link crimes uing Modus Operandis to determine serial crime committers, Its main aim is to easy Intelligence operations in the security sector.",
      tags: ["React", "OpenAI API", "Python", "FastAPI"],
      image: "/ai-content-tool.jpg",
      link: "#",
      github: "#",
    },
  ]

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
              className="glass rounded-lg overflow-hidden glass-hover group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-secondary/50">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredProject === idx ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 text-sm mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors"
                  >
                    <ExternalLink size={16} /> View
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-accent hover:text-accent/80 transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
