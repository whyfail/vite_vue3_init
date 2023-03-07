import { defineStore } from 'pinia';

const useUserStore = defineStore({
  id: 'storeOther',
  state: () => ({
    number: 0,
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
