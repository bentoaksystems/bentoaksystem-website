const Vue = require('vue')
const VueScrollTo = require('vue-scrollto')

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  duration: 300,
  easing: 'ease',
})
