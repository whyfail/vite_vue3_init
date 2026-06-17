import { createRouter, createWebHashHistory } from 'vue-router';
import AppLayout from '@/app/AppLayout.vue';
import { notify } from '@/app/notifications';
import { authRoutes } from '@/features/auth/routes';
import { isAuthenticated } from '@/features/auth/session';
import { docsRoutes } from '@/features/docs/routes';
import Router404 from '@/shared/components/Router404.vue';
import { createRoutes } from './routeUtils';

export const routes = createRoutes([
  {
    path: '/',
    redirect: '/docs',
  },
  {
    path: '/',
    component: AppLayout,
    children: [
      ...docsRoutes,
    ],
  },
  ...authRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Router404,
    meta: {
      title: '404',
      needLogin: false,
    },
  },
]);

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to) => {
  if (to.meta.needLogin && !isAuthenticated()) {
    notify.error('请先登录!');

    return '/login';
  }

  return true;
});

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = `${import.meta.env.VITE_APP_NAME} - ${to.meta.title}`;
  }
});
