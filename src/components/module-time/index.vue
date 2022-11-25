<script setup>
/**
 * 时间组件
 */
import { useNow, useDateFormat } from '@vueuse/core';
import { ElButton } from 'element-plus';

const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');
</script>

<template>
  <div class="root">
    {{ formatted }}&nbsp;&nbsp;&nbsp;
    <el-button type="primary" @click="$router.replace('/')">首页</el-button>
  </div>
</template>

<style scoped lang="scss">
.root {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
