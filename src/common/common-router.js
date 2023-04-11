/**
 * 路由定义
 */

import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
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

/**
 * 路由导航
 * 可以在这里控制路由是否过渡，或者不同的过渡class
 */
router.afterEach((to) => {
  // 切换过度样式
  to.meta.transitionName = 'router';
});

export default router;
