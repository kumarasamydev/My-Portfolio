"use client"

import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "8012331863",
      href: "tel:8012331863",
    },
    {
      icon: Mail,
      label: "Email",
      value: "writetokumarasamy@gmail.com",
      href: "mailto:writetokumarasamy@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sirumugai, Coimbatore",
      href: null,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 px-4 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden"
    >
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-60" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`text-center mb-16 opacity-0 ${isVisible ? "animate-fadeInUp" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center group opacity-0 ${isVisible ? `animate-scaleIn stagger-${index + 1}` : ""}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">{item.label}</h3>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-muted-foreground font-medium">{item.value}</p>
              )}
            </div>
          ))}
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-4 opacity-0 ${isVisible ? "animate-fadeInUp stagger-4" : ""}`}
        >
          <Button
            asChild
            variant="default"
            size="lg"
            className="gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
          >
            <a href="mailto:writetokumarasamy@gmail.com">
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all hover:scale-110 bg-transparent"
          >
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all hover:scale-110 bg-transparent"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
