/**
 * 路由定义
 */
export const routes = [
  { path: '/', component: () => import('../components/index.vue') },
  { path: '/time', component: () => import('../components/module-time/index.vue') },
];
