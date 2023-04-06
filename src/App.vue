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
    <RouterView v-slot="{ Component }">
      <Transition name="router" @before-enter="onBeforeEnter" @before-leave="onBeforeLeave">
        <Component :is="Component" />
      </Transition>
    </RouterView>
  </ElConfigProvider>
</template>

<style>
/* 入场动画过程 */
.router-enter-from {
  transform: translateX(-20px);
}
.router-enter-active {
  transition: 0.6s;
  transform: translateX(0px);
}
.router-enter-to {
  transform: translateX(0px);
}
/* 出场动画过程 */
.router-leave-from {
  transform: translateX(0px);
}
.router-leave-active {
  transition: 0.6s;
  transform: translateX(-20px);
}
.router-leave-to {
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
