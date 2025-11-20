<script lang="ts">
  import { Card } from '$lib/components/ui/card';
  import { Code, Lightbulb, Users, TrendingUp } from 'lucide-svelte';
</script>

<section id="about" class="py-20 px-4 bg-secondary/30">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        About <span class="text-primary">Me</span>
      </h2>
      <div class="w-24 h-1 bg-primary mx-auto"></div>
    </div>

    <div class="space-y-8">
      <Card class="p-8">
        <h3 class="text-2xl font-bold mb-4 text-balance">
          Front-End Developer with a passion for creating impactful applications
        </h3>
        <p class="text-lg text-muted-foreground leading-relaxed">
          I am a passionate Front-End Developer with 2 years of experience specializing in building 
          responsive, user-friendly web applications. My journey in development has equipped me with 
          a diverse skill set and deep understanding of modern frontend technologies.
        </p>
        <p class="text-lg text-muted-foreground leading-relaxed mt-4">
          I specialize in building robust web applications using modern technologies like React, Next.js, 
          TypeScript, and Tailwind CSS. I enjoy solving complex problems and creating intuitive, 
          user-friendly interfaces that deliver exceptional user experiences.
        </p>
      </Card>

      <!-- Highlight Cards -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card class="p-6 hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Code class="w-6 h-6 text-primary" />
          </div>
          <h4 class="font-bold mb-2">Clean Code</h4>
          <p class="text-sm text-muted-foreground">
            I write clean, maintainable code following best practices and design patterns.
          </p>
        </Card>

        <Card class="p-6 hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Lightbulb class="w-6 h-6 text-primary" />
          </div>
          <h4 class="font-bold mb-2">Problem Solver</h4>
          <p class="text-sm text-muted-foreground">
            I enjoy tackling complex problems and finding elegant solutions.
          </p>
        </Card>

        <Card class="p-6 hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <Users class="w-6 h-6 text-primary" />
          </div>
          <h4 class="font-bold mb-2">Team Player</h4>
          <p class="text-sm text-muted-foreground">
            I collaborate effectively with teams to achieve project goals.
          </p>
        </Card>

        <Card class="p-6 hover:shadow-lg transition-shadow">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp class="w-6 h-6 text-primary" />
          </div>
          <h4 class="font-bold mb-2">Continuous Learner</h4>
          <p class="text-sm text-muted-foreground">
            I'm constantly learning new technologies and improving my skills.
          </p>
        </Card>
      </div>
    </div>
  </div>
</section>
