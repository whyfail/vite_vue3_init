<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { Document, HomeFilled } from '@element-plus/icons-vue';
import { ElIcon, ElMenu, ElMenuItem } from 'element-plus';
import { useCommonStore } from '@/stores/index.js';

const route = useRoute();

const defaultActive = ref(route.path);

const commonStore = useCommonStore();
</script>

<template>
  <ElMenu
    class="h-full w-300px"
    :style="{ minWidth: '52px' }"
    :collapse="commonStore.logoNoFull"
    router
    :default-active="defaultActive"
  >
    <ElMenuItem index="/home">
      <ElIcon><HomeFilled /></ElIcon>
      <template #title>首页</template>
    </ElMenuItem>
    <ElMenuItem index="/time">
      <ElIcon><HomeFilled /></ElIcon>
      <template #title>示例</template>
    </ElMenuItem>
    <ElMenuItem index="/404">
      <ElIcon><Document /></ElIcon>
      <template #title>404</template>
    </ElMenuItem>
  </ElMenu>
</template>
