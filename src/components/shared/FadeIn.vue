<script setup>
  import { ref, onMounted } from 'vue'
  
  const fadeEl = ref(null)
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.transition = 'opacity 1000ms, transform 1000ms'
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0) translateZ(0)'
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1
      }
    )
  
    if (fadeEl.value) {
      observer.observe(fadeEl.value)
    }
  })
</script>

<template>
    <div
      ref="fadeEl"
      :style="{
        opacity: '0',
        transform: 'translateY(24px) translateZ(0)'
      }"
    >
      <slot></slot>
    </div>
  </template>
  