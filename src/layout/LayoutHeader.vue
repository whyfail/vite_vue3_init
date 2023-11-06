<script setup>
import { useRouter } from 'vue-router';
import { ElButton } from 'element-plus';

const router = useRouter();

const goTo = (val) => {
  router.replace(val);
};
</script>

<template>
  <header class="root_header">
    <ElButton type="primary" @click="goTo('/home')">首页</ElButton>
    <ElButton type="primary" @click="goTo('/404')">404页面</ElButton>
    <ElButton type="primary" @click="goTo('/login')">退出</ElButton>
  </header>
</template>

<style scoped>
.root_header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 60px;
  background-color: #ecf0f3;
  box-shadow: 1px 1px 3px #cbced1, -1px -1px 3px white;
}
</style>
