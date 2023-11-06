<script setup>
import { useRouter } from 'vue-router';
import { ArrowDown, Operation, SwitchButton, User, UserFilled } from '@element-plus/icons-vue';
import { ElButton, ElIcon, ElImage, ElPopover, ElSpace } from 'element-plus';
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
  <header class="root_header">
    <div class="root_header_logo">
      <ElImage :src="commonStore.logoNoFull ? AssetLogo : AssetLogoFull" style="height: 34px; margin-right: 20px" />
      <ElIcon size="20" style="cursor: pointer" @click="commonStore.changeLogoFull(!commonStore.logoNoFull)"
        ><Operation
      /></ElIcon>
    </div>

    <ElPopover placement="bottom" :width="150" trigger="click" :popper-style="{ paddingLeft: '20px' }">
      <template #reference>
        <ElButton type="text">
          <ElSpace>
            <ElIcon><User /></ElIcon>
            <span>admin</span>
            <ElIcon><ArrowDown /></ElIcon>
          </ElSpace>
        </ElButton>
      </template>
      <ElSpace direction="vertical">
        <ElButton :icon="UserFilled" type="text">个人中心</ElButton>
        <ElButton :icon="SwitchButton" type="text" @click="goTo('/login')">退出登录</ElButton>
      </ElSpace>
    </ElPopover>
  </header>
</template>

<style lang="scss" scoped>
.root_header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  .root_header_logo {
    display: flex;
    align-items: center;
  }
}
</style>
