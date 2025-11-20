<script lang="ts">
  import { Card } from '$lib/components/ui/card';
  import { Badge } from '$lib/components/ui/badge';
  import { Briefcase, MapPin, Calendar } from 'lucide-svelte';

  const experiences = [
    {
      title: 'Front End Developer (Remote)',
      company: 'Plenitude IT',
      location: 'Kuala Lumpur, Malaysia',
      period: 'Feb 2023 - Present',
      responsibilities: [
        'Engaged with the client, CEO, and designer to brainstorm and execute creative solutions that improved the application\'s functionality and user experience.',
        'Collaborated with the design team to implement responsive and mobile-friendly designs, resulting in 20% increase in mobile traffic.',
        'Optimize front-end performance by implementing lazy loading, code splitting, and caching.',
        'Developed UI designs that aligned with brand\'s visual identity, creating a uniform user experience across all assets.',
        'Work closely with back-end developers to ensure seamless data flow.',
        'Utilize TypeScript for type safety and maintainable code.'
      ]
    },
    {
      title: 'Senior AR Analyst',
      company: 'Guidehouse, Quintessence Business Solution',
      location: 'Coimbatore, India',
      period: 'May 2021 - Oct 2023',
      responsibilities: [
        'Focuses on processing claims, insurance reimbursements, and handling denied claims to ensure timely payments.',
        'Interact with US Insurance companies to verifying the claim status and Analyze the claims.',
        'Generate reports on outstanding claims, payments, and revenue performance.',
        'Work closely with insurance companies to resolve discrepancies in claim payments.',
        'Monitor and optimize the revenue cycle to improve cash flow.'
      ]
    },
    {
      title: 'Administrative Executive',
      company: 'Jain Stores',
      location: 'Coonoor, India',
      period: 'Nov 2017 - Apr 2021',
      responsibilities: [
        'Managed the administrative operations and system maintenance for a furniture business and petrol bunk, ensuring seamless workflow, inventory tracking, and compliance.',
        'Maintained and updated digital and physical records for inventory, sales, and expenses.',
        'Handled billing, invoicing, and payment processing for both businesses.',
        'Tracked expenses and generated reports for better financial management.'
      ]
    },
    {
      title: 'Senior Associate',
      company: 'Dell, Pradot Technologies',
      location: 'Coimbatore',
      period: 'Apr 2015 - Jul 2017',
      responsibilities: [
        'Focuses on processing claims, insurance reimbursements, and handling denied claims to ensure timely payments.',
        'Monitor and optimize the revenue cycle to improve cash flow.',
        'Generate reports on outstanding claims, payments, and revenue performance.',
        'Work closely with insurance companies to resolve discrepancies in claim payments.'
      ]
    }
  ];
</script>

<section id="experience" class="py-20 px-4">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        My <span class="text-primary">Experience</span>
      </h2>
      <div class="w-24 h-1 bg-primary mx-auto"></div>
    </div>

    <div class="space-y-6">
      {#each experiences as exp, index}
        <Card class="p-6 md:p-8 hover:shadow-lg transition-shadow">
          <div class="flex flex-col md:flex-row md:items-start gap-4">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase class="w-6 h-6 text-primary" />
            </div>
            
            <div class="flex-1 space-y-4">
              <div>
                <h3 class="text-xl md:text-2xl font-bold mb-2">{exp.title}</h3>
                <p class="text-lg font-semibold text-primary mb-3">{exp.company}</p>
                
                <div class="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div class="flex items-center gap-2">
                    <Calendar class="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <MapPin class="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul class="space-y-2">
                {#each exp.responsibilities as responsibility}
                  <li class="flex gap-3 text-muted-foreground">
                    <span class="text-primary mt-1.5">•</span>
                    <span>{responsibility}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
