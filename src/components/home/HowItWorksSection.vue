<script setup>
import maersk from '@/assets/media/partenaires/maersk.png'
import yunda from '@/assets/media/partenaires/yunda-express.png'
import hapag from '@/assets/media/partenaires/hapag-Llyod.png'
import msc from '@/assets/media/partenaires/Logo_msc.png'

import upload from '../../assets/upload.png'
import av_price from '@/assets/media/svgS/available_price.svg'
// import achat_livraison from '@/assets/media/svgS/achat_livraison.svg'
import achat_livraison from '../../assets/achat_livraison.png'

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
        <h2
          class="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl">
          Comment ça marche?
        </h2>
        <div class="mt-6 text-xl">
          <ul class="mx-auto w-[70%] space-y-1 text-neutral-700 list-disc pl-4">
            <!-- List Items -->
            <li>
              <div class="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <span class="sm:flex-1 text-center sm:text-left">
                  Envoyez une photo de l'article
                </span>
                <div class="sm:w-60 sm:h-60 w-full">
                  <img :src="upload" alt="" class="w-full h-auto object-contain">
                </div>
              </div>
            </li>

            <li>
              <div class="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <span class="sm:flex-1 text-center sm:text-left">
                  Nous vérifions la disponibilité et le prix
                </span>
                <div class="sm:w-60 sm:h-60 w-full">
                  <img :src="av_price" alt="" class="w-full h-auto object-contain">
                </div>
              </div>
            </li>

            <li>
              <div class="flex flex-col sm:flex-row items-center gap-4 mb-10">
                <span class="sm:flex-1 text-center sm:text-left">
                  Nous organisons l'achat et la livraison
                </span>
                <div class="sm:w-60 sm:h-60 w-full">
                  <img :src="achat_livraison" alt="" class="w-full h-auto object-contain">
                </div>
              </div>
            </li>


          </ul>

          <div class="text-center mt-12">
            <button type="button"
              class="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl focus:z-10 focus:ring-2 dark:hover:text-neutral-700  dark:focus:ring-gray-500 dark:focus:text-white hover:cursor-pointer">
              <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                <path
                  d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
              </svg>
              Télécharger notre guide complet
            </button>
          </div>
        </div>
      </FadeIn>







      <FadeIn>
        <h2
          class="mt-10 font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
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
