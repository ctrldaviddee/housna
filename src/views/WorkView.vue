<template>
    <div style="border-top-left-radius:40px;border-top-right-radius:40px" class="relative flex flex-auto overflow-hidden bg-white pt-14">
      <div class="relative isolate flex w-full flex-col pt-9">
        <main class="w-full flex-auto">
          <!-- Hero Section -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <FadeIn class="max-w-3xl">
                <h1 class="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                  Our work
                </h1>
                <p class="mt-6 text-xl text-neutral-600">
                  We believe in efficiency and maximizing our resources to provide the best value to our clients.
                </p>
              </FadeIn>
            </div>
          </div>
  
          <!-- Projects Grid -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                <FadeIn v-for="(project, index) in projects" :key="index" class="project-card">
                  <div :class="{ 'lg:order-last': index % 2 === 0 }">
                    <div class="relative isolate">
                      <div class="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
                        <img :src="project.image" :alt="project.title" class="absolute inset-0 h-full w-full object-cover">
                      </div>
                    </div>
                  </div>
  
                  <div class="lg:pr-8 lg:pt-4">
                    <div class="lg:max-w-lg">
                      <h2 class="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
                        {{ project.title }}
                      </h2>
                      <p class="mt-6 text-xl text-neutral-600">{{ project.description }}</p>
                      <div class="mt-10">
                        <RouterLink :to="project.link" class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800">
                          <span class="relative top-px">View project</span>
                        </RouterLink>
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
  import { RouterLink } from 'vue-router'
  import FadeIn from '@/components/shared/FadeIn.vue'
  import ContactSection from '@/components/home/ContactSection.vue'
  
  const projects = [
    {
      title: 'Family Fund',
      description: 'A modern financial platform for the next generation of investors.',
      image: '@/assets/work-1.jpg',
      link: '/work/family-fund'
    },
    {
      title: 'Unseal',
      description: 'An encrypted messaging app that keeps your data safe.',
      image: '@/assets/work-2.jpg',
      link: '/work/unseal'
    },
    // Add more projects
  ]
  </script>