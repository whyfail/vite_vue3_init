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
});

export default useUserStore;
