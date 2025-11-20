"use client"

import { GraduationCap, Calendar } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Education() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Hindusthan College of Arts and Science",
      location: "Coimbatore",
      period: "2012 - 2015",
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Hindusthan College of Arts and Science",
      location: "Coimbatore",
      period: "2009 - 2012",
    },
  ]

  return (
    <section ref={sectionRef} id="education" className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 opacity-0 ${isVisible ? "animate-fadeInUp" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Education</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group opacity-0 ${isVisible ? `animate-scaleIn stagger-${index + 1}` : ""}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-3">{edu.institution}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
