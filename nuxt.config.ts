// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["./assets/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss"],
  typescript: {
    typeCheck: true,
  },
  tailwindcss: {}
});
