<script setup>
import { RouterView } from 'vue-router';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import RouterLoading from './components/RouterLoading.vue';

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
