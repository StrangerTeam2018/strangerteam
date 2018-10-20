import Vue from 'vue';
import Router from 'vue-router';
import Alerts from './views/Alerts.vue';
import ProtectYourselfFlooding from './views/ProtectYourself/Flooding.vue'

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
      name: 'alerts',
      component: Alerts,
    },
    {
      path: '/alerts',
      name: 'alerts',
      component: Alerts,
    },
    {
      path: '/protect-yourself/flooding',
      name: 'protect-yourself-flooding',
      component: ProtectYourselfFlooding,
    },
    {
      path: '/first-aid',
      name: 'first-aid',
      component: lazyLoad ('FirstAid'),
    },
    {
      path: '/about',
      name: 'about',
      component: lazyLoad ('About'),
    },
  ],
});
