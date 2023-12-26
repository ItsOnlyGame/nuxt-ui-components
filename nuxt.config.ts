// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['./assets/index.css', './assets/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@nuxtjs/color-mode'],
  typescript: {
    typeCheck: true
  },
  tailwindcss: {},
  colorMode: {
    classSuffix: '',
    preference: 'light',
    storageKey: 'color-mode'
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
