import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './common/common-router';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { pinia } from './stores';
import 'dayjs/locale/zh-cn';
import 'animate.css';
import './assets/css/normalize.scss';
import './common/common-set-rem';

const app = createApp(App);

// 路由
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);
app.use(VueQueryPlugin);
app.use(pinia);
app.mount('#app');
