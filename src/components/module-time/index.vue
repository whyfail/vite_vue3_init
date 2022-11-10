<script setup>
/**
 * 时间组件
 */
import { useNow, useDateFormat } from '@vueuse/core';

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
</script>

<template>
  <div class="root">
    {{ formatted }}&nbsp;&nbsp;&nbsp;
    <button @click="$router.replace('/')">首页</button>
  </div>
</template>

<style scoped>
.root {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
