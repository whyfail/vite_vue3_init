import type { AppRouteRecordRaw } from '@/app/routes/types';

export const authRoutes: AppRouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录页',
      needLogin: false,
    },
    component: () => import('./pages/LoginPage.vue'),
  },
];
