<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <main class="root_main">
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
.root_main {
  width: 1200px;
  height: calc(100% - 60px);
  margin: auto;
  background-color: aliceblue;
}
</style>
