import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
    }
  ]
})