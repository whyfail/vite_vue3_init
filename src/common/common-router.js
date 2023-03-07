/**
 * 路由定义
 */

import { createRouter, createWebHashHistory } from 'vue-router';

const routers = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/index.vue'),
    },
    {
      path: '/time',
      name: 'time',
      component: () => import('../components/module-time/index.vue'),
    },
  ],
});

export default routers;
