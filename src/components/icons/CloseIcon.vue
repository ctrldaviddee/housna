<template>
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="className">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" />
    </svg>
  </template>
  
  <script setup>
  defineProps({
    className: {
      type: String,
      default: ''
    }
  })
  </script>