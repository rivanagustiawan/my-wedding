// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui','@vueuse/motion/nuxt'],
  devtools: { enabled: true },
  colorMode: {
    preference: 'light',
  },
})
