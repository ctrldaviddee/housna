<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

// Cursor effect
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});


</script>

<template>
  <div class="min-h-screen bg-neutral-950">
    <Header />
    <div style="border-top-left-radius:50px;border-top-right-radius:50px"
      class="relative flex flex-auto overflow-hidden bg-white top-2">

      <div class="relative isolate flex w-full flex-col ">
        <RouterView v-slot="{ Component }">
          <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="transform opacity-0"
            enter-to-class="transform opacity-100" leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform opacity-100" leave-to-class="transform opacity-0">
            <component :is="Component" />
          </Transition>

        </RouterView>

        <Footer />
      </div>
    </div>



  </div>
</template>


<style></style>