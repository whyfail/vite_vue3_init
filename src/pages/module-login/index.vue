<script setup>
import { Lock, User } from '@element-plus/icons-vue';
import { ElButton, ElCheckbox, ElForm, ElFormItem, ElInput, ElMessage } from 'element-plus';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { setToken } from '@/utils/auth.js';
import LoginPrism from './LoginPrism.vue';

const router = useRouter();

const formRef = ref();
const formData = ref({
  account: 'admin',
  password: 'admin',
  checked: false,
});
const formRules = ref({
  account: [{ required: true, message: '账号必填', trigger: 'change' }],
  password: [{ required: true, message: '密码必填', trigger: 'change' }],
});

async function goHome() {
  const valid = await formRef.value.validate();

  if (!valid) return;
  ElMessage.success('登录成功');
  router.replace('/home');
  setToken('123', formData.value.checked);
}
</script>

<template>
  <div
    class="relative h-full w-full"
  >
    <LoginPrism />
    <div className="absolute left-1/2 top-1/2 w-[520px] rd-[32px] bg-[#ecf0f350] p-8 shadow-[1px_1px_3px_#cbced1,-1px_-1px_3px_white] -translate-x-1/2 -translate-y-1/2">
      <h2 className="text-center text-32px text-[#ffffff] font-bold text-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
        登录
      </h2>
      <ElForm ref="formRef" :model="formData" :rules="formRules">
        <ElFormItem prop="account">
          <ElInput v-model="formData.account" size="large" placeholder="请输入账号" :prefix-icon="User" />
        </ElFormItem>

        <ElFormItem prop="password">
          <ElInput
            v-model="formData.password"
            size="large"
            type="password"
            clearable
            placeholder="请输入登录密码"
            :prefix-icon="Lock"
            show-password
          />
        </ElFormItem>

        <ElFormItem>
          <ElButton class="w-[100%]" type="primary" size="large" @click="goHome">
            登录
          </ElButton>
        </ElFormItem>

        <div class="mb-[16px] flex items-center justify-end">
          <ElCheckbox v-model="formData.checked">
            记住账号
          </ElCheckbox>
        </div>
      </ElForm>
    </div>
  </div>
</template>
