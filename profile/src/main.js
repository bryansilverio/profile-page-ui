import Vue from 'vue'
import App from './App.vue'
import i18n from './translation/i18n'
import vuetify from './plugins/vuetify'
import router from './router/index'

window.$ = window.jQuery = require('jquery')

import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'
/**
 * Tabs
 */
import { Tabs, Tab } from 'vue-tabs-component'
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)

/**
 * Material desing
 */
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

/**
 * Timeline
 */
import VueTimeline from '@growthbunker/vuetimeline'
Vue.use(VueTimeline, {
  // Specify the theme to use: dark or light (dark by default).
  theme: 'dark',
})

/**
 * Social network
 */
import VueSocial from '@growthbunker/vuesocial'
Vue.use(VueSocial, {
  // Specify the path of the folder where the logos are stored.
  iconPath: 'assets/images/networks/',

  // Specify the theme to use: dark or light (dark by default).
  theme: 'dark',
})

Vue.config.productionTip = false

var app = new Vue({
  router,
  i18n,
  vuetify,
  render: (h) => h(App),
}).$mount('#app')

export default app
