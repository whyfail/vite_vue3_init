import type { App } from 'vue';
import { setupMonitoring } from './monitoring';
import { router } from './routes';
import { setupStore } from './stores';

export function setupApp(app: App) {
  app.use(router);
  setupStore(app);
  setupMonitoring();
}
