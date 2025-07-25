import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import("@/ui/layouts/profile-app-layout/ProfileAppLayout.vue"),
    children: [
      {
        path: "/",
        name: "index",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "about" */ "@/ui/pages/profile-index-page/ProfileIndexPage.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
