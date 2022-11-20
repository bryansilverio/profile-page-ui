import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vTitle from 'vuejs-title'
Vue.use(vTitle)

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import VueBadges from 'vue-badges'
Vue.use(VueBadges)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
