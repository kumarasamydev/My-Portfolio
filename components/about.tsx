"use client"

import { Code2, Lightbulb, Users, GraduationCap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function About() {
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

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "I write clean, maintainable code following best practices and design patterns.",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "I enjoy tackling complex problems and finding elegant solutions.",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "I collaborate effectively with teams to achieve project goals.",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learner",
      description: "I'm constantly learning new technologies and improving my skills.",
    },
  ]

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 opacity-0 ${isVisible ? "animate-fadeInUp" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            About{" "}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className={`opacity-0 ${isVisible ? "animate-fadeInUp stagger-1" : ""}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/developer-working-on-laptop.jpg" alt="About" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Content Section */}
          <div className={`opacity-0 ${isVisible ? "animate-fadeInUp stagger-2" : ""}`}>
            <h3 className="text-3xl font-bold mb-6">
              Front End Developer with a passion for creating impactful applications
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a passionate Front End Developer with 2 years of programming experience and professional work. My
              journey in the world of development has equipped me with a diverse skill set and a deep understanding of
              both frontend technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I specialize in building robust web applications using modern technologies like React, Next.js,
              TypeScript, and more. I enjoy solving complex problems and creating intuitive, user-friendly interfaces
              that deliver exceptional user experiences.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-purple-50 border border-purple-100 hover:shadow-lg hover:border-purple-300 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
