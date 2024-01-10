<script setup>
import { useRouter } from 'vue-router';
import { Operation, SwitchButton, UserFilled } from '@element-plus/icons-vue';
import { ElAvatar, ElDropdown, ElDropdownItem, ElIcon, ElImage, ElDropdownMenu, ElSpace } from 'element-plus';
import AssetLogoFull from '@/assets/images/login/assets-logo-full.svg';
import AssetLogo from '@/assets/images/login/assets-t-logo.svg';
import { useCommonStore } from '@/stores';

const router = useRouter();
const commonStore = useCommonStore();

// 路由跳转
const goTo = (val) => {
  router.replace(val);
};
</script>

<template>
  <header
    class="relative z-99 h-56px w-100% flex items-center justify-between px-20px shadow-[1px_1px_3px_#cbced1,-1px_-1px_3px_white]"
  >
    <div class="flex items-center">
      <ElImage :src="commonStore.logoNoFull ? AssetLogo : AssetLogoFull" class="mr-20px h-34px" />
      <ElIcon size="20" style="cursor: pointer" @click="commonStore.changeLogoFull(!commonStore.logoNoFull)">
        <Operation />
      </ElIcon>
    </div>

    <ElSpace>
      <ElDropdown class="ml-20px cursor-pointer" @command="handleCommand">
        <ElAvatar :size="30" :src="userStore?.userInfo?.avatar"> 吴 </ElAvatar>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem :icon="UserFilled" command="Login" divided>个人中心</ElDropdownItem>
            <ElDropdownItem :icon="SwitchButton" command="Login" divided @click="goTo('/login')">
              退出登录
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ElSpace>
  </header>
</template>
