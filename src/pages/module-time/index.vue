<script setup>
import { ElButton } from 'element-plus';
import { ref } from 'vue';
import { useInterval, useRequest } from 'vue-hooks-plus';
import { useRouter } from 'vue-router';
import { csGetApi, csGetApiKey } from '@/apis/api-user.js';
import { clearToken } from '@/utils/auth.js';
import { snapDomToPng } from '@/utils/dom';

const router = useRouter();
const divRef = ref(null);
const imgUrl = ref('');

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
  <div ref="divRef" class="w-[100%] flex flex-col flex-items-center overflow-auto pt-[80px]">
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
    <ElButton
      type="primary"
      @click=" async () => {
        imgUrl = await snapDomToPng(divRef)
      }"
    >
      一键截图
    </ElButton>
    <br>

    <br>
    <img v-if="imgUrl" :src="imgUrl" width="600">
    <br>
    <img v-lazy="'https://w.wallhaven.cc/full/jx/wallhaven-jxl31y.png'" width="600">
  </div>
</template>
