<template>
    <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="className">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" />
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