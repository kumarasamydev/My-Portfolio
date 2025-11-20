"use client";

import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
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

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "8012331863",
      href: "tel:8012331863",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "writetokumarasamy@gmail.com",
      href: "mailto:writetokumarasamy@gmail.com",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sirumugai, Coimbatore",
      href: null,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kumarasamy-nagaraj",
      color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kumarasamydev",
      color: "hover:bg-gray-50 hover:text-gray-900 hover:border-gray-300"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id='contact'
      className='py-24 px-4 bg-gradient-to-b from-purple-50/30 via-indigo-50/20 to-white relative overflow-hidden'>
      <div className='absolute top-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl opacity-60' />
      <div className='absolute bottom-20 left-10 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl opacity-60' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-200/10 to-indigo-200/10 rounded-full blur-3xl' />

      <div className='max-w-5xl mx-auto relative z-10'>
        <div
          className={`text-center mb-16 opacity-0 ${
            isVisible ? "animate-fadeInUp" : ""
          }`}>
          <div className='inline-block mb-4 px-4 py-2 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full'>
            Let's Connect
          </div>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>
            Get In Touch
          </h2>
          <div className='w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6'></div>
          <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-12'>
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-2xl border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-100 text-center group opacity-0 ${
                isVisible ? `animate-scaleIn stagger-${index + 1}` : ""
              }`}>
              <div
                className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                <item.icon className='w-7 h-7 text-white' />
              </div>
              <h3 className='font-bold text-lg mb-3 text-gray-900'>
                {item.label}
              </h3>
              {item.href ? (
                <a
                  href={item.href}
                  className='text-sm text-gray-600 hover:text-purple-600 transition-colors font-medium break-all inline-block'>
                  {item.value}
                </a>
              ) : (
                <p className='text-sm text-gray-600 font-medium'>
                  {item.value}
                </p>
              )}
            </div>
          ))}
        </div>

        <div
          className={`bg-gradient-to-br from-purple-600 to-indigo-600 p-10 rounded-3xl shadow-2xl shadow-purple-200 opacity-0 ${
            isVisible ? "animate-fadeInUp stagger-4" : ""
          }`}>
          <div className='text-center mb-8'>
            <MessageSquare className='w-12 h-12 text-white mx-auto mb-4' />
            <h3 className='text-2xl md:text-3xl font-bold text-white mb-3'>
              Ready to Start a Project?
            </h3>
            <p className='text-purple-100 text-lg'>
              Let's discuss how I can help bring your ideas to life
            </p>
          </div>

          <div className='flex flex-wrap items-center justify-center gap-4'>
            <Button
              asChild
              size='lg'
              className='gap-2 bg-white text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 font-semibold px-8 py-6 text-base'>
              <a href='mailto:writetokumarasamy@gmail.com'>
                <Send className='w-5 h-5' />
                Send Email
              </a>
            </Button>

            <div className='flex gap-3'>
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  asChild
                  variant='outline'
                  size='icon'
                  className={`rounded-full w-12 h-12 transition-all hover:scale-110 bg-white/90 backdrop-blur border-2 border-white/50 ${social.color}`}>
                  <a
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'>
                    <social.icon className='w-5 h-5' />
                    <span className='sr-only'>{social.label}</span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
