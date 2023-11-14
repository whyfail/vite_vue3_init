<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores';

const router = useRouter();

const userStore = useUserStore();
</script>

<template>
  <div class="demo_root">
    <div class="demo_content">
      <div class="container">
        <div class="brand-logo">{{ userStore.number }}</div>
        <div class="inputs">
          <button @click="userStore.addNumber">+</button>
          <button @click="userStore.subtractNumber">-</button>
          <button v-permission="['admin']" font-bold important-text-red @click="router.replace('/time')">
            时间路由
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo_root {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  user-select: none;
  .demo_content {
    display: flex;
    align-items: center;
    justify-content: center;
    .container {
      position: relative;
      box-sizing: border-box;
      width: 350px;
      padding: 40px;
      background: #ecf0f3;
      border-radius: 20px;
      box-shadow: 1px 1px 3px #cbced1, -1px -1px 3px white;
      .brand-logo {
        display: flex;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 100px;
        height: 100px;
        margin: auto;
        font-size: 20px;
        border-radius: 50%;
        box-shadow: 7px 7px 10px #cbced1, -7px -7px 10px white;
      }

      .inputs {
        margin-top: 30px;
        text-align: left;
      }

      button {
        display: block;
        box-sizing: border-box;
        width: 100%;
        padding: 0;
        border: none;
        outline: none;
      }
      button {
        margin-top: 30px;
        padding: 10px;
        color: gray;
        font-size: 18px;
        background: #ecf0f3;
        border: 1px solid #e8e8e8;
        border-radius: 50px;
        box-shadow: 6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff;
        cursor: pointer;
        transition: all 0.3s;
      }

      button:hover {
        border: 1px solid white;
      }

      button:active {
        box-shadow: 4px 4px 12px #c5c5c5, -4px -4px 12px #ffffff;
      }
    }
  }
}
</style>
