// @ts-check
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
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
