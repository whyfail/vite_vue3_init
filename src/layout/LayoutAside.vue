<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Document, HomeFilled } from '@element-plus/icons-vue';
import { ElIcon, ElMenu, ElMenuItem } from 'element-plus';
import { useCommonStore } from '@/stores';

const route = useRoute();

const defaultActive = ref(route.path);

const commonStore = useCommonStore();
</script>

<template>
  <ElMenu class="root_menu" :collapse="commonStore.logoNoFull" router :default-active="defaultActive">
    <ElMenuItem index="/home">
      <ElIcon><HomeFilled /></ElIcon>
      <template #title>首页</template>
    </ElMenuItem>
    <ElMenuItem index="/404">
      <ElIcon><Document /></ElIcon>
      <template #title>404</template>
    </ElMenuItem>
  </ElMenu>
</template>

<style lang="scss" scoped>
.root_menu {
  height: 100%;
}
.root_menu:not(.el-menu--collapse) {
  width: 300px;
}
</style>
