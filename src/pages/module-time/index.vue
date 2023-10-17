<script setup>
/**
 * 时间组件
 */
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElButton } from 'element-plus';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { useNow, useDateFormat } from '@vueuse/core';
import { csGetApi, csGetApiKey } from '@/apis/api-user';
import { clearToken } from '@/utils/auth';

const router = useRouter();

let getData = ref('');
let postData = ref('还未请求数据');

// get获取接口
const { isLoading } = useQuery({
  queryKey: [csGetApiKey],
  queryFn: () => csGetApi({ type: 'json' }),
  onSuccess(data) {
    getData.value = data.anwei;
  },
});

// post获取接口
const { isLoading: postIsLoading, mutate: csGetApiMutate } = useMutation({
  mutationKey: csGetApiKey,
  mutationFn: () => csGetApi({ type: 'json' }),
  onSuccess(data) {
    postData.value = data.anwei;
  },
});

// 使用hooks获取实时时间
const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');

const goLogin = () => {
  clearToken();
  router.replace('/login');
};
</script>

<template>
  <div class="root">
    <div>{{ formatted }}</div>
    <br />
    <div>{{ isLoading ? '加载中' : getData }}</div>
    <br />
    <div>{{ postIsLoading ? '加载中' : postData }}</div>
    <br />
    <ElButton type="warning" @click="csGetApiMutate">post请求</ElButton>
    <br />
    <ElButton type="primary" @click="goLogin">登录页</ElButton>
    <br />
    <img v-lazy="'https://w.wallhaven.cc/full/o5/wallhaven-o59gvl.jpg'" width="600" />
  </div>
</template>

<style scoped lang="scss">
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
</style>
