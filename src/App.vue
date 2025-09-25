

<template>
  <q-layout view="hHh lpR fFf">
    <Header @toggle-drawer="toggleDrawer" :is-mobile="isMobile" />
    <q-drawer
      v-if="isMobile"
      v-model="drawer"
      side="left"
      overlay
      class="bg-gradient-to-b from-indigo-900 via-indigo-800 to-violet-700 text-white shadow-xl"
    >
      <nav class="flex flex-col px-8 py-6 space-y-6">
        <RouterLink to="/" class="hover:underline text-2xl font-semibold">Home</RouterLink>
        <RouterLink to="/experience" class="hover:underline text-2xl font-semibold">Experiencia</RouterLink>
        <RouterLink to="/education" class="hover:underline text-2xl font-semibold">Educación</RouterLink>
        <RouterLink to="/contact" class="hover:underline text-2xl font-semibold">Contacto</RouterLink>
      </nav>
    </q-drawer>
    <q-page-container class="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 min-h-screen flex flex-col">
      <main class="flex-1 flex justify-center items-start">
        <div class="w-full max-w-3xl px-4 py-8">
          <router-view />
        </div>
      </main>
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const drawer = ref(false)
const isMobile = ref(window.innerWidth < 1024)

function handleResize() {
  isMobile.value = window.innerWidth < 1024
  if (!isMobile.value) drawer.value = true
}

function toggleDrawer() {
  if (isMobile.value) drawer.value = !drawer.value
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style global>
body {
  color: #fff;
}
h1, h2, h3 {
  color: #6ee7b7;
}
a {
  color: #6ee7b7;
  text-decoration: underline;
}
a:hover {
  color: #a7f3d0;
}
</style>
