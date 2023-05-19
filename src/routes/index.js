/**
 * 路由定义
 * transitionName: 路由切换过渡动画名称
 */
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        transitionName: 'router',
      },
      component: () => import('../pages/index.vue'),
    },
    {
      path: '/time',
      name: 'time',
      meta: {
        transitionName: 'router',
      },
      component: () => import('../pages/module-time/index.vue'),
    },
  ],
});

/**
 * 路由导航
 */
router.afterEach(() => {});

export default router;
