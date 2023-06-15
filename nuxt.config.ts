// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true }
  build: {
    transpile: ['vuetify'],
  },
  // css: ["vuetify/lib/styles/main.sass"]
  css: ['vuetify/lib/styles/main.sass'],
})
