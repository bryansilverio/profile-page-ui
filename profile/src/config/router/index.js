import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/ui/layouts/app/AppLayout.vue"),
    children: [
      {
        path: "/",
        name: "index",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/ui/pages/index/IndexPage.vue"),
      },
      {
        path: "/experience/:id",
        name: "experience",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/ui/pages/experienceDetail/ExperienceDetailPage.vue"),
      }
    ],
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;