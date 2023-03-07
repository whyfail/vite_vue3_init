/**
 * stores状态模块化
 */
import { createPinia } from 'pinia';
import useUserStore from './storeUser.js';

// 创建全局状态
export const pinia = createPinia();

// 全局状态日志查看
pinia.use(({ store }) => {
  store.$subscribe((e) => {
    // 在存储变化的时候执行
    console.debug(`${new Date().toLocaleString()} %c${e.storeId} 中的 ${e.events.key}状态改变：`, 'color: red');
    console.debug(` `, e);
  });
  store.$onAction((e) => {
    // 在 action 的时候执行
    console.debug(`${new Date().toLocaleString()} %c${e.name} 方法调用：`, 'color: red');
    console.debug(` `, e);
  });
});

export default function useStore() {
  return {
    storeUser: useUserStore(),
  };
}
