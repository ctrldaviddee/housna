<template>
     <div class="mt-16">
        <FadeIn>
          <div class="grid grid-cols-1 gap-8">
            <div v-for="(service, index) in services" :key="index" class="flex">
              <div class="flex flex-col">
                <!-- Icon + Title -->
                <div class="flex items-center gap-4">
                  <div class="h-12 w-12 flex items-center justify-center rounded-full bg-neutral-950">
                    <component 
                      :is="service.icon" 
                      class="h-6 w-6 text-white"
                    />
                  </div>
                  <h3 class="font-display text-2xl font-semibold text-neutral-950">
                    {{ service.title }}
                  </h3>
                </div>

                <!-- Description -->
                <p class="mt-4 text-xl text-neutral-600">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
</template>