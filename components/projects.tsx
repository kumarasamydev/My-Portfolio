"use client"

import { ExternalLink, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Mobilab2u Web",
      period: "07/2024 - Till now",
      location: "Malaysia",
      url: "https://mobilab2u.com",
      devUrl: "https://dev.mobilab2u.com",
      description:
        "Mobilab2u is a new healthcare application offering online blood tests and consultations for Malaysian customers. Users can book a test, and an HSP (Healthcare Service Provider) will collect the blood sample from their location and submit it to a lab. The lab then uploads the test report for customer access.",
      features: [
        "Multilingual online consultations with direct patient interaction",
        "Blood test tracking system with real-time updates",
        "Doctor-prescribed medicine purchase options",
        "Referral letter generation system",
        "Tracking features for HSPs, doctors, labs, customers, and admins",
        "Wallet options for HSPs, doctors, and labs",
        "Reward program for customers",
        "Integration with complete hospital management system (in progress)",
      ],
      tech: [
        "Next.js 15",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "Context API",
        "useSWR",
        "SSR",
        "Next.js Bundle Analyzer",
      ],
    },
    {
      title: "Used Computer",
      period: "03/2025 - Till now",
      location: "Malaysia",
      description:
        "A Malaysian platform that allows users to sell their E-waste products and buy or sell both used and new electronics.",
      features: [
        "Price negotiation system (before and after order)",
        "Multiple delivery options: courier and drop-off",
        "Return and order cancellation flows",
        "Standard e-commerce functionality",
        "Product listing and management",
      ],
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "NEST Ncer Web",
      period: "09/2023 - Till now",
      location: "Malaysia",
      url: "https://nest.ncer.com.my",
      description:
        "Ncer Web is a Malaysian government-operated business management platform that verifies and validates business applications while providing entrepreneurs with funding opportunities, business ideas, and growth support.",
      features: [
        "Two-step application process with approval management",
        "Individual company dashboards to track achievements",
        "Employee growth tracking and long-term business progress",
        "Events, courses, and activities management",
        "Social media engagement features",
        "Multi-language support (Malay and English)",
      ],
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Query", "Storybook"],
    },
    {
      title: "Slot Booking",
      period: "03/2023 - 07/2023",
      location: "Malaysia",
      description:
        "Slot Booking was a hall booking application that allowed users to reserve multi-purpose halls for events, ceremonies, and other gatherings. The application was built using Next.js, TypeScript, and React, while the marketing website was developed entirely with Vue.js.",
      features: [
        "Hall details and available services display",
        "Real-time booking availability",
        "Direct client interaction for feature implementation",
        "Responsive and mobile-friendly designs",
        "Pop-up modals with Context API",
      ],
      tech: ["Next.js", "TypeScript", "React", "Vue.js", "Tailwind CSS", "Context API", "React Query"],
    },
    {
      title: "Awan BMS",
      period: "02/2023 - 06/2023",
      location: "Malaysia",
      description:
        "Awan BMS was an automated apartment management application. It created building blocks and assigned each house to an individual owner. The application automatically sent payment links, collected monthly maintenance fees, and managed facility bookings.",
      features: [
        "Automated payment link generation",
        "Monthly maintenance fee collection",
        "Booking system for halls, swimming pools, and gyms",
        "Parking management and security allocation",
        "Visitor booking and visitor parking management",
      ],
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Query", "Context API", "Storybook"],
    },
    {
      title: "Locum Zone",
      period: "02/2023 - 04/2023",
      location: "Malaysia",
      description:
        "Locum Zone was a Malaysian business and doctor employment-focused platform. It was designed for Malaysian hospitals and medical centers to create profiles and post job openings for doctors. Doctors could browse and apply for these job opportunities.",
      features: [
        "Hospital and medical center profile creation",
        "Job posting management for medical positions",
        "Doctor application system",
        "Browse and search functionality",
        "Individual UI component documentation with Storybook",
      ],
      tech: ["React", "Form Components", "API Integration", "Storybook"],
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 opacity-0 ${isVisible ? "animate-fadeInUp" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 text-balance max-w-2xl mx-auto">
            A showcase of my professional work spanning healthcare, e-commerce, government, and business management
            platforms
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-card p-8 md:p-10 rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group opacity-0 ${isVisible ? `animate-fadeInUp stagger-${Math.min(index + 1, 6)}` : ""}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="font-medium">{project.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="font-medium">{project.location}</span>
                    </div>
                  </div>
                </div>
                {(project.url || project.devUrl) && (
                  <div className="flex gap-3">
                    {project.url && (
                      <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                      >
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Site
                        </a>
                      </Button>
                    )}
                    {project.devUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="gap-2 hover:-translate-y-0.5 transition-all bg-transparent"
                      >
                        <a href={project.devUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Dev Site
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-lg">{project.description}</p>

              {project.features && (
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-3 text-primary">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-1 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-xs font-semibold border border-primary/20"
                  >
                    {tech}
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
