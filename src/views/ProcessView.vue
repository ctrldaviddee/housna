<template>
    <div style="border-top-left-radius:40px;border-top-right-radius:40px" class="relative flex flex-auto overflow-hidden bg-white pt-14">
      <div class="relative isolate flex w-full flex-col pt-9">
        <main class="w-full flex-auto">
          <!-- Hero Section -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <FadeIn class="max-w-3xl">
                <h1 class="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                  Our process is structured to help you win
                </h1>
                <p class="mt-6 text-xl text-neutral-600">
                  We've refined our process over the years to create the most effective way to deliver exceptional results.
                </p>
              </FadeIn>
            </div>
          </div>
  
          <!-- Process Steps -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="space-y-24 lg:space-y-32">
                <FadeIn v-for="(step, index) in processSteps" :key="index">
                  <div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                    <div :class="{ 'lg:order-last': index % 2 === 0 }">
                      <div class="relative isolate">
                        <div class="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
                          <img :src="step.image" :alt="step.title" class="absolute inset-0 h-full w-full object-cover">
                        </div>
                      </div>
                    </div>
  
                    <div class="lg:pr-8 lg:pt-4">
                      <div class="lg:max-w-lg">
                        <div class="flex items-center">
                          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white">
                            {{ index + 1 }}
                          </div>
                          <h2 class="ml-4 font-display text-4xl font-medium tracking-tight text-neutral-950">
                            {{ step.title }}
                          </h2>
                        </div>
                        <p class="mt-6 text-xl text-neutral-600">{{ step.description }}</p>
                        <ul class="mt-8 space-y-3 text-base text-neutral-600">
                          <li v-for="(point, pointIndex) in step.points" :key="pointIndex" class="flex">
                            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 flex-none text-neutral-950">
                              <path d="M5 12l5 5l10 -10" stroke="currentColor"></path>
                            </svg>
                            <span class="ml-4">{{ point }}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
  
          <!-- Contact Section -->
          <ContactSection />
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import FadeIn from '@/components/shared/FadeIn.vue'
  import ContactSection from '@/components/home/ContactSection.vue'
  
  const processSteps = [
    {
      title: 'Discovery',
      description: 'We work closely with you to understand your vision, goals, and requirements.',
      image: '@/assets/process-1.jpg',
      points: [
        'In-depth consultation to understand your needs',
        'Market and competitor analysis',
        'Project scope definition',
        'Technical requirements gathering'
      ]
    },
    {
      title: 'Strategy',
      description: 'We create a comprehensive plan to bring your vision to life.',
      image: '@/assets/process-2.jpg',
      points: [
        'Project roadmap development',
        'Technology stack selection',
        'Resource allocation planning',
        'Timeline and milestone definition'
      ]
    },
    {
      title: 'Execution',
      description: 'We bring your project to life with precision and attention to detail.',
      image: '@/assets/process-3.jpg',
      points: [
        'Agile development methodology',
        'Regular progress updates',
        'Quality assurance testing',
        'Continuous feedback integration'
      ]
    },
    {
      title: 'Launch & Support',
      description: 'We ensure a smooth launch and provide ongoing support.',
      image: '@/assets/process-4.jpg',
      points: [
        'Pre-launch testing and optimization',
        'Deployment and go-live support',
        'Post-launch monitoring',
        'Ongoing maintenance and updates'
      ]
    }
  ]
  </script>