import Vue from 'vue';
import Router from 'vue-router';
import Alerts from './views/Alerts.vue';
import ProtectYourselfFlood from './views/ProtectYourself/Flood.en.vue'
import ProtectYourselfStorm from './views/ProtectYourself/Storm.en.vue'
import ProtectYourselfRain from './views/ProtectYourself/Rain.en.vue'
import ProtectYourselfColdWave from './views/ProtectYourself/ColdWave.en.vue'
import ProtectYourselfHeatWave from './views/ProtectYourself/HeatWave.en.vue'
import ProtectYourselfSnow from './views/ProtectYourself/Snow.en.vue'
import ProtectYourselfFog from './views/ProtectYourself/Fog.en.vue'
import ProtectYourselfWind from './views/ProtectYourself/Wind.en.vue'
import ProtectYourselfDust from './views/ProtectYourself/Dust.en.vue'


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
      path: '/alert-more-info/:id',
      name: 'more-info',
      component: lazyLoad ('AlertMoreInfo')
    },
    {
      path: '/request-help',
      name: 'request-help',
      component: lazyLoad ('RequestHelp')
    },
    {
      path: '/technique/:id',
      name: 'technique',
      component: lazyLoad ('Technique'),
      props: true
    },
    {
      path: '/protect-yourself/flood',
      name: 'protect-yourself-flood',
      component: ProtectYourselfFlood,
    },
    {
      path: '/protect-yourself/storm',
      name: 'protect-yourself-storm',
      component: ProtectYourselfStorm,
    },
    {
      path: '/protect-yourself/rain',
      name: 'protect-yourself-rain',
      component: ProtectYourselfRain,
    },
    {
      path: '/protect-yourself/coldwave',
      name: 'protect-yourself-coldwave',
      component: ProtectYourselfColdWave,
    },
    {
      path: '/protect-yourself/heatwave',
      name: 'protect-yourself-heatwave',
      component: ProtectYourselfHeatWave,
    },
    {
      path: '/protect-yourself/snow',
      name: 'protect-yourself-snow',
      component: ProtectYourselfSnow,
    },
    {
      path: '/protect-yourself/fog',
      name: 'protect-yourself-fog',
      component: ProtectYourselfFog,
    },
    {
      path: '/protect-yourself/wind',
      name: 'protect-yourself-wind',
      component: ProtectYourselfWind,
    },
    {
      path: '/protect-yourself/eruption',
      name: 'protect-yourself-eruption',
      component: ProtectYourselfFlood,
    },
    {
      path: '/protect-yourself/dust',
      name: 'protect-yourself-dust',
      component: ProtectYourselfDust,
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
