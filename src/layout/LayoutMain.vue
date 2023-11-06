<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <main class="root">
    <RouterView v-slot="{ Component, route }">
      <Transition :name="route.meta.transitionName" mode="out-in">
        <div :key="route.path" class="root">
          <Component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </main>
</template>

<style scoped>
.root {
  height: 100%;
}
</style>
