// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/color-mode', '@vee-validate/nuxt'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    fallback: 'light'
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://api.uuu.com/',
    },
  },
})
