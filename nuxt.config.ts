// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['./assets/index.css', './assets/tailwind.css', './assets/fonts/geist.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@hypernym/nuxt-anime', 'nuxt-icon'],
  typescript: {
    typeCheck: true
  },
  devServer: {
    port: 4000
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
    },
    {
      path: '~/ui-components',
      pathPrefix: false
    }
  ],
  anime: {
    composables: true
  }
})
