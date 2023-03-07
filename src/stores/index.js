/**
 * stores状态模块化
 */
import { createPinia } from 'pinia';
import useUserStore from './storeUser.js';
import PiniaLogger from 'pinia-logger';

// 创建全局状态
export const pinia = createPinia();

// 全局状态日志查看
pinia.use(
  PiniaLogger({
    expanded: true,
    disabled: import.meta.env.MODE === 'production',
    // 使用筛选器只记录特定的操作
    // filter: ({ name }) => name !== 'incrementCounter',
    // 如果未定义，所有操作都将被记录
    // actions: [],
  }),
);

export default function useStore() {
  return {
    storeUser: useUserStore(),
  };
}
