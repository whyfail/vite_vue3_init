<script setup>
import { ElBacktop } from 'element-plus';
import { RouterView } from 'vue-router';
</script>

<template>
  <main id="MainRef" class="h-[100%] w-[100%] flex-1 overflow-y-auto">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.transitionName" mode="out-in">
        <div :key="route.path" class="h-[100%]">
          <Component :is="Component" />
        </div>
      </Transition>
    </RouterView>
    <ElBacktop :right="100" :bottom="100" target="#MainRef" />
  </main>
</template>
