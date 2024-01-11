<script setup>
/**
 * 时间组件
 */
import { ref } from 'vue';
import { useInterval, useRequest } from 'vue-hooks-plus';
import { useRouter } from 'vue-router';
import { ElButton } from 'element-plus';
import { csGetApi, csGetApiKey } from '@/apis/api-user';
import { clearToken } from '@/utils/auth';

const router = useRouter();

let postData = ref('还未请求数据');

// get获取接口
const { loading, data: apiData } = useRequest(csGetApi, {
  refreshOnWindowFocus: true, // 在屏幕重新获取焦点或重新显示时，重新发起请求
  cacheKey: csGetApiKey,
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

const goLogin = () => {
  clearToken();
  router.replace('/login');
};
</script>

<template>
  <div class="p-h-100% w-100% flex flex-col flex-items-center p-t-80px">
    <div>{{ valueRef }}</div>
    <br />
    <div>{{ loading ? '加载中' : apiData?.content }}</div>
    <br />
    <div>{{ postIsLoading ? '加载中' : postData }}</div>
    <br />
    <ElButton type="warning" @click="csGetApiRun">post请求</ElButton>
    <br />
    <ElButton type="primary" @click="goLogin">登录页</ElButton>
    <br />
    <img v-lazy="'https://w.wallhaven.cc/full/o5/wallhaven-o59gvl1.jpg'" width="600" />
  </div>
</template>
