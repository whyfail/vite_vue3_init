import { defineStore } from 'pinia';
import { ref } from 'vue';

const useUserStore = defineStore('storeUser', () => {
  const number = ref(0);
  const role = ref('admin');

  /**
   * 增加number
   */
  function addNumber() {
    number.value += 1;
  }

  /**
   * 减少number
   */
  function subtractNumber() {
    number.value -= 1;
  }

  return {
    number,
    role,
    addNumber,
    subtractNumber,
  };
}, {
  persist: true,
});

export default useUserStore;
