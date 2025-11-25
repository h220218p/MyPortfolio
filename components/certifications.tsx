"use client"

import { Award, CheckCircle } from "lucide-react"

export default function Certifications() {
  const certifications = [
    {
      title: "Advanced React Development",
      issuer: "Udemy",
      date: "2024",
      skills: ["React", "Hooks", "Performance"],
    },
    {
      title: "Full-Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      skills: ["MERN Stack", "Databases", "Deployment"],
    },
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      skills: ["Cloud Architecture", "Scalability", "Security"],
    },
    {
      title: "TypeScript Mastery",
      issuer: "Frontend Masters",
      date: "2024",
      skills: ["TypeScript", "Type Safety", "Advanced Types"],
    },
  ]

  return (
    <section id="certifications" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Certifications</span> & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div key={idx} className="glass p-6 rounded-lg glass-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <Award size={24} className="text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-foreground/60 mb-2">
                    {cert.issuer} • {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-1 text-xs text-accent">
                        <CheckCircle size={12} /> {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
