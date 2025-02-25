<template>
    <div style="border-top-left-radius:40px;border-top-right-radius:40px" class="relative flex flex-auto overflow-hidden bg-white pt-14">
      <div class="relative isolate flex w-full flex-col pt-9">
        <main class="w-full flex-auto">
          <!-- Hero Section -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <FadeIn class="max-w-3xl">
                <h1 class="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                  Our strength is collaboration
                </h1>
                <p class="mt-6 text-xl text-neutral-600">
                  We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.
                </p>
              </FadeIn>
            </div>
          </div>
  
          <!-- Team Section -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                <FadeIn>
                  <div class="lg:order-last">
                    <div class="relative isolate">
                      <div class="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-100">
                        <img src="@/assets/about-team.jpg" alt="Team photo" class="absolute inset-0 h-full w-full object-cover">
                      </div>
                    </div>
                  </div>
  
                  <div class="lg:pr-8 lg:pt-4">
                    <div class="lg:max-w-lg">
                      <h2 class="font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
                        Our team
                      </h2>
                      <p class="mt-6 text-xl text-neutral-600">
                        We're a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                      </p>
                      <div class="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div v-for="stat in stats" :key="stat.label">
                          <div class="flex flex-col-reverse gap-y-3 border-l border-neutral-950/10 pl-6">
                            <dt class="text-base text-neutral-600">{{ stat.label }}</dt>
                            <dd class="font-display text-3xl font-semibold tracking-tight text-neutral-950">{{ stat.value }}</dd>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
  
          <!-- Values Section -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <FadeIn>
                <div class="max-w-2xl">
                  <h2>
                    <span class="block font-display text-base font-semibold text-neutral-950">Our values</span>
                    <span class="mt-6 block max-w-5xl font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
                      We're built on trust, innovation, and collaboration
                    </span>
                  </h2>
                  <p class="mt-6 text-xl text-neutral-600">
                    Our values are at the core of everything we do, guiding our decisions and shaping our culture.
                  </p>
                </div>
              </FadeIn>
  
              <div class="mt-24 grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                <FadeIn v-for="(value, index) in values" :key="index">
                  <div>
                    <div class="aspect-[2/1] relative rounded-xl bg-neutral-100">
                      <img :src="value.image" :alt="value.title" class="absolute inset-0 h-full w-full object-cover rounded-xl">
                    </div>
                    <h3 class="mt-10 font-display text-2xl font-semibold tracking-tight text-neutral-950">
                      {{ value.title }}
                    </h3>
                    <p class="mt-4 text-base text-neutral-600">{{ value.description }}</p>
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
  
  const stats = [
    { label: 'Team members', value: '250+' },
    { label: 'Years in business', value: '10+' },
    { label: 'Projects delivered', value: '400+' },
    { label: 'Awards', value: '16' }
  ]
  
  const values = [
    {
      title: 'Trust & Transparency',
      description: 'We believe in being open and honest with our clients and each other.',
      image: '@/assets/values-1.jpg'
    },
    {
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions.',
      image: '@/assets/values-2.jpg'
    },
    {
      title: 'Collaboration',
      description: 'We work together as a team and with our clients to achieve the best results.',
      image: '@/assets/values-3.jpg'
    }
  ]
  </script>