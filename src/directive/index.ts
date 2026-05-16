import type { App, Directive } from 'vue';
/**
 * 自定义指令
 */
import { vLoading } from 'element-plus';
import permission from './permission';

export default {
  install(app: App) {
    app.directive('permission', permission);
    app.directive('loading', vLoading as Directive);
  },
};
