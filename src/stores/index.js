/**
 * stores状态模块化
 */
import useUserStore from './storeUser.js';

export default function useStore() {
  return {
    storeUser: useUserStore(),
  };
}
