<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-6">Educación</h2>

    <div v-for="(edu, i) in profile.education" :key="i"
         class="mb-6 p-4 border-b border-gray-300">
      <h3 class="text-xl font-semibold">{{ edu.place }}</h3>
      <p class="italic">{{ edu.degree }}</p>
      <p class="text-gray-600">{{ edu.dates }}</p>
    </div>
  </div>
</template>

<script setup>
import { useProfileStore } from '../stores/profile'
const profile = useProfileStore()
</script>
