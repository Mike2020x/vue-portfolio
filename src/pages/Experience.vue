<template>
  <div class="p-8">
    <h2 class="text-2xl font-bold mb-6">Experiencia</h2>

    <div v-for="(job, i) in profile.experience" :key="i"
         class="mb-6 p-4 border-b border-gray-300">
      <h3 class="text-xl font-semibold">{{ job.company }}</h3>
      <p class="italic">{{ job.role }}</p>
      <p class="text-gray-600">{{ job.dates }}</p>
    </div>
  </div>
</template>

<script setup>
import { useProfileStore } from '../stores/profile'
const profile = useProfileStore()
</script>
