<script setup>
import { RouterLink } from 'vue-router'
import FadeIn from '@/components/shared/FadeIn.vue'
import Logo from '../icons/Logo.vue';

import whatsapp from '../../assets/media/svgS/whatsapp.svg'
import facebook from '../../assets/media/svgS/facebook.svg'
import instagram from '../../assets/media/svgS/instagram.svg'

const footerSections = [
  {
    title: 'Ressources',
    links: [
      { text: 'Contact', href: '/contact' }, //'/work/family-fund'
      { text: 'Tarifs', href: '/work/unseal' },
      { text: 'Blog', href: '/work/phobia' },
      { text: 'Questions fréquentes', href: '#' },
      // Add more links
    ]
  },

  {
    title: 'Légal',
    links: [
      { text: 'Politique de confidentialité', href: '/about' },
      { text: 'Conditions générales d\'utilisation', href: '/process' },
      { text: 'Conditions de fonctionnement', href: '/blog' },
      // Add more links
    ]
  },

  {
    title: 'Communauté',
    links: [
      { text: 'Whatsapp', href: 'https://whatsapp.com', icon: whatsapp },
      { text: 'Instagram', href: 'https://instagram.com/', icon: instagram },
      { text: 'Facebook', href: 'https://facebook.com/', icon: facebook },
    ]
  }

]
</script>

<template>
  <footer class="mx-auto max-w-[95%] px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
    <div class="mx-auto max-w-full lg:max-w-none">
      <FadeIn>
        <div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <nav>
            <ul role="list" class="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <li v-for="(section, index) in footerSections" :key="section+index">
                <div class="font-display text-lg font-bold font-mono tracking-wider text-neutral-950">
                  {{ section.title }}
                </div>
                <ul role="list" class="mt-4 text-md  text-neutral-700">
                  <li v-for="(link, linkIndex) in section.links" :key="JSON.stringify(link.href)" class="mt-4">
                    <RouterLink :to="link.href" class="flex  items-center gap-2 transition hover:text-neutral-950">
                      {{ link.text }}
                      <img v-if="link.icon" :src="link.icon" class="h-4 w-4">
                    </RouterLink>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          <div class="flex lg:justify-end">
            <form class="max-w-sm">
              <h2 class="font-display text-lg font-bold  tracking-wider text-neutral-950">
                Abonnez-vous à notre newsletter
              </h2>
              <p class="mt-4 text-md tracking-tight text-neutral-700">
                Inscrivez-vous pour recevoir les dernières actualités et ressources directement dans votre boîte de
                réception.
              </p>
              <div class="relative mt-6">
                <input type="email" placeholder="Email address" autocomplete="email" aria-label="Email address"
                  class="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5">
                <div class="absolute inset-y-1 right-1 flex justify-end">
                  <button type="submit" aria-label="Submit"
                    class="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800">
                    <svg viewBox="0 0 16 6" aria-hidden="true" class="w-4">
                      <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
                        d="M16 3 10 .5v2H0v1h10v2L16 3Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div
          class="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <RouterLink aria-label="Home" to="/">
            <Logo class="h-8 " />
          </RouterLink>
          <p class="text-md text-neutral-700"> Ware. All rights reserved.</p>
        </div>
      </FadeIn>
    </div>
  </footer>
</template>
