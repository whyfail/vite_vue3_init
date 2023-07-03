<script setup>
import ROUTER_404 from '@/assets/images/router/router_404.svg';
</script>

<template>
  <div class="root">
    <img :src="ROUTER_404" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.root {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  text-align: center;
  img {
    height: 100%;
  }
}
</style>
