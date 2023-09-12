// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vue-sonner']
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/color-mode'/* , '@sidebase/nuxt-auth' */, '@formkit/nuxt'],
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    fallback: 'light'
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || 'https://paloverde-production.up.railway.app/',
    },
  },
  /* fetch: {
    baseURL: process.env.BASE_URL,
    headers: {
      common: {
        'Content-Type': 'application/json'
      }
    }
  }, */
  /* build: {
    transpile: ['jsonwebtoken']
  }, */
})
