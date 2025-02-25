<script setup>
import maersk from '@/assets/media/partenaires/maersk.png'
import yunda from '@/assets/media/partenaires/yunda-express.png'
import hapag from '@/assets/media/partenaires/hapag-Llyod.png'
import msc from '@/assets/media/partenaires/Logo_msc.png'

import FadeIn from '@/components/shared/FadeIn.vue'

const images = [
  {
    id: 1,
    img_path: maersk,
  },
  {
    id: 2,
    img_path: yunda,
  },
  {
    id: 3,
    img_path: hapag,
  },
  {
    id: 4,
    img_path: msc,
  }
]
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
    <div class="mx-auto max-w-2xl lg:max-w-none">
      <FadeIn>
        <h2 class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
          Pourquoi nous choisir ?
        </h2>
        <div class="mt-6 text-xl text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cum! - doloribus quiosam veritatis doloremque libero minima in ipsam.
        </div>

      </FadeIn>

      
    



    
      <FadeIn>
        <h2 class="mt-10 font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
          Nos partenaires
        </h2>
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div v-for="(img, index) in images" :key="img.id" class="flex">
            <div class="flex flex-col">
              <p class=" text-sm text-neutral-600 grayscale">
                <img :src="img.img_path" alt="" />
              </p> 
            </div>
          </div>
          <!-- <div v-for="(step, index) in steps" :key="index" class="flex">
            <div class="flex flex-col">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-white">
                {{ index + 1 }}
              </div>
              <h3 class="mt-6 font-display text-base font-semibold text-neutral-950">
                {{ step.title }}
              </h3>
              <p class="mt-4 text-sm text-neutral-600">
                {{ step.description }}
              </p>
            </div>
          </div> -->
        </div>
      </FadeIn>

      
    </div>
  </div>
</template>

