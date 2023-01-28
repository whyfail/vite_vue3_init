<script setup>
/**
 * 时间组件
 */
import { useNow, useDateFormat } from '@vueuse/core';
import { ElButton } from 'element-plus';
import { useMutation, useQuery } from '@tanstack/vue-query';
import { csGetApi, csGetApiKey } from '../../apis/api_user';
import { ref } from 'vue';

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
</script>

<template>
  <div class="root">
    <div>{{ formatted }}</div>
    <br />
    <div>{{ isLoading ? '加载中' : getData }}</div>
    <br />
    <div>{{ postIsLoading ? '加载中' : postData }}</div>
    <br />
    <el-button type="warning" @click="csGetApiMutate">post请求</el-button>
    <br />
    <el-button type="primary" @click="$router.replace('/')">首页</el-button>
  </div>
</template>

<style scoped lang="scss">
.root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
