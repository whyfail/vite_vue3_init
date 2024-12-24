/**
 * 自定义指令
 */
import { vLoading } from 'element-plus';
import permission from './permission.js';

export default {
  install(Vue) {
    Vue.directive('permission', permission);
    Vue.directive('loading', vLoading);
  },
};
