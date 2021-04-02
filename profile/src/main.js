import Vue from 'vue'
import App from './App.vue'
import i18n from './translation/i18n'
import vuetify from './plugins/vuetify'
import router from './router/index'

window.$ = window.jQuery = require('jquery')
 

Vue.config.productionTip = false

var app = new Vue({
  router,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')

export default app
