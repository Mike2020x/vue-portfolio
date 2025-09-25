
<template>
  <div class="p-8 text-white">
    <h2 class="text-2xl font-bold mb-4 text-green-300">Hola, soy {{ profile.name }}</h2>
    <p class="mb-4">{{ profile.summary }}</p>
    <p><strong>Email:</strong> {{ profile.email }}</p>
    <p><strong>GitHub:</strong> <a :href="'https://' + profile.github" target="_blank" class="underline text-green-300 hover:text-green-200">{{ profile.github }}</a></p>
  </div>
</template>

<script setup>
import { useProfileStore } from '../stores/profile'
const profile = useProfileStore()
</script>
