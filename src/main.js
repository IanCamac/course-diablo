// Paquetes de npm
import Vue from 'vue'
// BootstrapVue
import './plugins/BootstrapVue'
// Vue Font-Awesome
import './plugins/FontAwesome'
// Custom directives
import './directives'
// Archivos locales de nuestra App
import App from './App.vue'
import router from './router'
import store from './store'

// CSS global
import './assets/css/main.styl'

// Configuración extra
Vue.config.productionTip = false
// Instancia principal de Vue
new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
