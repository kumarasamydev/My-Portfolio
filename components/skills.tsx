"use client";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const frontendSkills = [
    { name: "HTML", level: 95, category: "Core" },
    { name: "CSS", level: 95, category: "Core" },
    { name: "JavaScript", level: 90, category: "Core" },
    { name: "React", level: 90, category: "Framework" },
    { name: "NextJS", level: 85, category: "Framework" },
    { name: "TypeScript", level: 85, category: "Language" },
    { name: "Tailwind CSS", level: 90, category: "Styling" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "Github Actions", level: 75, category: "Tools" },
    { name: "Agile", level: 80, category: "Methodology" },
    { name: "Figma", level: 85, category: "Design" },
    { name: "UX Design", level: 80, category: "Design" },
    { name: "React Query", level: 85, category: "State Management" },
    { name: "Storybook", level: 80, category: "Tools" }
  ];

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='py-20 px-4 bg-gradient-to-b from-white via-purple-50/30 to-white'>
      <div className='max-w-6xl mx-auto'>
        <div
          className={`text-center mb-16 opacity-0 ${
            isVisible ? "animate-fadeInUp" : ""
          }`}>
          <h2 className='text-4xl md:text-5xl font-bold mb-2'>
            Frontend{" "}
            <span className='bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent'>
              Skills
            </span>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-purple-600 to-purple-400 mx-auto mt-4' />
          <p className='text-muted-foreground mt-4 max-w-2xl mx-auto'>
            Specialized expertise in modern frontend technologies and
            development practices
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {frontendSkills.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 opacity-0 border border-purple-100 overflow-hidden ${
                isVisible ? `animate-scaleIn stagger-${(index % 3) + 1}` : ""
              }`}>
              {/* Gradient Background on Hover */}
              <div className='absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

              {/* Content */}
              <div className='relative z-10'>
                <div className='flex items-center justify-between mb-3'>
                  <h3 className='text-lg font-bold text-foreground group-hover:text-purple-600 transition-colors'>
                    {skill.name}
                  </h3>
                  <span className='text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full'>
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className='w-full h-2 bg-purple-50 rounded-full overflow-hidden mb-3'>
                  <div
                    className='h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-1000 ease-out'
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 50}ms`
                    }}
                  />
                </div>

                {/* Category Badge */}
                <span className='inline-block text-xs text-purple-600/70 font-medium'>
                  {skill.category}
                </span>
              </div>

              {/* Decorative Corner */}
              <div className='absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-purple-600/10 to-purple-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
