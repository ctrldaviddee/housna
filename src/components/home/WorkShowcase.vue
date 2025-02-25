<script setup>
import france from '@/assets/media/svgS/france.svg'
import chine from '@/assets/media/svgS/chine.svg'
import togo from '@/assets/media/svgS/togo.svg'
import niger from '@/assets/media/svgS/niger.svg'
import logomark from '@/assets/media/svgS/logomark-dark.73187f97.svg'
import FadeIn from '@/components/shared/FadeIn.vue'

// const projects = [
//   {
//     title: 'E-commerce Platform Redesign',
//     href: '/work/e-commerce-platform',
//     category: 'Web Development',
//     date: '2024',
//     image: '@/assets/projects/ecommerce.jpg'
//   },
//   {
//     title: 'Mobile Banking App',
//     href: '/work/mobile-banking',
//     category: 'App Development',
//     date: '2024',
//     image: '@/assets/projects/banking.jpg'
//   },
//   {
//     title: 'Healthcare Management System',
//     href: '/work/healthcare-system',
//     category: 'Enterprise Solution',
//     date: '2023',
//     image: '@/assets/projects/healthcare.jpg'
//   }
// ]
</script>

<template>

  <div class="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
    <div class="mx-auto max-w-[90%] px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <FadeIn class="flex items-center gap-x-8">
          <h2
            class="text-center font-display text-lg font-bold font-mono tracking-wider text-white sm:text-left">
            Commandez et livrez avec nous en:
          </h2>
          <div class="h-px flex-auto bg-neutral-800"></div>
        </FadeIn>

        <FadeIn>
          <ul role="list" class="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            <li>
              <FadeIn class="flex items-center gap-x-2"> 
                <img alt="Phobia" loading="lazy"
                  width="35" height="36" decoding="async" data-nimg="1" style="color:transparent"
                  :src="logomark" />
                <img alt="" loading="lazy"
                 decoding="async" data-nimg="1" style="color:transparent"
                  :src="france" /> 
                  <!--<span class="font-mono font-extrabold font-stretch-75% text-slate-200">Chine</span> -->

                  
                </FadeIn>
            </li>
            <li>
              <FadeIn class="flex items-center gap-x-2"> 
                <img alt="Phobia" loading="lazy"
                  width="35" height="36" decoding="async" data-nimg="1" style="color:transparent"
                  :src="logomark" />

                  <img alt="Phobia" loading="lazy"
                   decoding="async" data-nimg="1" style="color:transparent"
                  :src="chine" />
              
                  <!-- <span class="font-mono font-extrabold font-stretch-75% text-slate-200">France</span> -->

                </FadeIn>
            </li>
            <li>
              <FadeIn class="flex items-center gap-x-2"> 
                <!-- <img loading="lazy"
                  width="80" height="36" decoding="async" data-nimg="1" style="color:transparent"
                  :src="nigeria" /> <span class="font-mono font-extrabold font-stretch-75% text-slate-200">Nigeria</span> -->
                  
                  <img alt="Phobia" loading="lazy"
                  width="35" height="36" decoding="async" data-nimg="1" style="color:transparent"
                  :src="logomark" />

                  <img alt="Phobia" loading="lazy"
                   decoding="async" data-nimg="1" style="color:transparent"
                  :src="togo" />

                </FadeIn>
            </li>
            <li>
              <FadeIn class="flex items-center gap-x-2"> 
                <!-- <img alt="Mail Smirk" loading="lazy"
                  width="80" height="36" decoding="async" data-nimg="1" style="color:transparent"
                  :src="germany" /> <span class="font-mono font-extrabold font-stretch-75% text-slate-200">Suisse</span> -->
                  
                  <img alt="Phobia" loading="lazy"
                  width="35" height="36" decoding="async" data-nimg="1" style="color:transparent"
                  :src="logomark" />

                  <img alt="Phobia" loading="lazy"
                   decoding="async" data-nimg="1" style="color:transparent"
                  :src="niger" />

                </FadeIn>
            </li>
            
          </ul>
        </FadeIn>
      </div>
    </div>
  </div>
</template>
<!-- <article v-for="(project, index) in projects" :key="index" class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
              <img :src="project.image" :alt="project.title" class="absolute inset-0 -z-10 h-full w-full object-cover">
              <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

              <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time :datetime="project.date" class="mr-8">{{ project.date }}</time>
                <div class="-ml-4 flex items-center gap-x-4">
                  <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div class="flex gap-x-2.5">{{ project.category }}</div>
                </div>
              </div>
              <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
                <RouterLink :to="project.href">
                  <span class="absolute inset-0"></span>
                  {{ project.title }}
                </RouterLink>
              </h3>
            </article> -->

 