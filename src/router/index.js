import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Experience from '../pages/Experience.vue'
import Education from '../pages/Education.vue'
import Contact from '../pages/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/experience', component: Experience },
    { path: '/education', component: Education },
    { path: '/contact', component: Contact },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
