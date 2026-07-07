<script setup lang="ts">
import { onErrorCaptured, ref } from "vue";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";

interface ErrorInfo {
  message: string;
  stack?: string;
  info: string;
}

const hasError = ref(false);
const errorInfo = ref<ErrorInfo | null>(null);
const showDetails = ref(false);

onErrorCaptured((error, _instance, info) => {
  hasError.value = true;
  errorInfo.value = {
    message: error.message,
    stack: error.stack,
    info,
  };
  console.error("ErrorBoundary 捕获到错误:", error, info);

  return false;
});

function handleReload() {
  window.location.reload();
}
</script>

<template>
  <main v-if="hasError" class="flex min-h-screen items-center justify-center bg-background p-6">
    <Card class="w-full max-w-xl">
      <CardHeader>
        <CardTitle>页面出错了</CardTitle>
        <CardDescription>抱歉，页面遇到了一些问题，请刷新后重试。</CardDescription>
      </CardHeader>
      <CardContent v-if="showDetails && errorInfo">
        <pre class="max-h-72 overflow-auto rounded-md bg-muted p-4 text-sm text-muted-foreground"
          >{{ errorInfo.message }}
        {{ errorInfo.stack }}</pre>
      </CardContent>
      <CardFooter class="gap-3">
        <Button @click="handleReload"> 刷新页面 </Button>
        <Button variant="outline" @click="showDetails = !showDetails">
          {{ showDetails ? "隐藏详情" : "显示详情" }}
        </Button>
      </CardFooter>
    </Card>
  </main>
  <slot v-else />
</template>
