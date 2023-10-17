import { createApp } from 'vue';
import VueLazyLoad from 'vue3-lazyload';
import { VueQueryPlugin } from '@tanstack/vue-query';
import 'animate.css';
import ImageError from '@/assets/images/img-error.png';
import ImageLoading from '@/assets/images/img-loading.png';
import App from './App.vue';
import './assets/css/index.scss';
import './plugins/plugins-set-rem';
import router from './routes';
import { pinia } from './stores';
import directive from './directive';

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.use(pinia);
app.use(VueLazyLoad, {
  loading: ImageLoading,
  error: ImageError,
});
app.use(directive);
app.mount('#app');
