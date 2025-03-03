<script setup>
import { defineComponent, h } from 'vue'
import { RouterLink } from 'vue-router'
import FadeIn from '@/components/shared/FadeIn.vue'
import BuySvg from './buy.svg'
import CourierDeliverySvg from './courier-delivery.svg'

// const CodeIcon = defineComponent({
//   render: () => h('svg', {
//     viewBox: '0 0 24 24',
//     fill: 'none',
//     strokeWidth: '1.5',
//     strokeLinecap: 'round',
//     strokeLinejoin: 'round',
//     'aria-hidden': 'true'
//   }, [
//     h('path', {
//       d: 'M8 9l3 3-3 3M13 15h3',
//       stroke: 'currentColor'
//     })
//   ])
// })

// const DesignIcon = defineComponent({
//   render: () => h('svg', {
//     viewBox: '0 0 24 24',
//     fill: 'none',
//     strokeWidth: '1.5',
//     strokeLinecap: 'round',
//     strokeLinejoin: 'round',
//     'aria-hidden': 'true'
//   }, [
//     h('path', {
//       d: 'M9 9h6M9 12h6M9 15h6',
//       stroke: 'currentColor'
//     })
//   ])
// })

// const MarketingIcon = defineComponent({
//   render: () => h('svg', {
//     viewBox: '0 0 24 24',
//     fill: 'none',
//     strokeWidth: '1.5',
//     strokeLinecap: 'round',
//     strokeLinejoin: 'round',
//     'aria-hidden': 'true'
//   }, [
//     h('path', {
//       d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
//       stroke: 'currentColor'
//     })
//   ])
// })


const services = [
  {
    title: 'Achats internationaux',
    description: 'Un bref aperçu de ce que nous offrons ...',
    icon: BuySvg
  },
  {
    title: 'Livraison à domicile',
    description: 'Un bref aperçu de ce que nous offrons ....',
    icon: CourierDeliverySvg
  },

]
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
   
     
    <div class="mx-auto max-w-2xl lg:max-w-none">

      <FadeIn class="max-w-2xl">
        <h2>
          <span class="sr-only"> - </span>
          <span class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
            Nos Services
          </span>
        </h2>
      </FadeIn>

      <div class="mt-16">
        <FadeIn>
          <div class="grid grid-cols-1 gap-12 sm:gap-16">
            <div v-for="(service, index) in services" :key="index">
              <div class="grid grid-cols-1 md:grid-cols-[minmax(300px,auto)_1fr] gap-8">
                <!-- Extra Large Image Container -->
                <div class="order-3 md:order-1 md:row-span-2 flex items-center justify-center">
                  <img 
                    :src="service.icon" 
                    alt=""
                    class="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[448px] lg:w-[448px] object-contain transition-all duration-300 hover:scale-105"
                    loading="lazy"
                  >
                </div>

                <!-- Original Title Size -->
                <h3 class="order-1 font-display text-5xl text-neutral-950 courier-prime-regular md:col-start-2">
                  {{ service.title }}
                </h3>

                <!-- Original Description Size -->
                <p class="order-2 text-xl text-neutral-600 md:col-start-2">
                  {{ service.description }}
                </p>
              </div>

              

            </div>
          </div>

          <div class="text-center">
                <RouterLink
                to="/contact"
                class="inline-flex rounded-full px-4 py-2.5 font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800"
              >
                <span class="relative top-px">Envoyer une demande</span>
              </RouterLink>

          </div>


        </FadeIn>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.courier-prime-regular {
  font-family: "Courier Prime", serif;
  font-weight: 400;
  font-style: normal;
}
</style>