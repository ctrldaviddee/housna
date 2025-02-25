<template>
    <div style="border-top-left-radius:40px;border-top-right-radius:40px" class="relative flex flex-auto overflow-hidden bg-white pt-14">
      <div class="relative isolate flex w-full flex-col pt-9">
        <main class="w-full flex-auto">
          <!-- Hero Section -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <FadeIn class="max-w-3xl">
                <h1 class="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                  Let's work together
                </h1>
                <p class="mt-6 text-xl text-neutral-600">
                  We can't wait to hear about your project. Tell us what you're looking for and let's get started.
                </p>
              </FadeIn>
            </div>
          </div>
  
          <!-- Contact Form Section -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 mb-3 lg:mt-40">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                <!-- Contact Information -->
                <FadeIn>
                  <div class="lg:order-last">
                    <div class="relative isolate">
                      <div class="space-y-24">
                        <div class="relative isolate overflow-hidden rounded-3xl bg-neutral-950 px-8 py-24 sm:px-24 sm:py-32">
                          <div class="mx-auto max-w-xl">
                            <h2 class="font-display text-3xl font-medium text-white [text-wrap:balance]">
                              Our offices
                            </h2>
                            <div class="mt-10 space-y-8 text-base text-neutral-300">
                              <p>
                                <strong class="font-semibold text-white">Copenhagen, Denmark</strong><br>
                                1 Carlsberg Gate<br>
                                Copenhagen 1260, Denmark
                              </p>
                              <p>
                                <strong class="font-semibold text-white">London, UK</strong><br>
                                13 Fleet Street<br>
                                London EC4Y 1AU, UK
                              </p>
                            </div>
                            <div class="mt-16 space-y-10">
                              <dl class="space-y-4 text-base">
                                <div>
                                  <dt class="font-semibold text-white">Email</dt>
                                  <dd><a class="text-neutral-300 hover:text-neutral-100" href="mailto:hello@studio.com">hello@studio.com</a></dd>
                                </div>
                                <div>
                                  <dt class="font-semibold text-white">Phone</dt>
                                  <dd><a class="text-neutral-300 hover:text-neutral-100" href="tel:+45 24 42 73 12">+45 24 42 73 12</a></dd>
                                </div>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
  
                <!-- Contact Form -->
                <FadeIn>
                  <form @submit.prevent="handleSubmit" class="max-w-xl lg:mr-12">
                    <div class="space-y-8">
                      <!-- Name -->
                      <div>
                        <label for="name" class="block text-sm font-semibold text-neutral-950">
                          Name <span class="text-neutral-500">*</span>
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          v-model="form.name"
                          required
                          class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                        >
                      </div>
  
                      <!-- Email -->
                      <div>
                        <label for="email" class="block text-sm font-semibold text-neutral-950">
                          Email <span class="text-neutral-500">*</span>
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          v-model="form.email"
                          required
                          class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                        >
                      </div>
  
                      <!-- Company -->
                      <div>
                        <label for="company" class="block text-sm font-semibold text-neutral-950">
                          Company
                        </label>
                        <input 
                          type="text" 
                          id="company" 
                          v-model="form.company"
                          class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                        >
                      </div>
  
                      <!-- Message -->
                      <div>
                        <label for="message" class="block text-sm font-semibold text-neutral-950">
                          Message <span class="text-neutral-500">*</span>
                        </label>
                        <textarea 
                          id="message" 
                          v-model="form.message"
                          required
                          rows="4"
                          class="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-neutral-950 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-950 sm:text-sm sm:leading-6"
                        ></textarea>
                      </div>
                    </div>
  
                    <div class="mt-8 flex justify-end">
                      <button type="submit" class="rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800">
                        <span class="relative top-px">Send message</span>
                      </button>
                    </div>
                  </form>
                </FadeIn>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import FadeIn from '@/components/shared/FadeIn.vue'
  
  const form = ref({
    name: '',
    email: '',
    company: '',
    message: ''
  })
  
  const handleSubmit = () => {
    // Implement form submission logic here
    console.log('Form submitted:', form.value)
  }
  </script>