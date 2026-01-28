<script setup>
import { ElButton } from 'element-plus';
import { onErrorCaptured, ref } from 'vue';

// 响应式状态
const hasError = ref(false);
const errorInfo = ref(null);
const showDetails = ref(false);

// 捕获子组件错误
onErrorCaptured((error, instance, info) => {
  // 记录错误信息
  hasError.value = true;
  errorInfo.value = {
    message: error.message,
    stack: error.stack,
    componentName: instance?.$options?.name || 'Unknown',
    info,
  };

  // 在控制台输出错误
  console.error('ErrorBoundary 捕获到错误:', error);
  console.error('组件实例:', instance);
  console.error('错误信息:', info);

  // 返回 false 阻止错误继续向上传播
  return false;
});

// 刷新页面
function handleReload() {
  window.location.reload();
}

// 切换详情显示
function toggleDetails() {
  showDetails.value = !showDetails.value;
}
</script>

<template>
  <div v-if="hasError" class="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5f5f5]">
    <div class="max-w-[600px] w-[90%] rounded-lg bg-white p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.1)]">
      <div class="flex flex-col items-center">
        <svg class="mb-5 h-20 w-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="#ff4757" stroke-width="2" />
          <path d="M12 8V12" stroke="#ff4757" stroke-width="2" stroke-linecap="round" />
          <path d="M12 16V17" stroke="#ff4757" stroke-width="2" stroke-linecap="round" />
        </svg>
        <h2 class="mb-3 text-24px text-[#333] font-600">
          页面出错了
        </h2>
        <p class="mb-6 text-16px text-[#666]">
          抱歉，页面遇到了一些问题，请稍后再试
        </p>

        <div v-if="showDetails && errorInfo" class="mt-6 w-full text-left">
          <h3 class="mb-3 text-14px text-[#333] font-600">
            错误详情
          </h3>
          <pre class="m-0 max-h-[200px] overflow-x-auto whitespace-pre-wrap break-all border border-[#e0e0e0] rounded bg-[#f5f5f5] p-3 text-12px text-[#ff4757]">
            {{ errorInfo.message }}
          </pre>
          <pre v-if="errorInfo.stack" class="m-0 mt-3 max-h-[200px] overflow-x-auto whitespace-pre-wrap break-all border border-[#e0e0e0] rounded bg-[#f5f5f5] p-3 text-12px text-[#ff4757]">
            {{ errorInfo.stack }}
          </pre>
        </div>

        <div class="mt-6 flex justify-center gap-3">
          <ElButton type="primary" @click="handleReload">
            刷新页面
          </ElButton>
          <ElButton @click="toggleDetails">
            {{ showDetails ? '隐藏详情' : '显示详情' }}
          </ElButton>
        </div>
      </div>
    </div>
  </div>
  <slot v-else />
</template>
