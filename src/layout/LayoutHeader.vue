<script setup>
import AssetLogoFull from '@/assets/images/login/assets-logo-full.svg';
import AssetLogo from '@/assets/images/login/assets-t-logo.svg';
import { useCommonStore } from '@/stores/index.js';
import { Operation, SwitchButton } from '@element-plus/icons-vue';
import { ElAvatar, ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon, ElImage, ElSpace } from 'element-plus';
import { useWinResize } from 'vue-hooks-plus';
import { useRouter } from 'vue-router';

const router = useRouter();
const commonStore = useCommonStore();

// 路由跳转
function goTo(val) {
  router.replace(val);
}

// 监听windows的resize事件
useWinResize(() => {
  const width = window.innerWidth;

  commonStore.changeLogoFull(width < 1400);
});
</script>

<template>
  <header
    class="relative z-99 h-[56px] w-[100%] flex items-center justify-between px-[20px] shadow-[1px_1px_3px_#cbced1,-1px_-1px_3px_white]"
  >
    <div class="flex items-center">
      <ElImage :src="commonStore.logoNoFull ? AssetLogo : AssetLogoFull" class="mr-[20px] h-[34px]" />
      <ElIcon size="20" style="cursor: pointer" @click="commonStore.changeLogoFull(!commonStore.logoNoFull)">
        <Operation />
      </ElIcon>
    </div>

    <ElSpace>
      <ElDropdown class="ml-[20px] cursor-pointer">
        <ElAvatar :size="30">
          吴
        </ElAvatar>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem :icon="SwitchButton" command="Login" divided @click="goTo('/login')">
              退出登录
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ElSpace>
  </header>
</template>
