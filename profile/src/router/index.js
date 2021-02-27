import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: require("@/views/Index.vue").default,
    },
    {
      path: "portfolio/:id/details",
      name: "portfolio-details",
      component: require("@/views/PortfolioDetails.vue").default,
    },
  ],
});
