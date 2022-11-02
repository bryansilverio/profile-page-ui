import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import vTitle from 'vuejs-title'
Vue.use(vTitle)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
