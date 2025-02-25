<template>
    <div style="border-top-left-radius:40px;border-top-right-radius:40px" class="relative flex flex-auto overflow-hidden bg-white pt-14">
      <div class="relative isolate flex w-full flex-col pt-9">
        <main class="w-full flex-auto">
          <!-- Hero Section -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <FadeIn class="max-w-3xl">
                <h1 class="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                  Blog
                </h1>
                <p class="mt-6 text-xl text-neutral-600">
                  Our latest insights and thoughts on design, development, and everything in between.
                </p>
              </FadeIn>
            </div>
          </div>
  
          <!-- Blog Posts Grid -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <div class="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                <FadeIn v-for="post in blogPosts" :key="post.id" class="flex">
                  <article class="relative flex w-full flex-col">
                    <div class="relative aspect-[16/9] overflow-hidden rounded-xl bg-neutral-100">
                      <img :src="post.image" :alt="post.title" class="absolute inset-0 h-full w-full object-cover">
                    </div>
                    <div class="mt-6 flex-1">
                      <div class="flex items-center gap-x-4 text-sm">
                        <time :datetime="post.date" class="text-neutral-600">{{ post.date }}</time>
                        <span class="text-neutral-600">{{ post.category }}</span>
                      </div>
                      <h3 class="mt-3 font-display text-2xl font-medium tracking-tight text-neutral-950">
                        <RouterLink :to="post.link">{{ post.title }}</RouterLink>
                      </h3>
                      <p class="mt-4 text-base text-neutral-600">{{ post.excerpt }}</p>
                    </div>
                    <div class="mt-6">
                      <RouterLink :to="post.link" class="inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-neutral-950 text-white hover:bg-neutral-800">
                        <span class="relative top-px">Read more</span>
                      </RouterLink>
                    </div>
                  </article>
                </FadeIn>
              </div>
            </div>
          </div>
  
          <!-- Newsletter Section -->
          <div class="mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40">
            <div class="mx-auto max-w-2xl lg:max-w-none">
              <FadeIn>
                <div class="rounded-4xl bg-neutral-950 px-8 py-20 sm:px-12 sm:py-28">
                  <div class="mx-auto max-w-xl">
                    <h2 class="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                      Stay up to date
                    </h2>
                    <p class="mt-4 text-lg text-neutral-300">
                      Get notified when we publish new articles or when we have something interesting to share.
                    </p>
                    <form class="mt-10">
                      <div class="relative">
                        <input type="email" placeholder="Email address" class="block w-full rounded-lg border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-white ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-white focus:outline-none focus:ring-white/5">
                        <div class="absolute inset-y-1 right-1 flex justify-end">
                          <button type="submit" class="flex aspect-square h-full items-center justify-center rounded-lg bg-white text-neutral-950 hover:bg-neutral-200">
                            <!-- Add arrow icon -->
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router'
  import FadeIn from '@/components/shared/FadeIn.vue'
  
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      date: '2025-02-24',
      category: 'Development',
      image: '@/assets/blog-1.jpg',
      link: '/blog/future-of-web-development'
    },
    // Add more blog posts
  ]
  </script>