<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Mail, Linkedin, Phone, MapPin } from 'lucide-svelte';
</script>

<section id="contact" class="py-20 px-4">
  <div class="max-w-4xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        Get In <span class="text-primary">Touch</span>
      </h2>
      <div class="w-24 h-1 bg-primary mx-auto mb-6"></div>
      <p class="text-lg text-muted-foreground">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <a href="mailto:writetokumarasamy@gmail.com" class="group">
        <div class="p-6 border rounded-lg hover:shadow-lg hover:border-primary transition-all">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Mail class="w-6 h-6" />
          </div>
          <h3 class="font-bold mb-2">Email</h3>
          <p class="text-sm text-muted-foreground">writetokumarasamy@gmail.com</p>
        </div>
      </a>

      <a href="tel:8012331863" class="group">
        <div class="p-6 border rounded-lg hover:shadow-lg hover:border-primary transition-all">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Phone class="w-6 h-6" />
          </div>
          <h3 class="font-bold mb-2">Phone</h3>
          <p class="text-sm text-muted-foreground">8012331863</p>
        </div>
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="group">
        <div class="p-6 border rounded-lg hover:shadow-lg hover:border-primary transition-all">
          <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Linkedin class="w-6 h-6" />
          </div>
          <h3 class="font-bold mb-2">LinkedIn</h3>
          <p class="text-sm text-muted-foreground">Connect with me</p>
        </div>
      </a>

      <div class="p-6 border rounded-lg">
        <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          <MapPin class="w-6 h-6 text-primary" />
        </div>
        <h3 class="font-bold mb-2">Location</h3>
        <p class="text-sm text-muted-foreground">Sirumugai, Coimbatore</p>
      </div>
    </div>
  </div>
</section>

<footer class="py-8 px-4 border-t">
  <div class="max-w-6xl mx-auto text-center text-muted-foreground">
    <p>© 2025 Kumarasamy Nagaraj. All rights reserved.</p>
  </div>
</footer>
