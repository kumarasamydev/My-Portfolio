<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Mail, Linkedin, Phone, MapPin } from 'lucide-svelte';
</script>

<section class="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
  <!-- Decorative background elements -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
  </div>

  <div class="max-w-6xl mx-auto w-full">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Text Content -->
      <div class="space-y-6">
        <div class="space-y-2">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-balance">
            Hi, I'm <span class="text-primary">Kumarasamy Nagaraj</span>
          </h1>
          <p class="text-xl md:text-2xl text-muted-foreground">
            I'm a <span class="text-primary font-semibold">Front End Developer</span>
          </p>
        </div>
        
        <p class="text-lg text-muted-foreground leading-relaxed">
          Creative Front-End Developer with 3 years of experience in developing visually appealing and high-converting landing pages. 
          Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS.
        </p>

        <!-- Contact Links -->
        <div class="flex flex-wrap gap-4">
          <a href="mailto:writetokumarasamy@gmail.com" class="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
            <Mail class="w-4 h-4" />
            <span class="text-sm">Email</span>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
            <Linkedin class="w-4 h-4" />
            <span class="text-sm">LinkedIn</span>
          </a>
          <a href="tel:8012331863" class="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors">
            <Phone class="w-4 h-4" />
            <span class="text-sm">8012331863</span>
          </a>
        </div>

        <div class="flex items-center gap-2 text-muted-foreground">
          <MapPin class="w-4 h-4" />
          <span>Sirumugai, Coimbatore</span>
        </div>

        <Button size="lg" class="mt-4">
          Download Resume
        </Button>
      </div>

      <!-- Right: Profile Image -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative">
          <div class="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
            <img 
              src="/placeholder.svg?height=400&width=400" 
              alt="Kumarasamy Nagaraj" 
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Decorative ring -->
          <div class="absolute inset-0 rounded-full border-2 border-primary/30 scale-110 animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
</section>
