<script setup lang="ts">
import { RouterView } from 'vue-router';
import ErrorBoundary from '@/shared/components/ErrorBoundary.vue';
import Loading from '@/shared/components/Loading.vue';
import { Toaster } from '@/shared/ui/sonner';
</script>

<template>
  <ErrorBoundary>
    <Suspense>
      <RouterView />
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </ErrorBoundary>
  <Toaster position="top-center" rich-colors close-button />
</template>
