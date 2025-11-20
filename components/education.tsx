"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Education() {
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

  const education = [
    {
      degree: "Master of Computer Application",
      institution: "Hindusthan College of Arts and Science",
      location: "Coimbatore",
      period: "2012 - 2015",
      description:
        "Specialized in software development, web technologies, and database management systems.",
      achievement: "MCA Graduate"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Hindusthan College of Arts and Science",
      location: "Coimbatore",
      period: "2009 - 2012",
      description:
        "Foundation in computer science fundamentals, programming languages, and software engineering.",
      achievement: "BCA Graduate"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id='education'
      className='py-24 px-4 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30 relative overflow-hidden'>
      <div className='absolute top-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl opacity-40' />
      <div className='absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl opacity-40' />

      <div className='max-w-6xl mx-auto relative z-10'>
        <div
          className={`text-center mb-16 opacity-0 ${
            isVisible ? "animate-fadeInUp" : ""
          }`}>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
            Education
          </h2>
          <div className='w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-4'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Academic background and qualifications that built my foundation in
            technology
          </p>
        </div>

        <div className='max-w-4xl mx-auto relative'>
          {/* Timeline line */}
          <div className='hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-300 via-purple-400 to-purple-300 transform -translate-x-1/2' />

          {education.map((edu, index) => (
            <div
              key={index}
              className={`relative mb-12 last:mb-0 opacity-0 ${
                isVisible ? `animate-scaleIn stagger-${index + 1}` : ""
              }`}>
              {/* Timeline dot */}
              <div className='hidden md:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full transform -translate-x-1/2 z-10 border-4 border-white shadow-lg' />

              {/* Card */}
              <div
                className={`md:w-[calc(50%-3rem)] ${
                  index % 2 === 0
                    ? "md:ml-auto md:pl-12"
                    : "md:mr-auto md:pr-12"
                }`}>
                <div className='bg-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-100 group'>
                  <div className='flex items-start gap-4 mb-6'>
                    <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg'>
                      <GraduationCap className='w-8 h-8 text-white' />
                    </div>
                    <div className='flex-1'>
                      <div className='inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full mb-3'>
                        {edu.achievement}
                      </div>
                      <h3 className='text-xl md:text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors'>
                        {edu.degree}
                      </h3>
                      <p className='text-gray-700 font-semibold mb-3'>
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <p className='text-gray-600 mb-4 leading-relaxed'>
                    {edu.description}
                  </p>

                  <div className='flex flex-wrap gap-4 text-sm'>
                    <div className='flex items-center gap-2 text-gray-600'>
                      <Calendar className='w-4 h-4 text-purple-500' />
                      <span className='font-medium'>{edu.period}</span>
                    </div>
                    <div className='flex items-center gap-2 text-gray-600'>
                      <MapPin className='w-4 h-4 text-purple-500' />
                      <span className='font-medium'>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
