import { createApp } from 'vue';
import App from './app/App.vue';
import { setupApp } from './app/setup';
import './app/styles/index.css';

const app = createApp(App);

setupApp(app);

app.mount('#app');
