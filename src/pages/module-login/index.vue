<template>
  <div class="login-wrapper">
    <header class="login-header">
      <img :src="LogoFullIcon" alt="" />
    </header>

    <div class="login-container">
      <div class="title-container">
        <h1 class="title margin-no">登录</h1>
        <h1 class="title">TDesign Starter</h1>
        <div class="sub-title"></div>
      </div>

      <LoginForm />
    </div>

    <footer class="copyright">Copyright @ 2021-2023 Tencent. All Rights Reserved</footer>
  </div>
</template>

<script setup>
import LogoFullIcon from '@/assets/images/login/assets-logo-full.svg';
import LoginForm from './LoginForm.vue';
</script>

<style lang="scss" scoped>
.login-wrapper {
  background-color: white;
  background-image: url('@/assets/images/login/login-bg-white.png');
}
.login-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 24px;
  backdrop-filter: blur(10px);
}

.login-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-position: 100%;
  background-size: cover;
}

.login-container {
  position: absolute;
  top: 22%;
  left: 5%;
  min-height: 500px;
}

.title-container {
  .title {
    &.margin-no {
      margin-top: 0;
    }
  }

  .sub-title {
    margin-top: 24px;
  }
}

.copyright {
  position: absolute;
  bottom: 64px;
  left: 5%;
  font-size: 14px;
}
</style>
