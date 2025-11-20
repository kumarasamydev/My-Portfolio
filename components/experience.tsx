"use client"

import { Briefcase, Calendar, MapPin } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Experience() {
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

  const experiences = [
    {
      title: "Front End Developer (Remote)",
      company: "Plenitude IT",
      location: "Kuala Lumpur, Malaysia",
      period: "2023/Feb - Present",
      responsibilities: [
        "Engaged with the client, CEO, and designer to brainstorm and execute creative solutions that improved the application's functionality and user experience.",
        "Collaborated with the design team to implement responsive and mobile-friendly designs, resulting in 20% increase in mobile traffic.",
        "Optimize front-end performance by implementing lazy loading, code splitting, and caching.",
        "Developed UI designs that aligned with brand's visual identity, creating a uniform user experience across all assets.",
        "Work closely with back-end developers to ensure seamless data flow.",
        "Utilize TypeScript for type safety and maintainable code.",
      ],
    },
    {
      title: "Senior AR Analyst",
      company: "Guidehouse, Quintessence Business Solution",
      location: "Coimbatore, India",
      period: "2021/May - 2023/Oct",
      responsibilities: [
        "Focuses on processing claims, insurance reimbursements, and handling denied claims to ensure timely payments.",
        "Interact with US Insurance companies to verifying the claim status and Analyze the claims.",
        "Generate reports on outstanding claims, payments, and revenue performance.",
        "Work closely with insurance companies to resolve discrepancies in claim payments.",
        "Monitor and optimize the revenue cycle to improve cash flow.",
      ],
    },
    {
      title: "Administrative Executive",
      company: "Jain Stores",
      location: "Coonoor, India",
      period: "2017/Nov - 2021/Apr",
      responsibilities: [
        "Managed the administrative operations and system maintenance for a furniture business and petrol bunk, ensuring seamless workflow, inventory tracking, and compliance.",
        "Maintained and updated digital and physical records for inventory, sales, and expenses.",
        "Handled billing, invoicing, and payment processing for both businesses.",
        "Tracked expenses and generated reports for better financial management.",
      ],
    },
    {
      title: "Senior Associate",
      company: "Dell, Pradot Technologies",
      location: "Coimbatore",
      period: "2015/Apr - 2017/Jul",
      responsibilities: [
        "Focuses on processing claims, insurance reimbursements, and handling denied claims to ensure timely payments.",
        "Monitor and optimize the revenue cycle to improve cash flow.",
        "Generate reports on outstanding claims, payments, and revenue performance.",
        "Work closely with insurance companies to resolve discrepancies in claim payments.",
      ],
    },
  ]

  return (
    <section ref={sectionRef} id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 opacity-0 ${isVisible ? "animate-fadeInUp" : ""}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative space-y-8">
          <div className="hidden md:block absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative bg-card p-6 md:p-8 md:ml-16 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 group opacity-0 ${isVisible ? `animate-fadeInUp stagger-${index + 1}` : ""}`}
            >
              <div className="hidden md:flex absolute -left-[2.875rem] top-8 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full items-center justify-center border-4 border-background shadow-lg">
                <div className="w-3 h-3 bg-background rounded-full"></div>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground lg:text-right">
                  <div className="flex items-center gap-2 lg:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 lg:justify-end">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="text-primary mt-1.5 font-bold">▸</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
