<script setup>
import { ElScrollbar } from 'element-plus';
import LayoutHeader from './LayoutHeader.vue';
import LayoutMain from './LayoutMain.vue';
</script>

<template>
  <ElScrollbar>
    <LayoutHeader />
    <LayoutMain />
  </ElScrollbar>
</template>

<style scoped>
::v-deep(.el-scrollbar__view) {
  height: 100%;
}
</style>
