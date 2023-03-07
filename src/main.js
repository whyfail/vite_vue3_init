import { createApp } from 'vue';
import App from './App.vue';
import routers from './common/common-router';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { pinia } from './stores';
import 'dayjs/locale/zh-cn';
import 'animate.css';
import './assets/css/normalize.scss';
import './common/common-set-rem';

const app = createApp(App);

app.use(routers);
app.use(VueQueryPlugin);
app.use(pinia);
app.mount('#app');
