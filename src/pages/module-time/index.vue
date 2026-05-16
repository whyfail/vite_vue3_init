<script setup lang="ts">
import type { ApiResponse } from '@/apis/api-user';
import { ElButton } from 'element-plus';
import { ref } from 'vue';
import { useInterval, useRequest } from 'vue-hooks-plus';
import { useRouter } from 'vue-router';
import { csGetApi, csGetApiKey } from '@/apis/api-user';
import { clearToken } from '@/utils/auth';
import { snapDomToPng } from '@/utils/dom';

const router = useRouter();
const divRef = ref<HTMLElement | null>(null);
const imgUrl = ref('');

const postData = ref('还未请求数据');
const imageLoading = ref(false);

// get获取接口
const { loading, data: apiData } = useRequest(csGetApi, {
  refreshOnWindowFocus: true, // 在屏幕重新获取焦点或重新显示时，重新发起请求
  cacheKey: csGetApiKey,
  debugKey: 'debugKey',
});

// post获取接口
const { loading: postIsLoading, run: csGetApiRun } = useRequest<ApiResponse<string>, [Record<string, unknown>]>(csGetApi, {
  manual: true,
  onSuccess(data: ApiResponse<string>) {
    postData.value = data.content ?? '';
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

async function handleSnap() {
  imageLoading.value = true;
  imgUrl.value = await snapDomToPng(divRef.value);
  imageLoading.value = false;
}

function handlePostRequest() {
  void csGetApiRun({});
}
</script>

<template>
  <div ref="divRef" class="w-[100%] flex flex-col flex-items-center overflow-auto pt-[80px]">
    <div>{{ valueRef }}</div>
    <br>
    <div>{{ loading ? '加载中' : apiData?.content }}</div>
    <br>
    <div>{{ postIsLoading ? '加载中' : postData }}</div>
    <br>
    <ElButton type="warning" @click="handlePostRequest">
      post请求
    </ElButton>
    <br>
    <ElButton type="primary" @click="goLogin">
      登录页
    </ElButton>
    <br>
    <ElButton type="primary" :loading="imageLoading" @click="handleSnap">
      一键截图
    </ElButton>
    <br>

    <br>
    <img v-if="imgUrl" :src="imgUrl" width="600">
    <br>
    <img v-lazy="'https://w.wallhaven.cc/full/jx/wallhaven-jxl31y.png'" width="600">
  </div>
</template>
