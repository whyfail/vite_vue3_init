import { defineStore } from 'pinia';

const useUserStore = defineStore('storeOther', {
  state: () => ({
    number: 0,
    role: 'admin',
  }),

  actions: {
    addNumber() {
      this.number += 1;
    },
    subtractNumber() {
      this.number -= 1;
    },
  },
  // 持久化
  persist: true,
});

export default useUserStore;
