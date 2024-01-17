<script setup>
import { RouterView } from 'vue-router';
import { ElBacktop } from 'element-plus';
</script>

<template>
  <main id="MainRef" class="h-100% min-w-1200px w-100% overflow-y-auto">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.transitionName" mode="out-in">
        <div :key="route.path" class="h-100%">
          <Component :is="Component" />
        </div>
      </Transition>
    </RouterView>
    <ElBacktop :right="100" :bottom="100" target="#MainRef" />
  </main>
</template>
