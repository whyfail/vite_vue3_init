<script setup>
import dayjs from 'dayjs';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { useRequestProvider } from 'vue-hooks-plus';
import { RouterView } from 'vue-router';
import RouterLoading from '@/components/RouterLoading.vue';
import 'dayjs/locale/zh-cn';

// 全局配置 useRequestProvider
useRequestProvider({
  retryCount: 3, // 错误重试次数
  throttleWait: 1000, // 节流等待时间
  debounceWait: 1000, // 防抖等待时间
});

// dayjs国际化
dayjs.locale('zh-cn');
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <Suspense>
      <template #default>
        <RouterView v-slot="{ Component, route }">
          <Transition :name="route.meta.transitionName" mode="out-in">
            <Component :is="Component" />
          </Transition>
        </RouterView>
      </template>
      <template #fallback>
        <RouterLoading />
      </template>
    </Suspense>
  </ElConfigProvider>
</template>
