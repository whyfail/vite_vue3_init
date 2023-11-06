<script setup>
import { ElContainer, ElHeader, ElMain, ElScrollbar } from 'element-plus';
import LayoutAside from './LayoutAside.vue';
import LayoutHeader from './LayoutHeader.vue';
import LayoutMain from './LayoutMain.vue';
</script>

<template>
  <ElContainer class="root">
    <ElHeader>
      <LayoutHeader />
    </ElHeader>
    <ElContainer>
      <div>
        <ElScrollbar>
          <LayoutAside />
        </ElScrollbar>
      </div>
      <ElMain>
        <ElScrollbar>
          <LayoutMain />
        </ElScrollbar>
      </ElMain>
    </ElContainer>
  </ElContainer>
</template>

<style scoped>
.root {
  height: 100%;
}
::v-deep(.el-container) {
  height: 100%;
}
::v-deep(.el-header) {
  z-index: 99;
  background-color: #ffffff;
  box-shadow: 1px 1px 3px #cbced1, -1px -1px 3px white;
}
::v-deep(.el-scrollbar__view) {
  height: 100%;
}
</style>
