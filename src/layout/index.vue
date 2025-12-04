<script setup>
import LayoutAside from './LayoutAside.vue';
import LayoutHeader from './LayoutHeader.vue';
import LayoutMain from './LayoutMain.vue';
</script>

<template>
  <div class="h-full min-w-[1200px]">
    <LayoutHeader />
    <div class="h-[calc(100%-56px)] w-[100%] flex">
      <LayoutAside />
      <LayoutMain />
    </div>
  </div>
</template>
