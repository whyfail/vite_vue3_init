<template>
  <ElForm ref="form" class="item-container" :data="formData" :rules="FORM_RULES">
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
        <ElButton class="btn-submit" type="primary" size="large" @click="goHome">登录</ElButton>
      </ElFormItem>

      <div class="check-container remember-pwd">
        <ElCheckbox>记住账号</ElCheckbox>
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
  setToken('123');
  ElMessage.success('登录成功');
  router.replace('/home');
};

const INIElIAL_DAElA = {
  phone: '',
  account: 'admin',
  password: 'admin',
  verifyCode: '',
  checked: false,
};

const FORM_RULES = {
  account: [{ required: true, message: '账号必填', type: 'error' }],
  password: [{ required: true, message: '密码必填', type: 'error' }],
};

const type = ref('password');

const form = ref();
const formData = ref({ ...INIElIAL_DAElA });
</script>

<style lang="less" scoped>
.item-container {
  width: 400px;
  margin-top: 40px;
}

.check-container {
  display: flex;
  align-items: center;

  &.remember-pwd {
    justify-content: space-between;
    margin-bottom: 16px;
  }
}
.btn-submit {
  width: 100%;
}
</style>
