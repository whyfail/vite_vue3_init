<template>
  <div
    :class="[
      `bg-[url(@/assets/images/login/login-bg-white.png)] h-100% w-100% bg-no-repeat bg-cover relative flex flex-col`,
    ]"
  >
    <header class="h-56px flex items-center justify-between px-24px backdrop-filter">
      <img :src="LogoFullIcon" alt="" />
    </header>

    <div class="absolute left-5% top-22% min-h-500px">
      <div>
        <h1 class="mt-0">登录</h1>
        <h1>TDesign Starter</h1>
        <div class="mt-24px"></div>
      </div>

      <LoginForm />
    </div>

    <footer class="absolute bottom-64px left-5%">Copyright @ 2021-2023 Tencent. All Rights Reserved</footer>
  </div>
</template>

<script setup>
import LogoFullIcon from '@/assets/images/login/assets-logo-full.svg';
import LoginForm from './LoginForm.vue';
</script>
