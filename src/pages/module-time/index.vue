<script setup>
import { csGetApi, csGetApiKey } from '@/apis/api-user.js';
import { clearToken } from '@/utils/auth.js';
import { ElButton } from 'element-plus';
import { ref } from 'vue';
import { useInterval, useRequest } from 'vue-hooks-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

const postData = ref('还未请求数据');

// get获取接口
const { loading, data: apiData } = useRequest(csGetApi, {
  refreshOnWindowFocus: true, // 在屏幕重新获取焦点或重新显示时，重新发起请求
  cacheKey: csGetApiKey,
  debugKey: 'debugKey',
});

// post获取接口
const { loading: postIsLoading, run: csGetApiRun } = useRequest(csGetApi, {
  manual: true,
  onSuccess(data) {
    postData.value = data.content;
  },
});

const valueRef = ref(0);

// 处理 setTimeout 的 Hook。
useInterval(() => {
  valueRef.value += 1;
}, 1000);

function goLogin() {
  clearToken();
  router.replace('/login');
}
</script>

<template>
  <div class="p-t-[80px] flex flex-col w-[100%] flex-items-center">
    <div>{{ valueRef }}</div>
    <br>
    <div>{{ loading ? '加载中' : apiData?.content }}</div>
    <br>
    <div>{{ postIsLoading ? '加载中' : postData }}</div>
    <br>
    <ElButton type="warning" @click="csGetApiRun">
      post请求
    </ElButton>
    <br>
    <ElButton type="primary" @click="goLogin">
      登录页
    </ElButton>
    <br>
    <div>AutoDecimal插件计算基本运算自动转换：{{ 0.1 + 0.2 }}</div>
    <br>
    <img v-lazy="'https://w.wallhaven.cc/full/jx/wallhaven-jxl31y.png'" width="600">
  </div>
</template>
