<script setup>
import {ref} from 'vue'
import { RouterLink } from 'vue-router'
import FadeIn from '@/components/shared/FadeIn.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'


const swiperInstance = ref(null)

const pauseAutoPlay = () => {
  if (swiperInstance.value) swiperInstance.value.autoplay.pause()
}

const startAutoPlay = () => {
  if (swiperInstance.value) swiperInstance.value.autoplay.resume()
}

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
}

function get_image(name){
  return new URL(`/src/assets/${name}`, import.meta.url).href
}

const testimonials = [
  {
    rating: 5,
    quote: "Un service de transport de colis et de fret très efficace. J'apprécie particulièrement leur système de suivi de colis en temps réel.",
    author: "Émilie Dubois",
    location: "Paris, France",
    image: get_image('avatar3.avif')
  },
  {
    rating: 4,
    quote: "Livraison rapide et professionnalisme remarquable. Leur service client est réactif et serviable.",
    author: "Luc Bernard",
    location: "Lyon, France",
    image: get_image('avatar2.avif')
  },
  {
    rating: 5,
    quote: "Leur solution logistique a considérablement simplifié notre chaîne d'approvisionnement. Très satisfait!",
    author: "Sophie Leroux",
    location: "Marseille, France",
    image: get_image('avatar1.avif')
  }
]

const getStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => index < rating);
};
</script>

<template>
  <div class="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40"
    @mouseenter="pauseAutoPlay" @mouseleave="startAutoPlay">
    <svg aria-hidden="true"
      class="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]">
      <rect width="100%" height="100%" fill="url(#:Rp7qlba:)" stroke-width="0"></rect><svg x="50%" y="-256"
        stroke-width="0" class="overflow-visible">
        <path transform="translate(64 160)"
          d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z">
        </path>
        <path transform="translate(128 320)"
          d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z">
        </path>
        <path transform="translate(288 480)"
          d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z">
        </path>
        <path transform="translate(512 320)"
          d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z">
        </path>
        <path transform="translate(544 640)"
          d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z">
        </path>
        <path transform="translate(320 800)"
          d="M45.119 4.5a11.5 11.5 0 0 0-11.277 9.245l-25.6 128C6.82 148.861 12.262 155.5 19.52 155.5h63.366a11.5 11.5 0 0 0 11.277-9.245l25.6-128c1.423-7.116-4.02-13.755-11.277-13.755H45.119Z">
        </path>
      </svg>
      <defs>
        <pattern id=":Rp7qlba:" width="96" height="480" x="50%" patternUnits="userSpaceOnUse"
          patternTransform="translate(0 -256)" fill="none">
          <path
            d="M128 0 98.572 147.138A16 16 0 0 1 82.883 160H13.117a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-45.117 320H-116M64-160 34.572-12.862A16 16 0 0 1 18.883 0h-69.766a16 16 0 0 0-15.69 12.862l-26.855 134.276A16 16 0 0 1-109.117 160H-180M192 160l-29.428 147.138A15.999 15.999 0 0 1 146.883 320H77.117a16 16 0 0 0-15.69 12.862L34.573 467.138A16 16 0 0 1 18.883 480H-52M-136 480h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1-18.883 320h69.766a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 109.117 160H192M-72 640h58.883a16 16 0 0 0 15.69-12.862l26.855-134.276A16 16 0 0 1 45.117 480h69.766a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A15.999 15.999 0 0 1 173.117 320H256M-200 320h58.883a15.999 15.999 0 0 0 15.689-12.862l26.856-134.276A16 16 0 0 1-82.883 160h69.766a16 16 0 0 0 15.69-12.862L29.427 12.862A16 16 0 0 1 45.117 0H128">
          </path>
        </pattern>
      </defs>
    </svg>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-neutral-900 sm:text-4xl">
          Ce que disent nos clients
        </h2>
        <RouterLink to="/avis" class="mt-4 inline-block text-neutral-600 hover:text-neutral-800 font-medium">
          Voir tous les avis →
        </RouterLink>
      </div>

      <swiper :modules="[Navigation, Pagination, Autoplay]" :navigation="{
        nextEl: '.next-button',
        prevEl: '.prev-button'
      }" 
      @swiper="onSwiper"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :loop="true"
       class="review-swiper">

        <swiper-slide v-for="(testimonial, index) in testimonials" :key="testimonial + index">
          <FadeIn>
            <div class="bg-white rounded-2xl shadow-lg p-8 mx-4 lg:mx-8">
              <div class="flex justify-center mb-4">
                <div class="flex">
                  <svg v-for="(filled, starIndex) in getStars(testimonial.rating)" :key="starIndex" class="w-6 h-6"
                    :class="filled ? 'text-yellow-400' : 'text-gray-300'" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>

              <blockquote class="text-lg text-neutral-700 leading-relaxed text-center mb-6">
                "{{ testimonial.quote }}"
              </blockquote>

              <div class="flex items-center justify-center space-x-4">
                <img :src="testimonial.image" class="h-14 w-14 rounded-full object-cover" alt="">
                <div class="text-left">
                  <div class="font-semibold text-neutral-900">
                    {{ testimonial.author }}
                  </div>
                  <div class="text-neutral-600 text-sm">
                    {{ testimonial.location }}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </swiper-slide>

        <!-- Navigation -->
        <button
            class="prev-button absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-10 text-neutral-900 hover:bg-neutral-50"
            aria-label="Avis précédent"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button
            class="next-button absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-10 text-neutral-900 hover:bg-neutral-50"
            aria-label="Avis suivant"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.review-swiper .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: #d4d4d4;
  opacity: 1;
}

.review-swiper {
  position: relative;
}

.prev-button,
.next-button {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.review-swiper:hover .prev-button,
.review-swiper:hover .next-button {
  opacity: 1;
}

.swiper-button-disabled {
  opacity: 0.3 !important;
  cursor: not-allowed;
}

.review-swiper .swiper-pagination-bullet-active {
  background-color: #171717;
}

.review-swiper .swiper-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}



</style>
