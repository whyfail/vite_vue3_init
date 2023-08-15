<script setup>
import { RouterView } from 'vue-router';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import RouterLoading from './components/RouterLoading.vue';

// dayjs国际化
dayjs.locale('zh-cn');

// 路由进入前调用
const onBeforeEnter = () => {
  NProgress.done();
};

// 路由离开前调用
const onBeforeLeave = () => {
  NProgress.start();
};
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <Suspense>
      <template #default>
        <RouterView v-slot="{ Component, route }">
          <Transition
            :name="route.meta.transitionName"
            mode="out-in"
            @before-enter="onBeforeEnter"
            @before-leave="onBeforeLeave"
          >
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
