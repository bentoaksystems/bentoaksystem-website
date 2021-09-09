import messages from './locales/index.js'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'bos-website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/index.scss'],

  // Makes added resources available in vue components
  styleResources: {
    scss: [
      '~/assets/styles/_functions.scss',
      '~/assets/styles/_variables.scss',
      '~/assets/styles/_mixins.scss',
    ],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vuelidate.js',
    '~/plugins/vue-screen.js',
    '~/plugins/dropdownMenu.js',
    '~/plugins/vue-agile.js',
    '~/plugins/firebase-plugin.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    'vue-scrollto/nuxt',
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        icon: 'english',
      },
      // {
      //   code: 'de',
      //   name: 'Deutsche',
      //   icon: 'german',
      // },
      // {
      //   code: 'fr',
      //   name: 'Français',
      //   icon: 'french',
      // },
      // {
      //   code: 'es',
      //   name: 'Español',
      //   icon: 'spanish',
      // },
    ],
    defaultLocale: 'en',
    strategy: 'prefix_and_default',
    vueI18n: {
      fallbackLocale: 'en',
      messages,
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vue-agile'],
  },
}
