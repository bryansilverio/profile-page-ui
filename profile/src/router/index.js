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
      component: () => import("@/layouts/Main"),
      children: [
        {
          path: "",
          name: "index",
          component: () => import("@/views/Index"),
        },
        {
          path: "portfolio/:id/details",
          name: "portfolio-details",
          component: () => import("@/views/PortfolioDetails"),
        },
      ],
    },
  ],
});
