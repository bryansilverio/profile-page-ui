import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/layout/main"),
    children: [
      {
        path: "/",
        name: "index",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/features/index/views/IndexPage.vue"),
      },
      {
        path: "/about-me",
        name: "about-me",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/features/about_me/views/AboutMePage.vue"),
      },
      {
        path: "/projects",
        name: "projects",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/features/projects/views/ProjectsPage.vue"),
      },
      {
        path: "/work-experiences",
        name: "work-experiences",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/features/work_experiences/views/WorkExperiencePage.vue"),
      },
      {
        path: "/projects/:id",
        name: "project-details",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/features/project_details/views/ProjectDetailsPage.vue"),
      },
      {
        path: "/posts",
        name: "posts",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/features/posts/views/PostsPage.vue"),
      },
      {
        path: "/contact",
        name: "contact",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/features/contact/views/ContactPage.vue"),
      },
      {
        path: "/*",
        name: "not-found",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/features/errors/not_found/views/404.vue"),
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
