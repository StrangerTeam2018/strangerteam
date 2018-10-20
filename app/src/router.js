import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './views/Dashboard.vue';

Vue.use(Router);

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
function lazyLoad(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Dashboard,
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: Dashboard,
    },
    {
      path: '/about',
      name: 'about',
      component: lazyLoad ('About'),
    },
  ],
});
