"use client"

import { Code, Database, Layout } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Skills() {
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

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "NextJS", "TypeScript", "Tailwind CSS"],
      color: "purple",
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "REST API", "Git", "Github Actions"],
      color: "purple",
    },
    {
      icon: Layout,
      title: "Database",
      skills: ["React Query", "Agile", "Figma", "UX Design", "Storybook"],
      color: "purple",
    },
  ]

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 opacity-0 ${isVisible ? "animate-fadeInUp" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 opacity-0 ${isVisible ? `animate-scaleIn stagger-${index + 1}` : ""}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-400 rounded-xl flex items-center justify-center mb-6">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-100 transition-colors cursor-default"
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
