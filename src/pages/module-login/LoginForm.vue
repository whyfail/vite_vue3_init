<template>
  <ElForm ref="form" class="mt-40px w-400px" :data="formData" :rules="FORM_RULES">
    <template v-if="type == 'password'">
      <ElFormItem name="account">
        <ElInput v-model="formData.account" size="large" placeholder="请输入账号：admin" :prefix-icon="User" />
      </ElFormItem>

      <ElFormItem name="password">
        <ElInput
          v-model="formData.password"
          size="large"
          type="password"
          clearable
          placeholder="请输入登录密码：admin"
          :prefix-icon="Lock"
          show-password
        />
      </ElFormItem>

      <ElFormItem>
        <ElButton class="w-100%" type="primary" size="large" @click="goHome">登录</ElButton>
      </ElFormItem>

      <div class="mb-16px flex items-center justify-between">
        <ElCheckbox v-model="formData.checked">记住账号</ElCheckbox>
      </div>
    </template>
  </ElForm>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { User, Lock } from '@element-plus/icons-vue';
import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus';
import { setToken } from '@/utils/auth';

const router = useRouter();

const goHome = () => {
  ElMessage.success('登录成功');
  router.replace('/home');

  setToken('123', formData.value.checked);
};

const FORM_RULES = {
  account: [{ required: true, message: '账号必填', type: 'error' }],
  password: [{ required: true, message: '密码必填', type: 'error' }],
};

const type = ref('password');

const form = ref();
const formData = ref({
  account: 'admin',
  password: 'admin',
  checked: false,
});
</script>
