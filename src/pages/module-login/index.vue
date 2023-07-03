<script setup>
import { useRouter } from 'vue-router';
import { ElButton } from 'element-plus';
import { KEY_TOKEN } from '@/apis';

const router = useRouter();

const goHome = () => {
  localStorage.setItem(KEY_TOKEN, '123');
  router.replace('/home');
};
</script>

<template>
  <div class="root">
    <div>
      <ElButton @click="router.replace('/home')">无token跳转主页</ElButton>
      <ElButton @click="goHome">添加token跳转主页</ElButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root {
  display: grid;
  width: 100%;
  height: 100%;
  place-items: center;
}
</style>
