// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    ],
    runtimeConfig: {
      public: {
        // apiUrl: process.env.BASE_URI,
          API_URL: "http://localhost:3000",

      },

    },
    
    pinia: {
      storesDirs: ['./stores/**', './custom-folder/stores/**'],
    },


  app:{
    head: {
      titleTemplate: '%s | My Amazing Blog Website',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport',content: 'width-device-width, initial-scale=1'},
        {hid: 'description', name: 'description', content: 'NUXT 3 CRUD Application meta desc'},
        {name: 'format-detection', content: 'telephone=no'}
      ],
      link: [

        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap'
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ],
      script: []
    }
  }
  
})