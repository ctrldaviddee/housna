<template>
  <div class="relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <FadeIn>
          <div class="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <div>
              <h2 class="font-display text-3xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-4xl">
                Tell us about your project
              </h2>
              <p class="mt-4 text-lg text-neutral-600">
                We'd love to hear from you. Let's work together to create something amazing.
              </p>
            </div>

            <form @submit.prevent="handleSubmit" class="lg:pl-8">
              <div class="space-y-8">
                <!-- Form Status Messages -->
                <div v-if="store.contactForm.status === 'success'" class="rounded-md bg-green-50 p-4">
                  <p class="text-sm font-medium text-green-800">Message sent successfully!</p>
                </div>
                <div v-if="store.contactForm.status === 'error'" class="rounded-md bg-red-50 p-4">
                  <p class="text-sm font-medium text-red-800">{{ store.contactForm.error || 'An error occurred' }}</p>
                </div>

                <div>
                  <label for="name" class="block text-sm font-semibold text-neutral-950">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="store.contactForm.name"
                    required
                    :disabled="isSubmitting"
                    class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                  >
                </div>

                <div>
                  <label for="email" class="block text-sm font-semibold text-neutral-950">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="store.contactForm.email"
                    required
                    :disabled="isSubmitting"
                    class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                  >
                </div>

                <div>
                  <label for="message" class="block text-sm font-semibold text-neutral-950">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    v-model="store.contactForm.message"
                    rows="4"
                    required
                    :disabled="isSubmitting"
                    class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  :disabled="isSubmitting"
                  class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span class="relative top-px">
                    {{ isSubmitting ? 'Sending...' : 'Let\'s talk' }}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useFormsStore } from '@/stores/forms'
import FadeIn from '@/components/shared/FadeIn.vue'

const store = useFormsStore()

const isSubmitting = computed(() => store.contactForm.status === 'submitting')

const handleSubmit = () => {
  store.submitContactForm({
    name: store.contactForm.name,
    email: store.contactForm.email,
    message: store.contactForm.message
  })
}
</script>