<script lang="ts">
  import { Card } from '$lib/components/ui/card';
  import { Badge } from '$lib/components/ui/badge';
  import { ExternalLink, Calendar, MapPin } from 'lucide-svelte';

  const projects = [
    {
      name: 'Locum Zone',
      period: '02/2023 - 04/2023',
      location: 'Malaysia',
      description: 'Locum Zone was a Malaysian business and doctor employment-focused platform. It was designed for Malaysian hospitals and medical centers to create profiles and post job openings for doctors. Doctors could browse and apply for these job opportunities.',
      highlights: [
        'Developed all UI components using React, including various form input elements.',
        'Integrated all required APIs for the project.',
        'Implemented Storybook for individual UI component documentation and testing.'
      ],
      tech: ['React', 'Storybook', 'API Integration']
    },
    {
      name: 'Awan BMS',
      period: '02/2023 - 06/2023',
      location: 'Malaysia',
      description: 'Awan BMS was an automated apartment management application. It created building blocks and assigned each house to an individual owner. The application automatically sent payment links, collected monthly maintenance fees, and managed the booking of halls, swimming pools, and gyms.',
      highlights: [
        'Developed reusable UI components using React for various form inputs.',
        'Implemented Context API for state management and authentication.',
        'Frontend: Next.js, React, Typescript, Tailwind CSS, React Query, Storybook.'
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'React Query']
    },
    {
      name: 'Slot Booking',
      period: '03/2023 - 07/2023',
      location: 'Malaysia',
      description: 'Slot Booking was a hall booking application that allowed users to reserve multi-purpose halls for events, ceremonies, and other gatherings. The application was built using Next.js, TypeScript, and React, while the marketing website was developed entirely with Vue.js.',
      highlights: [
        'Developed UI components using React for various form inputs and styles using Tailwind CSS.',
        'Implemented Context API for authentication and pop-up modals.',
        'Integrated all necessary APIs for the project using React Query.',
        'Directly interacted with clients and implemented required features.',
        'Collaborated with the design team to implement responsive and mobile-friendly designs.'
      ],
      tech: ['Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS']
    },
    {
      name: 'NEST Ncer Web',
      period: '09/2023 - Till now',
      location: 'Malaysia',
      url: 'https://nest.ncer.com.my',
      description: 'Ncer Web is a Malaysian government-operated business management platform that verifies and validates business applications while providing entrepreneurs with funding opportunities, business ideas, and growth support.',
      highlights: [
        'Developed UI components using React for various form inputs and styles using Tailwind CSS.',
        'Integrated all necessary APIs for the project using React Query.',
        'Collaborated with the design team to implement responsive and mobile-friendly designs.',
        'Conducted thorough code reviews and comprehensive testing.',
        'Implemented a multi-language option supporting Malay and English.'
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'React Query']
    },
    {
      name: 'Mobilab2u Web',
      period: '07/2024 - Till now',
      location: 'Malaysia',
      url: 'https://mobilab2u.com',
      description: 'Mobilab2u is a new healthcare application offering online blood tests and consultations for Malaysian customers. Users can book a test, and an HSP (Healthcare Service Provider) will collect the blood sample from their location and submit it to a lab.',
      highlights: [
        'Tech Stack: Next.js 15, React 18 with TypeScript, Tailwind CSS, and Context API for state management.',
        'API Integration: Used useSWR for efficient data fetching.',
        'Performance Optimization: Analyzed bundle sizes with Next.js bundle analyzer.',
        'Lazy Loading: Implemented lazy loading for images and components to enhance performance.',
        'SEO & Speed: Utilized Server-Side Rendering (SSR) and code splitting for faster load times and improved SEO.'
      ],
      tech: ['Next.js 15', 'React 18', 'TypeScript', 'Tailwind CSS', 'useSWR']
    },
    {
      name: 'Used Computer',
      period: '03/2025 - Till now',
      location: 'Malaysia',
      description: 'A Malaysian platform that allows users to sell their E-waste products and buy or sell both used and new electronics. It includes features like price negotiation (before and after order), courier and drop-off options, as well as return and order cancellation flows.',
      highlights: [
        'Developed UI components using React for various form inputs and styles using Tailwind CSS.',
        'Integrated all necessary APIs for the project.',
        'Collaborated with the design team to implement responsive and mobile-friendly designs.',
        'Conducted thorough code reviews and comprehensive testing.'
      ],
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    }
  ];
</script>

<section id="projects" class="py-20 px-4">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        My <span class="text-primary">Projects</span>
      </h2>
      <div class="w-24 h-1 bg-primary mx-auto"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      {#each projects as project}
        <Card class="p-6 hover:shadow-lg transition-shadow flex flex-col">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-xl font-bold mb-2">{project.name}</h3>
              {#if project.url}
                <a href={project.url} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline inline-flex items-center gap-1 text-sm mb-2">
                  Visit Site <ExternalLink class="w-3 h-3" />
                </a>
              {/if}
            </div>
          </div>

          <div class="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            <div class="flex items-center gap-2">
              <Calendar class="w-4 h-4" />
              <span>{project.period}</span>
            </div>
            <div class="flex items-center gap-2">
              <MapPin class="w-4 h-4" />
              <span>{project.location}</span>
            </div>
          </div>

          <p class="text-muted-foreground mb-4">{project.description}</p>

          <ul class="space-y-2 mb-4 flex-1">
            {#each project.highlights as highlight}
              <li class="flex gap-2 text-sm text-muted-foreground">
                <span class="text-primary mt-1">•</span>
                <span>{highlight}</span>
              </li>
            {/each}
          </ul>

          <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.tech as tech}
              <Badge variant="outline" class="text-xs">{tech}</Badge>
            {/each}
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
