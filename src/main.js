import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import 'animate.css';
import 'dayjs/locale/zh-cn';
import App from './App.vue';
import './assets/css/normalize.scss';
import router from './common/common-router';
import './common/common-set-rem';
import { pinia } from './stores';

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.use(pinia);
app.mount('#app');
