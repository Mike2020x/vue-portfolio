<template>
  <div class="p-8 space-y-4">
    <h2 class="text-2xl font-bold">Contacto</h2>

    <p><strong>Email:</strong> <a :href="'mailto:' + profile.email">{{ profile.email }}</a></p>
    <p><strong>LinkedIn:</strong> <a :href="'https://' + profile.linkedin" target="_blank">{{ profile.linkedin }}</a></p>
    <p><strong>GitHub:</strong> <a :href="'https://' + profile.github" target="_blank">{{ profile.github }}</a></p>
    <p><strong>Portafolio:</strong> <a :href="profile.portfolio" target="_blank">{{ profile.portfolio }}</a></p>
    <p><strong>Blog:</strong> <a :href="profile.blog" target="_blank">{{ profile.blog }}</a></p>
  </div>
</template>

<script setup>
import { useProfileStore } from '../stores/profile'
const profile = useProfileStore()
</script>
