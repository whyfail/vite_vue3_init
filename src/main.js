import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import { useRequestDevToolsPlugin } from 'vue-hooks-plus';
import ImageError from '@/assets/images/img-error.webp';
import ImageLoading from '@/assets/images/img-loading.webp';
import App from './App.vue';
import directive from './directive/index.js';
import router from './routes/index.js';
import { pinia } from './stores/index.js';
import 'element-plus/theme-chalk/el-loading.css';
import 'animate.css';
import 'nprogress/nprogress.css';
import 'virtual:uno.css';
import './assets/css/index.scss';

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueLazyLoad, {
  loading: ImageLoading,
  error: ImageError,
});
app.use(directive);
app.use(useRequestDevToolsPlugin);
app.mount('#app');
