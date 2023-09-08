// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vue-sonner']
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/color-mode', '@sidebase/nuxt-auth', '@formkit/nuxt'],
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
  auth: {
    provider: {
        type: 'local'
    },
    globalAppMiddleware: true,
    /* token: {
      signInResponseTokenPointer: '/tokens/accessToken'
    }, */
    baseURL: 'https://apipaloverde.onrender.com/api/auth',
    /* session: {
      // Whether to refresh the session every time the browser window is refocused.
      enableRefreshOnWindowFocus: true,

      // Whether to refresh the session every `X` milliseconds. Set this to `false` to turn it off. The session will only be refreshed if a session already exists.
      enableRefreshPeriodically: 5000
    }, */
    sessionDataType: { id: 'string', fullName: 'string', email: 'string', roles: 'ROLE_ADMIN | guest ' },
    /* globalAppMiddleware: {
      isEnabled: true
    }, */
    pages: {
      login: '/login'
    },
   /*  globalMiddlewareOptions: {
      allow404WithoutAuth: true, // Defines if the 404 page will be accessible while unauthenticated
      addDefaultCallbackUrl: '/' // Where authenticated user will be redirected to by default
    } */
  }
})
