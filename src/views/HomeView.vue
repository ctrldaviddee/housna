<script setup>
import BackgroundSvg from '../components/layout/BackgroundSvg.vue'

  import HeroSection from '../components/home/HeroSection.vue'
  import WorkShowcase from '@/components/home/WorkShowcase.vue'
  import NosServicesSection from '@/components/home/NosServicesSection.vue'
  import ProcessSection from '@/components/home/ProcessSection.vue'
  import TestimonialSection from '@/components/home/TestimonialSection.vue'
  import ContactSection from '@/components/home/ContactSection.vue'
  

</script>

<template>
  
      <!-- Background SVG -->
        <BackgroundSvg />
    <!-- background svg end-->
        <main class="w-full flex-auto">
        <!-- Hero Section -->
        <HeroSection />
        
        <!-- Work Showcase Section -->
         
        <WorkShowcase />
        
        <!-- Services Section -->
        <NosServicesSection />
        
        <!-- Process Section -->
         
        <ProcessSection />
        
        <!-- Testimonial Section -->
        <TestimonialSection />
        
        <!-- Contact Section -->
        <!-- <ContactSection /> -->

           <!-- Footer section -->
           
      </main>
    
</template>
