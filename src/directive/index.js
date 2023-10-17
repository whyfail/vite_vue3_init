/**
 * 自定义指令
 */
import permission from './permission';

export default {
  install(Vue) {
    Vue.directive('permission', permission);
  },
};
