<script setup>
import LayoutAside from './LayoutAside.vue';
import LayoutHeader from './LayoutHeader.vue';
import LayoutMain from './LayoutMain.vue';
</script>

<template>
  <div class="h-full">
    <LayoutHeader />
    <div class="flex h-[calc(100%-56px)] w-[100%]">
      <LayoutAside />
      <LayoutMain />
    </div>
  </div>
</template>
