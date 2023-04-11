<script setup>
import { RouterView } from 'vue-router';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

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
  </ElConfigProvider>
</template>

<style>
/* 入场动画过程 */
.router-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.router-enter-active {
  transition: all 0.7s;
}
.router-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
/* 出场动画过程 */
.router-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.router-leave-active {
  transition: all 0.7s;
}
.router-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* 顶部进度条颜色 */
#nprogress .bar {
  background: #67de7b !important;
}
#nprogress .peg {
  box-shadow: 0 0 10px #67de7b, 0 0 5px #67de7b !important;
}
#nprogress .spinner-icon {
  border-top-color: #67de7b !important;
  border-left-color: #67de7b !important;
}
</style>
