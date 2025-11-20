<script lang="ts">
  import { Badge } from '$lib/components/ui/badge';
  import { Card } from '$lib/components/ui/card';

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'NextJS', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Github Actions', 'Agile', 'Figma', 'React Query', 'Storybook']
    },
    {
      title: 'Design & Optimization',
      skills: ['UX Design', 'Landing Page Optimization', 'Team Collaboration']
    }
  ];
</script>

<section id="skills" class="py-20 px-4 bg-secondary/30">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        My <span class="text-primary">Skills</span>
      </h2>
      <div class="w-24 h-1 bg-primary mx-auto"></div>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      {#each skillCategories as category}
        <Card class="p-6 hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-bold mb-4 text-primary">{category.title}</h3>
          <div class="flex flex-wrap gap-2">
            {#each category.skills as skill}
              <Badge variant="secondary" class="text-sm px-3 py-1">
                {skill}
              </Badge>
            {/each}
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
