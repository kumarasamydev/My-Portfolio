"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16'>
      <div className='absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100' />

      <div className='relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10'>
        {/* Left Content */}
        <div className='text-left'>
          <div
            className={`mb-6 opacity-0 ${
              isVisible ? "animate-fadeInUp stagger-1" : ""
            }`}>
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-4'>
              Hi, I'm{" "}
              <span className='bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent'>
                Kumarasamy
              </span>
            </h1>
            <p className='text-2xl md:text-3xl text-foreground mb-2'>
              I'm a{" "}
              <span className='font-semibold text-purple-600'>
                Front End Developer
              </span>
            </p>
          </div>

          <p
            className={`text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed opacity-0 ${
              isVisible ? "animate-fadeInUp stagger-2" : ""
            }`}>
            With 3 years of programming experience and professional work. I'm
            passionate about exploring new technologies and building impactful
            applications.
          </p>

          {/* Contact Buttons */}
          <div
            className={`flex flex-wrap items-center gap-4 mb-8 opacity-0 ${
              isVisible ? "animate-fadeInUp stagger-3" : ""
            }`}>
            <Button
              asChild
              variant='ghost'
              size='icon'
              className='rounded-lg border border-border hover:border-purple-600 hover:bg-purple-50 transition-all'>
              <a
                href='https://github.com'
                target='_blank'
                rel='noopener noreferrer'>
                <Github className='w-5 h-5' />
                <span className='sr-only'>GitHub</span>
              </a>
            </Button>
            <Button
              asChild
              variant='ghost'
              size='icon'
              className='rounded-lg border border-border hover:border-purple-600 hover:bg-purple-50 transition-all'>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'>
                <Linkedin className='w-5 h-5' />
                <span className='sr-only'>LinkedIn</span>
              </a>
            </Button>
            <Button
              asChild
              variant='ghost'
              size='icon'
              className='rounded-lg border border-border hover:border-purple-600 hover:bg-purple-50 transition-all'>
              <a href='mailto:writetokumarasamy@gmail.com'>
                <Mail className='w-5 h-5' />
                <span className='sr-only'>Email</span>
              </a>
            </Button>
            <Button
              asChild
              variant='ghost'
              size='icon'
              className='rounded-lg border border-border hover:border-purple-600 hover:bg-purple-50 transition-all'>
              <a href='tel:8012331863'>
                <Phone className='w-5 h-5' />
                <span className='sr-only'>Call</span>
              </a>
            </Button>
          </div>

          <Button
            asChild
            size='lg'
            className={`gap-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white shadow-lg shadow-purple-500/30 opacity-0 ${
              isVisible ? "animate-fadeInUp stagger-4" : ""
            }`}>
            <a
              href='/Kumarasamy_Nagaraj_Resume.pdf'
              download='Kumarasamy_Nagaraj_Resume.pdf'>
              Download Resume
            </a>
          </Button>
        </div>

        {/* Right Content - Profile Image */}
        <div
          className={`flex justify-center lg:justify-end opacity-0 ${
            isVisible ? "animate-scaleIn stagger-2" : ""
          }`}>
          <div className='relative'>
            <div className='relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
              <div
                className='absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-400 to-pink-500 rounded-full animate-spin-slow'
                style={{ animationDuration: "3s" }}
              />
              <div className='absolute inset-2 bg-white rounded-full overflow-hidden'>
                <img
                  src='/professional-developer-portrait.png'
                  alt='Kumarasamy Nagaraj'
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            {/* Floating dots decoration */}
            <div
              className='absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full opacity-60 animate-bounce'
              style={{ animationDelay: "0s" }}
            />
            <div
              className='absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-bounce'
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className='absolute top-1/2 -right-8 w-4 h-4 bg-purple-300 rounded-full opacity-60 animate-bounce'
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-purple-600 rounded-full flex justify-center pt-2'>
          <div className='w-1 h-2 bg-purple-600 rounded-full animate-pulse' />
        </div>
      </div>
    </section>
  );
}
