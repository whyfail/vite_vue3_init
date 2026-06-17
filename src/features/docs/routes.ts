import type { AppRouteRecordRaw } from '@/app/routes/types';

export const docsRoutes: AppRouteRecordRaw[] = [
  {
    path: 'docs',
    name: 'Docs',
    meta: {
      title: '文档',
      needLogin: false,
    },
    component: () => import('./pages/DocsPage.vue'),
  },
];
