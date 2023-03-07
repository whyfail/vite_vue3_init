import { createPinia } from 'pinia';
import { createApp } from 'vue';
import * as VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './common/common-router';
import 'dayjs/locale/zh-cn';
import 'animate.css';
import './assets/css/normalize.scss';
import './common/common-set-rem';
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);

// 创建全局状态
// !全局状态日志查看：安装Vue浏览器插件后找到Pinia模块可查看所有状态
const pinia = createPinia();

// 路由
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(pinia);
app.use(router);
app.use(VueQueryPlugin);
app.mount('#app');
