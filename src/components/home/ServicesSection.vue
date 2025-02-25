<script setup>
import { defineComponent, h } from 'vue'
import FadeIn from '@/components/shared/FadeIn.vue'

const CodeIcon = defineComponent({
  render: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }, [
    h('path', {
      d: 'M8 9l3 3-3 3M13 15h3',
      stroke: 'currentColor'
    })
  ])
})

const DesignIcon = defineComponent({
  render: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }, [
    h('path', {
      d: 'M9 9h6M9 12h6M9 15h6',
      stroke: 'currentColor'
    })
  ])
})

const MarketingIcon = defineComponent({
  render: () => h('svg', {
    viewBox: '0 0 24 24',
    fill: 'none',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true'
  }, [
    h('path', {
      d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      stroke: 'currentColor'
    })
  ])
})

const services = [
  {
    title: 'WwW DDO Ddeftj',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vitae. In dolores natus culpa minima, tenetur ad impedit soluta. Odit error ratione nulla vero. Facilis vitae quod consectetur odio sint.',
    icon: CodeIcon
  },
  {
    title: 'Officia aspernatur',
    description: 'Voluptates deserunt neque nesciunt. Debitis dicta nisi, quae illo fugit, inventore obcaecati quia accusantium beatae mollitia animi modi laboriosam magnam neque ut eligendi repellendus ab quidem nobis saepe magni ratione',
    icon: DesignIcon
  },
  {
    title: 'Sunt eaque',
    description: 'Soluta ducimus eius exercitationem laborum ad. Quis, sit accusamus, iusto quia animi provident sunt expedita dolor reprehenderit, at voluptate iste ea numquam dolores consequuntur sint eos unde ut sed veniam.',
    icon: MarketingIcon
  }
]
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
   
     
    <div class="mx-auto max-w-2xl lg:max-w-none">

      <FadeIn class="max-w-2xl">
        <h2>
          <span class="sr-only"> - </span>
          <span class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
           Modi vero, quisquam veritatis doloremque libero minima in ipsam. 
          </span>
        </h2>
        <p class="mt-6 text-xl text-neutral-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, cum! - doloribus quiosam veritatis doloremque libero minima in ipsam. 
        </p>
      </FadeIn>

      <div class="mt-16">
        <FadeIn>
          <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div v-for="(service, index) in services" :key="services.icon" class="flex">
              <div class="flex flex-col">
                <div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950">
                  <component :is="service.icon" class="h-6 w-6 text-white" />
                </div>
                <h3 class="mt-6 font-display text-base font-semibold text-neutral-950">
                  {{ service.title }}
                </h3>
                <p class="mt-4 text-sm text-neutral-600">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
</template>

