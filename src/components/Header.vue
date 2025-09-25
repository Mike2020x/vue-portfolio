

<template>
  <q-header elevated class="bg-blue-600 text-white p-4 flex justify-between items-center">
    <div class="flex items-center min-w-0">
      <q-btn
        v-if="isMobile"
        flat dense round icon="menu" class="mr-2"
        @click="$emit('toggle-drawer')"
        aria-label="Abrir menú"
      />
      <h1 class="text-base md:text-lg lg:text-xl font-bold font-mono whitespace-nowrap overflow-hidden text-ellipsis flex-shrink min-w-0">{{ typedName }}</h1>
    </div>
    <nav v-if="!isMobile" class="space-x-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/experience">Experiencia</RouterLink>
      <RouterLink to="/education">Educación</RouterLink>
      <RouterLink to="/contact">Contacto</RouterLink>
    </nav>
  </q-header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useProfileStore } from '../stores/profile'
const profile = useProfileStore()
defineProps({ isMobile: Boolean })

const typedName = ref("")
let interval = null

function startTyping(text) {
  typedName.value = ""
  let i = 0
  clearInterval(interval)
  interval = setInterval(() => {
    if (i < text.length) {
      typedName.value += text[i]
      i++
    } else {
      clearInterval(interval)
    }
  }, 80)
}

onMounted(() => {
  startTyping(profile.name)
})

watch(() => profile.name, (newName) => {
  startTyping(newName)
})
</script>
