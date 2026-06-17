<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Button } from '@/shared/ui/button';
</script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
    <section class="flex max-w-md flex-col items-center gap-4 text-center">
      <p class="text-sm font-medium text-muted-foreground">
        404
      </p>
      <h1 class="text-3xl font-semibold tracking-tight">
        页面不存在
      </h1>
      <p class="text-muted-foreground">
        你访问的页面可能已经移动或被删除。
      </p>
      <Button as-child>
        <RouterLink to="/docs">
          返回文档
        </RouterLink>
      </Button>
    </section>
  </main>
</template>
