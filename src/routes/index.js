/**
 * 路由定义
 * transitionName: 路由切换过渡动画名称
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import { ElMessage } from 'element-plus';
import { isLogin } from '@/utils/auth';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '/home',
          name: 'Home',
          meta: {
            title: '首页',
            needLogin: true,
            transitionName: 'router',
          },
          component: () => import('../pages/index.vue'),
        },
        {
          path: '/time',
          name: 'Time',
          meta: {
            title: '时间',
            needLogin: true,
            transitionName: 'router',
          },
          component: () => import('../pages/module-time/index.vue'),
        },
        {
          path: '/login',
          name: 'Login',
          meta: {
            title: '登录',
            needLogin: false,
            transitionName: 'router',
          },
          component: () => import('../pages/module-login/index.vue'),
        },
        // 404页面
        {
          path: '/404',
          name: '404',
          meta: {
            title: '404',
            needLogin: false,
            transitionName: 'router',
          },
          component: () => import('@/components/Router404.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/404',
    },
    {
      path: '/',
      redirect: '/home',
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 如果需要登录
  if (to.meta.needLogin) {
    // 如果有token 则直接放行
    if (isLogin()) {
      next();
    } else {
      // 否则去登录页
      ElMessage.error('请先登录！');
      next('/login');
    }
  } else {
    // 不需要登录则直接放行
    next();
  }
});

// 修改标题的工作可以放在全局后置守卫
router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
});

export default router;
