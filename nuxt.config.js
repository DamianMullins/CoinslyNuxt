export default {
  server: {
    port: 8008
  },

  target: 'static',

  modern: 'client',

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: [
        'font-sans font-medium bg-light-surface dark:bg-dark-surface text-light-onSurfacePrimary dark:text-dark-onSurfacePrimary transition-colors duration-300 ease-linear'
      ]
    }
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~assets/css/tailwind.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss',
    '@nuxtjs/color-mode'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',

    '@nuxtjs/pwa',

    '@nuxtjs/dotenv',

    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCS1WF6oQbSRVowR4ubkFGm-95LuikXG_Y',
          authDomain: 'coinsly-c4330.firebaseapp.com',
          projectId: 'coinsly-c4330',
          storageBucket: 'coinsly-c4330.appspot.com',
          databaseURL: '',
          messagingSenderId: '',
          appId: ''
        },
        services: {
          auth: {
            initialize: {
              onAuthStateChangedAction: 'user/onAuthStateChangedAction'
            }
          }
        }
      }
    ]
  ],

  colorMode: {
    preference: 'dark' // disable system
  },

  /*
   ** Axios module configuration
   */
  axios: {},

  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        autoprefixer: {}
      }
    }
  },

  generate: {
    fallback: '404.html' // for Netlify
  }
};
