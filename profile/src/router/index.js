import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: '',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/views/Home/Index.vue').default,
    },
    {
      path: '/experience',
      name: 'experience',
      component: require('@/views/Experience/Index.vue').default,
    },
  ],
})
