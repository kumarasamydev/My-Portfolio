<script lang="ts">
  import { Card } from '$lib/components/ui/card';
  import { GraduationCap, Calendar, MapPin } from 'lucide-svelte';

  const education = [
    {
      degree: 'Master of Computer Application',
      institution: 'Hindusthan College of Arts and Science',
      location: 'Coimbatore',
      period: '2012 - 2015'
    },
    {
      degree: 'Bachelor of Computer Application',
      institution: 'Hindusthan College of Arts and Science',
      location: 'Coimbatore',
      period: '2009 - 2012'
    }
  ];
</script>

<section id="education" class="py-20 px-4 bg-secondary/30">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        My <span class="text-primary">Education</span>
      </h2>
      <div class="w-24 h-1 bg-primary mx-auto"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      {#each education as edu}
        <Card class="p-6 md:p-8 hover:shadow-lg transition-shadow">
          <div class="flex gap-4">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap class="w-6 h-6 text-primary" />
            </div>
            
            <div class="space-y-3">
              <h3 class="text-xl font-bold">{edu.degree}</h3>
              <p class="text-lg font-semibold text-primary">{edu.institution}</p>
              
              <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div class="flex items-center gap-2">
                  <Calendar class="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
                <div class="flex items-center gap-2">
                  <MapPin class="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
