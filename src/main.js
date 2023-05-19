import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import 'animate.css';
import 'dayjs/locale/zh-cn';
import App from './App.vue';
import './assets/css/index.scss';
import './plugins/plugins-set-rem';
import router from './routes';
import { pinia } from './stores';

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.use(pinia);
app.mount('#app');
