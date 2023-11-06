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
});

export default useCommonStore;
