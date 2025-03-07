<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center px-4">
    <div class="max-w-lg text-center">
      <div class="inline-flex items-center justify-center bg-gray-100 rounded-full w-20 h-20 mb-6">
        <svg class="w-12 h-12 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
      </div>
      
      <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 class="text-3xl font-semibold text-gray-900 mb-4">Page non trouvée</h2>
      <p class="text-lg text-gray-600 mb-8">
        Désolé, nous n'avons pas trouvé la page que vous recherchez.
      </p>
      
      <RouterLink 
        to="/" 
        class="inline-flex items-center px-6 py-3 mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
      >
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
        </svg>
        Retourner à la page d'accueil
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Optional custom styles */
</style>