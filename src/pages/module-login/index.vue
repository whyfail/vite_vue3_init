<script setup>
import LogoFullIcon from '@/assets/images/login/assets-logo-full.svg';
import LoginForm from './LoginForm.vue';
</script>

<template>
  <div
    class="bg-[url(@/assets/images/login/login-bg-white.png)] flex flex-col h-[100%] w-[100%] relative bg-cover bg-no-repeat"
  >
    <header class="px-[24px] flex h-[56px] items-center justify-between backdrop-filter">
      <img :src="LogoFullIcon" alt="">
    </header>

    <div class="min-h-[500px] left-[5%] top-[22%] absolute">
      <div>
        <h1 class="mt-0">
          登录
        </h1>
        <h1>TDesign Starter</h1>
        <div class="mt-[24px]" />
      </div>

      <LoginForm />
    </div>

    <footer class="bottom-[64px] left-[5%] absolute">
      Copyright @ 2021-2023 Tencent. All Rights Reserved
    </footer>
  </div>
</template>
