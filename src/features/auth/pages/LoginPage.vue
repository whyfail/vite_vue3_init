<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { notify } from '@/app/notifications';
import { setToken } from '@/features/auth/session';
import { Button } from '@/shared/ui/button';
import LoginPrism from './LoginPrism.vue';

interface LoginFormValues {
  name: string
  password: string
  checked: boolean
}

const router = useRouter();
const loading = ref(false);
const formValues = reactive<LoginFormValues>({
  name: 'admin',
  password: 'admin',
  checked: false,
});

async function onSubmit() {
  if (!formValues.name.trim() || !formValues.password.trim()) {
    notify.error('账号和密码必填');

    return;
  }

  loading.value = true;

  try {
    if (formValues.name === 'admin' && formValues.password === 'admin') {
      setToken('123', formValues.checked);
      notify.success('登录成功');
      await router.replace('/docs');
    } else {
      notify.error('登录失败');
    }
  } finally {
    loading.value = false;
  }
}
</script>

<template>
  <main class="relative h-screen w-full overflow-hidden">
    <LoginPrism />

    <section class="absolute left-[calc(50%-260px)] top-[calc(50%-180px)] z-10 w-[520px] rounded-[32px] bg-[#ecf0f350] p-8 shadow-[1px_1px_3px_#cbced1,-1px_-1px_3px_white] max-sm:left-4 max-sm:right-4 max-sm:top-[calc(50%-180px)] max-sm:w-auto">
      <div class="flex flex-col gap-6">
        <h1 class="text-center text-[32px] font-bold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
          登录
        </h1>

        <form class="flex flex-col gap-4" @submit.prevent="onSubmit">
          <input
            v-model="formValues.name"
            class="h-10 rounded-md border border-white/40 bg-white/85 px-3 text-sm text-foreground outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="请输入账号：admin"
          >
          <input
            v-model="formValues.password"
            class="h-10 rounded-md border border-white/40 bg-white/85 px-3 text-sm text-foreground outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="请输入登录密码：admin"
            type="password"
          >

          <Button class="h-10 w-full" type="submit" :disabled="loading">
            {{ loading ? '登录中...' : '登录' }}
          </Button>

          <label class="mb-4 flex items-center justify-end gap-2 text-sm text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
            <input v-model="formValues.checked" type="checkbox">
            记住账号
          </label>
        </form>
      </div>
    </section>
  </main>
</template>
