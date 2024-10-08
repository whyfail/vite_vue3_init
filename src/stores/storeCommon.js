import { defineStore } from 'pinia';

const useCommonStore = defineStore('storeCommon', {
  state: () => ({
    logoNoFull: false,
  }),

  actions: {
    changeLogoFull(val) {
      this.logoNoFull = val;
    },
  },
  // 持久化
  persist: {
    storage: sessionStorage,
    key: 'storeCommon',
  },
});

export default useCommonStore;
