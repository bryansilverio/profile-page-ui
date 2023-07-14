import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/components/layout/main"),
    children: [
      {
        path: "/",
        name: "index",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/IndexPage.vue"),
      },
      {
        path: "/about-me",
        name: "about-me",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/AboutMePage.vue"),
      },
      {
        path: "/projects",
        name: "projects",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/ProjectsPage.vue"),
      },
      {
        path: "/work-experiences",
        name: "work-experiences",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/WorkExperiencePage.vue"),
      },
      {
        path: "/projects/:id",
        name: "project-details",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/ProjectDetailsPage.vue"),
      },
      {
        path: "/*",
        name: "not-found",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/errors/404.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
