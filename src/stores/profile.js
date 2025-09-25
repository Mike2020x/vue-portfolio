import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
    state: () => ({
        name: 'Michael Steven Gonzalez',
        email: 'procesoimmichael@gmail.com',
        location: 'Pereira, Risaralda, Colombia',
        linkedin: 'www.linkedin.com/in/michael-steven-gonzalez-5a6518122',
        github: 'github.com/Mike2020x',
        portfolio: 'https://portfolio-v2-inky-eight.vercel.app',
        blog: 'https://tranquil-hamster-21a7e0.netlify.app',
        summary: `Full-Stack developer con experiencia en React, Express,
      SQL y MongoDB. Apasionado por aprender y optimizar procesos.`,
        experience: [
            { company: 'Tecnopac', role: 'Desarrollador Frontend Junior', dates: 'Feb 2024 – Ago 2024' },
            { company: 'Autónomo', role: 'Especialista en soporte técnico', dates: 'Ago 2020 – Feb 2024' },
            { company: 'Teleperformance', role: 'Bilingual CSR', dates: 'Jul 2022 – Sep 2022' },
            { company: 'Fundación Universitaria Comfamiliar Risaralda', role: 'Servicio técnico de sistemas', dates: 'Ago 2019 – Ago 2020' },
        ],
        education: [
            { place: 'Make it Real', degree: 'Full Stack Web Developer', dates: 'Abr 2023 – Sep 2023' },
            { place: 'Comfamiliar', degree: 'Tecnicatura en Informática', dates: '2017 – 2019' },
        ],
    }),
})
